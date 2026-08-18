"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Layout, Workflow, Database, Layers } from "lucide-react";

export default function ProductModelSection() {
  const { t } = useLanguage();

  const perspectives = [
    {
      icon: <Cpu className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("productModel.persp1Tag"),
      title: t("productModel.persp1Title"),
    },
    {
      icon: <Layout className="w-5 h-5 text-[#093cad]" />,
      tag: t("productModel.persp2Tag"),
      title: t("productModel.persp2Title"),
    },
    {
      icon: <Workflow className="w-5 h-5 text-indigo-600" />,
      tag: t("productModel.persp3Tag"),
      title: t("productModel.persp3Title"),
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-600" />,
      tag: t("productModel.persp4Tag"),
      title: t("productModel.persp4Title"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("productModel.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
            {t("productModel.title")}
          </h2>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("productModel.subtitle")}
          </p>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Perspectives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perspectives.map((p, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#c8d9ed] rounded-xl p-5 hover:border-[#093cad] hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-[#f2f7ff] border border-[#c8d9ed]/50">
                  {p.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-[#093cad] uppercase block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-sm font-bold text-[#09090d]">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Central Connecting Blueprint Bar */}
          <div className="bg-gradient-to-r from-[#093cad] to-[#07A7E1] p-6 rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-white/80 uppercase tracking-widest block">
                  {t("productModel.centerTag")}
                </span>
                <strong className="text-base sm:text-lg font-bold block">
                  {t("productModel.centerTitle")}
                </strong>
              </div>
            </div>

            <span className="bg-white text-[#093cad] text-xs font-bold px-4 py-2 rounded-full shadow-sm">
              Real-time Sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
