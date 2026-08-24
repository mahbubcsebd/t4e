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
        <div className="bg-card rounded-xl p-6 md:p-10 w-full relative z-10 border border-border/50">
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
              <div className="h-56 bg-white/40 border-b border-white/40 relative overflow-hidden flex items-center justify-center p-6">
                <div className="relative w-full max-w-sm aspect-video flex items-center justify-center">
                  {/* Central AI Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-card rounded-xl shadow-lg border border-border flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-500">
                    <Bot className="w-10 h-10 text-primary" />
                  </div>

                  {/* Connecting lines */}
                  <svg
                    viewBox="0 0 400 200"
                    preserveAspectRatio="none"
                    className="absolute inset-0 w-full h-full text-gray-200 z-0 opacity-60"
                    style={{ strokeDasharray: "4,4" }}
                  >
                    <line
                      x1="80"
                      y1="50"
                      x2="170"
                      y2="85"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="320"
                      y1="60"
                      x2="230"
                      y2="90"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="100"
                      y1="160"
                      x2="180"
                      y2="120"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="300"
                      y1="150"
                      x2="220"
                      y2="115"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Floating Fragments */}
                  <div className="absolute top-[10%] left-[10%] bg-card p-4 rounded-xl border border-border z-10 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                    <FileCode className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="absolute top-[15%] right-[15%] bg-card p-4 rounded-xl border border-border z-10 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-75">
                    <Database className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="absolute bottom-[10%] left-[15%] bg-card p-4 rounded-xl border border-border z-10 opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 delay-100">
                    <Workflow className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="absolute bottom-[15%] right-[20%] bg-card p-4 rounded-xl border border-border z-10 opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 delay-150">
                    <LayoutTemplate className="w-6 h-6 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1">
                <div className="flex items-center gap-3 mb-5">
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
              <div className="h-56 bg-white/40 border-b border-white/40 relative p-6 flex flex-col items-center justify-center gap-4 overflow-hidden">
                {/* Vertical Alignment Guide */}
                <div className="absolute top-6 bottom-6 left-1/2 -translate-x-[1px] w-[2px] border-l-2 border-dashed border-border z-0 opacity-50"></div>

                {/* Layers */}
                <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-30 -translate-x-4 group-hover:-translate-x-8 transition-transform duration-500 shadow-sm">
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2.5 bg-blue-50 rounded-lg text-primary border border-primary/20">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      Code
                    </span>
                  </div>
                  {/* Dot precisely on the center axis (shifted +16px to compensate for -translate-x-4) */}
                  <div className="w-2 h-2 rounded-full bg-primary absolute top-1/2 -translate-y-1/2 left-[calc(50%+16px)] -translate-x-1/2 z-0 ring-4 ring-card"></div>
                </div>

                <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-20 translate-x-4 group-hover:translate-x-8 transition-transform duration-500 delay-75 shadow-sm">
                  <div className="flex items-center gap-3 relative z-10 ml-auto flex-row-reverse">
                    <div className="p-2.5 bg-indigo-50 rounded-lg text-indigo-500 border border-indigo-200">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      Workflows
                    </span>
                  </div>
                  {/* Dot precisely on the center axis (shifted -16px to compensate for translate-x-4) */}
                  <div className="w-2 h-2 rounded-full bg-indigo-500 absolute top-1/2 -translate-y-1/2 left-[calc(50%-16px)] -translate-x-1/2 z-0 ring-4 ring-card"></div>
                </div>

                <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-10 -translate-x-3 group-hover:-translate-x-6 transition-transform duration-500 delay-150 shadow-sm">
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2.5 bg-slate-100 rounded-lg text-slate-500 border border-slate-200">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-foreground">
                      Decisions
                    </span>
                  </div>
                  {/* Dot precisely on the center axis (shifted +12px to compensate for -translate-x-3) */}
                  <div className="w-2 h-2 rounded-full bg-slate-400 absolute top-1/2 -translate-y-1/2 left-[calc(50%+12px)] -translate-x-1/2 z-0 ring-4 ring-card"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1">
                <div className="flex items-center gap-3 mb-5">
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
              {/* Visual Canvas (Moved to Top for Consistency) */}
              <div className="h-56 bg-white/40 border-b border-white/40 relative p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full max-w-sm relative flex flex-col items-center justify-center gap-8">
                  {/* Connecting Line Mobile */}
                  <div className="absolute top-[40px] bottom-[24px] border-l-2 border-dashed border-border z-0"></div>

                  {/* Local Change Node */}
                  <div className="relative z-10 flex flex-row items-center gap-4 bg-card p-3 rounded-xl border border-border shadow-sm w-full max-w-[220px] shrink-0">
                    <div className="w-14 h-14 rounded-full bg-card border-[3px] border-primary shadow-md flex items-center justify-center relative shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <div
                        className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                        style={{ animationDuration: "3s" }}
                      ></div>
                      <GitPullRequest className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[11px] font-extrabold text-foreground uppercase tracking-widest">
                      Local Edit
                    </span>
                  </div>

                  {/* Cascading Impact Nodes */}
                  <div className="relative z-10 flex flex-row justify-center gap-4 w-full shrink-0">
                    {/* Tree Branches */}
                    <div className="absolute left-[20%] right-[20%] top-[-20px] border-t-2 border-dashed border-border z-0"></div>
                    <div className="absolute left-[20%] top-[-20px] h-[20px] border-l-2 border-dashed border-border z-0"></div>
                    <div className="absolute left-1/2 top-[-20px] h-[20px] border-l-2 border-dashed border-border z-0"></div>
                    <div className="absolute right-[20%] top-[-20px] h-[20px] border-l-2 border-dashed border-border z-0"></div>

                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 delay-75 z-10">
                      <Network className="w-5 h-5 text-primary" />
                    </div>

                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 delay-150 z-10">
                      <Database className="w-5 h-5 text-gray-500" />
                    </div>

                    <div className="bg-card border border-border rounded-xl p-3 flex items-center justify-center relative group-hover:translate-y-2 transition-transform duration-500 delay-200 z-10">
                      <LayoutTemplate className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-10 flex-1">
                <div className="flex items-center gap-3 mb-5">
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
