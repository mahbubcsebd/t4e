"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, Check, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fieldRefs = useRef({});

  const [form, setForm] = useState({
    segment: "",
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    companySize: "",
    role: "",
    primaryNeeds: [],
    interests: "",
    agree: false,
  });

  const segmentOptions = [
    "Independent Developers",
    "Start ups & New Ventures",
    "Software & SaaS",
    "Systems Integrators / Consultants",
    "Enterprise & Mid-size Business",
  ];

  const primaryNeedOptions = [
    "Amend and fix existing code",
    "Design the right architecture upfront",
    "Simplify SDLC stack with fewer tools",
    "Build AI agents or automation workflows",
    "Keep systems aligned as complexity grows",
    "See system dependencies and change impact in real time",
  ];

  const toggleNeed = (need) => {
    if (form.primaryNeeds.includes(need)) {
      setForm({
        ...form,
        primaryNeeds: form.primaryNeeds.filter((n) => n !== need),
      });
    } else if (form.primaryNeeds.length < 5) {
      setForm({ ...form, primaryNeeds: [...form.primaryNeeds, need] });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.segment) newErrors.segment = "Please select your segment.";
    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.lastName) newErrors.lastName = "Last name is required.";
    if (!form.email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.companyName) newErrors.companyName = "Company name is required.";
    if (!form.companySize) newErrors.companySize = "Please select your company size.";
    if (!form.role) newErrors.role = "Role is required.";
    if (!form.agree) newErrors.agree = "You must agree to the privacy policy.";

    setErrors(newErrors);

    const firstErrorKey = Object.keys(newErrors)[0];
    if (firstErrorKey && fieldRefs.current[firstErrorKey]) {
      fieldRefs.current[firstErrorKey].focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setErrors({});
    }, 1000);
  };

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-card border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("contactPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {t("contactPage.heroTitlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("contactPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("contactPage.heroSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Contact Form */}
          <div className="lg:col-span-8 bg-[#f9fcff] border border-border rounded-3xl p-8 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#e0f7ed] text-[#167451] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Thank you for reaching out!
                </h3>
                <p className="text-sm text-muted-foreground">
                  We have received your message and will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {hasErrors && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-red-800">Please correct the errors below.</p>
                      <p className="text-xs text-red-600 mt-1">Some required fields are missing or invalid.</p>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="segment" className="block text-xs font-bold text-foreground mb-1.5">
                    {t("contactPage.segment")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    required
                    aria-required="true"
                    ref={(el) => (fieldRefs.current.segment = el)}
                    value={form.segment}
                    onChange={(e) =>
                      setForm({ ...form, segment: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.segment ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                  >
                    <option value="">Select your segment</option>
                    {segmentOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.segment && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.segment}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.firstName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.firstName = el)}
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.firstName ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    />
                    {errors.firstName && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.lastName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.lastName = el)}
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.lastName ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    />
                    {errors.lastName && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.email = el)}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.companyName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.companyName = el)}
                      placeholder="Your company"
                      value={form.companyName}
                      onChange={(e) =>
                        setForm({ ...form, companyName: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.companyName ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    />
                    {errors.companyName && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.companyName}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companySize" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.companySize")} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.companySize = el)}
                      value={form.companySize}
                      onChange={(e) =>
                        setForm({ ...form, companySize: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.companySize ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-50">11 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="500+">500+</option>
                    </select>
                    {errors.companySize && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.companySize}</p>}
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.role")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.role = el)}
                      placeholder="e.g., CTO, VP Engineering"
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none bg-card transition-colors ${errors.role ? 'border-red-400 focus:border-red-500' : 'border-border focus:border-[#093cad]'}`}
                    />
                    {errors.role && <p className="text-xs text-red-500 font-semibold mt-1.5">{errors.role}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {t("contactPage.primaryNeed")}
                  </label>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {primaryNeedOptions.map((opt, i) => {
                      const isSelected = form.primaryNeeds.includes(opt);
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => toggleNeed(opt)}
                          className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? "border-[#093cad] bg-[#f2f7ff] text-[#093cad] font-bold"
                              : "border-border bg-card text-muted-foreground hover:border-[#093cad]"
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && (
                            <Check className="w-4 h-4 text-[#093cad] shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="interests" className="block text-xs font-bold text-foreground mb-1.5">
                    {t("contactPage.interests")}
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    rows={4}
                    placeholder={t("contactPage.interestsPlaceholder")}
                    value={form.interests}
                    onChange={(e) =>
                      setForm({ ...form, interests: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="agree" className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      id="agree"
                      name="agree"
                      type="checkbox"
                      required
                      aria-required="true"
                      ref={(el) => (fieldRefs.current.agree = el)}
                      checked={form.agree}
                      onChange={(e) =>
                        setForm({ ...form, agree: e.target.checked })
                      }
                      className="mt-0.5 rounded border-border text-[#093cad]"
                    />
                    <span className="text-xs text-muted-foreground font-semibold">
                      I agree to the <Link href="/privacy-policy/" className="text-[#093cad] hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                  {errors.agree && <p className="text-xs text-red-500 font-semibold">{errors.agree}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-sm py-3.5"
                >
                  <span>
                    {isSubmitting
                      ? t("contactPage.sending")
                      : t("contactPage.btnSubmit")}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar: Office Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#f9fcff] border border-border rounded-3xl p-7 shadow-md">
              <h3 className="text-base font-bold text-foreground mb-6 pb-3 border-b border-border/50">
                {t("contactPage.officeInfo")}
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-card border border-border text-[#07A7E1]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1">
                      {t("contactPage.hq")}
                    </h4>
                    <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">
                      {t("contactPage.hqAddress")}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-card border border-border text-[#093cad]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground mb-1">
                      {t("contactPage.emailTitle")}
                    </h4>
                    <a
                      href="mailto:info@think4ever.com"
                      className="text-xs font-bold text-[#093cad] hover:underline"
                    >
                      {t("contactPage.emailVal")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
