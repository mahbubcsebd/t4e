"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, ShieldCheck, SlidersHorizontal, Terminal } from "lucide-react";

export default function ValueSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Eye className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("values.card1Tag"),
      title: t("values.card1Title"),
      desc: t("values.card1Desc"),
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#093cad]" />,
      tag: t("values.card2Tag"),
      title: t("values.card2Title"),
      desc: t("values.card2Desc"),
    },
    {
      icon: <SlidersHorizontal className="w-5 h-5 text-indigo-600" />,
      tag: t("values.card3Tag"),
      title: t("values.card3Title"),
      desc: t("values.card3Desc"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 Value Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white border border-[#c8d9ed] shadow-sm">
                  {v.icon}
                </div>
                <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider bg-[#eaf0fb] px-3 py-1 rounded-full">
                  {v.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#09090d] mb-2 leading-snug">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Compatibility Bar */}
        <div className="bg-[#f2f7ff] border border-[#c8d9ed] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-[#093cad] text-white rounded-xl shadow-md">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <strong className="text-base font-bold text-[#09090d] block">
                {t("values.compatTitle")}
              </strong>
              <p className="text-xs sm:text-sm text-[#465a75] mt-1 max-w-xl">
                {t("values.compatDesc")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Claude Code", "Codex", "Cursor", "Windsurf", "MCP Clients"].map((tool, i) => (
              <span key={i} className="bg-white border border-[#c8d9ed] text-[#093cad] text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
