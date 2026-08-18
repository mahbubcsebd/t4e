"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const items = t("faqPage.items") || [];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section embedded */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
            {t("faqPage.heroEyebrow")}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight leading-[1.15] mb-4">
            {t("faqPage.heroTitlePrefix")}
            <span className="text-gradient underline decoration-[#07A7E1]/30">
              {t("faqPage.heroTitleHighlight")}
            </span>
          </h1>

          <p className="text-base text-[#465a75] leading-relaxed mb-6">
            {t("faqPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-4">
            <Link href="https://portal.think4ever.com/#/register" className="btn-primary text-sm py-2.5 px-6">
              <span>{t("faqPage.heroCtaPrimary")}</span>
            </Link>
            <Link href="/how-it-works" className="btn-alt text-sm py-2.5 px-6">
              <span>{t("faqPage.heroCtaSecondary")}</span>
            </Link>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#09090d] hover:text-[#093cad] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#07A7E1] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#465a75] leading-relaxed border-t border-[#c8d9ed]/50 pt-4 animate-in fade-in slide-in-from-top-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
