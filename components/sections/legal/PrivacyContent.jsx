"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-card border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
            {t("privacyPolicyPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
            {t("privacyPolicyPage.heroTitlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("privacyPolicyPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-muted-foreground mb-6">
            {t("privacyPolicyPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-6 text-xs text-muted-foreground font-semibold border-t border-b border-border/50 py-3">
            <span>{t("privacyPolicyPage.effectiveDate")}</span>
            <span>•</span>
            <span>{t("privacyPolicyPage.lastUpdated")}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <p>{t("privacyPolicyPage.intro1")}</p>
            <p>{t("privacyPolicyPage.intro2")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">
              {t("privacyPolicyPage.sec1Title")}
            </h2>
            <h3 className="text-base font-bold text-foreground">
              {t("privacyPolicyPage.sec1Sub1")}
            </h3>
            <p>{t("privacyPolicyPage.sec1Text1")}</p>

            <h3 className="text-base font-bold text-foreground pt-2">
              {t("privacyPolicyPage.sec1Sub2")}
            </h3>
            <p>{t("privacyPolicyPage.sec1Text2")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">
              {t("privacyPolicyPage.sec2Title")}
            </h2>
            <p>{t("privacyPolicyPage.sec2Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">
              {t("privacyPolicyPage.sec3Title")}
            </h2>
            <p>{t("privacyPolicyPage.sec3Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">
              {t("privacyPolicyPage.sec4Title")}
            </h2>
            <p>{t("privacyPolicyPage.sec4Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-bold text-foreground">
              {t("privacyPolicyPage.sec5Title")}
            </h2>
            <p>{t("privacyPolicyPage.sec5Text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
