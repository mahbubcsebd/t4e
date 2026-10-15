"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function AppsSteps() {
  const { t } = useLanguage();

  const rawSteps = t("appsPage.steps.items");
  const steps = Array.isArray(rawSteps)
    ? rawSteps
    : [
        {
          num: "1",
          title: "Download",
          desc: "Install Think4Ever from the Microsoft Store or Google Play.",
        },
        {
          num: "2",
          title: "Sign in",
          desc: "Sign in with your Think4Ever account, or create a free one.",
        },
        {
          num: "3",
          title: "Start a project",
          desc: "Connect a repository or describe what you want to build, then review the system map Think4Ever generates.",
        },
      ];

  return (
    <section className="py-8 md:py-12 lg:py-16 border-b border-border" id="get-started">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("appsPage.steps.eyebrow", "Get started")}
            title={t("appsPage.steps.title", "Up and running in three steps")}
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-card/80 hover:bg-card border border-border/80 hover:border-primary/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary border border-primary/25 font-extrabold text-lg flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      0{step.num}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                      Step {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
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
