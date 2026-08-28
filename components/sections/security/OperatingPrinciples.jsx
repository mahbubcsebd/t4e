"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Lock, Eye, Sliders, Server } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function OperatingPrinciples() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      tag: t("securityPage.card1Tag"),
      title: t("securityPage.card1Title"),
      desc: t("securityPage.card1Desc"),
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      tag: t("securityPage.card2Tag"),
      title: t("securityPage.card2Title"),
      desc: t("securityPage.card2Desc"),
    },
    {
      icon: <Sliders className="w-6 h-6 text-primary" />,
      tag: t("securityPage.card3Tag"),
      title: t("securityPage.card3Title"),
      desc: t("securityPage.card3Desc"),
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      tag: t("securityPage.card4Tag"),
      title: t("securityPage.card4Title"),
      desc: t("securityPage.card4Desc"),
    },
  ];

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-background border-b border-border">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("securityPage.principlesEyebrow")}
            title={t("securityPage.principlesTitle")}
            className="mb-12 md:mb-16 relative z-10"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center text-center group overflow-hidden translate-y-0 hover:-translate-y-2"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center flex-grow">
                  <div className="mb-5 p-4 rounded-full bg-blue-50 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.15)] group-hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-all duration-500 group-hover:scale-110">
                    {c.icon}
                  </div>
                  <span className="mb-4 text-[10px] font-extrabold text-primary bg-blue-50 px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-primary/20 group-hover:border-primary/40 transition-colors">
                    {c.tag}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
