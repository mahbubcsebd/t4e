"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function PricingHowItWorks() {
  const { t } = useLanguage();

  const steps = t("pricingPage.howSteps") || [
    {
      num: "1",
      title: "Subscribe",
      desc: "The person who signs up and subscribes becomes the company administrator.",
    },
    {
      num: "2",
      title: "Get your workspace",
      desc: "Your company gets its own server. All of its projects, users and credits live there.",
    },
    {
      num: "3",
      title: "Add your team",
      desc: "The administrator adds company users, picks each person's role and chooses which projects they can open. No separate sign-ups or payments.",
    },
    {
      num: "4",
      title: "Share one credit pool",
      desc: "All AI work by everyone on the team is paid from the company's shared credits, with admin caps to keep spending in check.",
    },
  ];

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="how">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.howEyebrow", "How it works")}
            title={t("pricingPage.howTitle", "One company. One workspace.")}
            highlightText={t("pricingPage.howHighlight", "One pool of credits.")}
            subtitle={t(
              "pricingPage.howSubtitle",
              "Every paid plan is a company account. Your projects, users and credits live together in your own workspace, so nothing is scattered across personal accounts."
            )}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-xl p-6 sm:p-7 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-extrabold flex items-center justify-center mb-5 text-base group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
