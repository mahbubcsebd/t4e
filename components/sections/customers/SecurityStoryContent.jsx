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
  Factory,
  Rocket,
  Quote,
  ExternalLink,
} from "lucide-react";
import { customersTranslations } from "@/lib/i18n/customersTranslations";

export default function SecurityStoryContent() {
  const { language } = useLanguage();
  const dict = customersTranslations[language === "es" ? "es" : "en"] || customersTranslations.en;
  const t = dict.security;
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

              {/* Title & Lede */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                {t.title}
              </h1>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-6">
                {t.lede}
              </p>

              {/* Source Credit Line */}
              <div className="pt-4 border-t border-border/70 text-xs sm:text-sm text-foreground/70">
                <strong className="text-foreground font-bold">{t.sourcePrefix}</strong>{" "}
                <a
                  href={t.sourceLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 font-semibold hover:opacity-85 inline-flex items-center gap-1"
                >
                  {t.sourceLinkText}
                  <ExternalLink className="w-3 h-3" />
                </a>
                {t.sourceSuffix}
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Main Story Body + Sticky Factsheet (Full Width SectionCard) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Left Column: Story Content */}
              <main className="space-y-10 text-foreground">
                {/* Jake Williams Quote 1 */}
                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
                  <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                    &ldquo;{t.quote1}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold text-sm">
                      {t.quote1Author}
                    </strong>
                    {t.quote1Role}
                    {t.quote1Disclosure && (
                      <span className="block mt-2 text-[11px] text-muted-foreground leading-normal border-t border-border/60 pt-1.5">
                        {t.quote1Disclosure}
                      </span>
                    )}
                  </figcaption>
                </div>

                {/* Section: The Challenge */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.challengeTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <strong className="text-foreground font-bold">{t.challengeP1.slice(0, t.challengeP1.indexOf('.') + 1)}</strong>
                    {t.challengeP1.slice(t.challengeP1.indexOf('.') + 1)}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.challengeP2}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <strong className="text-foreground font-bold">{t.challengeP3.slice(0, t.challengeP3.indexOf('.') + 1)}</strong>
                    {t.challengeP3.slice(t.challengeP3.indexOf('.') + 1)}
                  </p>
                </section>

                {/* Section: The Solution */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.solutionTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP1}
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.solutionP2}
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

                  {/* Screenshot 1 */}
                  <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-xs mt-6">
                    <Image
                      src="/images/customers/security-concept-view.png"
                      alt="Think4Ever Concept View"
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground leading-relaxed">
                      {t.caption1}
                    </div>
                  </div>

                  {/* Quote 2 */}
                  <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8 mt-6">
                    <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
                    <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                      &ldquo;{t.quote2}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground block font-bold text-sm">
                        {t.quote1Author}
                      </strong>
                      {t.quote1Role}
                      {t.quote1Disclosure && (
                        <span className="block mt-2 text-[11px] text-muted-foreground leading-normal border-t border-border/60 pt-1.5">
                          {t.quote1Disclosure}
                        </span>
                      )}
                    </figcaption>
                  </div>
                </section>

                {/* Section: Business Rules */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.rulesTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.rulesP1}
                  </p>

                  {/* Screenshot 2 */}
                  <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-xs mt-6">
                    <Image
                      src="/images/customers/security-business-rules.png"
                      alt="Think4Ever Business Rules"
                      width={1200}
                      height={675}
                      className="w-full h-auto object-cover"
                    />
                    <div className="p-4 bg-muted/40 border-t border-border text-xs text-muted-foreground leading-relaxed">
                      {t.caption2}
                    </div>
                  </div>
                </section>

                {/* Section: Changes that don't break what depends on them */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.depsTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.depsDesc}
                  </p>
                </section>

                {/* Section: From a plain-language idea to a working demo */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.plainIdeaTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.plainIdeaDesc}
                  </p>

                  {/* Quote 3 */}
                  <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8 mt-6">
                    <Quote className="w-8 h-8 text-[#FF7A1A] mb-3 opacity-60" />
                    <blockquote className="text-base sm:text-lg font-medium leading-relaxed italic mb-4">
                      &ldquo;{t.quote3}&rdquo;
                    </blockquote>
                    <figcaption className="text-xs sm:text-sm text-foreground/70">
                      <strong className="text-foreground block font-bold text-sm">
                        {t.quote1Author}
                      </strong>
                      {t.quote1Role}
                      {t.quote1Disclosure && (
                        <span className="block mt-2 text-[11px] text-muted-foreground leading-normal border-t border-border/60 pt-1.5">
                          {t.quote1Disclosure}
                        </span>
                      )}
                    </figcaption>
                  </div>
                </section>

                {/* Section: No lock-in */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.noLockInTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.noLockInDesc}
                  </p>
                </section>

                {/* Section: Incident Response Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.incidentTitle}
                  </h2>
                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 whitespace-nowrap">{t.tableThTask}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.tableThBefore}</th>
                          <th className="py-3 px-4 whitespace-nowrap">{t.tableThWith}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        {t.tableRows &&
                          t.tableRows.map((row, idx) => (
                            <tr key={idx}>
                              <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                                {row.task}
                              </td>
                              <td className="py-3 px-4 text-foreground/75">
                                {row.before}
                              </td>
                              <td className="py-3 px-4 text-foreground font-medium leading-relaxed">
                                {row.withT4E}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Section: Why This Matters for Security Teams */}
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

                {/* Section: What's Next & Original Post */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    {t.whatsNextTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {t.whatsNextP1}
                  </p>
                  <div className="pt-2 text-xs sm:text-sm text-foreground/80">
                    <strong className="text-foreground font-bold">{t.readOriginalLabel || "Read the original:"}</strong>{" "}
                    <a
                      href={t.sourceLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4 font-semibold hover:opacity-85 inline-flex items-center gap-1"
                    >
                      {t.readOriginalPost}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      {t.aboutJakeTitle}
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      {t.aboutJakeDesc}
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
                        {t.factsWho}
                      </dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        {t.factsWhoVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsRole}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsRoleVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsChallenge}
                      </dt>
                      <dd className="text-foreground mt-0.5">
                        {t.factsChallengeVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsKeyCaps}
                      </dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        {t.factsKeyCapsVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsDisclosure}
                      </dt>
                      <dd className="text-foreground mt-0.5 text-xs text-foreground/80 leading-relaxed">
                        {t.factsDisclosureVal}
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        {t.factsSource}
                      </dt>
                      <dd className="text-foreground mt-0.5 text-xs">
                        <a
                          href={t.sourceLinkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                        >
                          {t.factsSourceVal}
                          <ExternalLink className="w-3 h-3" />
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
                    <Image
                      src="/images/customers/insignian-homes.png"
                      alt="Insignian Homes logo"
                      width={100}
                      height={24}
                      className="max-h-6 max-w-[100px] object-contain w-auto h-auto"
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
