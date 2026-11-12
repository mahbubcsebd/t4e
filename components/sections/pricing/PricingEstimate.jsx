"use client";

import React, { useId, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

const FREE_CREDITS = 500;
const FREE_PROJECTS = 1;
const PROJECT_FEE = 90;
const NEW_RATE = 0.05;
const BIG_RATE = 0.06;
const NEW_MAX_PROJECTS = 10;
const MAX_PROJECTS = 25;
const DEFAULT_PROJECTS = 3;
const MAX_CREDITS = 50000;
const STEP = 500;
const DEFAULT_CREDITS = 2000;
const PRESETS = [500, 2000, 8000, 16000];

export default function PricingEstimate() {
  const { t, language } = useLanguage();
  const [credits, setCredits] = useState(DEFAULT_CREDITS);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const projectsId = useId();
  const creditsId = useId();

  const locale = language === "nl" ? "nl-NL" : "en-US";
  const formatNumber = (n) => n.toLocaleString(locale);
  const formatMoney = (n) =>
    `$${n.toLocaleString(locale, {
      minimumFractionDigits: n % 1 ? 2 : 0,
      maximumFractionDigits: 2,
    })}`;
  const projectsText = (n) =>
    t(
      n === 1 ? "pricingPage.estimateProjectsOne" : "pricingPage.estimateProjectsMany",
      n === 1 ? "{n} project" : "{n} projects",
    ).replace("{n}", n);

  const perMonth = t("pricingPage.estimatePerMonth", "/month");
  const projectCredits = projects * PROJECT_FEE;
  const totalCredits = projectCredits + credits;
  const isFree = projects <= FREE_PROJECTS && credits <= FREE_CREDITS;
  const fitsNew = projects <= NEW_MAX_PROJECTS;

  const rows = [
    {
      label: t("pricingPage.estimateFree", "Think Free, 1 project and 500 credits one time"),
      value: isFree ? "$0" : t("pricingPage.estimateOverFree", "Over the free limits"),
      muted: !isFree,
    },
    {
      label: t("pricingPage.estimateNew", "Think New, 1 user, up to 10 projects"),
      value: fitsNew
        ? `${formatMoney(totalCredits * NEW_RATE)} ${perMonth}`
        : t("pricingPage.estimateNewMax", "Up to 10 projects"),
      muted: !fitsNew,
    },
    {
      label: t("pricingPage.estimateBig", "Think Big, up to 25 users and 25 projects"),
      value: `${formatMoney(totalCredits * BIG_RATE)} ${perMonth}`,
    },
  ];

  const unit = t("pricingPage.estimateUnit", "credits");
  const note = t(
    "pricingPage.estimateNote",
    "Includes {credits} credits a month for {projects} on Think New and Think Big",
  )
    .replace("{credits}", formatNumber(projectCredits))
    .replace("{projects}", projectsText(projects));

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="estimate">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.estimateEyebrow", "Estimate your cost")}
            title={t("pricingPage.estimateTitle", "See what you'd pay each month")}
            subtitle={t(
              "pricingPage.estimateSubtitle",
              "Choose how many projects you keep and how much AI work you do. Usage depends on the work performed and the models you choose.",
            )}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10 max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-card border border-border/70 rounded-2xl p-6 sm:p-8 shadow-sm">
              <label
                htmlFor={projectsId}
                className="block text-sm font-bold text-foreground mb-3"
              >
                {t("pricingPage.estimateProjectsLabel", "Projects you keep")}
              </label>
              <input
                id={projectsId}
                type="range"
                min={1}
                max={MAX_PROJECTS}
                step={1}
                value={projects}
                onChange={(e) => setProjects(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#093cad]"
              />
              <p
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
                aria-live="polite"
              >
                {projectsText(projects)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {t(
                  "pricingPage.estimateProjectsHint",
                  "Each project uses 90 credits a month. Think Free includes 1 project at no charge.",
                )}
              </p>

              <label
                htmlFor={creditsId}
                className="block text-sm font-bold text-foreground mt-7 mb-3"
              >
                {t("pricingPage.estimateLabel", "Credits of AI work each month")}
              </label>
              <input
                id={creditsId}
                type="range"
                min={0}
                max={MAX_CREDITS}
                step={STEP}
                value={credits}
                onChange={(e) => setCredits(Number(e.target.value))}
                className="w-full cursor-pointer accent-[#093cad]"
              />
              <p
                className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground"
                aria-live="polite"
              >
                {formatNumber(credits)} {unit}
              </p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {t(
                  "pricingPage.estimateHint",
                  "Estimates use the price per credit. You buy credits in packs, and what you don't use rolls over.",
                )}
              </p>

              <div
                className="mt-5 flex flex-wrap gap-2"
                role="group"
                aria-label={t("pricingPage.estimatePresets", "Example amounts")}
              >
                {PRESETS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setCredits(value)}
                    aria-pressed={credits === value}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                      credits === value
                        ? "border-[#093cad] bg-[#093cad] text-white"
                        : "border-border bg-muted/60 text-muted-foreground hover:border-[#093cad]/40 hover:text-foreground"
                    }`}
                  >
                    {formatNumber(value)}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="lg:col-span-5 bg-[#0b1b3a] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#1d3159] flex flex-col justify-center gap-4"
              aria-live="polite"
            >
              {rows.map((row, idx) => (
                <div
                  key={idx}
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
                >
                  <span className="text-sm text-slate-300 leading-snug">{row.label}</span>
                  <span
                    className={`text-right ${
                      row.muted
                        ? "text-sm font-semibold text-slate-300"
                        : "text-xl sm:text-2xl font-extrabold text-white whitespace-nowrap"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
              <p className="text-xs text-slate-400 leading-relaxed">{note}</p>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
