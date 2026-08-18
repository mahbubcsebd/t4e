"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link2, CheckSquare, Sparkles } from "lucide-react";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t("howItWorks.step1Num"),
      title: t("howItWorks.step1Title"),
      desc: t("howItWorks.step1Desc"),
      icon: <Link2 className="w-6 h-6 text-[#07A7E1]" />,
    },
    {
      num: t("howItWorks.step2Num"),
      title: t("howItWorks.step2Title"),
      desc: t("howItWorks.step2Desc"),
      icon: <CheckSquare className="w-6 h-6 text-[#093cad]" />,
    },
    {
      num: t("howItWorks.step3Num"),
      title: t("howItWorks.step3Title"),
      desc: t("howItWorks.step3Desc"),
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
            {t("howItWorks.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight">
            {t("howItWorks.title")}
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all hover:shadow-lg relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-[#093cad] bg-[#eaf0fb] px-3 py-1 rounded-full uppercase tracking-wider">
                  {s.num}
                </span>
                <div className="p-3 bg-white rounded-xl border border-[#c8d9ed] shadow-sm">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#09090d] mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
