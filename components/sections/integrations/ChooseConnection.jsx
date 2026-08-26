"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Network, Code, Cpu } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function ChooseConnection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Network,
      tag: t("integrationsPage.card1Tag"),
      title: t("integrationsPage.card1Title"),
      desc: t("integrationsPage.card1Desc"),
      list: t("integrationsPage.card1List") || [
        "Claude Code",
        "Codex",
        "Cursor and Windsurf",
      ],
    },
    {
      icon: Code,
      tag: t("integrationsPage.card2Tag"),
      title: t("integrationsPage.card2Title"),
      desc: t("integrationsPage.card2Desc"),
      list: t("integrationsPage.card2List") || [
        "Stay in the existing editor",
        "Use reviewed context",
        "Avoid workflow replacement",
      ],
    },
    {
      icon: Cpu,
      tag: t("integrationsPage.card3Tag"),
      title: t("integrationsPage.card3Title"),
      desc: t("integrationsPage.card3Desc"),
      list: t("integrationsPage.card3List") || [
        "Custom workflows",
        "Project systems",
        "Enterprise integration",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-32 bg-background border-b border-border">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("integrationsPage.chooseEyebrow")}
            title={t("integrationsPage.chooseTitle")}
            className="mb-12 md:mb-16 relative z-10"
          />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="relative shadow-sm backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                      <div className="p-4 rounded-2xl bg-blue-50 border border-primary/20 transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-primary/10 w-fit">
                        <Icon className="w-6 h-6 text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-[10px] font-extrabold text-primary bg-blue-50  px-3 py-1.5 rounded-full uppercase tracking-[0.2em] transition-all duration-300 self-start sm:self-auto border border-primary/20 group-hover:border-primary/40">
                        {c.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground/90 transition-colors duration-300">
                      {c.desc}
                    </p>
                  </div>

                  <ul className="space-y-4 pt-6 border-t border-border/50 text-sm font-medium text-muted-foreground relative z-10">
                    {c.list.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-muted border border-border group-hover/item:bg-primary/10 group-hover/item:border-primary/30 transition-all duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-all duration-300 group-hover/item:scale-125"></div>
                        </div>
                        <span className="group-hover/item:text-foreground transition-colors duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
