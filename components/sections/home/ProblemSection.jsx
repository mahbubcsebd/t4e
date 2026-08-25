"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { useLanguage } from "@/context/LanguageContext";
import {
  Bot,
  Database,
  FileCode,
  GitPullRequest,
  LayoutTemplate,
  Network,
  Users,
  Workflow,
} from "lucide-react";

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-4 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          {/* Editorial Header */}
          <SectionHeading
            eyebrow={t("problem.eyebrow")}
            title={t("problem.title")}
            className="max-w-[700px] mx-auto mb-10 md:mb-14"
            eyebrowClassName="mb-3"
          />

          {/* The System Canvas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Block 01 - Context Resets (Left) */}
            <div className="gemini-card rounded-xl overflow-hidden flex flex-col group">
              {/* Visual Canvas */}
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 border-b border-border/50 relative overflow-hidden flex items-center justify-center p-6">
                <div className="relative w-full aspect-square max-w-[200px] flex items-center justify-center">
                  {/* Circle dashed border */}
                  <div className="absolute inset-4 rounded-full border-2 border-dashed border-border/70 group-hover:rotate-12 transition-transform duration-1000 z-0"></div>
                  
                  {/* Center Bot */}
                  <div className="w-16 h-16 bg-card rounded-full border border-primary/30 shadow-lg shadow-primary/10 flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: "3s" }}></div>
                    <Bot className="w-7 h-7 text-primary relative z-10" />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-2.5 rounded-lg border border-border shadow-sm z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    <FileCode className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-card p-2.5 rounded-lg border border-border shadow-sm z-10 group-hover:translate-y-2 transition-transform duration-500">
                    <LayoutTemplate className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-card p-2.5 rounded-lg border border-border shadow-sm z-10 group-hover:-translate-x-2 transition-transform duration-500">
                    <Database className="w-5 h-5 text-slate-400" />
                  </div>
                  
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-card p-2.5 rounded-lg border border-border shadow-sm z-10 group-hover:translate-x-2 transition-transform duration-500">
                    <Workflow className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {t("problem.card1Tag")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-3 tracking-tight">
                  {t("problem.card1Title")}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t("problem.card1Desc")}
                </p>
              </div>
            </div>

            {/* Block 02 - Knowledge lives in different places (Center) */}
            <div className="gemini-card rounded-xl overflow-hidden flex flex-col group">
              {/* Visual Canvas */}
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 border-b border-border/50 relative p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="flex flex-col gap-4 relative z-10 w-full max-w-[200px]">
                  {/* Vertical line connecting them */}
                  <div className="absolute left-[28px] top-[24px] bottom-[24px] w-0 border-l-2 border-dotted border-slate-300 z-0"></div>
                  
                  {/* Layer 1: Code */}
                  <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3 relative z-10 shadow-sm group-hover:translate-x-2 transition-transform duration-500">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg border border-primary/20 shrink-0">
                      <FileCode className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-foreground">Code</span>
                  </div>
                  
                  {/* Layer 2: Workflows */}
                  <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3 relative z-10 shadow-sm group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    <div className="p-2 bg-indigo-50 text-indigo-500 rounded-lg border border-indigo-200 shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-foreground">Workflows</span>
                  </div>
                  
                  {/* Layer 3: Decisions */}
                  <div className="bg-card border border-border rounded-xl p-3 flex items-center gap-3 relative z-10 shadow-sm group-hover:translate-x-2 transition-transform duration-500 delay-150">
                    <div className="p-2 bg-slate-100 text-slate-500 rounded-lg border border-slate-200 shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-foreground">Decisions</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {t("problem.card2Tag")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-3 tracking-tight">
                  {t("problem.card2Title")}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t("problem.card2Desc")}
                </p>
              </div>
            </div>

            {/* Block 03 - Impact appears late (Right) */}
            <div className="gemini-card rounded-xl overflow-hidden flex flex-col group">
              {/* Visual Canvas */}
              <div className="min-h-[200px] md:min-h-[280px] bg-slate-50/50 border-b border-border/50 relative p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full max-w-xs relative flex flex-col items-center justify-center gap-0">
                  
                  {/* Local Change Node */}
                  <div className="relative z-20 bg-card px-4 py-2.5 rounded-full border border-primary/30 shadow-md shadow-primary/10 flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-extrabold text-foreground uppercase tracking-widest">
                      Local Edit
                    </span>
                  </div>

                  {/* Connecting lines */}
                  <div className="relative w-[164px] h-12 z-0">
                    <div className="absolute left-1/2 top-0 bottom-1/2 w-0 border-l-2 border-dotted border-border/80 -translate-x-1/2"></div>
                    <div className="absolute left-0 right-0 top-1/2 h-0 border-t-2 border-dotted border-border/80"></div>
                    <div className="absolute left-0 top-1/2 bottom-[-8px] w-0 border-l-2 border-dotted border-border/80"></div>
                    <div className="absolute left-1/2 top-1/2 bottom-[-8px] w-0 border-l-2 border-dotted border-border/80 -translate-x-1/2"></div>
                    <div className="absolute right-0 top-1/2 bottom-[-8px] w-0 border-l-2 border-dotted border-border/80"></div>
                  </div>

                  {/* Cascading Impact Nodes */}
                  <div className="relative z-10 flex flex-row justify-between items-center w-full max-w-[210px] shrink-0">
                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 shadow-sm">
                      <Network className="w-5 h-5 text-primary" />
                    </div>

                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 delay-75 shadow-sm">
                      <Database className="w-5 h-5 text-indigo-500" />
                    </div>

                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 delay-150 shadow-sm">
                      <LayoutTemplate className="w-5 h-5 text-slate-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    {t("problem.card3Tag")}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-3 tracking-tight">
                  {t("problem.card3Title")}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {t("problem.card3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
