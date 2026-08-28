"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Compass, RefreshCw, Bot, CheckCircle2 } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function WhereItHelps() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Compass className="w-6 h-6 text-primary" />,
      tag: t("codeToDesignPage.card1Tag"),
      title: t("codeToDesignPage.card1Title"),
      desc: t("codeToDesignPage.card1Desc"),
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-primary" />,
      tag: t("codeToDesignPage.card2Tag"),
      title: t("codeToDesignPage.card2Title"),
      desc: t("codeToDesignPage.card2Desc"),
    },
    {
      icon: <Bot className="w-6 h-6 text-primary" />,
      tag: t("codeToDesignPage.card3Tag"),
      title: t("codeToDesignPage.card3Title"),
      desc: t("codeToDesignPage.card3Desc"),
    },
  ];

  const proofPills = t("codeToDesignPage.proofPills") || [
    "Review repository access",
    "Human review",
    "Keep your editor and stack",
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 border-b border-border bg-background">
      <SectionCard>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t("codeToDesignPage.whereHelpsEyebrow")}
            title={t("codeToDesignPage.whereHelpsTitle")}
            className="max-w-[500px]"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 relative z-10">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 hover:border-primary/50 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                      {c.icon}
                    </div>
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">
                      {c.tag}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {c.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote and Proof Banner */}
          <div className="relative z-10 bg-white border border-border/60 rounded-xl p-8 sm:p-12 max-w-4xl mx-auto text-center shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-500 group overflow-hidden">
            <div className="relative z-10">
              <blockquote className="text-lg sm:text-xl font-medium text-foreground mb-8 leading-relaxed">
                {t("codeToDesignPage.quote")}
              </blockquote>

              <div className="flex flex-wrap justify-center gap-3">
                {proofPills.map((pill, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-bold text-foreground bg-white px-4 py-2 rounded-xl border border-border/80 shadow-sm group-hover:border-primary/30 transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
