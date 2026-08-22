"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";

export default function PricingHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 md:py-20 border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("pricingPage.heroEyebrow")}
        </span>

        <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("pricingPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("pricingPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("pricingPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <Button asChild className="shadow-md shadow-primary/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("pricingPage.heroCtaPrimary")}
            </a>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground font-medium">
          {t("pricingPage.heroMicro")}
        </p>
      </div>
    </section>
  );
}
