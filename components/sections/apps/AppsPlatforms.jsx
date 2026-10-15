"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import StoreButtons, { MicrosoftStoreIcon, GooglePlayIcon } from "./StoreButtons";
import { Check } from "lucide-react";

export default function AppsPlatforms() {
  const { t } = useLanguage();

  const winFeatures = t("appsPage.platforms.windows.features") || [];
  const androidFeatures = t("appsPage.platforms.android.features") || [];

  return (
    <section className="py-8 md:py-12 lg:py-16 border-b border-border" id="download">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("appsPage.platforms.eyebrow", "Download")}
            title={t("appsPage.platforms.title", "Choose your platform")}
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Windows Card */}
            <div className="flex flex-col justify-between bg-card/80 hover:bg-card border border-border/90 hover:border-primary/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
              <div>
                {/* Header with Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-muted/80 border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <MicrosoftStoreIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      {t("appsPage.platforms.windows.title", "Think4Ever for Windows")}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 mt-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t("appsPage.platforms.windows.badge", "Microsoft Store · Free")}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {t(
                    "appsPage.platforms.windows.desc",
                    "The full Think4Ever multi-agent development platform on your Windows PC. Turn ideas and existing code into production-ready systems in one visual workspace, with no switching between tools."
                  )}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {Array.isArray(winFeatures) &&
                    winFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border/60">
                <StoreButtons variant="dark" showOnly="windows" />
              </div>
            </div>

            {/* Android Card */}
            <div className="flex flex-col justify-between bg-card/80 hover:bg-card border border-border/90 hover:border-primary/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
              <div>
                {/* Header with Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-muted/80 border border-border flex items-center justify-center shrink-0 shadow-sm">
                    <GooglePlayIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
                      {t("appsPage.platforms.android.title", "Think4Ever for Android")}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 mt-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {t("appsPage.platforms.android.badge", "Google Play · Free")}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                  {t(
                    "appsPage.platforms.android.desc",
                    "Think4Ever on your Android phone or tablet, so you can review blueprints, follow builds and approve changes away from your desk."
                  )}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {Array.isArray(androidFeatures) &&
                    androidFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border/60">
                <StoreButtons variant="dark" showOnly="android" />
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
