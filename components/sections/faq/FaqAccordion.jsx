"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import { Button } from "@/components/ui/button";

export default function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const items = t("faqPage.items") || [];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="py-16 md:py-24 bg-background border-b border-border"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Hero Section embedded */}
        <div className="text-center">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("faqPage.heroEyebrow")}
          </span>

          <h1 className="max-w-[650px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {t("faqPage.heroTitlePrefix")}
            <span className="text-primary decoration-[#07A7E1]/30">
              {t("faqPage.heroTitleHighlight")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("faqPage.heroSubtitle")}
          </p>

          <div className="flex justify-center gap-4">
            <Button asChild className="shadow-md shadow-primary/25">
              <Link href="https://portal.think4ever.com/#/register">
                {t("faqPage.heroCtaPrimary")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border hover:bg-muted"
            >
              <Link href="/how-it-works">{t("faqPage.heroCtaSecondary")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <SectionCard className="max-w-[1600px] mx-auto">
        <Container>
          <div className="space-y-4 relative z-10">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-card/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 shadow-primary/5"
                      : "border-border/60 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="group w-full px-4 py-4 text-left flex items-center justify-between gap-4 font-medium text-sm sm:text-base text-foreground hover:text-primary transition-colors"
                  >
                    <span>{item.q}</span>
                    <div
                      className={`flex shrink-0 items-center justify-center min-w-8 h-8 rounded-full transition-colors ${isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary/20"}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={3}
                      />
                    </div>
                  </button>

                  {/* Smooth animated content section */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-sm text-muted-foreground leading-relaxed">
                        <div className="pt-4 border-t border-border/50">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
