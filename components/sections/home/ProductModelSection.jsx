"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu,
  Layout,
  Workflow,
  Database,
  Layers,
  RefreshCw,
} from "lucide-react";

export default function ProductModelSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 md:py-32 bg-white border-b border-zinc-200/60 overflow-hidden relative"
      id="product"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[#f8fbff]"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-14 text-center flex flex-col items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1] animate-pulse"></span>
            {t("productModel.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
            {t("productModel.title")}
          </h2>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("productModel.subtitle")}
          </p>
        </div>

        {/* The Blueprint Architecture Visual */}
        <div className="relative max-w-5xl mx-auto mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
            {/* Left Column (Perspectives 1 & 3) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-2 lg:order-1">
              {/* Perspective 1: Engineering */}
              <div className="bg-white border border-[#c8d9ed]/80 rounded-2xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                {/* Connecting Line to Center */}
                <div className="absolute -right-8 top-1/2 w-8 h-[2px] bg-gradient-to-r from-[#c8d9ed] to-slate-200 hidden lg:block group-hover:from-[#07A7E1] transition-all duration-500 origin-left"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#eef5fd] rounded-xl text-[#07A7E1] border border-[#c8d9ed]/50 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-widest block mb-1">
                      {t("productModel.persp1Tag")}
                    </span>
                    <h3 className="text-sm font-bold text-[#09090d] leading-snug">
                      {t("productModel.persp1Title")}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Perspective 3: Operations */}
              <div className="bg-white border border-[#c8d9ed]/80 rounded-2xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                {/* Connecting Line to Center */}
                <div className="absolute -right-8 top-1/2 w-8 h-[2px] bg-gradient-to-r from-[#c8d9ed] to-slate-200 hidden lg:block group-hover:from-indigo-400 transition-all duration-500 origin-left"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 border border-indigo-100/50 shrink-0">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-widest block mb-1">
                      {t("productModel.persp3Tag")}
                    </span>
                    <h3 className="text-sm font-bold text-[#09090d] leading-snug">
                      {t("productModel.persp3Title")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column (Universal Meta-Model Core) */}
            <div className="lg:col-span-4 flex justify-center relative z-20 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full max-w-sm h-full flex flex-col">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#093cad] to-[#07A7E1] blur-2xl opacity-10 rounded-[40px]"></div>

                <div className="bg-white border-[1.5px] border-[#093cad]/20 rounded-[32px] p-8 shadow-[0_20px_40px_rgb(9,60,173,0.06)] relative overflow-hidden group flex-1 flex flex-col items-center justify-center min-h-[280px]">
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-tr from-[#093cad] to-[#07A7E1] rounded-2xl flex items-center justify-center shadow-lg shadow-[#093cad]/20 mb-6 group-hover:scale-105 transition-transform duration-500">
                      <Layers className="w-10 h-10 text-white" />
                    </div>

                    <span className="inline-block px-3 py-1 bg-white text-[#093cad] border border-[#c8d9ed]/60 rounded-md text-[10px] font-extrabold uppercase tracking-widest mb-3">
                      {t("productModel.centerTag")}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#09090d] tracking-tight mb-5">
                      {t("productModel.centerTitle")}
                    </h3>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                      <RefreshCw
                        className="w-3.5 h-3.5 animate-spin-slow"
                        style={{ animationDuration: "4s" }}
                      />
                      Real-time Sync
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Perspectives 2 & 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-3">
              {/* Perspective 2: Product */}
              <div className="bg-white border border-[#c8d9ed]/80 rounded-2xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                {/* Connecting Line to Center */}
                <div className="absolute -left-8 top-1/2 w-8 h-[2px] bg-gradient-to-l from-[#c8d9ed] to-slate-200 hidden lg:block group-hover:from-[#093cad] transition-all duration-500 origin-right"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-[#093cad] border border-blue-100/50 shrink-0">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-widest block mb-1">
                      {t("productModel.persp2Tag")}
                    </span>
                    <h3 className="text-sm font-bold text-[#09090d] leading-snug">
                      {t("productModel.persp2Title")}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Perspective 4: Business */}
              <div className="bg-white border border-[#c8d9ed]/80 rounded-2xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                {/* Connecting Line to Center */}
                <div className="absolute -left-8 top-1/2 w-8 h-[2px] bg-gradient-to-l from-[#c8d9ed] to-slate-200 hidden lg:block group-hover:from-cyan-500 transition-all duration-500 origin-right"></div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-xl text-cyan-600 border border-cyan-100/50 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-widest block mb-1">
                      {t("productModel.persp4Tag")}
                    </span>
                    <h3 className="text-sm font-bold text-[#09090d] leading-snug">
                      {t("productModel.persp4Title")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
