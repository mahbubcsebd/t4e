"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  FileCode,
  Workflow,
  Bot,
  Database,
  LayoutTemplate,
  Network,
  Users,
  GitPullRequest,
} from "lucide-react";

export default function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="p-5">
      <div className="bg-card rounded-xl border border-border overflow-hidden relative max-w-[1400px] mx-auto p-4 md:p-5">
        <div className="absolute inset-0 bg-background z-0 pointer-events-none"></div>
        <div className="relative z-10 w-full">
        {/* Editorial Header */}
        <SectionHeading
          eyebrow={t("problem.eyebrow")}
          title={t("problem.title")}
          className="max-w-[700px] mx-auto mb-10 md:mb-14"
          eyebrowClassName="mb-3"
        />

        {/* The System Canvas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Block 01 - Context Resets (Left) */}
          <div className="lg:col-span-7 gemini-card rounded-3xl overflow-hidden flex flex-col group">
            {/* Visual Canvas */}
            <div className="h-64 sm:h-80 bg-white/40 border-b border-white/40 relative overflow-hidden flex items-center justify-center p-6">
              <div className="relative w-full max-w-sm aspect-video flex items-center justify-center">
                {/* Central AI Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-card rounded-2xl shadow-lg border border-border flex items-center justify-center z-20 group-hover:scale-105 transition-transform duration-500">
                  <Bot className="w-8 h-8 text-primary" />
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
                <div className="absolute top-[10%] left-[10%] bg-card p-3 rounded-xl border border-border z-10 opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500">
                  <FileCode className="w-5 h-5 text-slate-400" />
                </div>
                <div className="absolute top-[15%] right-[15%] bg-card p-3 rounded-xl border border-border z-10 opacity-60 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 delay-75">
                  <Database className="w-5 h-5 text-slate-400" />
                </div>
                <div className="absolute bottom-[10%] left-[15%] bg-card p-3 rounded-xl border border-border z-10 opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 delay-100">
                  <Workflow className="w-5 h-5 text-slate-400" />
                </div>
                <div className="absolute bottom-[15%] right-[20%] bg-card p-3 rounded-xl border border-border z-10 opacity-80 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 delay-150">
                  <LayoutTemplate className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono font-medium text-slate-400">
                  01
                </span>
                <span className="h-[1px] w-8 bg-gray-200"></span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
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

          {/* Block 02 - Knowledge lives in different places (Right) */}
          <div className="lg:col-span-5 gemini-card rounded-3xl overflow-hidden flex flex-col group">
            {/* Visual Canvas */}
            <div className="h-64 sm:h-80 bg-white/40 border-b border-white/40 relative p-6 flex flex-col items-center justify-center gap-5 overflow-hidden">
              {/* Vertical Alignment Guide */}
              <div className="absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-border z-0 opacity-50"></div>

              {/* Layers */}
              <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-30 -translate-x-4 group-hover:-translate-x-6 transition-transform duration-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-primary border border-primary/20">
                    <FileCode className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">Code</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary absolute -right-3 top-1/2 -translate-y-1/2 ring-4 ring-white"></div>
              </div>

              <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-20 translate-x-3 group-hover:translate-x-5 transition-transform duration-500 delay-75">
                <div className="w-1.5 h-1.5 rounded-full bg-primary absolute -left-3 top-1/2 -translate-y-1/2 ring-4 ring-white"></div>
                <div className="flex items-center gap-3 ml-1">
                  <div className="p-2 bg-muted rounded-lg text-muted-foreground border border-border">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    Workflows
                  </span>
                </div>
              </div>

              <div className="w-full max-w-[220px] bg-card border border-border rounded-xl p-3 flex items-center justify-between relative z-10 -translate-x-2 group-hover:-translate-x-4 transition-transform duration-500 delay-150">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg text-muted-foreground border border-border">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    Decisions
                  </span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 absolute -right-3 top-1/2 -translate-y-1/2 ring-4 ring-white"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono font-medium text-slate-400">
                  02
                </span>
                <span className="h-[1px] w-8 bg-gray-200"></span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
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

          {/* Block 03 - Impact appears late (Bottom Full Width) */}
          <div className="lg:col-span-12 gemini-card rounded-3xl overflow-hidden grid lg:grid-cols-12 group">
            {/* Content (Left side on desktop) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/40 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono font-medium text-slate-400">
                  03
                </span>
                <span className="h-[1px] w-8 bg-gray-200"></span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
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

            {/* Visual Canvas (Right side on desktop) */}
            <div className="lg:col-span-7 h-auto min-h-64 lg:h-auto bg-white/40 relative p-6 sm:p-10 flex items-center justify-center order-1 lg:order-2 overflow-hidden">
              <div className="w-full max-w-md relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0">
                {/* Connecting Line Mobile */}
                <div className="sm:hidden absolute left-[36px] top-[40px] bottom-[24px] border-l-2 border-dashed border-border z-0"></div>

                {/* Local Change Node */}
                <div className="relative z-10 flex flex-row sm:flex-col items-center gap-4 sm:gap-3 bg-card sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none border border-border sm:border-none sm:shadow-none w-full sm:w-auto shrink-0 md:translate-x-[20px]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-card border-[3px] border-primary shadow-md flex items-center justify-center relative shrink-0 group-hover:scale-110 transition-transform duration-500 md:mt-[30px]">
                    <div
                      className="absolute inset-0 rounded-full bg-primary/30 animate-ping"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <GitPullRequest className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-[10px] font-extrabold text-foreground sm:text-muted-foreground uppercase tracking-widest bg-card sm:bg-transparent px-2 py-1 rounded">
                    Local Edit
                  </span>
                </div>

                {/* Connecting Line Desktop */}
                <div className="hidden sm:block flex-1 h-0 border-t-2 border-dashed border-border z-0"></div>

                {/* Cascading Impact Nodes */}
                <div className="relative z-10 flex flex-col gap-4 pl-16 sm:pl-0 sm:ml-[24px] w-full sm:w-auto shrink-0">
                  {/* Tree Branches (Desktop only) */}
                  <div className="hidden sm:block absolute -left-[24px] top-[24px] bottom-1/2 border-l-2 border-t-2 border-dashed border-border rounded-tl-2xl w-[24px] z-0"></div>
                  <div className="hidden sm:block absolute -left-[24px] top-1/2 bottom-[24px] border-l-2 border-b-2 border-dashed border-border rounded-bl-2xl w-[24px] z-0"></div>
                  <div className="hidden sm:block absolute -left-[24px] top-1/2 -translate-y-[1px] w-[24px] border-t-2 border-dashed border-border z-0"></div>

                  <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 w-full sm:w-48 relative group-hover:translate-x-2 transition-transform duration-500 delay-75 z-10">
                    {/* Mobile Card connecting line */}
                    <div className="sm:hidden absolute -left-[28px] top-1/2 -translate-y-[1px] w-[28px] border-t-2 border-dashed border-border z-0"></div>
                    <div className="w-2 h-2 rounded-full bg-primary absolute -left-1 top-1/2 -translate-y-1/2 z-20"></div>
                    <Network className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">
                      APIs & Interfaces
                    </span>
                  </div>

                  <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 w-full sm:w-48 relative group-hover:translate-x-2 transition-transform duration-500 delay-150 z-10">
                    <div className="sm:hidden absolute -left-[28px] top-1/2 -translate-y-[1px] w-[28px] border-t-2 border-dashed border-border z-0"></div>
                    <div className="w-2 h-2 rounded-full bg-muted0 absolute -left-1 top-1/2 -translate-y-1/2 z-20"></div>
                    <Database className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-bold text-foreground">
                      Data Models
                    </span>
                  </div>

                  <div className="bg-card border border-border rounded-xl px-4 py-3 flex items-center gap-3 w-full sm:w-48 relative group-hover:translate-x-2 transition-transform duration-500 delay-200 z-10">
                    <div className="sm:hidden absolute -left-[28px] top-1/2 -translate-y-[1px] w-[28px] border-t-2 border-dashed border-border z-0"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 absolute -left-1 top-1/2 -translate-y-1/2 z-20"></div>
                    <LayoutTemplate className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-bold text-foreground">
                      UI / Workflows
                    </span>
                  </div>
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
