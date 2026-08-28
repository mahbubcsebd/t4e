"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Coins, Key, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function CostControl() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Coins,
      title: t("pricingPage.card1Title"),
      desc: t("pricingPage.card1Desc"),
    },
    {
      icon: Key,
      title: t("pricingPage.card2Title"),
      desc: t("pricingPage.card2Desc"),
    },
    {
      icon: ShieldCheck,
      title: t("pricingPage.card3Title"),
      desc: t("pricingPage.card3Desc"),
    },
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.costEyebrow")}
            title={t("pricingPage.costTitle")}
            subtitle={t("pricingPage.costSubtitle")}
            className="mb-12 md:mb-16 relative z-10"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="relative shadow-sm bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col group overflow-hidden translate-y-0 hover:-translate-y-2"
                >
                  <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-primary/20 transition-all duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-primary/10">
                      <Icon className="w-7 h-7 text-primary transition-colors duration-300" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {c.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {c.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
