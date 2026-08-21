"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, Check } from "lucide-react";

export default function ContactFormSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    "Ammend and fix existing code",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-20 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    {t("contactPage.segment")} *
                  </label>
                  <select
                    required
                    value={form.segment}
                    onChange={(e) =>
                      setForm({ ...form, segment: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                  >
                    <option value="">Select your segment</option>
                    {segmentOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.firstName")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm({ ...form, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.lastName")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm({ ...form, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.companyName")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your company"
                      value={form.companyName}
                      onChange={(e) =>
                        setForm({ ...form, companyName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.companySize")} *
                    </label>
                    <select
                      required
                      value={form.companySize}
                      onChange={(e) =>
                        setForm({ ...form, companySize: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1 - 10</option>
                      <option value="11-50">11 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {t("contactPage.role")} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., CTO, VP Engineering"
                      value={form.role}
                      onChange={(e) =>
                        setForm({ ...form, role: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                    />
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
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    {t("contactPage.interests")}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t("contactPage.interestsPlaceholder")}
                    value={form.interests}
                    onChange={(e) =>
                      setForm({ ...form, interests: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:border-[#093cad] bg-card"
                  ></textarea>
                </div>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={form.agree}
                    onChange={(e) =>
                      setForm({ ...form, agree: e.target.checked })
                    }
                    className="mt-0.5 rounded border-border text-[#093cad]"
                  />
                  <span className="text-xs text-muted-foreground font-semibold">
                    {t("contactPage.agree")}
                  </span>
                </label>

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
