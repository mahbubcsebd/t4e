"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function PricingFaq() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null); // all items closed initially

  const localizeHref = (href) => {
    if (language === 'en' || !href.startsWith('/')) return href;
    return `/${language}${href}`;
  };

  const items = t("pricingPage.faqItems") || [];
  const linkText = t("pricingPage.faqLinkText", "How to: Design in Think, Code in Claude");

  // Answers may contain a {link} token that is replaced by the tutorial link.
  const renderAnswer = (answer) => {
    const parts = String(answer).split("{link}");
    if (parts.length < 2) return answer;
    return (
      <>
        {parts[0]}
        <Link
          href={localizeHref("/tutorials/how-to-design-in-think/")}
          className="text-primary font-semibold hover:underline"
        >
          {linkText}
        </Link>
        {parts.slice(1).join("")}
      </>
    );
  };

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="faq">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.faqEyebrow", "FAQ")}
            title={t("pricingPage.faqTitle", "Questions about plans")}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-card/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 shadow-sm shadow-primary/5"
                      : "border-border/60 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <div
                      className={`flex shrink-0 items-center justify-center w-7 h-7 rounded-full transition-colors ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                        <p>{renderAnswer(item.a)}</p>
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
