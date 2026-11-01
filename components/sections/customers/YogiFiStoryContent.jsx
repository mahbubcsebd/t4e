"use client";

import React from "react";
import Image from "next/image";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, Quote, ExternalLink } from "lucide-react";
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
      {/* ── Section 1: Hero & Company Factsheet ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
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
                <Image
                  src="/images/customers/yogifi.png"
                  alt="YogiFi logo"
                  width={110}
                  height={24}
                  className="max-h-6 max-w-[110px] object-contain w-auto h-auto"
                />
              </div>
            </div>

            {/* Title & Lede */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
              {t.title}
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              {t.lede}
            </p>

            {/* Factsheet Table (Page 1) */}
            <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground w-[180px] sm:w-[220px] bg-muted/40 align-top">
                      {t.factsCompany || (language === "es" ? "Empresa" : "Company")}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed align-top">
                      YogiFi (Wellnesys Inc.),{" "}
                      <a
                        href="https://us.yogifismart.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                      >
                        us.yogifismart.com
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground bg-muted/40 align-top">
                      {t.factsStage || (language === "es" ? "Etapa" : "Stage")}
                    </td>
                    <td className="py-3.5 px-4 align-top">
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-semibold border border-[#E6D885]">
                        {t.factsStageVal || "Pre-Series A"}
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground bg-muted/40 align-top">
                      {t.factsIndustry || (language === "es" ? "Industria" : "Industry")}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed align-top">
                      {t.factsIndustryVal}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground bg-muted/40 align-top">
                      {t.factsUseCase || (language === "es" ? "Caso de uso" : "Use case")}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed align-top">
                      {t.factsUseCaseVal}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground bg-muted/40 align-top">
                      {t.factsPlatform || (language === "es" ? "Plataforma" : "Platform")}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed align-top">
                      {t.factsPlatformVal}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-foreground bg-muted/40 align-top">
                      {t.factsHeadlineResults || (language === "es" ? "Resultados clave" : "Headline results")}
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed align-top">
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-semibold border border-[#E6D885]">
                        {t.factsHeadlineVal1}
                      </mark>
                      {" · "}
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-semibold border border-[#E6D885]">
                        {t.factsHeadlineVal2}
                      </mark>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── Section 2: The Challenge ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs space-y-8">
            {/* Featured Quote 1 (Short) */}
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

            {/* The Challenge Details */}
            <div className="space-y-4">
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
                  <mark className="bg-[#FFF2A8] text-[#3D3300] px-2.5 py-1.5 rounded-md border border-[#E6D885] inline-block font-mono text-xs sm:text-sm font-semibold">
                    [{t.challengeCallout}]
                  </mark>
                </div>
              )}
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── Section 3: The Solution & SDLC Lifecycle ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs space-y-10">
            {/* The Solution: Design First, Then Build */}
            <div className="space-y-4">
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
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap align-top">
                            {row.step}
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap align-top">
                            {row.what}
                          </td>
                          <td className="py-3 px-4 leading-relaxed align-top">
                            {row.how}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* One Platform Across the Whole Lifecycle */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.lifecycleTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {t.lifecycleDesc}
              </p>
            </div>

            {/* Value for Everyone in the Organization */}
            <div className="space-y-4">
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
                          <td className="py-3.5 px-4 font-bold text-foreground whitespace-nowrap align-top">
                            {row.role}
                          </td>
                          <td className="py-3.5 px-4 leading-relaxed align-top">
                            {row.what}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Validating Impact Faster */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.validationTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {t.validationP1}{" "}
                <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono border border-[#E6D885] font-semibold">
                  {t.validationTbd}
                </mark>
                . {t.validationP2}
              </p>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── Section 4: Results & Why This Matters for Startups ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs space-y-10">
            {/* Results Table */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.resultsTitle}
              </h2>

              {t.resultsNote && (
                <p className="text-xs sm:text-sm">
                  <mark className="bg-[#FFF2A8] text-[#3D3300] px-2 py-1 rounded border border-[#E6D885] inline-block font-mono leading-relaxed font-semibold">
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
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap align-top">
                            {row.area}
                          </td>
                          <td className="py-3 px-4 align-top leading-relaxed">
                            {row.measure}
                          </td>
                          <td className="py-3 px-4 align-top">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885] font-mono font-semibold">
                              {row.result}
                            </mark>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Quote (Long Quote) */}
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

            {/* Why This Matters for Startups */}
            <div className="space-y-4">
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
            </div>

            {/* What's Next */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {t.whatsNextTitle}
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885] font-mono font-semibold">
                  {t.whatsNextTbd}
                </mark>{" "}
                {t.whatsNextText}
              </p>
            </div>

            {/* About Think4Ever */}
            <div className="border-t border-border pt-8">
              <div className="bg-muted/40 border border-border rounded-xl p-5">
                <h3 className="text-sm font-bold text-foreground mb-1.5">
                  {t.aboutTitle || common.aboutThink4Ever}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {t.aboutDesc || common.aboutThink4EverDesc}
                </p>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>
    </div>
  );
}
