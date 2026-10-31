"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";
import {
  GitFork,
  Code2,
  ShieldCheck,
  Zap,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Mail,
  Lock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronDown,
} from "lucide-react";

// Google Branded SVG
function GoogleIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

const CONFIG = {
  API: "https://portal.think4ever.com/api",
  PORTAL: "https://portal.think4ever.com",
};

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

// Unified API call helper
async function callApi(method, path, body, language = "en") {
  const sep = path.includes("?") ? "&" : "?";
  const url = `${CONFIG.API}${path}${language ? `${sep}lang=${encodeURIComponent(language)}` : ""}`;
  try {
    const res = await fetch(url, {
      method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await res.json().catch(() => ({}));
    return { status: res.status, ok: res.ok, data };
  } catch (err) {
    return {
      status: 0,
      ok: false,
      data: {
        error:
          "Network connection error. If testing locally, please connect to live portal.",
      },
    };
  }
}

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

  // Mode & input state
  const [modes] = useState(DEFAULT_MODES);
  const [selectedModeKey, setSelectedModeKey] = useState("design");
  const [projectPrompt, setProjectPrompt] = useState("");
  const [intentToken, setIntentToken] = useState(null);
  const [preparingMsg, setPreparingMsg] = useState("");

  // Shadcn Dialog state & steps: 'auth' | 'code' | 'done'
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState("auth"); // 'auth' | 'code' | 'done'
  const [authTab, setAuthTab] = useState("signup"); // 'signup' | 'signin'

  // Sign up Form State
  const [suFirstName, setSuFirstName] = useState("");
  const [suEmail, setSuEmail] = useState("");
  const [suEula, setSuEula] = useState(false);
  const [suMarketing, setSuMarketing] = useState(false);
  const [suPassword, setSuPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // Sign in Form State
  const [siEmail, setSiEmail] = useState("");
  const [siPassword, setSiPassword] = useState("");

  // OTP Code State
  const [codeEmail, setCodeEmail] = useState("");
  const [codeKind, setCodeKind] = useState("signup"); // 'signup' | 'login'
  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);

  // Done redirect state
  const [doneText, setDoneText] = useState("Opening your workspace…");

  // Loading & error handling
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [pageParams, setPageParams] = useState({});

  const otpInputRef = useRef(null);

  // Current active mode object
  const currentMode =
    modes.find((m) => m.key === selectedModeKey) || modes[0];

  // Extract UTMs, ref, inv on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search);
    const params = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
      (k) => {
        if (q.get(k)) params[k] = q.get(k);
      }
    );
    if (q.get("ref")) params.ref_key = q.get("ref");
    if (q.get("inv")) params.invite_token = q.get("inv");
    setPageParams(params);
  }, []);

  // Countdown timer for OTP resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  // Focus OTP when code step is shown
  useEffect(() => {
    if (modalStep === "code" && otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, [modalStep]);

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

  // Google Auth URL compliant with Section 8 of Think4Ever Landing API documentation
  const getGoogleAuthUrl = () => {
    const p = new URLSearchParams({ login: "google" });
    if (intentToken) {
      p.set("intent", intentToken);
    } else {
      p.set("mode", currentMode.key);
      if (projectPrompt.trim()) p.set("prompt", projectPrompt.trim());
    }

    Object.keys(pageParams).forEach((k) => {
      const paramKey =
        k === "ref_key" ? "ref" : k === "invite_token" ? "inv" : k;
      p.set(paramKey, pageParams[k]);
    });

    return `${CONFIG.PORTAL}/?${p.toString()}`;
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
    setServerError("");
    setErrors({});

    // Validate prompt (required for all modes)
    if (!projectPrompt.trim()) {
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

    setLoading(true);
    const payload = getChoicePayload();
    const res = await callApi("POST", "/auth/signup-intent", payload, language);
    setLoading(false);

    if (res.ok && res.data) {
      if (res.data.intent_token) setIntentToken(res.data.intent_token);
      setPreparingMsg(
        res.data.preparing_message || currentMode.preparing_message
      );
    } else {
      setPreparingMsg(currentMode.preparing_message);
    }

    setAuthTab(tab);
    setModalStep("auth");
    setIsAuthModalOpen(true);
  };

  // Sign Up Submit
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const newErrors = {};

    const emailVal = suEmail.trim();
    if (!emailVal) {
      newErrors.suEmail = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        newErrors.suEmail = "Please enter a valid email address.";
      }
    }

    if (!suEula) {
      newErrors.suEula = "You must accept the terms and policies to continue.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const payload = {
      email: emailVal,
      eula_accepted: true,
      marketing_opt_in: suMarketing,
      ...(suFirstName.trim() ? { first_name: suFirstName.trim() } : {}),
      ...(suPassword.trim() ? { password: suPassword.trim() } : {}),
      ...(intentToken ? { intent_token: intentToken } : {}),
      ...pageParams,
    };

    const res = await callApi("POST", "/auth/register", payload, language);
    setLoading(false);

    if (res.ok) {
      if (res.data?.code_required || res.status === 201 || res.status === 200) {
        setCodeEmail(emailVal);
        setCodeKind("signup");
        setResendCooldown(45);
        setOtp("");
        setServerError("");
        setErrors({});
        setModalStep("code");
      } else {
        handleDoneSuccess(res.data);
      }
    } else if (res.status === 409) {
      // Email already exists: offer sign in
      setAuthTab("signin");
      setSiEmail(emailVal);
      setServerError(
        res.data?.error ||
          "An account with this email already exists. Please sign in."
      );
    } else {
      setServerError(
        res.data?.error || "Registration failed. Please check your details."
      );
    }
  };

  // Request Sign In Code (Passwordless)
  const handleRequestSignInCode = async () => {
    setServerError("");
    const newErrors = {};
    const emailVal = siEmail.trim();

    if (!emailVal) {
      newErrors.siEmail = "Email is required.";
      setErrors(newErrors);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      newErrors.siEmail = "Please enter a valid email address.";
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const payload = {
      email: emailVal,
      ...(intentToken ? { intent_token: intentToken } : {}),
      ...pageParams,
    };

    const res = await callApi("POST", "/auth/login-code", payload, language);
    setLoading(false);

    if (res.ok) {
      setCodeEmail(emailVal);
      // If requiresVerification: true, user never finished signup code step
      setCodeKind(res.data?.requiresVerification ? "signup" : "login");
      setResendCooldown(45);
      setOtp("");
      setServerError("");
      setErrors({});
      setModalStep("code");
    } else {
      setServerError(
        res.data?.error || "Could not send sign-in code. Please try again."
      );
    }
  };

  // Sign In Submit
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const newErrors = {};

    const emailVal = siEmail.trim();
    if (!emailVal) {
      newErrors.siEmail = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        newErrors.siEmail = "Please enter a valid email address.";
      }
    }

    if (!siPassword.trim()) {
      // If no password entered, trigger passwordless sign in code
      if (emailVal) {
        return handleRequestSignInCode();
      }
      newErrors.siPassword = "Password is required.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const payload = {
      email: emailVal,
      password: siPassword.trim(),
      ...(intentToken ? { intent_token: intentToken } : {}),
      ...pageParams,
    };

    const res = await callApi("POST", "/auth/login", payload, language);
    setLoading(false);

    if (res.ok) {
      handleDoneSuccess(res.data);
    } else if (res.status === 401 && res.data?.code === "NO_PASSWORD") {
      // Passwordless account: request code
      handleRequestSignInCode();
    } else if (res.status === 403 && res.data?.requiresVerification) {
      // Account never finished sign-up verification
      setCodeEmail(emailVal);
      setCodeKind("signup");
      setResendCooldown(45);
      setOtp("");
      setServerError("");
      setErrors({});
      setModalStep("code");
    } else {
      setServerError(
        res.data?.error || "Invalid email or password. Please try again."
      );
    }
  };

  // OTP Verification Submit (Sends both otp and code to satisfy any backend parser)
  const handleCodeSubmit = async (e) => {
    if (e) e.preventDefault();
    setServerError("");
    clearError("otp");

    const cleanOtp = otp.trim();
    if (cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
      setErrors((prev) => ({
        ...prev,
        otp: "Please enter the 6-digit numeric code sent to your email.",
      }));
      return;
    }

    setLoading(true);
    const path =
      codeKind === "login"
        ? "/auth/login-code/verify"
        : "/auth/verify-email-code";

    const payload = {
      email: codeEmail.trim(),
      otp: cleanOtp,
      code: cleanOtp,
      signin_code: cleanOtp,
      ...(intentToken ? { intent_token: intentToken } : {}),
      ...pageParams,
    };

    const res = await callApi("POST", path, payload, language);
    setLoading(false);

    if (res.ok) {
      handleDoneSuccess(res.data);
    } else if (res.status === 409) {
      setAuthTab("signin");
      setSiEmail(codeEmail);
      setModalStep("auth");
      setServerError(
        res.data?.error || "Account already exists. Please sign in."
      );
    } else {
      setServerError(
        res.data?.error || "Invalid or expired code. Please check and try again."
      );
    }
  };

  // Resend OTP Code
  const handleResendCode = async () => {
    if (resendCooldown > 0 || loading) return;
    setServerError("");
    setLoading(true);

    const path =
      codeKind === "login" ? "/auth/login-code" : "/auth/resend-verification";
    const res = await callApi("POST", path, { email: codeEmail.trim() }, language);
    setLoading(false);

    if (res.ok) {
      setResendCooldown(45);
      setOtp("");
    } else {
      setServerError(
        res.data?.error ||
          "Could not resend code. Please try again in a few moments."
      );
    }
  };

  // Final Success & Portal Redirect
  const handleDoneSuccess = (data) => {
    const intent = data?.intent;
    const modeLabel = intent?.build_mode || currentMode.title;
    setDoneText(
      `Your workspace is being created for "${modeLabel}". Opening Think4Ever portal…`
    );
    setModalStep("done");

    setTimeout(() => {
      window.location.href = `${CONFIG.PORTAL}/`;
    }, 1200);
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
                  setServerError("");
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

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── 5. SHADCN DIALOG POPUP: AUTH, OTP & REDIRECT FLOW ──       */}
      {/* ══════════════════════════════════════════════════════════════ */}
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden rounded-3xl border border-border shadow-2xl bg-card">
          {/* ──── POPUP STEP 1: AUTH (SIGN UP & SIGN IN) ──── */}
          {modalStep === "auth" && (
            <div className="p-6 sm:p-8">
              {/* Top Choice Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {currentMode.title}
                </span>
              </div>

              <DialogHeader className="mb-5 text-left">
                <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight">
                  {authTab === "signup"
                    ? "Create your account"
                    : "Welcome back"}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-foreground/70">
                  {authTab === "signup"
                    ? "Sign up to open your workspace and start building."
                    : "Sign in to access your projects and continue."}
                </DialogDescription>
              </DialogHeader>

              {/* Tabs: Sign Up vs Sign In (Rounded-full consistent design) */}
              <div className="flex rounded-full bg-muted p-1 mb-5 border border-border/50">
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab("signup");
                    setServerError("");
                    setErrors({});
                  }}
                  className={[
                    "flex-1 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                    authTab === "signup"
                      ? "bg-card text-foreground shadow-xs"
                      : "text-foreground/60 hover:text-foreground",
                  ].join(" ")}
                >
                  Sign up
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthTab("signin");
                    setServerError("");
                    setErrors({});
                  }}
                  className={[
                    "flex-1 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer",
                    authTab === "signin"
                      ? "bg-card text-foreground shadow-xs"
                      : "text-foreground/60 hover:text-foreground",
                  ].join(" ")}
                >
                  Sign in
                </button>
              </div>

              {/* Server-level Error Alert in Dialog */}
              {serverError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* ── Sign Up Form ── */}
              {authTab === "signup" && (
                <form onSubmit={handleSignUpSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      First name <span className="text-foreground/45">(optional)</span>
                    </label>
                    <input
                      type="text"
                      autoComplete="given-name"
                      value={suFirstName}
                      onChange={(e) => setSuFirstName(e.target.value)}
                      placeholder="Jane"
                      className="w-full text-sm text-foreground bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={suEmail}
                      onChange={(e) => {
                        setSuEmail(e.target.value);
                        clearError("suEmail");
                        setServerError("");
                      }}
                      placeholder="jane@company.com"
                      className={[
                        "w-full text-sm text-foreground rounded-xl px-3.5 py-2.5 outline-none transition-all",
                        errors.suEmail
                          ? "bg-rose-50/50 border border-rose-400 focus:ring-1 focus:ring-rose-200"
                          : "bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary/20",
                      ].join(" ")}
                    />
                    <InputError error={errors.suEmail} />
                  </div>

                  {/* Legal EULA Checkbox */}
                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-foreground/75 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={suEula}
                        onChange={(e) => {
                          setSuEula(e.target.checked);
                          clearError("suEula");
                          setServerError("");
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
                      />
                      <span>
                        I accept the{" "}
                        <a
                          href="https://portal.think4ever.com/legal.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-semibold"
                        >
                          EULA, Privacy Policy and Acceptable Use Policy
                        </a>
                      </span>
                    </label>
                    <InputError error={errors.suEula} />
                  </div>

                  {/* Marketing Opt-in Checkbox */}
                  <label className="flex items-center gap-2.5 text-xs text-foreground/75 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={suMarketing}
                      onChange={(e) => setSuMarketing(e.target.checked)}
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30"
                    />
                    <span>Send me product news and updates</span>
                  </label>

                  {/* Optional Password toggle */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowPasswordInput((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 hover:text-foreground cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Set a password (optional)</span>
                      <ChevronDown
                        className={[
                          "w-3.5 h-3.5 transition-transform duration-200",
                          showPasswordInput ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    {showPasswordInput && (
                      <div className="mt-2 space-y-1">
                        <input
                          type="password"
                          autoComplete="new-password"
                          value={suPassword}
                          onChange={(e) => setSuPassword(e.target.value)}
                          placeholder="10–200 characters, or leave empty"
                          className="w-full text-sm text-foreground bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                        />
                        <p className="text-[11px] text-foreground/45 leading-tight">
                          Without a password you sign in with a code sent to your
                          email.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Submit Button (Rounded-full consistent design) */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                    Create account
                  </Button>

                  {/* Google Sign Up (Rounded-full consistent design) */}
                  <div className="pt-2">
                    <a
                      href={getGoogleAuthUrl()}
                      className="w-full py-3 px-6 inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-background hover:bg-muted text-sm font-bold text-foreground transition-all shadow-sm"
                    >
                      <GoogleIcon className="w-4 h-4" />
                      <span>Continue with Google</span>
                    </a>
                  </div>
                </form>
              )}

              {/* ── Sign In Form ── */}
              {authTab === "signin" && (
                <form onSubmit={handleSignInSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Email address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={siEmail}
                      onChange={(e) => {
                        setSiEmail(e.target.value);
                        clearError("siEmail");
                        setServerError("");
                      }}
                      placeholder="jane@company.com"
                      className={[
                        "w-full text-sm text-foreground rounded-xl px-3.5 py-2.5 outline-none transition-all",
                        errors.siEmail
                          ? "bg-rose-50/50 border border-rose-400 focus:ring-1 focus:ring-rose-200"
                          : "bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary/20",
                      ].join(" ")}
                    />
                    <InputError error={errors.siEmail} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Password <span className="text-primary">*</span>
                    </label>
                    <input
                      type="password"
                      autoComplete="current-password"
                      value={siPassword}
                      onChange={(e) => {
                        setSiPassword(e.target.value);
                        clearError("siPassword");
                        setServerError("");
                      }}
                      placeholder="••••••••"
                      className={[
                        "w-full text-sm text-foreground rounded-xl px-3.5 py-2.5 outline-none transition-all",
                        errors.siPassword
                          ? "bg-rose-50/50 border border-rose-400 focus:ring-1 focus:ring-rose-200"
                          : "bg-muted/40 border border-border focus:border-primary focus:ring-1 focus:ring-primary/20",
                      ].join(" ")}
                    />
                    <InputError error={errors.siPassword} />
                  </div>

                  {/* Sign In Button (Rounded-full consistent design) */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                    Sign in
                  </Button>

                  {/* Passwordless Sign In Code Link */}
                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleRequestSignInCode}
                      className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                    >
                      Email me a sign-in code instead
                    </button>
                  </div>

                  {/* Google Sign In (Rounded-full consistent design) */}
                  <div className="pt-2">
                    <a
                      href={getGoogleAuthUrl()}
                      className="w-full py-3 px-6 inline-flex items-center justify-center gap-2.5 rounded-full border border-border bg-background hover:bg-muted text-sm font-bold text-foreground transition-all shadow-sm"
                    >
                      <GoogleIcon className="w-4 h-4" />
                      <span>Continue with Google</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ──── POPUP STEP 2: 6-DIGIT EMAIL CODE (OTP) ──── */}
          {modalStep === "code" && (
            <div className="p-6 sm:p-8">
              <button
                type="button"
                onClick={() => {
                  setModalStep("auth");
                  setServerError("");
                  setErrors({});
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/60 hover:text-foreground mb-4 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>

              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>

              <DialogHeader className="text-center sm:text-center mb-6">
                <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight">
                  Enter the 6-digit code
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-foreground/70 max-w-sm mx-auto">
                  We sent a code to <strong className="text-foreground">{codeEmail}</strong>. Check your spam folder too.
                </DialogDescription>
              </DialogHeader>

              {/* Server-level Error Alert */}
              {serverError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                  <span>{serverError}</span>
                </div>
              )}

              <form onSubmit={handleCodeSubmit} className="space-y-5">
                <div>
                  <input
                    ref={otpInputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    required
                    autoComplete="one-time-code"
                    value={otp}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setOtp(val);
                      clearError("otp");
                      setServerError("");
                    }}
                    placeholder="000000"
                    className={[
                      "w-full text-center font-mono text-3xl sm:text-4xl tracking-[0.4em] text-foreground rounded-2xl py-3 px-4 outline-none transition-all",
                      errors.otp
                        ? "bg-rose-50/50 border-2 border-rose-400 focus:ring-2 focus:ring-rose-200"
                        : "bg-muted/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20",
                    ].join(" ")}
                  />
                  <InputError error={errors.otp} className="text-center ml-0" />
                </div>

                {/* Continue button (Rounded-full consistent design) */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading || otp.length !== 6}
                  className="w-full"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                  Continue
                </Button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    disabled={resendCooldown > 0 || loading}
                    onClick={handleResendCode}
                    className={[
                      "text-xs font-semibold transition-colors cursor-pointer",
                      resendCooldown > 0
                        ? "text-foreground/45 cursor-not-allowed"
                        : "text-primary hover:underline",
                    ].join(" ")}
                  >
                    {resendCooldown > 0
                      ? `Resend code in ${resendCooldown}s`
                      : "Send a new code"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ──── POPUP STEP 3: SUCCESS & REDIRECT ──── */}
          {modalStep === "done" && (
            <div className="p-8 sm:p-10 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto mb-4 animate-pulse">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <DialogHeader className="text-center sm:text-center mb-6">
                <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  You&rsquo;re in!
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-foreground/75 mt-2 leading-relaxed">
                  {doneText}
                </DialogDescription>
              </DialogHeader>

              <div className="pt-2">
                <Button asChild size="lg" className="rounded-full">
                  <a href={`${CONFIG.PORTAL}/`}>
                    Go to the portal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
