"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("termsPage.heroEyebrow")}
          </span>
          <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {t("termsPage.heroTitlePrefix")}
            <span className="text-primary decoration-[#07A7E1]/30">
              {t("termsPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("termsPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-6 text-sm text-muted-foreground font-semibold border-t border-b border-border/50 py-3">
            <span>{t("termsPage.effectiveDate")}</span>
            <span>•</span>
            <span>{t("termsPage.lastUpdated")}</span>
          </div>
        </div>
      </div>

      <SectionCard className="max-w-[1600px] mx-auto">
        <Container>
          {/* Content Body */}
          <div className="text-base text-muted-foreground leading-relaxed bg-card/80 relative z-10 py-6 sm:py-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec1Title")}
              </h2>
              <p>{t("termsPage.sec1Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec2Title")}
              </h2>
              {/* TODO: [FLAG FOR LEGAL REVIEW] Outdated autonomous-development description in termsPage.sec2Text */}
              <p>{t("termsPage.sec2Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec3Title")}
              </h2>
              {/* TODO: [FLAG FOR LEGAL REVIEW] Outdated autonomous-development description in termsPage.sec3Text */}
              <p>{t("termsPage.sec3Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec4Title")}
              </h2>
              <p>{t("termsPage.sec4Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec5Title")}
              </h2>
              <p>{t("termsPage.sec5Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("termsPage.sec6Title")}
              </h2>
              <p>{t("termsPage.sec6Text")}</p>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
