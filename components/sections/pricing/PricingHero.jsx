"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PricingHero() {
  const { t } = useLanguage();
  const { openAuthModal } = useAuthModal();

  return (
    <section className="pt-8 lg:pt-12 pb-4 lg:pb-8 bg-background border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow className="mb-4">
        {t("pricingPage.heroEyebrow")}
      </Eyebrow>

        <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("pricingPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("pricingPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("pricingPage.heroSubtitle")}
        </p>

        <div className="inline-flex items-center rounded-lg bg-amber-100 text-amber-900 text-sm sm:text-base font-bold px-4 py-2 mb-6">
          {t("pricingPage.noFee", "No monthly platform fee")}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <Button
            onClick={() => openAuthModal("signup")}
            className="shadow-md shadow-primary/25 cursor-pointer"
          >
            {t("pricingPage.heroCtaPrimary")}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground font-medium">
          {t("pricingPage.heroMicro")}
        </p>
      </div>
    </section>
  );
}
