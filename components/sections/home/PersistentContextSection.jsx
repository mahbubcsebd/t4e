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
    <section className="py-24 md:py-32 bg-white border-b border-zinc-200/60 overflow-hidden relative">
      <Container className="relative z-10">
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
                      <span className="text-gradient">{sentence}</span>
                    )}
                  </React.Fragment>
                ))}
            </>
          }
          subtitle={t("persistent.subtitle")}
        />

        {/* Central Brain Visualization */}
        <div className="max-w-4xl mx-auto relative mt-8 md:mt-16 py-10 pb-0">
          {/* Connecting Dashed Line (Desktop Horizontal) */}
          <div className="hidden md:block absolute top-[120px] left-[15%] right-[15%] border-t-2 border-dashed border-[#c8d9ed] z-0"></div>

          {/* Grid Layout (3 Columns) */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 relative z-10 w-full">
            {/* Left Column (Cursor -> Windsurf) */}
            <div className="flex flex-col items-center gap-12 relative z-10 mt-0 md:mt-10">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[40px] h-[128px] left-1/2 border-l-2 border-dashed border-[#c8d9ed] -translate-x-1/2 z-0"></div>

              {/* Card 1: Cursor */}
              <div className="w-full md:w-[200px] bg-white border border-zinc-200 rounded-2xl p-3 hover:border-[#07A7E1]/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-[#f4f9ff] rounded-xl text-[#07A7E1] group-hover:scale-110 transition-transform">
                  <SiCursor className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-slate-800 tracking-wide">
                  Cursor
                </strong>
              </div>

              {/* Card 2: Windsurf */}
              <div className="w-full md:w-[200px] bg-white border border-zinc-200 rounded-2xl p-3  hover:border-[#07A7E1]/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-[#f4f9ff] rounded-xl text-[#07A7E1] group-hover:scale-110 transition-transform">
                  <SiWindsurf className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-slate-800 tracking-wide">
                  Windsurf
                </strong>
              </div>
            </div>

            {/* Center Column (Brain -> MCP) */}
            <div className="flex flex-col items-center gap-12 relative z-20">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[80px] h-[168px] left-1/2 border-l-2 border-dashed border-[#c8d9ed] -translate-x-1/2 z-0"></div>

              {/* Main Center Node */}
              <div className="shrink-0 relative z-10">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#07A7E1] blur-3xl opacity-20 rounded-full scale-150"></div>

                <div className="relative w-36 h-36 md:w-40 md:h-40 bg-white border border-zinc-200 rounded-full flex flex-col items-center justify-center shadow-[0_20px_40px_rgb(7,167,225,0.15)] group">
                  <div className="absolute inset-0 rounded-full border-2 border-[#07A7E1] animate-ping opacity-20"></div>
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#c8d9ed] animate-[spin_20s_linear_infinite]"></div>

                  <Database className="w-8 h-8 md:w-10 md:h-10 text-[#07A7E1] mb-2 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500" />
                  <span className="text-[10px] md:text-xs font-extrabold text-[#093cad] uppercase tracking-widest text-center px-4 leading-tight">
                    Reviewed
                    <br />
                    Context
                  </span>
                </div>

                {/* Flow indicators (Desktop) */}
                <div className="hidden md:block absolute -left-[3.5rem] top-1/2 -translate-y-1/2 z-30">
                  <div className="px-1.5 py-1 bg-white border border-zinc-200 rounded-md shadow-sm flex items-center">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 rotate-180" />
                  </div>
                </div>
                <div className="hidden md:block absolute -right-[3.5rem] top-1/2 -translate-y-1/2 z-30">
                  <div className="px-1.5 py-1 bg-white border border-zinc-200 rounded-md shadow-sm flex items-center">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Bottom Node (MCP Clients) */}
              <div className="w-full md:w-[200px] bg-white border border-zinc-200 rounded-2xl p-3  hover:border-[#07A7E1]/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-[#f4f9ff] rounded-xl text-[#07A7E1] group-hover:scale-110 transition-transform">
                  <Network className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-slate-800 tracking-wide">
                  MCP Clients
                </strong>
              </div>
            </div>

            {/* Right Column (Claude -> Codex) */}
            <div className="flex flex-col items-center gap-12 relative z-10 mt-0 md:mt-10">
              {/* Vertical line joining them */}
              <div className="hidden md:block absolute top-[40px] h-[128px] left-1/2 border-l-2 border-dashed border-[#c8d9ed] -translate-x-1/2 z-0"></div>

              {/* Card 3: Claude */}
              <div className="w-full md:w-[200px] bg-white border border-zinc-200 rounded-2xl p-3  hover:border-[#07A7E1]/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-[#f4f9ff] rounded-xl text-[#07A7E1] group-hover:scale-110 transition-transform">
                  <SiClaude className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-slate-800 tracking-wide">
                  Claude Code
                </strong>
              </div>

              {/* Card 4: Codex / GPT */}
              <div className="w-full md:w-[200px] bg-white border border-zinc-200 rounded-2xl p-3  hover:border-[#07A7E1]/40 transition-all group flex items-center justify-center gap-3 relative z-10 h-[80px]">
                <div className="p-2.5 bg-[#f4f9ff] rounded-xl text-[#07A7E1] group-hover:scale-110 transition-transform">
                  <TbBrandOpenai className="w-5 h-5" />
                </div>
                <strong className="text-sm font-semibold text-slate-800 tracking-wide">
                  Codex
                </strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
