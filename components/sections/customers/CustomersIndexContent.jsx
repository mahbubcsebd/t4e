"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRight,
  Quote,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function CustomersIndexContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"];
  const t = dict.index;
  const common = dict.common;

  const localizeHref = (href) => {
    if (!href.startsWith("/")) return href;
    if (language === "en") return href;
    return `/${language}${href}`;
  };

  return (
    <div className="py-6 md:py-10 space-y-8 sm:space-y-12">
      {/* ── 1. Masthead Hero ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F4F6FA] text-foreground border border-[#DCE3EF] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                {t.eyebrow}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                {t.titlePre}
                <span className="text-primary italic">{t.titleHighlight}</span>
                {t.titlePost}
              </h1>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
                {t.lede}
              </p>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Featured Story (EY Caribbean) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              {/* Left Column: Lead */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                  {t.featuredTag}
                </span>
                <div className="h-12 mb-3 flex items-center">
                  <img
                    src="/images/customers/ey.svg"
                    alt="EY Caribbean logo"
                    className="max-h-10 max-w-[140px] object-contain"
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug mb-4">
                  {t.featuredTitle}
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
                  {t.featuredDesc}
                </p>
                <Button asChild size="lg" className="rounded-full">
                  <a href={localizeHref("/customers/ey/")}>
                    {t.featuredBtn}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>

              {/* Right Column: Featured Quote */}
              <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 sm:p-8 relative">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                  &ldquo;{t.featuredQuote}&rdquo;
                </blockquote>
                <figcaption className="text-xs sm:text-sm text-foreground/70">
                  <strong className="text-foreground block font-bold text-sm">
                    {t.featuredAuthor}
                  </strong>
                  {t.featuredRole}
                </figcaption>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 3. Find a story like yours (Grid: 4 Cards) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.fitTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.cards.map((card, idx) => (
                <a
                  key={idx}
                  href={localizeHref(card.href)}
                  className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                        {card.tag}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      {card.situation}
                    </p>
                    <div className="h-10 mb-3 flex items-center">
                      {card.logo ? (
                        card.who === "YogiFi" ? (
                          <div className="bg-[#0B1B3A] px-2.5 py-1.5 rounded-md flex items-center">
                            <img
                              src={card.logo}
                              alt={`${card.who} logo`}
                              className="max-h-5 max-w-[90px] object-contain"
                            />
                          </div>
                        ) : (
                          <img
                            src={card.logo}
                            alt={`${card.who} logo`}
                            className="max-h-8 max-w-[120px] object-contain"
                          />
                        )
                      ) : (
                        <span className="text-base font-bold text-foreground">
                          {card.who}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {common.readStory}
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. Quotes (Grid: 4 Quotes) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="mb-8 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F4F6FA] text-foreground border border-[#DCE3EF] mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                {t.quotesEyebrow}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.quotes.map((q, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 flex flex-col justify-between"
                >
                  <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed italic mb-4">
                    &ldquo;{q.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs text-foreground/70 border-t border-border pt-3">
                    <strong className="text-foreground block font-bold text-sm">
                      {q.author}
                    </strong>
                    {q.role}
                    {q.disclosure && (
                      <span className="block mt-2 text-[11px] text-muted-foreground leading-normal border-t border-border/60 pt-1.5">
                        {q.disclosure}
                      </span>
                    )}
                  </figcaption>
                </div>
              ))}
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 5. Partner Pilot Band (Clean Card Matching Site) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F4F6FA] text-foreground border border-[#DCE3EF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                {t.blueBandEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.blueBandTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                {t.blueBandDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="lg" className="rounded-full">
                  <a href={localizeHref("/contact-us/")}>{t.blueBandBtn1}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <a href={localizeHref("/customers/ey/")}>{t.blueBandBtn2}</a>
                </Button>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 6. Write the next story with us (Clean White Card) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl space-y-3 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                {t.nextStoryTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                {t.nextStoryDesc}
              </p>
              <div className="flex flex-wrap gap-3 pt-2 justify-center sm:justify-start">
                <Button asChild size="default" className="rounded-full">
                  <a href="https://portal.think4ever.com/#/register">
                    {t.nextStoryBtn1}
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full">
                  <a href={localizeHref("/contact-us/")}>{t.nextStoryBtn2}</a>
                </Button>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>
    </div>
  );
}
