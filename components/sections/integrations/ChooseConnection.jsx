"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Network, Code, Cpu } from "lucide-react";

export default function ChooseConnection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Network className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("integrationsPage.card1Tag"),
      title: t("integrationsPage.card1Title"),
      desc: t("integrationsPage.card1Desc"),
      list: t("integrationsPage.card1List") || ["Claude Code", "Codex", "Cursor and Windsurf"],
    },
    {
      icon: <Code className="w-5 h-5 text-[#093cad]" />,
      tag: t("integrationsPage.card2Tag"),
      title: t("integrationsPage.card2Title"),
      desc: t("integrationsPage.card2Desc"),
      list: t("integrationsPage.card2List") || ["Stay in the existing editor", "Use reviewed context", "Avoid workflow replacement"],
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      tag: t("integrationsPage.card3Tag"),
      title: t("integrationsPage.card3Title"),
      desc: t("integrationsPage.card3Desc"),
      list: t("integrationsPage.card3List") || ["Custom workflows", "Project systems", "Enterprise integration"],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
            {t("integrationsPage.chooseEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            {t("integrationsPage.chooseTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-[#f9fcff] border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all hover:shadow-lg flex flex-col justify-between"
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
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {c.desc}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-border/50 text-xs font-semibold text-foreground">
                {c.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
