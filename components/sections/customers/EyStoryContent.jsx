"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Quote,
  Sparkles,
  Layers,
  Sliders,
  Rocket,
  Factory,
  ShieldAlert,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function EyStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"] || customersTranslations.en;
  const t = dict.ey;
  const common = dict.common;

  const localizeHref = (href) => {
    if (!href.startsWith("/")) return href;
    if (language === "en") return href;
    return `/${language}${href}`;
  };

  return (
    <div className="py-6 md:py-10 space-y-8 sm:space-y-12">
      {/* ── 1. Top Card: Masthead Hero (Full Width SectionCard) ── */}
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
                <span className="font-semibold text-foreground/80">{t.breadcrumb}</span>
              </div>

              {/* Logo */}
              <div className="h-12 mb-4 flex items-center">
                <img
                  src="/images/customers/ey.svg"
                  alt="EY Caribbean logo"
                  className="max-h-10 max-w-[140px] object-contain"
                />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                {t.title}
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
                {t.lede}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/70">
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#FF7A1A] mb-1">
                    {t.metric1Val}
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric1Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#FF7A1A] mb-1">
                    {t.metric2Val}
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric2Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#FF7A1A] mb-1">
                    {t.metric3Val}
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric3Label}
                  </span>
                </div>
              </div>

              {t.metricsNote && (
                <p className="text-xs text-foreground/60 max-w-2xl pt-3">
                  {t.metricsNote}
                </p>
              )}
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Main Story + Factsheet Sidebar (Full Width SectionCard) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Main Story Column */}
              <main className="space-y-10">
                {/* Featured Quote */}
                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
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
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.challengeP2}
                  </p>
                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-foreground/80">
                    {t.points &&
                      t.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-2 h-2 rounded-[2px] bg-[#FF7A1A] mt-2 shrink-0" />
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

                {/* Why EYC Chose Think4Ever */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whyTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whyDesc}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.clarityTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.clarityDesc}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.coherenceTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.coherenceDesc}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        {t.controlTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        {t.controlDesc}
                      </p>
                    </div>
                  </div>
                </section>

                {/* The Approach: One Governed Loop (Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.loopTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.loopDesc}
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 whitespace-nowrap">{t.loopThStep}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.loopThStage}</th>
                          <th className="py-3 px-4">{t.loopThWhat}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.loopRows &&
                          t.loopRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.step}
                              </td>
                              <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                                {row.stage}
                              </td>
                              <td className="py-3 px-4 leading-relaxed">
                                {row.what}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {t.loopPost && (
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-1">
                      {t.loopPost}
                    </p>
                  )}
                </section>

                {/* Client Software Delivery (Timeline) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.deliveryTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.deliveryDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t-2 border-primary">
                    {t.timeline &&
                      t.timeline.map((item, idx) => (
                        <div key={idx} className="relative pt-2 space-y-1">
                          <span className="block text-xs font-mono font-bold text-primary">
                            {item.when}
                          </span>
                          <h3 className="text-base font-bold text-foreground">
                            {item.stage}
                          </h3>
                          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                  </div>

                  {t.timelinePost && (
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-2">
                      {t.timelinePost}
                    </p>
                  )}
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
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThArea}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThMeasure}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThResult}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.resultsRows &&
                          t.resultsRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.area}
                              </td>
                              <td className="py-3 px-4 text-foreground/80">
                                {row.measure}
                              </td>
                              <td className="py-3 px-4 text-foreground font-normal leading-relaxed">
                                {row.result}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why This Matters for Consulting Firms */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whyMattersTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whyMattersDesc}
                  </p>
                  <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
                    {t.whyMattersPoints &&
                      t.whyMattersPoints.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="w-2 h-2 rounded-[2px] bg-[#FF7A1A] mt-2 shrink-0" />
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
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whatsNextDesc}
                  </p>
                  {t.sunilQuote && (
                    <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8 mt-4">
                      <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
                      <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                        &ldquo;{t.sunilQuote}&rdquo;
                      </blockquote>
                      <figcaption className="text-xs sm:text-sm text-foreground/70">
                        <strong className="text-foreground block font-bold">
                          {t.sunilAuthor}
                        </strong>
                        {t.sunilRole}
                      </figcaption>
                    </div>
                  )}
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {t.aboutEyTitle}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutEyDesc}
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
                        {common.industry}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsIndustryVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {common.region}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsRegionVal}
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
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {common.think4everUsed}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsThinkVal}
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

      {/* ── 3. Bottom Card: Partner Pilot Band (Full Width SectionCard) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="max-w-2xl space-y-4 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#F4F6FA] text-foreground border border-[#DCE3EF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A1A]"></span>
                {t.ctaEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.ctaTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                {t.ctaDesc}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 justify-center sm:justify-start">
                <Button asChild size="default" className="rounded-full">
                  <a href={localizeHref("/contact-us/")}>{t.ctaBtn1}</a>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full">
                  <a href="https://portal.think4ever.com/#/register">{t.ctaBtn2}</a>
                </Button>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. Related Stories (Full Width SectionCard) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-6">
              {common.moreCustomerStories}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* YogiFi */}
              <a
                href={localizeHref("/customers/yogifi/")}
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Rocket className="w-3 h-3" />
                    Startups
                  </span>
                  <div className="h-8 mb-2 flex items-center">
                    <div className="bg-[#0B1B3A] px-2 py-1 rounded inline-flex items-center">
                      <img
                        src="/images/customers/yogifi.png"
                        alt="YogiFi logo"
                        className="max-h-5 max-w-[80px] object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    YogiFi
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    A founder with limited resources takes a new idea from
                    requirements to a deployed product.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>

              {/* Insignian Homes */}
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

              {/* Jake Williams (Security incident response) */}
              <a
                href={localizeHref("/customers/security-incident-response/")}
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <ShieldAlert className="w-3 h-3" />
                    Security
                  </span>
                  <div className="h-8 mb-2 flex items-center">
                    <span className="text-lg font-extrabold text-foreground">
                      Jake Williams
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Security Incident Response
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    A security analyst generates the architecture, user flows and data flow diagrams of undocumented apps straight from the code.
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
