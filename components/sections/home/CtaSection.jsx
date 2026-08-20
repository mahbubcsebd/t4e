"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-[#f2f7ff] border-b border-zinc-200/60 relative overflow-hidden" id="register">
      {/* Decorative glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#07A7E1]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#093cad]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle watermark */}
      <div className="absolute inset-0 flex items-center justify-center text-[#093cad]/[0.025] text-[220px] font-black leading-none select-none pointer-events-none overflow-hidden">
        T4E
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#093cad] text-xs font-bold uppercase tracking-wider mb-6 border border-[#c8d9ed] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1] animate-pulse"></span>
          {t("nav.startFree")}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight mb-5 leading-[1.1]">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-[#465a75] mb-10 max-w-xl mx-auto leading-relaxed">
          {t("cta.subtitle")}
        </p>

        {/* CTA Button */}
        <Link
          href="https://portal.think4ever.com/#/register"
          className="inline-flex items-center justify-center gap-2 text-base font-bold text-white rounded-full px-10 py-4 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #07A7E1 0%, #093cad 100%)" }}
        >
          <span>{t("cta.btn")}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Trust micro-copy */}
        <p className="text-xs text-[#8a9ab5] mt-4 font-medium">
          No credit card required · Free to start
        </p>
      </div>
    </section>
  );
}
