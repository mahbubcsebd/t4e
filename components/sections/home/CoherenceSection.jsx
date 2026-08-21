"use client";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  AlertCircle,
  CheckCircle2,
  GitPullRequest,
  FileText,
  Workflow,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function CoherenceSection() {
  const { t } = useLanguage();

  const impactNodes = t("coherence.nodes") || [
    "Refund policy",
    "Payments API",
    "Customer UI",
    "Notifications",
    "Acceptance tests",
  ];

  return (
    <section
      className="py-24 md:py-32 bg-background border-b border-zinc-200/60 overflow-hidden relative"
      id="code-to-design"
    >
      <Container className="relative z-10">
        <SectionHeading 
          align="split"
          eyebrow={t("coherence.eyebrow")}
          title={<>{t("coherence.titlePrefix")} <span className="text-blue-600">{t("coherence.titleHighlight")}</span></>}
          subtitle={t("coherence.subtitle")}
        />

        {/* Workspace Interface Window */}
        <div className="max-w-7xl mx-auto bg-card rounded-3xl border border-zinc-200 shadow-[0_20px_40px_rgb(9,60,173,0.06)] overflow-hidden flex flex-col group">
          {/* Mac-style Window Header */}
          <div className="h-12 bg-zinc-50 border-b border-zinc-100 flex items-center px-5 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-rose-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-amber-400 transition-colors delay-75"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-200 group-hover:bg-emerald-400 transition-colors delay-150"></div>
            </div>
            <div className="text-[10px] font-semibold text-zinc-400 font-mono tracking-wider">
              coherence-engine.ts
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          {/* Split View Comparison */}
          <div className="flex flex-col lg:flex-row relative items-stretch">
            {/* Center VS Divider on Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card border border-zinc-200 rounded-full items-center justify-center z-20 shadow-sm text-[10px] font-medium text-zinc-400">
              VS
            </div>

            {/* Left: Approved Intent */}
            <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-zinc-100 bg-gradient-to-br from-blue-50/40 to-transparent flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-blue-700 uppercase tracking-widest">
                  {t("coherence.approvedTag")}
                </span>
              </div>

              <div className="bg-card border border-blue-200/60 rounded-2xl p-6 shadow-sm relative group-hover:-translate-y-1 transition-transform duration-500 flex-1">
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white rounded-full p-1 shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <strong className="text-lg sm:text-xl font-medium text-foreground block mb-3 leading-snug">
                  "{t("coherence.approvedTitle")}"
                </strong>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("coherence.approvedDesc")}
                </p>
              </div>
            </div>

            {/* Right: Proposed Implementation (Light Theme) */}
            <div className="flex-1 p-8 lg:p-12 bg-gradient-to-bl from-gray-50/40 to-transparent flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 text-muted-foreground rounded-lg">
                  <GitPullRequest className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                  {t("coherence.proposedTag")}
                </span>
              </div>

              <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm font-mono relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 delay-75 flex-1">
                {/* Subtle grey tint for diff */}
                <div className="absolute inset-0 bg-muted/50 pointer-events-none"></div>

                <div className="flex items-center gap-4 text-[11px] text-gray-500/70 mb-3 tracking-wider uppercase font-sans font-medium">
                  <span>src/config/policy.ts</span>
                </div>

                <div className="relative pl-4 border-l-2 border-gray-400 text-sm">
                  <strong className="text-gray-800 block mb-3 leading-relaxed">
                    {t("coherence.proposedTitle")}
                  </strong>
                  <p className="text-muted-foreground font-sans text-xs">
                    // {t("coherence.proposedDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Alert Panel */}
          <div className="border-t border-zinc-100 bg-card p-6 lg:px-12 lg:py-8">
            <div className="bg-muted border border-border rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm shadow-gray-100/50">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-2.5 bg-card rounded-xl shadow-sm border border-border text-muted-foreground shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-1">
                    {t("coherence.alertTag")}
                  </span>
                  <strong className="text-sm sm:text-base font-medium text-foreground block">
                    {t("coherence.alertTitle")}
                  </strong>
                </div>
              </div>
              <div className="bg-card border border-gray-300 text-foreground text-[11px] font-medium px-4 py-2.5 rounded-lg whitespace-nowrap shadow-sm flex items-center gap-2 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-colors cursor-pointer">
                {t("coherence.alertDesc")}
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Impact Graph Footer (Redesigned) */}
          <div className="bg-[#f8fafc] border-t border-zinc-100 p-8 lg:p-12 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-card rounded-lg border border-zinc-200 shadow-sm text-blue-600">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mb-0.5">
                    {t("coherence.impactTag")}
                  </span>
                  <strong className="text-sm font-medium text-foreground">
                    {t("coherence.impactTitle")}
                  </strong>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {impactNodes.map((node, i) => (
                  <div
                    key={i}
                    className="bg-card border border-slate-200 rounded-xl p-3 pr-4 flex items-center gap-3 hover:border-blue-600  transition-all cursor-default group/node"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {node}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
