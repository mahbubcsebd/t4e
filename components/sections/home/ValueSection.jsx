"use client";

import CodingToolPills from "@/components/ui/CodingToolPills";
import SectionCard from "@/components/layout/SectionCard";
import { useLanguage } from "@/context/LanguageContext";
import {
  CheckCircle2,
  Database,
  Eye,
  FileCode,
  FileText,
  Layout,
  Network,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Terminal,
  ToggleRight,
} from "lucide-react";

export default function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-6 md:p-10 w-full relative z-10 border border-border/50">
          {/* 3 Column Grid for Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
                {/* Visual Canvas */}
                <div className="h-56 sm:h-64 bg-white/40 relative overflow-hidden flex flex-col items-center justify-center p-6 border-b border-white/40">
                  <div className="relative w-full max-w-lg h-full flex items-center justify-center">
                    {/* Background Nodes */}
                    <div className="absolute top-[20%] left-[20%] p-2.5 sm:p-3.5 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-60 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-700 delay-100 z-10">
                      <Database className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="absolute bottom-[20%] left-[35%] p-2.5 sm:p-3.5 bg-muted text-muted-foreground rounded-xl border border-border opacity-60 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700 delay-200 z-10">
                      <Layout className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="absolute top-[30%] right-[25%] p-2.5 sm:p-3.5 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-60 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700 delay-300 z-10">
                      <Network className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>

                    {/* Center Magnifying Glass / Focus */}
                    <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 bg-card/90 backdrop-blur-md rounded-full shadow-md shadow-primary/25 border-4 border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
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
                <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-5">
                    <div className="p-2 sm:p-2.5 bg-card rounded-lg border border-border">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">
                      {t("values.card1Tag")}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 tracking-tight">
                    {t("values.card1Title")}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {t("values.card1Desc")}
                  </p>
                </div>
              </div>
              {/* Card 2: Coherence */}
              <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
                <div className="h-56 sm:h-64 bg-white/40 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/40">
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
                <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-5">
                    <div className="p-2 sm:p-2.5 bg-card rounded-lg border border-border">
                      <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">
                      {t("values.card2Tag")}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 tracking-tight">
                    {t("values.card2Title")}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {t("values.card2Desc")}
                  </p>
                </div>
              </div>

              {/* Card 3: Control */}
              <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
                <div className="h-56 sm:h-64 bg-white/40 relative overflow-hidden flex items-center justify-center p-6 border-b border-white/40">
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
                <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col">
                  <div className="flex items-center gap-2 sm:gap-3 mb-5">
                    <div className="p-2 sm:p-2.5 bg-card rounded-lg border border-border">
                      <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">
                      {t("values.card3Tag")}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 tracking-tight">
                    {t("values.card3Title")}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {t("values.card3Desc")}
                  </p>
                </div>
              </div>
          </div>

          {/* Compatibility (Coding Tools) - Full Width Below */}
          <div className="mt-6 gemini-card rounded-xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-border/50">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="flex flex-col items-start gap-4 relative z-10 lg:w-1/3">
              <div className="p-3 bg-primary text-background rounded-xl shadow-md shrink-0 group-hover:scale-110 transition-transform duration-500 mb-1">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-xl font-medium text-foreground block mb-2 tracking-tight">
                  {t("values.compatTitle")}
                </strong>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("values.compatDesc")}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-2/3 overflow-hidden flex items-center justify-end">
              <CodingToolPills variant="light" className="justify-center lg:justify-end" />
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
