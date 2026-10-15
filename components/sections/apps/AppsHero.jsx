"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Eyebrow from "@/components/ui/Eyebrow";
import StoreButtons from "./StoreButtons";

export default function AppsHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-background via-background/80 to-muted/30 border-b border-border">
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-[#1D63E0]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left">
            <Eyebrow className="mb-4">
              {t("appsPage.hero.eyebrow", "Think4Ever apps")}
            </Eyebrow>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-foreground tracking-tight leading-[1.12] mb-5">
              {t("appsPage.hero.titlePrefix", "Think4Ever, ")}
              <span className="text-primary">
                {t("appsPage.hero.titleHighlight", "installed on your device")}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
              {t(
                "appsPage.hero.lead",
                "Native apps for Windows and Android bring the full Think4Ever platform to your own device. Run Think4Ever locally, with the same capabilities as the web platform."
              )}{" "}
              <strong className="font-bold text-foreground">
                {t("appsPage.hero.iosBold", "iOS coming soon")}
              </strong>
            </p>

            {/* Store Download Buttons */}
            <div className="flex justify-center lg:justify-start mb-4 w-full">
              <StoreButtons variant="dark" className="max-w-[380px] sm:max-w-none" />
            </div>

            {/* Microcopy note */}
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              {t(
                "appsPage.hero.note",
                "Free to download. Sign in to get started. iOS app coming soon."
              )}
            </p>
          </div>

          {/* Right Column: Realistic Multi-Device Showcase (Laptop + Phone) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[580px] sm:max-w-[620px] lg:max-w-none">
              {/* Laptop Shell */}
              <div className="relative mx-auto w-[90%] sm:w-[86%] rounded-t-2xl bg-[#0B1B3A] p-2.5 sm:p-3 pb-0 shadow-[0_25px_60px_rgba(11,27,58,0.20)] border border-slate-700/50">
                {/* Camera dot */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-600/80" />

                {/* Laptop Screen */}
                <div className="relative overflow-hidden rounded-t-lg bg-black aspect-[16/10] border border-slate-800">
                  <Image
                    src="/images/apps/win-2.png"
                    alt="Think4Ever for Windows concept map"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                    className="object-cover object-top"
                  />
                  {/* Subtle glare overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>

                {/* Laptop Base */}
                <div className="relative -mx-4 sm:-mx-6 h-3.5 sm:h-4 bg-gradient-to-b from-[#d5dbe5] to-[#b3bdcf] rounded-b-xl shadow-md flex items-center justify-center">
                  {/* Laptop thumb notch */}
                  <div className="w-16 sm:w-20 h-1 bg-[#8f9bb0] rounded-b-md" />
                </div>
              </div>

              {/* Overlapping Android Phone Mockup */}
              <div className="absolute -right-2 sm:-right-4 -bottom-4 sm:-bottom-6 w-[120px] sm:w-[150px] md:w-[175px] bg-[#0B1B3A] p-1.5 sm:p-2 rounded-[26px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(11,27,58,0.35)] border-2 border-slate-700/60 z-20">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 bg-slate-600 rounded-full z-30" />

                {/* Phone Screen */}
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] aspect-[9/19] bg-black border border-slate-900">
                  <Image
                    src="/images/apps/android-phone-1.png"
                    alt="Think4Ever for Android business flows"
                    fill
                    sizes="180px"
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
