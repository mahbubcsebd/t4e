"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import StoreButtons from "./StoreButtons";

export default function AppsCta() {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-16 lg:py-20" id="download-cta">
      <SectionCard noBackground>
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B1B3A] via-[#112752] to-[#0B1B3A] text-white p-8 sm:p-12 md:p-16 text-center border border-slate-700/60 shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[300px] h-[200px] bg-[#00d2ff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <span className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase text-[#9cc0ff] mb-4 px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
              {t("appsPage.cta.eyebrow", "Download Think4Ever")}
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight mb-5 text-white">
              {t(
                "appsPage.cta.title",
                "Understand the system. Change it with confidence."
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              {t(
                "appsPage.cta.desc",
                "Get the native app for Windows or Android and start mapping your first project today."
              )}
            </p>

            {/* Store Buttons */}
            <div className="flex justify-center w-full">
              <StoreButtons variant="light" className="justify-center max-w-[380px] sm:max-w-none" />
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
