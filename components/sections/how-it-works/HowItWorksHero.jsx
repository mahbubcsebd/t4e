"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function HowItWorksHero() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f7fafe] to-white border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold  text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("howItWorksPage.heroEyebrow")}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("howItWorksPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("howItWorksPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("howItWorksPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Button asChild className="w-full sm:w-auto">
            <Link href="https://portal.think4ever.com/#/register">
              {t("howItWorksPage.heroCtaPrimary")}
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <Link href="/code-to-design">
              {t("howItWorksPage.heroCtaSecondary")}
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground font-medium">
          {t("howItWorksPage.heroMicro")}
        </p>
      </div>
    </section>
  );
}
