"use client";

import React from "react";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import { useLanguage } from "@/context/LanguageContext";
import { customersTranslations } from "@/lib/i18n/customersTranslations";
import { ArrowLeft, Quote, AlertTriangle } from "lucide-react";

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
    <div className="py-6 md:py-10">
      <SectionCard>
        <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-14 shadow-xs max-w-4xl mx-auto space-y-10">
          {/* ── Document Top Header Bar ── */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted-foreground border-b border-border/60 pb-3">
            <div className="flex items-center gap-1.5 font-bold text-primary">
              <a
                href={localizeHref("/customers/")}
                className="hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {common.breadcrumbCustomers}
              </a>
              <span className="text-muted-foreground font-normal">/</span>
              <span className="text-foreground/80 font-semibold">
                {t.breadcrumb || "Startups"}
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
              Think4Ever · Customer Story · DRAFT
            </span>
          </div>

          {/* ── Red Draft Review Warning Box (Page 1) ── */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FEECEC] border border-[#FCA5A5] text-[#991B1B] text-xs sm:text-sm font-medium leading-relaxed flex items-start gap-3 shadow-2xs">
            <AlertTriangle className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-1 font-bold uppercase tracking-wide text-[#7F1D1D]">
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

          {/* ── Page 1: Eyebrow, Title & Lede ── */}
          <div className="space-y-4">
            <p className="text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground">
              CUSTOMER STORY · STARTUPS
            </p>

            {/* YogiFi Logo */}
            <div className="h-10 flex items-center">
              <div className="bg-[#0B1B3A] px-3.5 py-2 rounded-md inline-flex items-center">
                <img
                  src="/images/customers/yogifi.png"
                  alt="YogiFi logo"
                  className="max-h-6 max-w-[110px] object-contain"
                />
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-[1.2]">
              {t.title}
            </h1>

            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed pt-1">
              {t.lede}
            </p>
          </div>

          {/* ── Page 1: Factsheet Table ── */}
          <div className="overflow-x-auto rounded-lg border border-border shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <tbody className="divide-y divide-border text-foreground/85">
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground w-[160px] sm:w-[200px] bg-muted/40 align-top">
                    {t.factsCompany || (language === "es" ? "Empresa" : "Company")}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    YogiFi (Wellnesys Inc.),{" "}
                    <a
                      href="https://us.yogifismart.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      us.yogifismart.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground bg-muted/40 align-top">
                    {t.factsStage || (language === "es" ? "Etapa" : "Stage")}
                  </td>
                  <td className="py-3 px-4">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                      {t.factsStageVal || "Pre-Series A"}
                    </mark>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground bg-muted/40 align-top">
                    {t.factsIndustry || (language === "es" ? "Industria" : "Industry")}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    {t.factsIndustryVal}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground bg-muted/40 align-top">
                    {t.factsUseCase || (language === "es" ? "Caso de uso" : "Use case")}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    {t.factsUseCaseVal}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground bg-muted/40 align-top">
                    {t.factsPlatform || (language === "es" ? "Plataforma" : "Platform")}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    {t.factsPlatformVal}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground bg-muted/40 align-top">
                    {t.factsHeadlineResults || (language === "es" ? "Resultados clave" : "Headline results")}
                  </td>
                  <td className="py-3 px-4 leading-relaxed">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                      {t.factsHeadlineVal1}
                    </mark>
                    {" · "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                      {t.factsHeadlineVal2}
                    </mark>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Page 1: First Quote ── */}
          <div className="bg-[#F0F5FF] border border-[#D0E0FF] rounded-xl p-5 sm:p-7">
            <Quote className="w-7 h-7 text-primary/40 mb-2" />
            <blockquote className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic mb-3">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="text-xs sm:text-sm text-foreground/75">
              &mdash; <strong className="text-foreground font-bold">{t.author}</strong>
              {t.authorRole}
            </figcaption>
          </div>

          {/* ── Page 1 & 2: The Challenge ── */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.challengeTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.challengeP1}
            </p>
            <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-foreground/85">
              {t.challengePoints &&
                t.challengePoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground font-bold">{pt.b}</strong>{" "}
                      {pt.text}
                    </span>
                  </li>
                ))}
            </ul>

            {/* Page 2: Challenge Callout Highlight */}
            {t.challengeCallout && (
              <div className="pt-2">
                <div className="bg-[#FFF2A8] text-[#3D3300] border border-[#E6D885] px-3.5 py-2 rounded-md font-mono text-xs sm:text-sm font-semibold inline-block leading-relaxed">
                  [{t.challengeCallout}]
                </div>
              </div>
            )}
          </section>

          {/* ── Page 2: The solution: design first, then build ── */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.solutionTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.solutionP1}
            </p>

            {/* Page 2: 5-step SDLC Table */}
            <div className="overflow-x-auto rounded-lg border border-border shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#183B6B] text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 w-[160px] whitespace-nowrap">{t.tableThStep}</th>
                    <th className="py-3 px-4 w-[200px] whitespace-nowrap">{t.tableThWhat}</th>
                    <th className="py-3 px-4">{t.tableThHow}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground/85">
                  {t.tableRows &&
                    t.tableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold text-foreground align-top whitespace-nowrap">
                          {row.step}
                        </td>
                        <td className="py-3 px-4 font-semibold text-foreground/90 align-top">
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
          </section>

          {/* ── Page 2: One platform across the whole lifecycle ── */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.lifecycleTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.lifecycleDesc}
            </p>
          </section>

          {/* ── Page 3: Value for everyone in the organization ── */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.orgTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.orgDesc}
            </p>

            {/* Page 3: Role Table */}
            <div className="overflow-x-auto rounded-lg border border-border shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#183B6B] text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 w-[180px] sm:w-[220px] whitespace-nowrap">
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
                <tbody className="divide-y divide-border text-foreground/85">
                  {t.orgTableRows &&
                    t.orgTableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="py-3.5 px-4 font-bold text-foreground align-top whitespace-nowrap">
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
          </section>

          {/* ── Page 3: Validating impact faster ── */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.validationTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.validationP1}{" "}
              <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                {t.validationTbd}
              </mark>
              . {t.validationP2}
            </p>
          </section>

          {/* ── Page 3: Results ── */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.resultsTitle}
            </h2>

            {/* Page 3: Yellow Placeholder Note */}
            {t.resultsNote && (
              <div className="bg-[#FFF2A8] text-[#3D3300] border border-[#E6D885] px-3.5 py-2 rounded-md font-mono text-xs sm:text-sm font-medium leading-relaxed">
                {t.resultsNote}
              </div>
            )}

            {/* Page 3: Results Table */}
            <div className="overflow-x-auto rounded-lg border border-border shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#183B6B] text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 w-[160px] whitespace-nowrap">{t.resultsThArea}</th>
                    <th className="py-3 px-4 w-[240px] whitespace-nowrap">{t.resultsThMeasure}</th>
                    <th className="py-3 px-4">{t.resultsThResult}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground/85">
                  {t.resultsRows &&
                    t.resultsRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold text-foreground align-top whitespace-nowrap">
                          {row.area}
                        </td>
                        <td className="py-3 px-4 align-top leading-relaxed">
                          {row.measure}
                        </td>
                        <td className="py-3 px-4 align-top">
                          <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                            {row.result}
                          </mark>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Page 3: Second Quote (Long Quote) ── */}
          {t.secondQuote && (
            <div className="bg-[#F0F5FF] border border-[#D0E0FF] rounded-xl p-5 sm:p-7">
              <Quote className="w-7 h-7 text-primary/40 mb-2" />
              <blockquote className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic mb-3">
                &ldquo;{t.secondQuote}&rdquo;
              </blockquote>
              <figcaption className="text-xs sm:text-sm text-foreground/75">
                &mdash; <strong className="text-foreground font-bold">{t.secondQuoteAuthor || t.author}</strong>
                {t.secondQuoteRole || t.authorRole}
              </figcaption>
            </div>
          )}

          {/* ── Page 4: Why this matters for startups ── */}
          <section className="space-y-4 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.whyMattersTitle}
            </h2>
            {t.whyMattersIntro && (
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {t.whyMattersIntro}
              </p>
            )}
            <ul className="space-y-3.5 text-sm sm:text-base text-foreground/85">
              {t.whyMattersPoints &&
                t.whyMattersPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground font-bold">{pt.b}</strong>{" "}
                      {pt.text}
                    </span>
                  </li>
                ))}
            </ul>
          </section>

          {/* ── Page 4: What's next ── */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.whatsNextTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-medium border border-[#E6D885]">
                {t.whatsNextTbd}
              </mark>{" "}
              {t.whatsNextText}
            </p>
          </section>

          {/* ── Page 4: About Think4Ever ── */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.aboutTitle || "About Think4Ever"}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.aboutDesc}
            </p>
          </section>

          {/* ── Page 4 & 5: Reviewer notes (remove before publication) ── */}
          <section className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B2545] tracking-tight">
              {t.reviewerNotesTitle || "Reviewer notes (remove before publication)"}
            </h2>
            <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
              {t.reviewerNotesIntro ||
                "To finalize this story, please confirm or supply the following with Muralidhar Somisetty:"}
            </p>
            <ul className="space-y-3.5 text-sm sm:text-base text-foreground/85">
              {t.reviewerNotesItems &&
                t.reviewerNotesItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <span>
                      <strong className="text-foreground font-bold">{item.b}</strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
            </ul>

            {/* ── Page 5: Sign-off / Approval Table ── */}
            <div className="overflow-x-auto rounded-lg border border-border shadow-2xs pt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-[#183B6B] text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 w-[220px] whitespace-nowrap">
                      {t.approvalTh1 || (language === "es" ? "Aprobación" : "Approval")}
                    </th>
                    <th className="py-3 px-4 w-[260px] whitespace-nowrap">
                      {t.approvalTh2 || (language === "es" ? "Nombre / Cargo" : "Name / Title")}
                    </th>
                    <th className="py-3 px-4">
                      {t.approvalTh3 || (language === "es" ? "Fecha" : "Date")}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground/85">
                  {t.approvalRows &&
                    t.approvalRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30">
                        <td className="py-3 px-4 font-bold text-foreground align-top whitespace-nowrap">
                          {row.party}
                        </td>
                        <td className="py-3 px-4 align-top">
                          {row.signee}
                        </td>
                        <td className="py-3 px-4 align-top">
                          {row.date}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Confidential draft footer ── */}
          <div className="text-center pt-6 border-t border-border/60 text-xs text-muted-foreground font-mono">
            Confidential draft for review
          </div>
        </Container>
      </SectionCard>
    </div>
  );
}
