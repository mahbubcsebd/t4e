"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { ChevronDown } from "lucide-react";

export default function AppsFaq() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const localizeHref = (href) => {
    if (language === "en" || !href.startsWith("/")) return href;
    return `/${language}${href}`;
  };

  const rawItems = t("appsPage.faq.items");
  const items = Array.isArray(rawItems) ? rawItems : [];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 border-b border-border" id="faq">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("appsPage.faq.eyebrow", "FAQ")}
            title={t("appsPage.faq.title", "Questions about the apps")}
            className="mb-10 md:mb-14"
          />

          <div className="max-w-3xl mx-auto space-y-3.5">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`bg-card/90 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 shadow-sm shadow-primary/5"
                      : "border-border/70 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
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
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 pt-3">
                      {item.type === "table" && Array.isArray(item.rows) ? (
                        <div className="overflow-x-auto rounded-xl border border-border/60 bg-muted/20 my-2">
                          <table className="w-full text-left text-xs sm:text-sm">
                            <tbody>
                              {item.rows.map((row, rIdx) => (
                                <tr
                                  key={rIdx}
                                  className="border-b border-border/40 last:border-b-0 hover:bg-muted/40 transition-colors"
                                >
                                  <th className="py-2.5 px-3.5 sm:px-4 font-semibold text-foreground/80 w-[38%] align-top bg-muted/30">
                                    {row.label}
                                  </th>
                                  <td className="py-2.5 px-3.5 sm:px-4 text-foreground/90 align-top">
                                    {row.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p>
                          {item.answer}{" "}
                          {item.pricingLink && (
                            <Link
                              href={localizeHref("/pricing")}
                              className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                              {item.pricingLink}
                            </Link>
                          )}
                          {item.question.includes("iPhone") && (
                            <a
                              href="https://portal.think4ever.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary font-semibold underline underline-offset-4 hover:opacity-80 transition-opacity ml-1"
                            >
                              portal.think4ever.com
                            </a>
                          )}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
