'use client';

import Container from '@/components/layout/Container';
import SectionHeading from '@/components/layout/SectionHeading';

import { useLanguage } from '@/context/LanguageContext';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  GitPullRequest,
  Workflow,
} from 'lucide-react';

export default function CoherenceSection() {
  const { t } = useLanguage();

  const impactNodes = t('coherence.nodes') || [
    'Refund policy',
    'Payments API',
    'Customer UI',
    'Notifications',
    'Acceptance tests',
  ];

  return (
    <section
      className="p-5"
      id="code-to-design"
    >
      <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl border border-border overflow-hidden relative max-w-[1400px] mx-auto p-4 md:p-5">
        
        <div className="bg-card rounded-xl p-6 md:p-10 w-full relative z-10 border border-border/50">
        <SectionHeading
          align="split"
          eyebrow={t('coherence.eyebrow')}
          title={
            <>
              {t('coherence.titlePrefix')}{' '}
              <span className="text-primary">
                {t('coherence.titleHighlight')}
              </span>
            </>
          }
          subtitle={t('coherence.subtitle')}
        />

        {/* Workspace Interface Window */}
        <div className="max-w-7xl mx-auto bg-card rounded-xl border border-border shadow-lg shadow-black/5 overflow-hidden flex flex-col group">
          {/* Mac-style Window Header */}
          <div className="h-12 bg-muted/50 border-b border-border flex items-center px-5 justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-border group-hover:bg-rose-400 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-border group-hover:bg-amber-400 transition-colors delay-75"></div>
              <div className="w-3 h-3 rounded-full bg-border group-hover:bg-emerald-400 transition-colors delay-150"></div>
            </div>
            <div className="text-[10px] font-semibold text-muted-foreground font-mono tracking-wider">
              coherence-engine.ts
            </div>
            <div className="w-12"></div> {/* Spacer for centering */}
          </div>

          {/* Split View Comparison */}
          <div className="flex flex-col lg:flex-row relative items-stretch">
            {/* Center VS Divider on Desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-card border border-border rounded-full items-center justify-center z-20 text-[10px] font-medium text-muted-foreground">
              VS
            </div>

            {/* Left: Approved Intent */}
            <div className="flex-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border bg-gradient-to-br from-primary/10 to-transparent flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 text-primary rounded-lg">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold text-primary uppercase tracking-widest">
                  {t('coherence.approvedTag')}
                </span>
              </div>

              <div className="gemini-card rounded-xl p-6 relative group-hover:-translate-y-1 transition-transform duration-500 flex-1">
                <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground rounded-full p-1 shadow-md">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <strong className="text-lg sm:text-xl font-medium text-foreground block mb-3 leading-snug">
                  "{t('coherence.approvedTitle')}"
                </strong>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('coherence.approvedDesc')}
                </p>
              </div>
            </div>

            {/* Right: Proposed Implementation (Light Theme) */}
            <div className="flex-1 p-8 lg:p-12 bg-gradient-to-bl from-muted/40 to-transparent flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-muted text-muted-foreground rounded-lg">
                  <GitPullRequest className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                  {t('coherence.proposedTag')}
                </span>
              </div>

              <div className="gemini-card rounded-xl p-6 font-mono relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 delay-75 flex-1">
                {/* Subtle frosted glass tint for diff */}
                <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

                <div className="flex items-center gap-4 text-[11px] text-muted-foreground mb-3 tracking-wider uppercase font-sans font-medium">
                  <span>src/config/policy.ts</span>
                </div>

                <div className="relative pl-4 border-l-2 border-border text-sm">
                  <strong className="text-foreground block mb-3 leading-relaxed">
                    {t('coherence.proposedTitle')}
                  </strong>
                  <p className="text-muted-foreground font-sans text-xs">
                    // {t('coherence.proposedDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Alert Panel */}
          <div className="border-t border-border bg-card p-6 lg:px-12 lg:py-8">
            <div className="gemini-card rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-2.5 bg-white/60 rounded-xl border border-white/60 text-muted-foreground shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest block mb-1">
                    {t('coherence.alertTag')}
                  </span>
                  <strong className="text-sm sm:text-base font-medium text-foreground block">
                    {t('coherence.alertTitle')}
                  </strong>
                </div>
              </div>
              <div className="bg-white/80 border border-white/60 text-foreground text-[11px] font-medium px-4 py-2.5 rounded-lg whitespace-nowrap flex items-center gap-2 hover:bg-foreground hover:text-background transition-colors cursor-pointer">
                {t('coherence.alertDesc')}
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Impact Graph Footer (Redesigned) */}
          <div className="bg-muted/20 border-t border-border p-8 lg:p-12 relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-card rounded-lg border border-border text-primary">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest block mb-0.5">
                    {t('coherence.impactTag')}
                  </span>
                  <strong className="text-sm font-medium text-foreground">
                    {t('coherence.impactTitle')}
                  </strong>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {impactNodes.map((node, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-full p-3 pr-4 flex items-center gap-3 hover:border-primary transition-all cursor-default group/node justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(37,99,235,0.6)]"></div>
                    <span className="text-xs font-semibold text-foreground leading-tight">
                      {node}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
