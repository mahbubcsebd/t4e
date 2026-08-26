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
  ToggleLeft,
} from "lucide-react";

export default function ValueSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl py-6 px-3.5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          {/* 3 Column Grid for Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
              {/* Visual Canvas */}
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 relative overflow-hidden flex flex-col items-center justify-center p-6 border-b border-border/50">
                <div className="relative w-full max-w-[260px] h-[180px] sm:h-[220px] flex items-center justify-center">
                  {/* Background Nodes (Symmetric Layout) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2.5 sm:p-3.5 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-700 z-10">
                    <Database className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="absolute bottom-0 left-2 p-2.5 sm:p-3.5 bg-muted text-muted-foreground rounded-xl border border-border opacity-80 group-hover:opacity-100 group-hover:translate-y-1 group-hover:-translate-x-1 transition-all duration-700 z-10">
                    <Layout className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="absolute bottom-0 right-2 p-2.5 sm:p-3.5 bg-primary/10 text-primary rounded-xl border border-primary/20 opacity-80 group-hover:opacity-100 group-hover:translate-y-1 group-hover:translate-x-1 transition-all duration-700 z-10">
                    <Network className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  {/* Center Magnifying Glass / Focus */}
                  <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 bg-card/90 backdrop-blur-md rounded-full shadow-lg shadow-primary/20 border-[3px] border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>

                  {/* Connecting lines that fade in (Symmetric Coordinates) */}
                  <svg className="absolute inset-0 w-full h-full text-slate-300 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                    <line
                      x1="50%"
                      y1="15%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1="20%"
                      y1="85%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />
                    <line
                      x1="80%"
                      y1="85%"
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
              <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-5">
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
            <div className="flex-1 gemini-card rounded-xl overflow-hidden flex flex-col group">
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 relative overflow-hidden flex items-center justify-center p-6 border-b border-border/50">
                <div className="flex items-center gap-6 relative z-10">
                  <div className="p-4 sm:p-5 bg-muted border border-border rounded-xl text-muted-foreground group-hover:-translate-x-2 transition-transform duration-500">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="w-12 sm:w-16 h-[2px] bg-border"></div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary border-2 border-card shadow-md flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform duration-500">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div className="p-4 sm:p-5 bg-primary/10 border border-primary/30 rounded-xl text-primary group-hover:translate-x-2 transition-transform duration-500">
                    <FileCode className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-5">
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
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 relative overflow-hidden flex items-center justify-center p-6 border-b border-border/50">
                <div className="flex flex-col gap-4 sm:gap-5 w-40 sm:w-48">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-muted border border-border rounded-lg group-hover:-translate-x-1 transition-transform duration-500">
                    <div className="w-20 sm:w-24 h-2.5 sm:h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <ToggleRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-muted border border-border rounded-lg group-hover:translate-x-1 transition-transform duration-500 delay-75">
                    <div className="w-10 sm:w-12 h-2.5 sm:h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                    <ToggleLeft className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors delay-100" />
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex-1 bg-transparent flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-5">
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
          <div className="mt-6 gemini-card rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 relative overflow-hidden group border border-border/50">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="flex flex-col items-start gap-4 relative z-10 w-full lg:w-[40%]">
              <div className="p-3.5 bg-primary text-background rounded-xl shadow-md shrink-0 group-hover:scale-110 transition-transform duration-500 mb-1">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <strong className="text-xl sm:text-2xl font-medium text-foreground block mb-2 sm:mb-3 tracking-tight">
                  {t("values.compatTitle")}
                </strong>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
                  {t("values.compatDesc")}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full lg:w-[50%] flex items-center justify-center lg:justify-center">
              <CodingToolPills
                variant="light"
                className="justify-center lg:justify-end gap-2 sm:gap-2.5"
              />
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
