"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function SecurityHero() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f7fafe] to-white border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("securityPage.heroEyebrow")}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("securityPage.heroTitlePrefix")}
          <span className="text-gradient decoration-[#07A7E1]/30">
            {t("securityPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("securityPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://think4ever.com/contact-us/"
            className="btn-primary text-sm py-3 px-7"
          >
            <span>{t("securityPage.heroCtaPrimary")}</span>
          </a>
          <Link
            href="https://portal.think4ever.com/#/register"
            className="btn-alt text-sm py-3 px-6"
          >
            <span>{t("securityPage.heroCtaSecondary")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
