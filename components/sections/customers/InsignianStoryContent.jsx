"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Building2,
  Rocket,
  ShieldAlert,
  Quote,
  Briefcase,
  Layers,
  LineChart,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function InsignianStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"] || customersTranslations.en;
  const t = dict.insignian;
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
                <span className="font-semibold text-foreground/80">
                  {t.breadcrumb}
                </span>
              </div>

              {/* Logo */}
              <div className="h-12 mb-4 flex items-center">
                <Image
                  src="/images/customers/insignian-homes.png"
                  alt="Insignian Homes logo"
                  width={150}
                  height={40}
                  className="max-h-10 max-w-[150px] object-contain w-auto h-auto"
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
                {/* Featured Quote 1 */}
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

                {/* The Solution: Design First, Then Build */}
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
                          <th className="py-3 px-4 whitespace-nowrap">{t.tableThStep}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.tableThArtifact}</th>
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
                                {row.artifact}
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

                {/* Off-the-shelf Capability, Built to Fit */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.capabilityTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.capabilityP1}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.capabilityP2}
                  </p>
                </section>

                {/* Value for Everyone in the Organization */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.valueTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.valueDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {t.valueCards &&
                      t.valueCards.map((card, idx) => {
                        const icons = [
                          <Briefcase key="0" className="w-4 h-4" />,
                          <Layers key="1" className="w-4 h-4" />,
                          <LineChart key="2" className="w-4 h-4" />,
                        ];
                        return (
                          <div
                            key={idx}
                            className="bg-card border border-border rounded-2xl p-5 shadow-xs"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                              {icons[idx % icons.length]}
                            </div>
                            <h3 className="text-base font-bold text-foreground mb-1">
                              {card.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                              {card.desc}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </section>

                {/* A Repeatable Path to Reduce SaaS Sprawl */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.sprawlTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.sprawlDesc}
                  </p>
                </section>

                {/* Results Section */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.resultsTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.resultsDesc}
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThArea}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThMeasure}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.resultsThExpected}</th>
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

                  {/* Long Quote (Mahendra Poddar) */}
                  {t.resultsQuote && (
                    <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8 mt-6">
                      <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
                      <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                        &ldquo;{t.resultsQuote}&rdquo;
                      </blockquote>
                      <figcaption className="text-xs sm:text-sm text-foreground/70">
                        <strong className="text-foreground block font-bold">
                          {t.resultsQuoteAuthor}
                        </strong>
                        {t.resultsQuoteRole}
                      </figcaption>
                    </div>
                  )}
                </section>

                {/* Why This Matters for Enterprises */}
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
                      {t.aboutInsignianTitle}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutInsignianDesc}
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
                        {t.factsCompany}
                      </dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        {t.factsCompanyVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsIndustry}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsIndustryVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsScale}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsScaleVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsClients}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsClientsVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsUseCase}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        {t.factsUseCaseVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsWebsite}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-mono text-xs">
                        <a
                          href={`https://${t.factsWebsiteVal}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {t.factsWebsiteVal}
                        </a>
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

      {/* ── 3. Band: Call to Action (Full Width SectionCard) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              {t.bandTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-2xl mb-6">
              {t.bandDesc}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="https://portal.think4ever.com/#/register">
                  {t.bandBtn1}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={localizeHref("/contact-us/")}>{t.bandBtn2}</a>
              </Button>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. Related Stories (Full Width SectionCard with 3 Cards) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-6">
              {common.moreCustomerStories}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* EY Caribbean */}
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
                    <Image
                      src="/images/customers/ey.svg"
                      alt="EY Caribbean logo"
                      width={100}
                      height={24}
                      className="max-h-6 max-w-[100px] object-contain w-auto h-auto"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    EY Caribbean
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    EY Caribbean delivers client software from one governed Living Blueprint, targeting a 50–60% shorter delivery cycle.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {common.readStory}
                </span>
              </a>

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
                      <Image
                        src="/images/customers/yogifi.png"
                        alt="YogiFi logo"
                        width={80}
                        height={20}
                        className="max-h-5 max-w-[80px] object-contain w-auto h-auto"
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
