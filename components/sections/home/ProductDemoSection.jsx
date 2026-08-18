"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";

export default function ProductDemoSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#09090d] via-[#123b69] to-[#093cad] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#07A7E1] text-xs font-bold uppercase tracking-wider mb-3">
              {t("demo.eyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {t("demo.title")}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t("demo.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://www.youtube.com/watch?v=FY68DuwOf4Q"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto justify-center text-sm py-3 px-6"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnCodeToDesign")}</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Lq-vza9_CzI"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#093cad] hover:bg-slate-100 font-semibold rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2 transition-all shadow-md w-full sm:w-auto"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnDesignToCode")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
