"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-4 border border-[#093cad]/20">
            {t("termsPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight leading-tight mb-4">
            {t("termsPage.heroTitlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("termsPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-[#465a75] mb-6">
            {t("termsPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-6 text-xs text-[#71849c] font-semibold border-t border-b border-[#c8d9ed]/50 py-3">
            <span>{t("termsPage.effectiveDate")}</span>
            <span>•</span>
            <span>{t("termsPage.lastUpdated")}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm text-[#465a75] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec1Title")}
            </h2>
            <p>{t("termsPage.sec1Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c8d9ed]/40">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec2Title")}
            </h2>
            <p>{t("termsPage.sec2Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c8d9ed]/40">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec3Title")}
            </h2>
            <p>{t("termsPage.sec3Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c8d9ed]/40">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec4Title")}
            </h2>
            <p>{t("termsPage.sec4Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c8d9ed]/40">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec5Title")}
            </h2>
            <p>{t("termsPage.sec5Text")}</p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#c8d9ed]/40">
            <h2 className="text-xl font-bold text-[#09090d]">
              {t("termsPage.sec6Title")}
            </h2>
            <p>{t("termsPage.sec6Text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
