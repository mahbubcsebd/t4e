"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from "@/context/LanguageContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { callPortalApi } from "@/lib/portalApi";
import {
  GitFork,
  Code2,
  ShieldCheck,
  Zap,
  Sparkles,
  Loader2,
} from "lucide-react";

// 4 High-Quality Modes without confusing file-upload / git-connect buttons
const DEFAULT_MODES = [
  {
    key: "design",
    icon: GitFork,
    eyebrow: "Intent → System design",
    title: "Design from intent",
    description:
      "Describe what you want to build. Think4Ever turns it into a reviewable blueprint of roles, workflows, rules and acceptance criteria — then builds it.",
    prompt_label: "What do you want to build?",
    placeholder:
      "A field service app where technicians get jobs, log parts and close work orders",
    preparing_message:
      "Great — we are preparing your blueprint. Sign up and let's build it.",
  },
  {
    key: "analyze",
    icon: Code2,
    eyebrow: "Code → Understanding",
    title: "Analyze existing code",
    description:
      "Bring a real project — a public GitHub URL now, or a ZIP / connected repository once you are in. We import it and map the system into a visual, reviewable view.",
    prompt_label: "Describe project focus areas or repository URL",
    placeholder:
      "e.g. https://github.com/owner/repository or describe the parts of the codebase you want to understand and visualize...",
    preparing_message:
      "Great — we are mapping your repository. Sign up and let's build it.",
  },
  {
    key: "harden",
    icon: ShieldCheck,
    eyebrow: "Code → Production ready",
    title: "Production hardening",
    description:
      "Import your codebase, map the system, then reviewer agents audit it against a production-readiness checklist: security, configuration, reliability, data, observability, deploy and more.",
    prompt_label: "Describe specific security or architecture concerns",
    placeholder:
      "e.g. Audit checklist for security, configuration, reliability, data, observability, and deploy readiness...",
    preparing_message:
      "Great — we are preparing your production review. Sign up and let's build it.",
  },
  {
    key: "prototype",
    icon: Zap,
    eyebrow: "Idea → Working prototype",
    title: "Fast prototype",
    description:
      "Describe the idea and get a working prototype built straight from the dev side. Production hardening and deeper design can follow later.",
    prompt_label: "What should the prototype do?",
    placeholder:
      "A habit tracker with daily streaks and a weekly review screen",
    preparing_message:
      "Great — we are preparing your prototype. Sign up and let's build it.",
  },
];

// Field-level error component styled identical to ContactForm
const InputError = ({ error, className = "" }) => {
  if (!error) return null;
  return (
    <p className={`text-[11px] text-rose-500 font-bold mt-1.5 ml-1 ${className}`}>
      {error}
    </p>
  );
};

export default function PortalStartSection() {
  const { language } = useLanguage();
  const { openAuthModal } = useAuthModal();

  // Mode & input state
  const [modes] = useState(DEFAULT_MODES);
  const [selectedModeKey, setSelectedModeKey] = useState("design");
  const [projectPrompt, setProjectPrompt] = useState("");
  const [intentToken, setIntentToken] = useState(null);
  const [preparingMsg, setPreparingMsg] = useState("");

  // Loading & error handling
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [pageParams] = useState(() => {
    if (typeof window === "undefined") return {};
    const q = new URLSearchParams(window.location.search);
    const params = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
      (k) => {
        if (q.get(k)) params[k] = q.get(k);
      }
    );
    if (q.get("ref")) params.ref_key = q.get("ref");
    if (q.get("inv")) params.invite_token = q.get("inv");
    return params;
  });

  // Current active mode object
  const currentMode =
    modes.find((m) => m.key === selectedModeKey) || modes[0];

  // Helper to compile choice fields
  const getChoicePayload = () => {
    const text = projectPrompt.trim();
    const isGitUrl =
      text.startsWith("http://") ||
      text.startsWith("https://") ||
      text.startsWith("github.com/");

    return {
      build_mode: currentMode.key,
      prompt: text,
      project_prompt: text,
      ...(isGitUrl ? { import_source: "github", import_url: text } : {}),
      ...pageParams,
    };
  };

  // Helper to clear errors for a field
  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Open modal on Sign up or Sign in click
  const handleOpenAuthModal = async (tab = "signup") => {
    setErrors({});

    // Validate prompt (required for signup)
    if (tab === "signup" && !projectPrompt.trim()) {
      let msg = "What do you want to build is required.";
      if (currentMode.key === "analyze") {
        msg = "Project focus areas or repository URL is required.";
      } else if (currentMode.key === "harden") {
        msg = "Security or architecture concerns are required.";
      } else if (currentMode.key === "prototype") {
        msg = "What the prototype should do is required.";
      }
      setErrors({ prompt: msg });
      return;
    }

    let token = intentToken;
    let prepMsg = preparingMsg || currentMode.preparing_message;

    if (projectPrompt.trim()) {
      setLoading(true);
      const payload = getChoicePayload();
      const res = await callPortalApi("POST", "/auth/signup-intent", payload, language);
      setLoading(false);

      if (res.ok && res.data) {
        if (res.data.intent_token) {
          token = res.data.intent_token;
          setIntentToken(res.data.intent_token);
        }
        prepMsg = res.data.preparing_message || currentMode.preparing_message;
        setPreparingMsg(prepMsg);
      }
    }

    openAuthModal({
      tab,
      mode: currentMode,
      prompt: projectPrompt.trim(),
      intentToken: token,
      preparingMsg: prepMsg,
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-76px)] flex flex-col justify-center overflow-hidden bg-background py-10 sm:py-14 lg:py-16">
      {/* ── Soft Ambient Pastel Background Glow ── */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-[#1D63E0] opacity-[0.06] blur-[140px]" />
        <div className="absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-full bg-[#FF7A1A] opacity-[0.07] blur-[130px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] rounded-full bg-[#3b82f6] opacity-[0.03] blur-[160px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── 1. Header Titles & Subtitles ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="flex justify-center mb-3.5">
            <Eyebrow uppercase={true}>
              START HERE
            </Eyebrow>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-foreground tracking-tight leading-[1.12] mb-4">
            What do you want to <span className="text-primary">build?</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 font-normal leading-relaxed max-w-2xl mx-auto">
            Pick a path, tell us a little, and sign up — your workspace opens on
            that step, ready to go.
          </p>
        </div>

        {/* ── 2. The 4 Mode Cards ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {modes.map((m) => {
            const Icon = m.icon;
            const isActive = selectedModeKey === m.key;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => {
                  setSelectedModeKey(m.key);
                  clearError("prompt");
                }}
                className={[
                  "group relative text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive
                    ? "bg-white border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/20 scale-[1.01]"
                    : "bg-white/95 border-border hover:border-primary/40 hover:shadow-md shadow-xs",
                ].join(" ")}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                  </span>
                )}

                {/* Card Icon */}
                <div
                  className={[
                    "flex items-center justify-center w-10 h-10 rounded-xl mb-3.5 transition-colors duration-200",
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary",
                  ].join(" ")}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Eyebrow */}
                <p
                  className={[
                    "text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-1.5 transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground",
                  ].join(" ")}
                >
                  {m.eyebrow}
                </p>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug mb-2">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-foreground/65 leading-relaxed line-clamp-3">
                  {m.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* ── 3. Active Mode Interactive Input Box (Clean Unified Textarea) ── */}
        <div className="w-full bg-white border border-border/80 rounded-2xl shadow-sm p-5 sm:p-7 mb-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-semibold text-foreground">
                {currentMode.prompt_label} <span className="text-rose-500 font-bold">*</span>
              </label>
              <span className="text-xs text-foreground/45">
                {projectPrompt.length} / 4000
              </span>
            </div>

            <textarea
              value={projectPrompt}
              maxLength={4000}
              onChange={(e) => {
                setProjectPrompt(e.target.value);
                clearError("prompt");
              }}
              rows={3}
              placeholder={currentMode.placeholder}
              className={[
                "w-full text-sm sm:text-base text-foreground placeholder:text-foreground/35 rounded-xl p-3.5 sm:p-4 resize-none outline-none leading-relaxed transition-all",
                errors.prompt
                  ? "bg-rose-50/50 border-2 border-rose-400 focus:ring-2 focus:ring-rose-200"
                  : "bg-muted/20 border border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20",
              ].join(" ")}
            />

            {/* Validation Message matching ContactForm */}
            <InputError error={errors.prompt} />
          </div>

          {/* Subtle dynamic hint message */}
          {projectPrompt.trim().length > 5 && (
            <div className="mt-4 pt-3.5 border-t border-border/60 flex items-center gap-2 text-xs sm:text-sm font-medium text-primary">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>{currentMode.preparing_message}</span>
            </div>
          )}
        </div>

        {/* ── 4. Action CTAs (Consistent rounded-full buttons matching the site) ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
          <Button
            size="lg"
            disabled={loading}
            onClick={() => handleOpenAuthModal("signup")}
            className="w-full sm:w-auto min-w-[220px]"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
            Continue &amp; sign up
          </Button>

          <Button
            variant="outline"
            size="lg"
            disabled={loading}
            onClick={() => handleOpenAuthModal("signin")}
            className="w-full sm:w-auto min-w-[220px]"
          >
            I already have an account
          </Button>
        </div>
      </div>
    </section>
  );
}
