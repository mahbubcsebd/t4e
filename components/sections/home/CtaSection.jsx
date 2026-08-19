"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-white text-center" id="register">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-[#465a75] mb-8 max-w-xl mx-auto leading-relaxed">
          {t("cta.subtitle")}
        </p>
        <Link
          href="https://portal.think4ever.com/#/register"
          className="btn-primary text-base py-3.5 px-8"
        >
          <span>{t("cta.btn")}</span>
        </Link>
      </div>
    </section>
  );
}
