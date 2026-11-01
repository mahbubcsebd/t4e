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
  ShieldAlert,
  ExternalLink,
  AlertTriangle,
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
              {/* Draft Review Warning Banner */}
              {t.draftWarning && (
                <div className="mb-6 p-4 rounded-xl bg-[#FFF2A8] border border-[#E6D885] text-[#3D3300] text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3 shadow-xs">
                  <AlertTriangle className="w-5 h-5 text-[#8A7100] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block mb-0.5 font-bold uppercase tracking-wide">
                      {language === "es"
                        ? "BORRADOR PARA REVISIÓN Y APROBACIÓN — NO PARA PUBLICACIÓN"
                        : "DRAFT FOR REVIEW AND APPROVAL — NOT FOR PUBLICATION"}
                    </strong>
                    <span>
                      {language === "es"
                        ? "Los elementos resaltados en amarillo son marcadores de posición para confirmar o suministrar. El fundador debe aprobar las citas, su nombre y cargo, y todos los detalles del producto antes de publicar nada."
                        : "Items highlighted in yellow are placeholders to confirm or supply. The founder must approve the quotes, their name and title, and all product details before anything is published."}
                    </span>
                  </div>
                </div>
              )}

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
                  {t.breadcrumb || "Startups"}
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
                      {t.metric1Val || "X weeks"}
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric1Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      {t.metric2Val || "6"}
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    {t.metric2Label}
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      {t.metric3Val || "X"}
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
              <main className="space-y-10 min-w-0">
                {/* 1. Featured Quote (Short) */}
                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground inline font-bold">
                      {t.author}
                    </strong>
                    {t.authorRole}
                  </figcaption>
                </div>

                {/* 2. The Challenge */}
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
                  {t.challengeCallout && (
                    <div className="pt-2">
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-2.5 py-1.5 rounded-md border border-[#E6D885] inline-block font-mono text-xs sm:text-sm">
                        [{t.challengeCallout}]
                      </mark>
                    </div>
                  )}
                </section>

                {/* 3. The Solution: Design First, Then Build (5-Step Table) */}
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

                {/* 4. One Platform Across the Whole Lifecycle */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.lifecycleTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.lifecycleDesc}
                  </p>
                </section>

                {/* 5. Value for Everyone in the Organization (Role Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.orgTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.orgDesc}
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">
                            {t.orgTableThRole || (language === "es" ? "Rol" : "Role")}
                          </th>
                          <th className="py-3 px-4">
                            {t.orgTableThWhat ||
                              (language === "es"
                                ? "Lo que obtienen de Think4Ever"
                                : "What they get from Think4Ever")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.orgTableRows &&
                          t.orgTableRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3.5 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.role}
                              </td>
                              <td className="py-3.5 px-4 leading-relaxed">
                                {row.what}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 6. Validating Impact Faster */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.validationTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.validationP1}{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono border border-[#E6D885]">
                      {t.validationTbd}
                    </mark>
                    . {t.validationP2}
                  </p>
                </section>

                {/* 7. Results Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.resultsTitle}
                  </h2>

                  {t.resultsNote && (
                    <p className="text-xs sm:text-sm">
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-2 py-1 rounded border border-[#E6D885] inline-block font-mono leading-relaxed">
                        {t.resultsNote}
                      </mark>
                    </p>
                  )}

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
                              <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.area}
                              </td>
                              <td className="py-3 px-4">{row.measure}</td>
                              <td className="py-3 px-4 font-semibold text-primary">
                                <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885] font-mono">
                                  {row.result}
                                </mark>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 8. Second Featured Quote (Long) */}
                {t.secondQuote && (
                  <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                    <Quote className="w-8 h-8 text-primary/30 mb-3" />
                    <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                      &ldquo;{t.secondQuote}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground inline font-bold">
                        {t.secondQuoteAuthor || t.author}
                      </strong>
                      {t.secondQuoteRole || t.authorRole}
                    </figcaption>
                  </div>
                )}

                {/* 9. Why This Matters for Startups */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whyMattersTitle}
                  </h2>
                  {t.whyMattersIntro && (
                    <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {t.whyMattersIntro}
                    </p>
                  )}
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

                {/* 10. What's Next */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885] font-mono">
                      {t.whatsNextTbd}
                    </mark>{" "}
                    {t.whatsNextText}
                  </p>
                </section>

                {/* 11. About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {t.aboutYogiFiTitle ||
                        (language === "es" ? "Acerca de YogiFi" : "About YogiFi")}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutYogiFiDesc ||
                        (language === "es"
                          ? "YogiFi fabrica una esterilla de yoga inteligente con IA. Los sensores de presión integrados detectan la postura y se sincronizan con la app YogiFi para sesiones guiadas y corrección postural en tiempo real. Más información en us.yogifismart.com."
                          : "YogiFi makes an AI-powered smart yoga mat. Built-in pressure sensors detect posture and sync with the YogiFi app for AI-guided sessions and real-time posture correction. Learn more at us.yogifismart.com.")}
                    </p>
                  </div>
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {t.aboutTitle || common.aboutThink4Ever}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutDesc || common.aboutThink4EverDesc}
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
                        {t.factsCompany || (language === "es" ? "Empresa" : "Company")}
                      </dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        YogiFi (Wellnesys Inc.),{" "}
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
                        {t.factsStage || (language === "es" ? "Etapa" : "Stage")}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded text-xs border border-[#E6D885] font-semibold font-mono">
                          {t.factsStageVal || "Pre-Series A"}
                        </mark>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsIndustry || common.industry}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsIndustryVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsUseCase || common.useCases}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-medium leading-relaxed">
                        {t.factsUseCaseVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsPlatform ||
                          (language === "es" ? "Plataforma" : "Platform")}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        {t.factsPlatformVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsHeadlineResults ||
                          (language === "es" ? "Resultados clave" : "Headline results")}
                      </dt>
                      <dd className="text-foreground mt-1 flex flex-wrap gap-1.5 items-center">
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded text-xs border border-[#E6D885] font-semibold font-mono">
                          {t.factsHeadlineVal1}
                        </mark>
                        <span className="text-muted-foreground">·</span>
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded text-xs border border-[#E6D885] font-semibold font-mono">
                          {t.factsHeadlineVal2}
                        </mark>
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
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Story 1: EY Caribbean */}
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

              {/* Story 2: Insignian Homes */}
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

              {/* Story 3: Jake Williams (Security) */}
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
                    <span className="text-base font-bold text-foreground">
                      Jake Williams
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Security Incident Response
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    A security analyst generates the architecture, user flows and
                    data flow diagrams of undocumented apps straight from code.
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
