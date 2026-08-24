"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function EnterpriseEvaluation() {
  const { t } = useLanguage();

  const evalList = t("securityPage.evalList") || [
    "Repository and project access",
    "Model-provider data flows",
    "Deployment topology",
    "Usage controls and support",
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border">
      <SectionCard>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column */}
            <div>
              <SectionHeading
                align="left"
                eyebrow={t("securityPage.evalEyebrow")}
                title={t("securityPage.evalTitle")}
                subtitle={t("securityPage.evalSubtitle")}
                className="mb-8"
              />

              <ul className="space-y-4">
                {evalList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base font-semibold text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column Box (Premium Glassmorphism) */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-start">
                <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider block mb-4 border border-primary/20">
                  Security Review
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  {t("securityPage.reviewTitle")}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
                  {t("securityPage.reviewDesc")}
                </p>

                <Button
                  asChild
                  className="w-full text-sm py-5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all"
                >
                  <Link href="/contact-us/">Contact Think4Ever</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
