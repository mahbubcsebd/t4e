"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Sparkles, Folder, ArrowRight, CheckCircle2 } from "lucide-react";

export default function OnboardingPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState("code"); // 'code' or 'intent'

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafe]">
      {/* Topbar Header */}
      <header className="bg-white border-b border-[#c8d9ed] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/think4ever-logo.png"
            alt="Think4Ever"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 bg-[#f2f7ff] border border-[#c8d9ed] px-3 py-1.5 rounded-full text-xs font-semibold text-[#093cad]">
          <Folder className="w-4 h-4 text-[#07A7E1]" />
          <span>New project</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="bg-[#e7f7fc] text-[#0679a4] text-xs font-bold px-3 py-1 rounded-full border border-[#07A7E1]/20">
            Credits 500
          </span>
          <span className="w-8 h-8 rounded-full bg-[#093cad] text-white font-bold text-xs flex items-center justify-center">
            MR
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="max-w-3xl w-full bg-white border border-[#c8d9ed] rounded-3xl p-8 sm:p-12 shadow-2xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-bold text-[#465a75] mb-8 pb-4 border-b border-[#c8d9ed]/50">
            <span>Getting started</span>
            <div className="flex items-center gap-1.5">
              <span className={`w-3 h-3 rounded-full ${step >= 1 ? "bg-[#093cad]" : "bg-slate-200"}`}></span>
              <span className={`w-3 h-3 rounded-full ${step >= 2 ? "bg-[#093cad]" : "bg-slate-200"}`}></span>
              <span className={`w-3 h-3 rounded-full ${step >= 3 ? "bg-[#093cad]" : "bg-slate-200"}`}></span>
            </div>
            <span>Step {step} of 3</span>
          </div>

          {/* Step 1: Choose Path */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("onboardingPage.kicker")}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#09090d] mb-2">
                  {t("onboardingPage.step1Title")}
                </h1>
                <p className="text-xs sm:text-sm text-[#465a75]">
                  {t("onboardingPage.step1Sub")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Option 1: Code -> Understanding */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPath("code");
                    setStep(2);
                  }}
                  className="bg-[#f9fcff] border-2 border-[#c8d9ed] hover:border-[#093cad] rounded-2xl p-6 text-left transition-all hover:shadow-lg relative group flex flex-col justify-between"
                >
                  <span className="absolute -top-3 left-6 bg-[#07A7E1] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                    {t("onboardingPage.path1Badge")}
                  </span>
                  <div>
                    <div className="p-3 rounded-xl bg-white border border-[#c8d9ed] w-fit mb-4 text-[#093cad] group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#093cad] uppercase tracking-wider block mb-1">
                      {t("onboardingPage.path1Tag")}
                    </span>
                    <h2 className="text-lg font-bold text-[#09090d] mb-2">
                      {t("onboardingPage.path1Title")}
                    </h2>
                    <p className="text-xs text-[#465a75] mb-6">
                      {t("onboardingPage.path1Desc")}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#093cad] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {t("onboardingPage.path1Cta")}
                  </span>
                </button>

                {/* Option 2: Intent -> System design */}
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPath("intent");
                    setStep(2);
                  }}
                  className="bg-[#f9fcff] border-2 border-[#c8d9ed] hover:border-[#093cad] rounded-2xl p-6 text-left transition-all hover:shadow-lg relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-white border border-[#c8d9ed] w-fit mb-4 text-amber-500 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#093cad] uppercase tracking-wider block mb-1">
                      {t("onboardingPage.path2Tag")}
                    </span>
                    <h2 className="text-lg font-bold text-[#09090d] mb-2">
                      {t("onboardingPage.path2Title")}
                    </h2>
                    <p className="text-xs text-[#465a75] mb-6">
                      {t("onboardingPage.path2Desc")}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#093cad] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {t("onboardingPage.path2Cta")}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Configure */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
                  {selectedPath === "code" ? "Analyze existing code" : "Design from intent"}
                </span>
                <h1 className="text-2xl font-bold text-[#09090d] mb-2">
                  {selectedPath === "code" ? "Choose repository source" : "Define your business objective"}
                </h1>
              </div>

              {selectedPath === "code" ? (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-[#c8d9ed] bg-[#f9fcff] flex items-center justify-between">
                    <div>
                      <strong className="text-sm font-bold text-[#09090d] block">appointment-platform</strong>
                      <span className="text-xs text-[#465a75]">GitHub · main branch</span>
                    </div>
                    <span className="bg-[#e0f7ed] text-[#167451] text-xs font-bold px-3 py-1 rounded-full">Read only</span>
                  </div>
                </div>
              ) : (
                <textarea
                  rows={4}
                  placeholder="Example: Customers can request refunds, managers can review exceptions..."
                  className="w-full p-4 rounded-xl border border-[#c8d9ed] text-sm focus:outline-none focus:border-[#093cad]"
                ></textarea>
              )}

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-alt text-xs py-2.5 px-5"
                >
                  {t("onboardingPage.back")}
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary text-xs py-2.5 px-6"
                >
                  {t("onboardingPage.continue")}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Analysis Complete */}
          {step === 3 && (
            <div className="text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e0f7ed] text-[#167451] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h2 className="text-2xl font-bold text-[#09090d]">
                First system view ready!
              </h2>

              <p className="text-xs sm:text-sm text-[#465a75] max-w-md mx-auto">
                Think4Ever found 4 services, 6 workflows, 12 dependencies, and 8 business rules.
              </p>

              <div className="pt-4 flex justify-center gap-4">
                <Link href="/" className="btn-primary text-xs py-3 px-7">
                  <span>Open System Map →</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
