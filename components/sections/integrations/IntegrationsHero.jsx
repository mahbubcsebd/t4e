"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function IntegrationsHero() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f7fafe] to-white border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
          {t("integrationsPage.heroEyebrow")}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("integrationsPage.heroTitlePrefix")}
          <span className="text-gradient decoration-[#07A7E1]/30">
            {t("integrationsPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("integrationsPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://portal.think4ever.com/#/register"
            className="btn-primary text-sm py-3 px-7"
          >
            <span>{t("integrationsPage.heroCtaPrimary")}</span>
          </Link>
          <a
            href="https://think4ever.com/docs/onboarding.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-alt text-sm py-3 px-6"
          >
            <span>{t("integrationsPage.heroCtaSecondary")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
