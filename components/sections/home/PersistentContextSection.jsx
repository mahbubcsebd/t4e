"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PersistentContextSection() {
  const { t } = useLanguage();

  const tools = ["Claude Code", "Codex", "Cursor", "Windsurf", "MCP Clients"];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#09090d] via-[#123b69] to-[#093cad] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#07A7E1] text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
          {t("persistent.eyebrow")}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          {t("persistent.title")}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("persistent.subtitle")}
        </p>

        {/* Partner tool badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="bg-white/10 border border-white/20 hover:border-[#07A7E1] text-white text-sm font-semibold px-5 py-2.5 rounded-full backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
