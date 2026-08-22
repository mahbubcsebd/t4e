"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import SectionHeading from "@/components/layout/SectionHeading";

export default function TwoWaysIn() {
  const { t } = useLanguage();

  const path1Pills = t("howItWorksPage.path1Pills") || [
    "architecture",
    "dependencies",
    "business flows",
  ];
  const path2Pills = t("howItWorksPage.path2Pills") || [
    "business intent",
    "decisions",
    "acceptance criteria",
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("howItWorksPage.twoWaysEyebrow")}
            title={t("howItWorksPage.twoWaysTitle")}
            subtitle={t("howItWorksPage.twoWaysSubtitle")}
            className="mb-12 md:mb-16 relative z-10"
          />

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-10 max-w-6xl mx-auto relative z-10">
            {/* Path 1: Code to Design */}
            <div className="flex-1 shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-primary/20 transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-primary/10 w-fit">
                    <Code2 className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] font-extrabold text-primary bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-primary/20 group-hover:border-primary/40 transition-all duration-300 self-start sm:self-auto">
                    {t("howItWorksPage.path1Tag")}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("howItWorksPage.path1Title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow group-hover:text-foreground/90 transition-colors duration-300">
                  {t("howItWorksPage.path1Desc")}
                </p>

                <div className="pt-6 border-t border-border/50 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {path1Pills.map((pill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider bg-card border border-border text-muted-foreground px-3 py-1.5 rounded-md group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-300"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full sm:w-auto shadow-md shadow-primary/25 group-hover:bg-primary/90 transition-all duration-300 bg-primary text-primary-foreground"
                  >
                    <Link href="/code-to-design">
                      {t("howItWorksPage.explorePath1") ||
                        "Explore Code to Design"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Central Divider */}
            <div className="hidden md:flex flex-col items-center justify-center relative px-2">
              {/* Vertical dashed line */}
              <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-border/60"></div>
              {/* Center Badge */}
              <div className="relative z-10 bg-card border border-border/80 text-muted-foreground font-bold text-[10px] px-3 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                OR
              </div>
            </div>

            {/* Mobile Divider */}
            <div className="md:hidden flex items-center justify-center relative py-4">
              {/* Horizontal dashed line */}
              <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-border/60"></div>
              {/* Center Badge */}
              <div className="relative z-10 bg-card border border-border/80 text-muted-foreground font-bold text-[10px] px-3 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                OR
              </div>
            </div>

            {/* Path 2: Design to Code */}
            <div className="flex-1 shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div className="p-4 rounded-2xl bg-blue-50 border border-primary/20 transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-primary/10 w-fit">
                    <Sparkles className="w-6 h-6 text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] font-extrabold text-primary bg-blue-50 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-primary/20 group-hover:border-primary/40 transition-all duration-300 self-start sm:self-auto">
                    {t("howItWorksPage.path2Tag")}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("howItWorksPage.path2Title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow group-hover:text-foreground/90 transition-colors duration-300">
                  {t("howItWorksPage.path2Desc")}
                </p>

                <div className="pt-6 border-t border-border/50 flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {path2Pills.map((pill, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold uppercase tracking-wider bg-card border border-border text-muted-foreground px-3 py-1.5 rounded-md group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-300"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full sm:w-auto shadow-md shadow-primary/25 group-hover:bg-primary/90 transition-all duration-300 bg-primary text-primary-foreground"
                  >
                    <Link href="/design-to-code">
                      {t("howItWorksPage.explorePath2") ||
                        "Explore Design to Code"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
