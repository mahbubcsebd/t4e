"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "@/context/AuthModalContext";
import { callPortalApi } from "@/lib/portalApi";
import HeroMascot from "@/components/sections/home/portal/HeroMascot";
import PortalModes from "@/components/sections/home/portal/PortalModes";
import {
  usePrefersReducedMotion,
  useTypedPhrases,
} from "@/components/sections/home/portal/useTypedPhrases";
import {
  GitFork,
  Code2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";

// 4 modes; copy lives in dictionaries (portalStart.modes.*)
const MODE_ICONS = {
  design: GitFork,
  analyze: Code2,
  harden: ShieldCheck,
  prototype: Zap,
};
const MODE_KEYS = Object.keys(MODE_ICONS);
const PHRASE_KEYS = ["p1", "p2", "p3", "p4", "p5", "p6"];
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const TYPING_IDLE_MS = 130;
const PROMPT_MAX_LENGTH = 4000;

const localizeHref = (language, path) =>
  language === "en" ? path : `/${language}${path}`;

function readPageParams() {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  const params = {};
  UTM_KEYS.forEach((k) => {
    if (q.get(k)) params[k] = q.get(k);
  });
  if (q.get("ref")) params.ref_key = q.get("ref");
  if (q.get("inv")) params.invite_token = q.get("inv");
  return params;
}

export default function PortalStartSection() {
  const { language, t } = useLanguage();
  const { openAuthModal } = useAuthModal();

  const modes = MODE_KEYS.map((key) => ({
    key,
    icon: MODE_ICONS[key],
    eyebrow: t(`portalStart.modes.${key}.eyebrow`),
    title: t(`portalStart.modes.${key}.title`),
    description: t(`portalStart.modes.${key}.description`),
    prompt_label: t(`portalStart.modes.${key}.promptLabel`),
    placeholder: t(`portalStart.modes.${key}.placeholder`),
    preparing_message: t(`portalStart.modes.${key}.preparing`),
  }));
  const phrases = PHRASE_KEYS.map((k) => t(`portalStart.phrases.${k}`));

  const [selectedModeKey, setSelectedModeKey] = useState("design");
  const [projectPrompt, setProjectPrompt] = useState("");
  const [intentToken, setIntentToken] = useState(null);
  const [preparingMsg, setPreparingMsg] = useState("");
  const [loadingAction, setLoadingAction] = useState(null);
  const [promptError, setPromptError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [pageParams] = useState(readPageParams);
  const typingTimer = useRef(null);

  const isReducedMotion = usePrefersReducedMotion();

  useEffect(() => () => clearTimeout(typingTimer.current), []);

  const { text: typedText, phraseIndex } = useTypedPhrases(phrases, {
    isReducedMotion,
  });

  const currentMode = useMemo(
    () => modes.find((m) => m.key === selectedModeKey) || modes[0],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedModeKey, language]
  );
  const isLoading = loadingAction !== null;

  const handleSelectMode = (key) => {
    setSelectedModeKey(key);
    setPromptError("");
  };

  const handlePromptChange = (e) => {
    setProjectPrompt(e.target.value);
    setPromptError("");
    setIsTyping(true);
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setIsTyping(false), TYPING_IDLE_MS);
  };

  // Saves the chosen path + idea as a signup intent. Returns the token/message
  // to hand to the auth modal.
  const prepareIntent = async () => {
    const text = projectPrompt.trim();
    if (!text) return { token: intentToken, prepMsg: preparingMsg || currentMode.preparing_message };

    const isGitUrl = /^(https?:\/\/|github\.com\/)/.test(text);
    const payload = {
      build_mode: currentMode.key,
      prompt: text,
      project_prompt: text,
      ...(isGitUrl ? { import_source: "github", import_url: text } : {}),
      ...pageParams,
    };
    const res = await callPortalApi("POST", "/auth/signup-intent", payload, language);

    if (!res.ok || !res.data) {
      return { token: intentToken, prepMsg: preparingMsg || currentMode.preparing_message };
    }
    const token = res.data.intent_token || intentToken;
    const prepMsg = res.data.preparing_message || currentMode.preparing_message;
    setIntentToken(token);
    setPreparingMsg(prepMsg);
    return { token, prepMsg };
  };

  // action: "send" (needs an idea) | "send" | "signin"
  const handleAction = async (action) => {
    if (isLoading) return;
    setPromptError("");

    if (action === "send" && !projectPrompt.trim()) {
      setPromptError(t(`portalStart.modes.${currentMode.key}.required`));
      setIsShaking(true);
      return;
    }

    if (action === "signin") {
      openAuthModal({ tab: "signin", mode: currentMode, prompt: projectPrompt.trim(), intentToken, preparingMsg });
      return;
    }

    setLoadingAction(action);
    const { token, prepMsg } = await prepareIntent();
    setLoadingAction(null);

    openAuthModal({
      tab: "signup",
      mode: currentMode,
      prompt: projectPrompt.trim(),
      intentToken: token,
      preparingMsg: prepMsg,
    });
  };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-64px)] flex-col overflow-x-clip bg-[#f8fafc] md:min-h-[calc(100vh-76px)]">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(60% 46% at 12% 4%, rgba(147,197,253,.75), transparent 70%), radial-gradient(52% 40% at 96% 14%, rgba(249,115,22,.13), transparent 70%), radial-gradient(70% 50% at 50% 62%, rgba(37,99,235,.1), transparent 72%), linear-gradient(#fff, #f8fafc)",
        }}
      />

      <div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center px-4 pb-4 pt-1 text-center sm:px-7 md:pb-10">
        {/* Mascot: height follows the viewport; page scrolls on very short screens */}
        <HeroMascot
          sceneIndex={phraseIndex}
          isListening={isFocused}
          isTyping={isTyping}
          isReducedMotion={isReducedMotion}
          className="h-[clamp(72px,calc(100svh-600px),min(300px,calc((100vw-32px)*0.5625)))] w-auto max-w-full shrink-0 md:h-[clamp(120px,24svh,280px)]"
        />

        <h1 className="mt-0 text-balance text-[clamp(25px,min(8vw,5.8svh),52px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0f172a] md:text-[clamp(34px,5vw,54px)]">
          {t("portalStart.titleA")}{" "}
          <em className="whitespace-nowrap not-italic text-[#f97316]">
            {t("portalStart.titleB")}
          </em>
        </h1>

        <p
          aria-hidden="true"
          className="mt-0.5 flex h-[26px] items-center justify-center whitespace-nowrap text-[clamp(16px,2.5svh,22px)] font-medium text-[#2563eb] md:mt-2 md:h-9 md:text-2xl"
        >
          <span>{typedText}</span>
          <span className="hero-motion ml-[3px] h-[18px] w-0.5 bg-[#f97316] animate-[hero-caret-blink_1s_steps(1)_infinite] md:h-[26px]" />
        </p>
        <p className="sr-only">{t("portalStart.subMobile")}</p>

        <div className="w-full max-w-[680px] md:max-w-[760px]">
          {/* Idea box */}
          <div
            onAnimationEnd={() => setIsShaking(false)}
            className={[
              "mt-2 rounded-2xl border-[1.5px] bg-white text-left shadow-[0_10px_15px_-3px_rgba(0,0,0,.08),0_4px_6px_-4px_rgba(0,0,0,.05)] transition-[border-color,box-shadow] duration-200 md:mt-3",
              "focus-within:border-[#2563eb] focus-within:shadow-[0_0_0_3px_rgba(37,99,235,.15),0_10px_15px_-3px_rgba(0,0,0,.08)]",
              promptError ? "border-rose-400" : "border-slate-200",
              isShaking ? "hero-motion animate-[hero-shake_.35s]" : "",
            ].join(" ")}
          >
            <textarea
              id="portal-idea"
              value={projectPrompt}
              maxLength={PROMPT_MAX_LENGTH}
              onChange={handlePromptChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  handleAction("send");
                }
              }}
              rows={2}
              aria-label={currentMode.prompt_label}
              aria-invalid={Boolean(promptError)}
              placeholder={currentMode.placeholder}
              className="block w-full resize-none rounded-2xl bg-transparent px-4 pb-1 pt-2.5 text-[14px] leading-snug md:text-base text-[#0f172a] outline-none placeholder:text-slate-400 md:min-h-[72px] md:pt-3"
            />
            <div className="flex items-center px-2 pb-2 pt-1">
              <button
                type="button"
                disabled={isLoading}
                onClick={() => handleAction("send")}
                className="ml-auto inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-xl bg-[#2563eb] pl-3.5 pr-3 text-[13px] font-semibold md:h-11 md:pl-4 md:pr-3.5 md:text-[15px] text-white transition-[background-color,transform] duration-200 hover:bg-[#1d4ed8] active:scale-[0.97] disabled:cursor-wait disabled:opacity-60 md:px-5"
              >
                {loadingAction === "send" ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                ) : null}
                {t("portalStart.send")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            {promptError && (
              <p role="alert" className="px-4 pb-2.5 text-[13px] text-[#b84e00]">
                {promptError}
              </p>
            )}
          </div>

          <PortalModes
            modes={modes}
            selectedKey={selectedModeKey}
            onSelect={handleSelectMode}
            label={t("portalStart.modeLabel")}
          />

          {/* Below the chatbox: sign-in, cost, proof, legal */}
          <div className="mt-3 flex flex-col items-center gap-2 md:mt-5 md:gap-3">
            <Button
              variant="outline"
              size="lg"
              disabled={isLoading}
              onClick={() => handleAction("signin")}
            >
              {t("portalStart.haveAccount")}
            </Button>
            <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] font-medium text-[#0f172a] md:text-sm">
              {["perk", "noCard"].map((key) => (
                <span key={key} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-[#0B4BD6]" strokeWidth={2.6} aria-hidden="true" />
                  {t(`portalStart.${key}`)}
                </span>
              ))}
            </p>
            <p className="max-w-[520px] text-[13px] leading-snug text-slate-600">
              {t("portalStart.proofPre")} <b className="font-bold text-[#0f172a]">EY</b>,{" "}
              <b className="font-bold text-[#0f172a]">YogiFi</b> {t("portalStart.proofAnd")}{" "}
              <b className="font-bold text-[#0f172a]">Insignian Homes</b> {t("portalStart.proofPost")}{" "}
              <Link
                href={localizeHref(language, "/customers/")}
                className="whitespace-nowrap font-semibold text-[#2563eb] hover:underline"
              >
                {t("portalStart.proofLink")} &rarr;
              </Link>
            </p>
            <p className="text-xs leading-snug text-slate-500">
              {t("portalStart.finePre")}{" "}
              <Link href={localizeHref(language, "/terms-and-conditions/")} className="underline">
                {t("portalStart.terms")}
              </Link>{" "}
              {t("portalStart.finePost")}{" "}
              <Link href={localizeHref(language, "/privacy-policy/")} className="underline">
                {t("portalStart.privacy")}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
