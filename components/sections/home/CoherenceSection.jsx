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
    <section className="py-6 md:py-8 lg:py-12 " id="code-to-design">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
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

                {/* Left: Approved Intent - Brand Blue */}
                <div className="flex-grow flex-1 p-2 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-blue-50/30 flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 rounded-lg shrink-0" style={{background: '#1D63E010', color: '#1D63E0'}}>
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest leading-tight" style={{color: '#1D63E0'}}>
                      {t("coherence.approvedTag")}
                    </span>
                  </div>

                  <div className="rounded-xl p-3 sm:p-6 relative group-hover:-translate-y-1 transition-transform duration-500 flex-1 border bg-white shadow-sm" style={{borderColor: '#1D63E0'}}>
                    <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:-right-3 bg-white rounded-full p-0.5 shadow-md z-20">
                      <CheckCircle2 className="w-5 h-5" style={{fill: '#1D63E0', color: 'white'}} />
                    </div>
                    <strong className="text-base sm:text-lg lg:text-xl font-semibold text-foreground block leading-snug">
                      {t("coherence.approvedTitle")}
                    </strong>
                  </div>
                </div>

                {/* Right: Proposed Implementation - Brand Orange */}
                <div className="flex-grow flex-1 p-2 sm:p-8 lg:p-12 flex flex-col border-t lg:border-t-0 border-border lg:border-none" style={{background: '#FF7A1A08'}}>
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 rounded-lg shrink-0" style={{background: '#FF7A1A15', color: '#FF7A1A'}}>
                      <GitPullRequest className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-tight" style={{color: '#FF7A1A'}}>
                      {t("coherence.proposedTag")}
                    </span>
                  </div>

                  <div className="rounded-xl p-3 sm:p-6 relative group-hover:-translate-y-1 transition-transform duration-500 delay-75 flex-1 border bg-white shadow-sm" style={{borderColor: '#FF7A1A'}}>
                    <div className="absolute -top-2.5 -right-1 sm:-top-3 sm:-right-3 bg-white border-2 rounded-full p-0.5 shadow-md z-20" style={{borderColor: '#FF7A1A'}}>
                      <X className="w-3.5 h-3.5" strokeWidth={3} style={{color: '#FF7A1A'}} />
                    </div>
                    <strong className="text-base sm:text-lg lg:text-xl font-semibold text-foreground block leading-snug">
                      {t("coherence.proposedTitle")}
                    </strong>
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
                <div className="absolute top-0 right-0 w-64 h-64 bg-muted rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

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
