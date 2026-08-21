"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Coins, Key, ShieldCheck } from "lucide-react";

export default function CostControl() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Coins className="w-5 h-5 text-[#07A7E1]" />,
      title: t("pricingPage.card1Title"),
      desc: t("pricingPage.card1Desc"),
    },
    {
      icon: <Key className="w-5 h-5 text-[#093cad]" />,
      title: t("pricingPage.card2Title"),
      desc: t("pricingPage.card2Desc"),
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: t("pricingPage.card3Title"),
      desc: t("pricingPage.card3Desc"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("pricingPage.costEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            {t("pricingPage.costTitle")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("pricingPage.costSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all shadow-md"
            >
              <div className="p-2.5 rounded-xl bg-[#f2f7ff] border border-border/50 w-fit mb-4">
                {c.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                {c.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
