"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lock, Eye, Sliders, Server } from "lucide-react";

export default function OperatingPrinciples() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Lock className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("securityPage.card1Tag"),
      title: t("securityPage.card1Title"),
      desc: t("securityPage.card1Desc"),
    },
    {
      icon: <Eye className="w-5 h-5 text-[#093cad]" />,
      tag: t("securityPage.card2Tag"),
      title: t("securityPage.card2Title"),
      desc: t("securityPage.card2Desc"),
    },
    {
      icon: <Sliders className="w-5 h-5 text-indigo-600" />,
      tag: t("securityPage.card3Tag"),
      title: t("securityPage.card3Title"),
      desc: t("securityPage.card3Desc"),
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      tag: t("securityPage.card4Tag"),
      title: t("securityPage.card4Title"),
      desc: t("securityPage.card4Desc"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
            {t("securityPage.principlesEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {t("securityPage.principlesTitle")}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#f9fcff] border border-border rounded-2xl p-6 hover:border-[#093cad] transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#093cad] bg-[#eaf0fb] px-3 py-1 rounded-full">
                    {c.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-card border border-border">
                    {c.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                  {c.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
