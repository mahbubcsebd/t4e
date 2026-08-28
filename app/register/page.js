"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Shield, Globe } from "lucide-react";

export default function RegisterPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    region: "us-west",
    terms: false,
    marketing: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "https://portal.think4ever.com/#/register";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafe]">
      <Header />
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Benefits & Value Proposition */}
            <div className="lg:col-span-6">
              <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
                Start free
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090d] tracking-tight leading-tight mb-4">
                {t("registerPage.title")}
                <span className="text-gradient decoration-[#07A7E1]/30">
                  {t("registerPage.titleHighlight")}
                </span>
              </h1>

              <p className="text-base text-[#465a75] mb-8 leading-relaxed">
                {t("registerPage.subtitle")}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#093cad] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#09090d]">
                      {t("registerPage.benefit1Title")}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#465a75]">
                      {t("registerPage.benefit1Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#093cad] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#09090d]">
                      {t("registerPage.benefit2Title")}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#465a75]">
                      {t("registerPage.benefit2Desc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#093cad] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#09090d]">
                      {t("registerPage.benefit3Title")}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#465a75]">
                      {t("registerPage.benefit3Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Registration Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#c8d9ed] rounded-3xl p-8 sm:p-10 shadow-2xl">
                <h2 className="text-2xl font-bold text-[#09090d] mb-1">
                  {t("registerPage.cardTitle")}
                </h2>
                <p className="text-xs text-[#465a75] mb-6">
                  {t("registerPage.cardSub")}
                </p>

                {/* Google OAuth Button */}
                <a
                  href="https://portal.think4ever.com/#/register"
                  className="w-full bg-white border border-[#c8d9ed] hover:border-[#093cad] text-[#09090d] font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-sm mb-6 text-sm"
                >
                  <Globe className="w-4 h-4 text-[#07A7E1]" />
                  <span>{t("registerPage.btnGoogle")}</span>
                </a>

                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-[#c8d9ed] w-full"></div>
                  <span className="bg-white px-3 text-xs text-[#71849c] font-medium absolute">
                    {t("registerPage.divider")}
                  </span>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#09090d] mb-1">
                      {t("registerPage.fullName")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c8d9ed] text-sm focus:outline-none focus:border-[#093cad] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#09090d] mb-1">
                      {t("registerPage.workEmail")}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#c8d9ed] text-sm focus:outline-none focus:border-[#093cad] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#09090d] mb-1">
                        {t("registerPage.password")}
                      </label>
                      <input
                        type="password"
                        required
                        minLength={10}
                        placeholder="••••••••••••"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#c8d9ed] text-sm focus:outline-none focus:border-[#093cad] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#09090d] mb-1">
                        {t("registerPage.dataRegion")}
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) =>
                          setFormData({ ...formData, region: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-[#c8d9ed] text-sm focus:outline-none focus:border-[#093cad] transition-colors bg-white"
                      >
                        <option value="us-west">US West (recommended)</option>
                        <option value="us-east">US East</option>
                        <option value="europe-west">Europe West</option>
                        <option value="singapore">Singapore</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.terms}
                        onChange={(e) =>
                          setFormData({ ...formData, terms: e.target.checked })
                        }
                        className="mt-0.5 rounded border-[#c8d9ed] text-[#093cad] focus:ring-[#093cad]"
                      />
                      <span className="text-xs text-[#465a75]">
                        {t("registerPage.termsCheck")}
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.marketing}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            marketing: e.target.checked,
                          })
                        }
                        className="mt-0.5 rounded border-[#c8d9ed] text-[#093cad] focus:ring-[#093cad]"
                      />
                      <span className="text-xs text-[#465a75]">
                        {t("registerPage.marketingCheck")}
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-3 mt-4"
                  >
                    <span>{t("registerPage.btnSubmit")}</span>
                  </button>
                </form>

                <div className="mt-6 pt-4 border-t border-[#c8d9ed]/50 text-center text-xs text-[#71849c]">
                  <span>{t("registerPage.alreadyAccount")} </span>
                  <a
                    href="https://portal.think4ever.com/#/login"
                    className="font-bold text-[#093cad] hover:underline"
                  >
                    {t("registerPage.signIn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}




