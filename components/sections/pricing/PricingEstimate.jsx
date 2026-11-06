"use client";

import React, { useId, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

const FREE_CREDITS = 500;
const NEW_RATE = 0.05;
const BIG_RATE = 0.06;
const MAX_CREDITS = 50000;
const STEP = 500;
const DEFAULT_CREDITS = 2000;
const PRESETS = [500, 2000, 8000, 16000];

export default function PricingEstimate() {
  const { t, language } = useLanguage();
  const [credits, setCredits] = useState(DEFAULT_CREDITS);
  const sliderId = useId();

  const locale = language === "nl" ? "nl-NL" : "en-US";
  const formatNumber = (n) => n.toLocaleString(locale);
  const formatMoney = (n) =>
    `$${n.toLocaleString(locale, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

  const perMonth = t("pricingPage.estimatePerMonth", "/month");
  const isFree = credits <= FREE_CREDITS;

  const rows = [
    {
      label: t("pricingPage.estimateFree", "Think Free, 500 credits one time"),
      value: isFree ? "$0" : t("pricingPage.estimateLimited", "Limited to 500 credits"),
      muted: !isFree,
    },
    {
      label: t("pricingPage.estimateNew", "Think New, 1 user, $0.05 a credit"),
      value: `${formatMoney(credits * NEW_RATE)} ${perMonth}`,
    },
    {
      label: t("pricingPage.estimateBig", "Think Big, up to 25 users, $0.06 a credit"),
      value: `${formatMoney(credits * BIG_RATE)} ${perMonth}`,
    },
  ];

  const unit = t("pricingPage.estimateUnit", "credits");

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="estimate">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.estimateEyebrow", "Estimate your cost")}
            title={t("pricingPage.estimateTitle", "See what your credits would cost")}
            subtitle={t(
              "pricingPage.estimateSubtitle",
              "Move the slider, or pick an amount. Usage depends on the work performed and the models you choose.",
            )}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10 max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-card border border-border/70 rounded-2xl p-6 sm:p-8 shadow-sm">
              <label
                htmlFor={sliderId}
                className="block text-sm font-bold text-foreground mb-3"
              >
                {t("pricingPage.estimateLabel", "Credits you use each month")}
              </label>
              <input
                id={sliderId}
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
                  className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-sm text-slate-300 leading-snug">{row.label}</span>
                  <span
                    className={`text-right whitespace-nowrap ${
                      row.muted
                        ? "text-sm font-semibold text-slate-300"
                        : "text-xl sm:text-2xl font-extrabold text-white"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
