"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";
import { Archive, PlusCircle, ArrowUpRight } from "lucide-react";

export default function PricingProjectLimits() {
  const { t } = useLanguage();

  const icons = [Archive, PlusCircle, ArrowUpRight];

  const cards = t("pricingPage.limitsCards") || [
    {
      title: "Archive a project",
      desc: "Free up a slot by archiving a project you no longer need.",
    },
    {
      title: "Add a project for credits",
      desc: "Add one more project, paid from your company's credit pool.",
    },
    {
      title: "Upgrade your plan",
      desc: "Move up to a plan with more projects, users and credits.",
    },
  ];

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="limits">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.limitsEyebrow", "Project limits")}
            title={t(
              "pricingPage.limitsTitle",
              "Reached your project limit? You have options."
            )}
            subtitle={t(
              "pricingPage.limitsSubtitle",
              "Every project in your workspace counts toward your plan's limit, whoever created it. When you reach it, you can:"
            )}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {cards.map((card, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-sm border border-border/70 rounded-xl p-6 sm:p-7 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col group translate-y-0 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
