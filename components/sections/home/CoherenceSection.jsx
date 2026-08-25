"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { useLanguage } from "@/context/LanguageContext";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  GitPullRequest,
  Workflow,
  XCircle,
  X,
  Target,
  AlertOctagon,
} from "lucide-react";
import Container from "@/components/layout/Container";

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
    <section className="py-8 md:py-12 lg:py-16" id="code-to-design">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-3 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          <SectionHeading
            align="split"
            eyebrow={t("coherence.eyebrow")}
            title={
              <>
                {t("coherence.titlePrefix")}{" "}
                <span className="text-primary">
                  {t("coherence.titleHighlight")}
                </span>
              </>
            }
            subtitle={t("coherence.subtitle")}
          />

          {/* Workspace Interface Window */}
          <Container>
            <div className="max-w-[1600px] mx-auto bg-card rounded-xl border border-border shadow-lg shadow-black/5 overflow-hidden flex flex-col group">
              {/* Mac-style Window Header */}
              <div className="h-12 bg-muted/50 border-b border-border flex items-center px-5 justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-border group-hover:bg-rose-400 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-border group-hover:bg-amber-400 transition-colors delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-border group-hover:bg-emerald-400 transition-colors delay-150"></div>
                </div>
                <div className="w-12"></div> {/* Spacer for centering */}
              </div>

              {/* Split View Comparison */}
              <div className="flex flex-col lg:flex-row relative items-stretch">
                {/* Center VS Divider on Desktop */}
                <div className="hidden lg:flex flex-col items-center justify-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="text-xl font-bold text-red-500 leading-none">
                    ≠
                  </div>
                </div>

                {/* Left: Approved Intent */}
                <div className="flex-grow flex-1 p-2 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-primary/10 to-transparent flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 bg-primary/20 text-primary rounded-lg shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-primary uppercase tracking-widest leading-tight">
                      {t("coherence.approvedTag")}
                    </span>
                  </div>

                  <div className="gemini-card rounded-xl p-3 sm:p-6 relative group-hover:-translate-y-1 transition-transform duration-500 flex-1 border !border-primary shadow-sm shadow-primary/5">
                    <div className="absolute -top-3 -right-3 bg-white text-primary rounded-full p-0.5 shadow-md z-20">
                      <CheckCircle2 className="w-5 h-5 fill-primary text-white" />
                    </div>
                    <strong className="text-base sm:text-lg lg:text-xl font-medium text-foreground block mb-3 leading-snug">
                      "{t("coherence.approvedTitle")}"
                    </strong>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                      {t("coherence.approvedDesc")}
                    </p>
                  </div>
                </div>

                {/* Right: Proposed Implementation (Error Theme) */}
                <div className="flex-grow flex-1 p-2 sm:p-8 lg:p-12 bg-gradient-to-bl from-red-50 to-transparent flex flex-col border-t lg:border-t-0 border-border lg:border-none">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg shrink-0 border border-red-200">
                      <GitPullRequest className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest leading-tight">
                      {t("coherence.proposedTag")}
                    </span>
                  </div>

                  <div className="gemini-card bg-red-50/50 rounded-xl p-3 sm:p-6 font-mono relative group-hover:-translate-y-1 transition-transform duration-500 delay-75 flex-1 border !border-red-500 shadow-sm shadow-red-500/10">
                    <div className="absolute -top-3 -right-3 bg-white text-red-500 border-2 border-red-500 rounded-full p-0.5 shadow-md z-20">
                      <X className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    {/* Subtle frosted glass tint for diff */}
                    <div className="absolute inset-0 bg-white/40 pointer-events-none rounded-xl"></div>

                    <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-red-700/70 mb-3 tracking-wider uppercase font-sans font-medium break-all">
                      <span>src/config/policy.ts</span>
                    </div>

                    <div className="relative pl-3 sm:pl-4 border-l-2 border-red-300 text-xs sm:text-sm">
                      <strong className="text-red-900 block mb-2 sm:mb-3 leading-relaxed">
                        {t("coherence.proposedTitle")}
                      </strong>
                      <p className="text-red-600/80 font-mono text-[10px] sm:text-xs leading-relaxed mt-1.5">
                        // {t("coherence.proposedDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inline Alert Panel */}
              <div className="border-t border-border bg-card p-4 sm:p-6 lg:px-12 lg:py-8">
                <div className="gemini-card rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full">
                    <div className="p-2 sm:p-2.5 bg-white/60 rounded-xl border border-white/60 text-muted-foreground shrink-0 mt-0.5 sm:mt-0">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[9px] sm:text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-1">
                        {t("coherence.alertTag")}
                      </span>
                      <strong className="text-xs sm:text-sm md:text-base font-medium text-foreground block">
                        {t("coherence.alertTitle")}
                      </strong>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto bg-white/80 border border-white/60 text-foreground text-[10px] sm:text-[11px] font-medium px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shrink-0">
                    <span className="truncate">{t("coherence.alertDesc")}</span>
                  </div>
                </div>
              </div>

              {/* Impact Graph Footer (Redesigned) */}
              <div className="bg-muted/20 border-t border-border p-5 sm:p-8 lg:p-12 relative overflow-hidden">
                {/* Soft background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-card rounded-lg border border-border text-primary shrink-0">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-muted-foreground uppercase tracking-widest block mb-0.5">
                        {t("coherence.impactTag")}
                      </span>
                      <strong className="text-xs sm:text-sm font-medium text-foreground">
                        {t("coherence.impactTitle")}
                      </strong>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {impactNodes.map((node, i) => (
                      <div
                        key={i}
                        className="bg-card border border-border rounded-full p-2 px-3 sm:p-3 sm:pr-4 flex items-center gap-2 sm:gap-3 hover:border-primary transition-all cursor-default group/node"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                        <span className="text-[10px] sm:text-xs font-semibold text-foreground leading-tight whitespace-nowrap">
                          {node}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </SectionCard>
    </section>
  );
}
