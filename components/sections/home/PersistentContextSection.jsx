"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SiClaude, SiCursor, SiWindsurf } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import { Network, Database, ArrowRight } from "lucide-react";

export default function PersistentContextSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16 px-5">
      <div className="bg-black/[0.02] dark:bg-white/[0.02] rounded-xl border border-border overflow-hidden relative max-w-[1400px] mx-auto p-4 md:p-5">
        
        <div className="bg-card rounded-xl p-6 md:p-10 w-full relative z-10 border border-border/50">
        {/* Editorial Header */}
        <SectionHeading
          align="split"
          eyebrow={t("persistent.eyebrow")}
          title={
            <>
              {t("persistent.title")
                .split(". ")
                .map((sentence, i, arr) => (
                  <React.Fragment key={i}>
                    {i === 0 ? (
                      <span>{sentence}. </span>
                    ) : (
                      <span className="text-primary">{sentence}</span>
                    )}
                  </React.Fragment>
                ))}
            </>
          }
          subtitle={t("persistent.subtitle")}
        />

        {/* Central Brain Visualization */}
        <div className="max-w-4xl mx-auto relative md:mt-8 md:mt-16 py-10 pb-0">
          {/* Connecting Dashed Line (Desktop Horizontal) */}
          <div className="hidden md:block absolute top-[120px] left-[15%] right-[15%] border-t-2 border-dashed border-border z-0"></div>

          {/* Grid Layout (3 Columns) */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-16 relative z-10 w-full">
            {/* Mobile Vertical Dashed Line */}
            <div className="block md:hidden absolute top-[40px] bottom-[40px] left-1/2 border-l-2 border-dashed border-border -translate-x-1/2 z-0"></div>

            {/* Left Column (Cursor -> Windsurf) */}
            <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10 mt-0 md:mt-10 w-full">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[40px] h-[128px] left-1/2 border-l-2 border-dashed border-border -translate-x-1/2 z-0"></div>

              {/* Card 1: Cursor */}
              <div className="w-[260px] md:w-[200px] gemini-card rounded-xl p-3 hover:border-primary/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <SiCursor className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-foreground tracking-wide">
                  Cursor
                </strong>
              </div>

              {/* Card 2: Windsurf */}
              <div className="w-[260px] md:w-[200px] gemini-card rounded-xl p-3 hover:border-primary/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <SiWindsurf className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-foreground tracking-wide">
                  Windsurf
                </strong>
              </div>
            </div>

            {/* Center Column (Brain -> MCP) */}
            <div className="flex flex-col items-center gap-8 md:gap-12 relative z-20 w-full">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[80px] h-[168px] left-1/2 border-l-2 border-dashed border-border -translate-x-1/2 z-0"></div>

              {/* Main Center Node */}
              <div className="shrink-0 relative z-10">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full scale-150"></div>

                <div className="relative w-36 h-36 md:w-40 md:h-40 gemini-card rounded-full flex flex-col items-center justify-center shadow-md shadow-primary/25 group">
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></div>
                  <div className="absolute inset-1 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite]"></div>

                  <Database className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500" />
                  <span className="text-[10px] md:text-xs font-extrabold text-primary uppercase tracking-widest text-center px-4 leading-tight">
                    Reviewed
                    <br />
                    Context
                  </span>
                </div>

                {/* Flow indicators (Desktop) */}
                <div className="hidden md:block absolute -left-[3.5rem] top-1/2 -translate-y-1/2 z-30">
                  <div className="px-1.5 py-1 bg-card border border-border rounded-md flex items-center">
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground rotate-180" />
                  </div>
                </div>
                <div className="hidden md:block absolute -right-[3.5rem] top-1/2 -translate-y-1/2 z-30">
                  <div className="px-1.5 py-1 bg-card border border-border rounded-md flex items-center">
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Bottom Node (MCP Clients) */}
              <div className="w-[260px] md:w-[200px] gemini-card rounded-xl p-3 hover:border-primary/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <Network className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-foreground tracking-wide">
                  MCP Clients
                </strong>
              </div>
            </div>

            {/* Right Column (Claude -> Codex) */}
            <div className="flex flex-col items-center gap-8 md:gap-12 relative z-10 mt-0 md:mt-10 w-full">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[40px] h-[128px] left-1/2 border-l-2 border-dashed border-border -translate-x-1/2 z-0"></div>

              {/* Card 3: Claude */}
              <div className="w-[260px] md:w-[200px] gemini-card rounded-xl p-3 hover:border-primary/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <SiClaude className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-foreground tracking-wide">
                  Claude Code
                </strong>
              </div>

              {/* Card 4: Codex / GPT */}
              <div className="w-[260px] md:w-[200px] gemini-card rounded-xl p-3 hover:border-primary/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <TbBrandOpenai className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-foreground tracking-wide">
                  Codex
                </strong>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
