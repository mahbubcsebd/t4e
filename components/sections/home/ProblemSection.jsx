"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { RefreshCw, Users, AlertTriangle } from "lucide-react";

export default function ProblemSection() {
  const { t } = useLanguage();

  const problems = [
    {
      icon: <RefreshCw className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("problem.card1Tag"),
      title: t("problem.card1Title"),
      desc: t("problem.card1Desc"),
    },
    {
      icon: <Users className="w-5 h-5 text-[#093cad]" />,
      tag: t("problem.card2Tag"),
      title: t("problem.card2Title"),
      desc: t("problem.card2Desc"),
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      tag: t("problem.card3Tag"),
      title: t("problem.card3Title"),
      desc: t("problem.card3Desc"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f2f7ff] border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
            {t("problem.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight">
            {t("problem.title")}
          </h2>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200/60 rounded-3xl p-8 hover:shadow-xl hover:border-zinc-300 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#093cad] bg-[#eaf0fb] px-3 py-1 rounded-full">
                    {card.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-sm group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#09090d] mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
