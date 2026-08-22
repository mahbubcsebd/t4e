"use client";

import Container from "@/components/layout/Container";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Eye,
  ShieldCheck,
  SlidersHorizontal,
  Terminal,
  Search,
  Database,
  Network,
  Layout,
  FileCode,
  FileText,
  CheckCircle2,
  ToggleRight,
} from "lucide-react";
import CodingToolPills from "@/components/ui/CodingToolPills";

export default function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16 px-5">
      <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl border border-border overflow-hidden relative max-w-[1400px] mx-auto p-4 md:p-5">
        
        <div className="bg-card rounded-xl p-6 md:p-10 w-full relative z-10 border border-border/50">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (Clarity & Compatibility) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Card 1: Clarity */}
            <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
              {/* Large Visual Canvas */}
              <div className="h-64 sm:h-80 bg-white/40 relative overflow-hidden flex flex-col items-center justify-center p-6 border-b border-white/40">
                <div className="relative w-full max-w-lg h-full flex items-center justify-center">
                  {/* Background Nodes */}
                  <div className="absolute top-[20%] left-[20%] p-3 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700 delay-100 z-10">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-[20%] left-[35%] p-3 bg-muted text-muted-foreground rounded-xl border border-border opacity-60 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700 delay-200 z-10">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div className="absolute top-[30%] right-[25%] p-3 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-60 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700 delay-300 z-10">
                    <Network className="w-6 h-6" />
                  </div>

                  {/* Center Magnifying Glass / Focus */}
                  <div className="relative z-20 w-16 h-16 sm:w-24 sm:h-24 bg-card/90 backdrop-blur-md rounded-full shadow-md shadow-primary/25 border-4 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Search className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                  </div>

                  {/* Connecting lines that fade in */}
                  <svg className="absolute inset-0 w-full h-full text-slate-300 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <line
                      x1="30%"
                      y1="30%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1="40%"
                      y1="70%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1="70%"
                      y1="40%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1 bg-transparent">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-card rounded-lg border border-border">
                    <Eye className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                    {t("values.card1Tag")}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 tracking-tight">
                  {t("values.card1Title")}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
                  {t("values.card1Desc")}
                </p>
              </div>
            </div>

            <div className="gemini-card rounded-xl p-8 flex flex-col items-center text-center justify-center gap-8 relative overflow-hidden group">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="flex flex-col items-center gap-4 relative z-10 w-full max-w-xl">
                <div className="p-4 bg-primary text-background rounded-xl shadow-xl shadow-black/10 shrink-0 group-hover:scale-110 transition-transform duration-500 mb-2">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <strong className="text-xl sm:text-2xl font-medium text-foreground block mb-2 tracking-tight">
                    {t("values.compatTitle")}
                  </strong>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("values.compatDesc")}
                  </p>
                </div>
              </div>

              <div className="relative z-10 w-full overflow-x-auto hide-scrollbar pb-2 xl:pb-0">
                <CodingToolPills variant="light" />
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: Coherence & Control (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Card 2: Coherence */}
            <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
              <div className="h-40 bg-white/40 relative overflow-hidden flex items-center justify-center p-4 border-b border-white/40">
                <div className="flex items-center gap-4 relative z-10">
                  <div className="p-3 bg-muted border border-border rounded-xl text-muted-foreground group-hover:-translate-x-2 transition-transform duration-500">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-[2px] bg-border"></div>
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-card shadow-md flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl text-primary group-hover:translate-x-2 transition-transform duration-500">
                    <FileCode className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 bg-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-card rounded-lg border border-border">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                    {t("values.card2Tag")}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-2 tracking-tight">
                  {t("values.card2Title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("values.card2Desc")}
                </p>
              </div>
            </div>

            {/* Card 3: Control */}
            <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
              <div className="h-40 bg-white/40 relative overflow-hidden flex items-center justify-center p-4 border-b border-white/40">
                <div className="flex flex-col gap-3 w-36">
                  <div className="flex items-center justify-between p-2.5 bg-muted border border-border rounded-lg group-hover:-translate-x-1 transition-transform duration-500">
                    <div className="w-16 h-2 rounded-full bg-slate-200"></div>
                    <ToggleRight className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-muted border border-border rounded-lg group-hover:translate-x-1 transition-transform duration-500 delay-75">
                    <div className="w-8 h-2 rounded-full bg-slate-200"></div>
                    <ToggleRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors delay-100" />
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex-1 bg-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-card rounded-lg border border-border">
                    <SlidersHorizontal className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">
                    {t("values.card3Tag")}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-2 tracking-tight">
                  {t("values.card3Title")}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("values.card3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
