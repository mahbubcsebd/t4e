"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("privacyPolicyPage.heroEyebrow")}
          </span>
          <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {t("privacyPolicyPage.heroTitlePrefix")}
            <span className="text-primary decoration-[#07A7E1]/30">
              {t("privacyPolicyPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("privacyPolicyPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-6 text-sm text-muted-foreground font-semibold border-t border-b border-border/50 py-3">
            <span>{t("privacyPolicyPage.effectiveDate")}</span>
            <span>•</span>
            <span>{t("privacyPolicyPage.lastUpdated")}</span>
          </div>
        </div>
      </div>

      <SectionCard className="max-w-[1600px] mx-auto">
        <Container>
          {/* Content Body */}
          <div className="text-base text-muted-foreground leading-relaxed bg-card/80 relative z-10 py-6 sm:py-8">
            <div className="space-y-6">
              <p>{t("privacyPolicyPage.intro1")}</p>
              <p>{t("privacyPolicyPage.intro2")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("privacyPolicyPage.sec1Title")}
              </h2>
              <h3 className="text-lg font-bold text-foreground mb-2 mt-6">
                {t("privacyPolicyPage.sec1Sub1")}
              </h3>
              <p>{t("privacyPolicyPage.sec1Text1")}</p>

              <h3 className="text-lg font-bold text-foreground mb-2 mt-6">
                {t("privacyPolicyPage.sec1Sub2")}
              </h3>
              <p>{t("privacyPolicyPage.sec1Text2")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("privacyPolicyPage.sec2Title")}
              </h2>
              <p>{t("privacyPolicyPage.sec2Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("privacyPolicyPage.sec3Title")}
              </h2>
              <p>{t("privacyPolicyPage.sec3Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("privacyPolicyPage.sec4Title")}
              </h2>
              <p>{t("privacyPolicyPage.sec4Text")}</p>
            </div>

            <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("privacyPolicyPage.sec5Title")}
              </h2>
              <p>{t("privacyPolicyPage.sec5Text")}</p>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
