"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Quote,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function InsignianStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"];
  const t = dict.insignian;
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

              {/* Logo */}
              <div className="h-12 mb-4 flex items-center">
                <img
                  src="/images/customers/insignian-homes.png"
                  alt="Insignian Homes logo"
                  className="max-h-11 max-w-[150px] object-contain"
                />
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
                {/* Poddar Quote 1 */}
                <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 sm:p-8 relative">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold text-sm">
                      {t.author}
                    </strong>
                    {t.authorRole}
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
                  <ul className="space-y-3 pt-2">
                    {t.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="w-2 h-2 rounded-xs bg-[#FF7A1A] mt-2 shrink-0"></span>
                        <span>
                          <strong className="font-bold text-foreground">{pt.b}</strong>{pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: The Solution */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.solutionTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP1}
                  </p>
                  <div className="overflow-x-auto border border-[#DCE3EF] rounded-xl">
                    <table className="w-full text-left text-sm border-collapse min-w-[560px]">
                      <thead>
                        <tr className="border-b border-[#DCE3EF] bg-[#F8FAFD]">
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThStep}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThArtifact}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.tableThHow}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DCE3EF]">
                        {t.tableRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="py-3.5 px-4 font-bold text-foreground whitespace-nowrap">{row.step}</td>
                            <td className="py-3.5 px-4 text-foreground/75">{row.artifact}</td>
                            <td className="py-3.5 px-4 text-foreground/85">{row.how}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section: Off-the-shelf capability, built to fit */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.fitTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.fitDesc}
                  </p>
                </div>

                {/* Section: Value for Everyone Trio */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.trioTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.trioDesc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-xl p-5">
                      <h3 className="text-base font-bold text-foreground mb-2">{t.trio1Title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        {t.trio1Desc}
                      </p>
                    </div>
                    <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-xl p-5">
                      <h3 className="text-base font-bold text-foreground mb-2">{t.trio2Title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        {t.trio2Desc}
                      </p>
                    </div>
                    <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-xl p-5">
                      <h3 className="text-base font-bold text-foreground mb-2">{t.trio3Title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                        {t.trio3Desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section: A repeatable path to reduce SaaS sprawl */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.proactiveTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.proactiveDesc}
                  </p>
                </div>

                {/* Section: Results */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.resultsTitle}
                  </h2>
                  <div className="overflow-x-auto border border-[#DCE3EF] rounded-xl">
                    <table className="w-full text-left text-sm border-collapse min-w-[560px]">
                      <thead>
                        <tr className="border-b border-[#DCE3EF] bg-[#F8FAFD]">
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.resultsThArea}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.resultsThMeasure}</th>
                          <th className="py-3 px-4 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{t.resultsThExpected}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DCE3EF]">
                        {t.resultsRows.map((row, idx) => (
                          <tr key={idx}>
                            <td className="py-3.5 px-4 font-bold text-foreground whitespace-nowrap">{row.area}</td>
                            <td className="py-3.5 px-4 text-foreground/75">{row.measure}</td>
                            <td className="py-3.5 px-4 text-foreground font-medium">{row.expected}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section: Why This Matters for Enterprises */}
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

                {/* Section: What's Next */}
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whatsNextDesc}
                  </p>
                  <div className="bg-[#F8FAFD] border border-[#DCE3EF] rounded-2xl p-6 sm:p-8 relative">
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                      &ldquo;{t.secondQuote}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground block font-bold text-sm">
                        {t.author}
                      </strong>
                      {t.authorRole}
                    </figcaption>
                  </div>
                </div>

                {/* Section: About Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#DCE3EF]">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-foreground">
                      {t.aboutTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {t.aboutDesc}
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

              {/* Card 3: Security */}
              <a
                href={localizeHref("/customers/security-incident-response/")}
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                      {dict.index.cards[3].tag}
                    </span>
                  </div>
                  <div className="h-10 mb-3 flex items-center">
                    <span className="text-base font-bold text-foreground">Jake Williams</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    {dict.index.cards[3].desc}
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
