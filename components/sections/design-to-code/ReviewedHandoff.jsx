"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Target, CheckSquare, Sparkles } from "lucide-react";

export default function ReviewedHandoff() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t("designToCodePage.step1Num"),
      title: t("designToCodePage.step1Title"),
      desc: t("designToCodePage.step1Desc"),
      icon: <Target className="w-5 h-5 text-[#07A7E1]" />,
    },
    {
      num: t("designToCodePage.step2Num"),
      title: t("designToCodePage.step2Title"),
      desc: t("designToCodePage.step2Desc"),
      icon: <CheckSquare className="w-5 h-5 text-[#093cad]" />,
    },
    {
      num: t("designToCodePage.step3Num"),
      title: t("designToCodePage.step3Title"),
      desc: t("designToCodePage.step3Desc"),
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("designToCodePage.handoffEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {t("designToCodePage.handoffTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all hover:shadow-lg relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-[#093cad] bg-[#eaf0fb] px-3 py-1 rounded-full uppercase tracking-wider">
                  {s.num}
                </span>
                <div className="p-2.5 rounded-xl bg-[#f2f7ff] border border-border/50">
                  {s.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
