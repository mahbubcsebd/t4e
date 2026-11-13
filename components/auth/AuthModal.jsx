"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";
import { PORTAL_CONFIG, callPortalApi } from "@/lib/portalApi";
import { buildGoogleAuthUrl } from "@/lib/googleAuthUrl";
import {
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

// Seconds before the OTP "send a new code" button re-enables (matches the reference site).
const RESEND_COOLDOWN_SECONDS = 30;

// Google Branded SVG
export function GoogleIcon({ className = "w-4 h-4" }) {
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

// Field-level error component styled identical to ContactForm
const InputError = ({ error, className = "" }) => {
  if (!error) return null;
  return (
    <p className={`text-[11px] text-rose-500 font-bold mt-1.5 ml-1 ${className}`}>
      {error}
    </p>
  );
};

export default function AuthModal({
  isOpen,
  onClose,
  initialTab = "signup",
  modalData = {},
}) {
  const { language } = useLanguage();

  // Dialog step state: 'auth' | 'code' | 'done'
  const [modalStep, setModalStep] = useState("auth");
  const [authTab, setAuthTab] = useState(initialTab || "signup");

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

  const otpInputRef = useRef(null);

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

  // Google Auth URL compliant with Section 8 of Think4Ever Landing API documentation
  const getGoogleAuthUrl = () =>
    buildGoogleAuthUrl({
      intentToken: modalData?.intentToken,
      modeKey: modalData?.mode?.key,
      prompt: modalData?.prompt,
      pageParams,
    });

  // Sign Up Submit
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const newErrors = {};

    const emailVal = suEmail.trim();
    if (!emailVal) {
      newErrors.suEmail = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
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
      ...(modalData?.intentToken ? { intent_token: modalData.intentToken } : {}),
      ...pageParams,
    };

    const res = await callPortalApi("POST", "/auth/register", payload, language);
    setLoading(false);

    if (res.ok) {
      if (res.data?.code_required || res.status === 201 || res.status === 200) {
        setCodeEmail(emailVal);
        setCodeKind("signup");
        setResendCooldown(RESEND_COOLDOWN_SECONDS);
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(emailVal)) {
      newErrors.siEmail = "Please enter a valid email address.";
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const payload = {
      email: emailVal,
      ...(modalData?.intentToken ? { intent_token: modalData.intentToken } : {}),
      ...pageParams,
    };

    const res = await callPortalApi("POST", "/auth/login-code", payload, language);
    setLoading(false);

    if (res.ok) {
      setCodeEmail(emailVal);
      // If requiresVerification: true, user never finished signup code step
      setCodeKind(res.data?.requiresVerification ? "signup" : "login");
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
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
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
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
      ...(modalData?.intentToken ? { intent_token: modalData.intentToken } : {}),
      ...pageParams,
    };

    const res = await callPortalApi("POST", "/auth/login", payload, language);
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
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
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
      ...(modalData?.intentToken ? { intent_token: modalData.intentToken } : {}),
      ...pageParams,
    };

    const res = await callPortalApi("POST", path, payload, language);
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
    const res = await callPortalApi("POST", path, { email: codeEmail.trim() }, language);
    setLoading(false);

    if (res.ok) {
      setResendCooldown(RESEND_COOLDOWN_SECONDS);
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
    const modeLabel = intent?.build_mode || modalData?.mode?.title;
    setDoneText(
      modeLabel
        ? `Your workspace is being created for "${modeLabel}". Opening Think4Ever portal…`
        : "Opening Think4Ever portal…"
    );
    setModalStep("done");

    setTimeout(() => {
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign(`${PORTAL_CONFIG.PORTAL}/`);
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="w-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] max-h-[calc(100dvh-1.5rem)] grid-cols-[minmax(0,1fr)] overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:w-full sm:max-w-[500px] p-0 rounded-2xl sm:rounded-3xl border border-border shadow-2xl bg-card">
        {/* ──── POPUP STEP 1: AUTH (SIGN UP & SIGN IN) ──── */}
        {modalStep === "auth" && (
          <div className="p-4 pt-5 sm:p-8">
            {/* Top Choice Badge (if mode provided) */}
            {modalData?.mode?.title && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-2.5 sm:mb-3.5">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">
                  {modalData.mode.title}
                </span>
              </div>
            )}

            <DialogHeader className="mb-3 sm:mb-5 gap-1 text-left">
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
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
            <div className="flex rounded-full bg-muted p-1 mb-3.5 sm:mb-5 border border-border/50">
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
                <a href={`${PORTAL_CONFIG.PORTAL}/`}>
                  Go to the portal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

