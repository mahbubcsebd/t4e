"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Quote,
  Building2,
  Factory,
  FileText,
  Palette,
  Code2,
  ExternalLink,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function YogiFiStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"];
  const t = dict.yogifi;
  const common = dict.common;

  const localizeHref = (href) => {
    if (!href.startsWith("/")) return href;
    if (language === "en") return href;
    return `/${language}${href}`;
  };

  return (
    <div className="py-6 md:py-10 space-y-8 sm:space-y-12">
      {/* ── 1. Top Card: Masthead Hero (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="max-w-4xl">
              {/* Breadcrumb Eyebrow */}
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground">
                <a
                  href={localizeHref("/customers/")}
                  className="hover:text-primary underline underline-offset-4 flex items-center gap-1 font-bold text-primary"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {common.breadcrumbCustomers}
                </a>
                <span>/</span>
                <span className="font-semibold text-foreground/80">
                  {t.breadcrumb}
                </span>
              </div>

              {/* Logo */}
              <div className="h-10 mb-4 flex items-center">
                <div className="bg-[#0B1B3A] px-3 py-1.5 rounded-md inline-flex items-center">
                  <img
                    src="/images/customers/yogifi.png"
                    alt="YogiFi logo"
                    className="max-h-6 max-w-[110px] object-contain"
                  />
                </div>
              </div>

              {/* Title & Lede */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                {t.title}
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
                {t.lede}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/70">
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      {t.metric1Val}
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric1Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      {t.metric2Val}
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric2Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      {t.metric3Val}
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric3Label}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Main Story + Factsheet Sidebar ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Main Story Column */}
              <main className="space-y-10">
                {/* Featured Quote */}
                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold">
                      {t.author}
                    </strong>
                    {t.authorRole}
                  </figcaption>
                </div>

                {/* The Challenge */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.challengeTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.challengeP1}
                  </p>
                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-foreground/80">
                    {t.challengePoints &&
                      t.challengePoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>
                            <strong className="text-foreground font-bold">
                              {pt.b}
                            </strong>{" "}
                            {pt.text}
                          </span>
                        </li>
                      ))}
                  </ul>
                </section>

                {/* The Solution: Design First, Then Build (Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.solutionTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP1}
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">{t.tableThStep}</th>
                          <th className="py-3 px-4">{t.tableThWhat}</th>
                          <th className="py-3 px-4">{t.tableThHow}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.tableRows &&
                          t.tableRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.step}
                              </td>
                              <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                                {row.what}
                              </td>
                              <td className="py-3 px-4 leading-relaxed">
                                {row.how}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Value for Everyone on the Team (Trio) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.trioTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.trioDesc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.trio1Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.trio1Desc}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Palette className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.trio2Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.trio2Desc}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.trio3Title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.trio3Desc}
                      </p>
                    </div>
                  </div>
                </section>

                {/* Validating Impact Faster */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.validationTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.validationDesc}
                  </p>
                </section>

                {/* Results Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.resultsTitle}
                  </h2>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">{t.resultsThArea}</th>
                          <th className="py-3 px-4">{t.resultsThMeasure}</th>
                          <th className="py-3 px-4">{t.resultsThResult}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.resultsRows &&
                          t.resultsRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3 px-4 font-bold text-foreground">
                                {row.area}
                              </td>
                              <td className="py-3 px-4">{row.measure}</td>
                              <td className="py-3 px-4 font-semibold text-primary">
                                {row.tbd ? (
                                  <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                                    {row.result}
                                  </mark>
                                ) : (
                                  row.result
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why This Matters for Founders */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whyMattersTitle}
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
                    {t.whyMattersPoints &&
                      t.whyMattersPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>
                            <strong className="text-foreground font-bold">
                              {pt.b}
                            </strong>{" "}
                            {pt.text}
                          </span>
                        </li>
                      ))}
                  </ul>
                </section>

                {/* What's Next */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whatsNextDesc}
                  </p>
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {t.aboutYogiFiTitle || "About YogiFi"}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutYogiFiDesc ||
                        "YogiFi makes an AI-powered smart yoga mat. Built-in pressure sensors detect posture and sync with the YogiFi app for AI-guided sessions and real-time posture correction. Learn more at us.yogifismart.com."}
                    </p>
                  </div>
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {common.aboutThink4Ever}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {common.aboutThink4EverDesc}
                    </p>
                  </div>
                </div>
              </main>

              {/* Sticky Factsheet Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <p className="text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-4">
                    {common.atAGlance}
                  </p>
                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <dt className="text-muted-foreground font-semibold">
                        {common.customer}
                      </dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        {t.factsCustomerVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        Website
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        <a
                          href="https://us.yogifismart.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          us.yogifismart.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        Stage
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded text-xs border border-[#E6D885]">
                          {t.factsStageVal ||
                            "Early-stage startup; confirm stage and funding"}
                        </mark>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {common.industry}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsIndustryVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {common.useCases}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        {t.factsUseCasesVal}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Button asChild size="lg" className="w-full rounded-full">
                      <a href="https://portal.think4ever.com/#/register">
                        {common.startFree}
                      </a>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 3. Band Section (White Card Matching Site) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              {common.designItFirstTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-2xl mb-6">
              {common.designItFirstDesc}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="https://portal.think4ever.com/#/register">
                  {common.startFree}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={localizeHref("/contact-us/")}>{common.talkToUs}</a>
              </Button>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. Related Stories (White Card Matching Site) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-6">
              {common.moreCustomerStories}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href={localizeHref("/customers/ey/")}
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Building2 className="w-3 h-3" />
                    Consulting
                  </span>
                  <div className="h-8 mb-2 flex items-center">
                    <img
                      src="/images/customers/ey.svg"
                      alt="EY Caribbean logo"
                      className="max-h-6 max-w-[100px] object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    EY Caribbean
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    EY&rsquo;s consulting team builds internal apps and client
                    software from one governed Living Blueprint.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>

              <a
                href={localizeHref("/customers/insignian-homes/")}
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Factory className="w-3 h-3" />
                    Enterprise
                  </span>
                  <div className="h-8 mb-2 flex items-center">
                    <img
                      src="/images/customers/insignian-homes.png"
                      alt="Insignian Homes logo"
                      className="max-h-6 max-w-[100px] object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Insignian Homes
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    A global exporter replaces per-seat SaaS with applications it
                    designs and owns, starting with CRM.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>
            </div>
          </Container>
        </SectionCard>
      </section>
    </div>
  );
}
