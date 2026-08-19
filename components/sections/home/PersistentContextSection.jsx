"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import CodingToolPills from "@/components/ui/CodingToolPills";

export default function PersistentContextSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#09090d] via-[#123b69] to-[#093cad] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#07A7E1] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
          {t("persistent.eyebrow")}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
          {t("persistent.title")}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("persistent.subtitle")}
        </p>

        {/* Partner tool badges */}
        <CodingToolPills variant="dark" />
      </div>
    </section>
  );
}
