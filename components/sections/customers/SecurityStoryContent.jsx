"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Quote,
  ExternalLink,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function SecurityStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"];
  const t = dict.security;
  const common = dict.common;

  const localizeHref = (href) => {
    if (!href.startsWith("/")) return href;
    if (language === "en") return href;
    return `/${language}${href}`;
  };

  return (
    <div className="min-h-screen bg-[#F4F6FA] py-10 sm:py-16">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-12">
      {/* ── 1. Masthead Hero ── */}
      <section>
        
          <div className="bg-white border border-[#DCE3EF] rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="max-w-4xl">
              {/* Breadcrumb Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <a
                  href={localizeHref("/customers/")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {common.breadcrumbCustomers}
                </a>
                <span className="text-xs text-muted-foreground">/</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F4F6FA] text-foreground border border-[#DCE3EF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                  {t.breadcrumb}
                </span>
              </div>

              {/* Title & Lede */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                {t.title}
              </h1>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl mb-8">
                {t.lede}
              </p>

              {/* Metric Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#DCE3EF]">
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#FF7A1A] tracking-tight">
                    {t.metric1Val}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground/70 mt-1 block">
                    {t.metric1Label}
                  </span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#FF7A1A] tracking-tight">
                    {t.metric2Val}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground/70 mt-1 block">
                    {t.metric2Label}
                  </span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-[#FF7A1A] tracking-tight">
                    {t.metric3Val}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground/70 mt-1 block">
                    {t.metric3Label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                {t.metricsNote}
              </p>
            </div>
          </div>
        
      </section>

      {/* ── 2. Main Story Body + Sticky Factsheet ── */}
      <section>
        
          <div className="bg-white border border-[#DCE3EF] rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
              {/* Left Column: Story Content */}
              <div className="space-y-10 text-foreground">
                {/* Jake Williams Quote 1 */}
                <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 sm:p-8 relative">
                  <p className="text-xs text-muted-foreground italic mb-3">
                    {t.linkedinNote}
                  </p>
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                    &ldquo;{t.quote1}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold text-sm">
                      {t.quote1Author}
                    </strong>
                    {t.quote1Role}
                    <span className="block mt-2 text-[11px] text-muted-foreground leading-normal border-t border-border/60 pt-1.5">
                      {t.quote1Disclosure}
                    </span>
                  </figcaption>
                </div>

                {/* Section: The Challenge */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.challengeTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.challengeP1}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.challengeP2}
                  </p>
                </div>

                {/* Section: The Solution */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.solutionTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP1}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP2}
                  </p>
                  <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-5 sm:p-6 my-4">
                    <blockquote className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic mb-3">
                      &ldquo;{t.quote2}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground font-bold">{t.quote1Author}</strong>, {t.quote1Role}
                      <span className="block mt-1.5 text-[11px] text-muted-foreground">
                        {t.quote1Disclosure}
                      </span>
                    </figcaption>
                  </div>
                </div>

                {/* Screenshot 1: Concept View */}
                <div className="space-y-2">
                  <div className="border border-[#DCE3EF] rounded-xl overflow-hidden bg-slate-900/5">
                    <img
                      src="/images/customers/security-concept-view.png"
                      alt="Think4Ever Concept View diagram"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {t.caption1}
                  </p>
                </div>

                {/* Section: Business rules that keep agents on track */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.rulesTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.rulesP1}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.rulesP2}
                  </p>
                  <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-5 sm:p-6 my-4">
                    <blockquote className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic mb-3">
                      &ldquo;{t.quote3}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground font-bold">{t.quote1Author}</strong>, {t.quote1Role}
                      <span className="block mt-1.5 text-[11px] text-muted-foreground">
                        {t.quote1Disclosure}
                      </span>
                    </figcaption>
                  </div>
                </div>

                {/* Screenshot 2: Business Rules */}
                <div className="space-y-2">
                  <div className="border border-[#DCE3EF] rounded-xl overflow-hidden bg-slate-900/5">
                    <img
                      src="/images/customers/security-business-rules.png"
                      alt="Think4Ever Business Rules screen"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {t.caption2}
                  </p>
                </div>

                {/* Section: Changes that don't break what depends on them */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.depsTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.depsDesc}
                  </p>
                </div>

                {/* Section: From a plain-language idea to a working demo */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.plainIdeaTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.plainIdeaDesc}
                  </p>
                </div>

                {/* Section: No lock-in */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.noLockInTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.noLockInDesc}
                  </p>
                </div>

                {/* Section: How it changes incident response */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.incidentTitle}
                  </h2>
                  <div className="overflow-x-auto border border-[#DCE3EF] rounded-xl">
                    <table className="w-full text-left text-sm border-collapse min-w-[560px]">
                      <thead>
                        <tr className="border-b border-[#DCE3EF] bg-[#F8FAFD]">
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThTask}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThBefore}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThWith}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DCE3EF]">
                        {t.tableRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="py-3.5 px-4 font-bold text-foreground whitespace-nowrap">{row.task}</td>
                            <td className="py-3.5 px-4 text-foreground/75">{row.before}</td>
                            <td className="py-3.5 px-4 text-foreground font-medium">{row.with}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section: Why this matters for security teams */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whyMattersTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whyMattersDesc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {t.whyMattersPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="w-2 h-2 rounded-xs bg-[#FF7A1A] mt-2 shrink-0"></span>
                        <span>
                          <strong className="font-bold text-foreground">{pt.b}</strong>{pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: What's next */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whatsNextP1}
                  </p>
                  <p className="text-sm pt-2">
                    <a
                      href="https://www.linkedin.com/pulse/think4ever-review-jacob-williams-ntm8e/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
                    >
                      {t.readOriginalPost}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </p>
                </div>

                {/* Section: About Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DCE3EF]">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-foreground">
                      {t.aboutJakeTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {t.aboutJakeDesc}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-foreground">
                      {common.aboutThink4Ever}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {common.aboutThink4EverDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Sticky Factsheet */}
              <aside className="sticky top-24 bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 space-y-6 shadow-xs">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-4">
                    {common.atAGlance}
                  </span>
                  <dl className="space-y-4 text-xs sm:text-sm">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {common.customer}
                      </dt>
                      <dd className="font-semibold text-foreground mt-0.5">
                        {t.factsCustomerVal}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {common.industry}
                      </dt>
                      <dd className="font-semibold text-foreground mt-0.5">
                        {t.factsIndustryVal}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {common.region}
                      </dt>
                      <dd className="font-semibold text-foreground mt-0.5">
                        {t.factsRegionVal}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {common.useCases}
                      </dt>
                      <dd className="font-semibold text-foreground mt-0.5">
                        {t.factsUseCasesVal}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                        {common.think4everUsed}
                      </dt>
                      <dd className="font-semibold text-foreground mt-0.5">
                        {t.factsThinkVal}
                      </dd>
                    </div>
                  </dl>
                </div>
                <Button asChild size="default" className="w-full rounded-full">
                  <a href="https://portal.think4ever.com/#/register">
                    {common.startFree}
                  </a>
                </Button>
              </aside>
            </div>
          </div>
        
      </section>

      {/* ── 3. Band: Call to Action (Clean Card Matching Site) ── */}
      <section>
        
          <div className="bg-white border border-[#DCE3EF] rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl space-y-3 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {common.designItFirstTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                {common.designItFirstDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 justify-center sm:justify-start">
                <Button asChild size="default" className="rounded-full">
                  <a href="https://portal.think4ever.com/#/register">{common.startFree}</a>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full">
                  <a href={localizeHref("/contact-us/")}>{common.talkToUs}</a>
                </Button>
              </div>
            </div>
          </div>
        
      </section>

      {/* ── 4. More Customer Stories (3 Cards) ── */}
      <section>
        
          <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3A] tracking-tight">
            {common.moreCustomerStories}
          </h2>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: EY */}
              <a
                href={localizeHref("/customers/ey/")}
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                      {dict.index.cards[0].tag}
                    </span>
                  </div>
                  <div className="h-10 mb-3 flex items-center">
                    <img
                      src="/images/customers/ey.svg"
                      alt="EY Caribbean logo"
                      className="max-h-8 max-w-[120px] object-contain"
                    />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {dict.index.cards[0].desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>

              {/* Card 2: YogiFi */}
              <a
                href={localizeHref("/customers/yogifi/")}
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                      {dict.index.cards[1].tag}
                    </span>
                  </div>
                  <div className="h-10 mb-3 flex items-center">
                    <div className="bg-[#0B1B3A] px-2.5 py-1.5 rounded-md flex items-center">
                      <img
                        src="/images/customers/yogifi.png"
                        alt="YogiFi logo"
                        className="max-h-5 max-w-[90px] object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {dict.index.cards[1].desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>

              {/* Card 3: Insignian Homes */}
              <a
                href={localizeHref("/customers/insignian-homes/")}
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                      {dict.index.cards[2].tag}
                    </span>
                  </div>
                  <div className="h-12 mb-3 flex items-center">
                    <img
                      src="/images/customers/insignian-homes.png"
                      alt="Insignian Homes logo"
                      className="max-h-11 max-w-[140px] object-contain"
                    />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {dict.index.cards[2].desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>
            </div>
      </section>
      </div>
    </div>
  );
}
