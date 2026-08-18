"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, RefreshCw, Bot } from "lucide-react";

export default function WhereItHelps() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Compass className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("codeToDesignPage.card1Tag"),
      title: t("codeToDesignPage.card1Title"),
      desc: t("codeToDesignPage.card1Desc"),
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#093cad]" />,
      tag: t("codeToDesignPage.card2Tag"),
      title: t("codeToDesignPage.card2Title"),
      desc: t("codeToDesignPage.card2Desc"),
    },
    {
      icon: <Bot className="w-5 h-5 text-indigo-600" />,
      tag: t("codeToDesignPage.card3Tag"),
      title: t("codeToDesignPage.card3Title"),
      desc: t("codeToDesignPage.card3Desc"),
    },
  ];

  const proofPills = t("codeToDesignPage.proofPills") || ["Review repository access", "Human review", "Keep your editor and stack"];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
            {t("codeToDesignPage.whereHelpsEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight">
            {t("codeToDesignPage.whereHelpsTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#f2f7ff] border border-[#c8d9ed]/50">
                  {c.icon}
                </div>
                <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider bg-[#eaf0fb] px-3 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#09090d] mb-2 leading-snug">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote and Proof Banner */}
        <div className="bg-white border border-[#c8d9ed] rounded-2xl p-8 max-w-4xl mx-auto text-center shadow-md">
          <blockquote className="text-base sm:text-lg font-semibold text-[#09090d] italic mb-6">
            {t("codeToDesignPage.quote")}
          </blockquote>
          <div className="flex flex-wrap justify-center gap-3">
            {proofPills.map((pill, i) => (
              <span key={i} className="text-xs font-bold text-[#093cad] bg-[#eaf0fb] px-4 py-2 rounded-full border border-[#c8d9ed]">
                ✓ {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
