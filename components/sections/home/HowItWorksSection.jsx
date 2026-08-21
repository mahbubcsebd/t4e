"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SiClaude, SiCursor, SiWindsurf, SiGithub } from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";
import {
  GitBranch,
  CheckCircle2,
  Code2,
  Network,
  Check,
  Sparkles,
} from "lucide-react";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-12 md:py-32 bg-background border-b border-border relative overflow-hidden"
      id="how-it-works"
    >
      <Container className="relative z-10">
        {/* Editorial Header */}
        <SectionHeading 
          eyebrow={t("howItWorks.eyebrow")}
          title={t("howItWorks.title")}
        />

        {/* Workflow Pipeline */}
        <div className="relative">
          {/* Horizontal connection line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-[15%] right-[15%] border-t-2 border-dashed border-border z-0">
            {/* Animated particle moving across */}
            <div className="absolute top-[-5px] left-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_#2563eb] animate-[slide_4s_ease-in-out_infinite]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
            {/* STEP 1: Connect */}
            <div className="relative group">
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col h-full">
                {/* Visual Container */}
                <div className="h-[240px] bg-muted/10 border-b border-border flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]"></div>

                  {/* Connect Micro UI */}
                  <div className="w-full max-w-[240px] bg-card rounded-xl border border-border overflow-hidden relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-8 bg-muted/10 border-b border-border flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          <GitBranch className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-16 bg-muted-foreground/20 rounded-full mb-1.5"></div>
                          <div className="h-1.5 w-24 bg-muted-foreground/10 rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-full h-8 border border-border rounded-lg flex items-center px-2.5 gap-2 bg-muted/10">
                        <SiGithub className="w-4 h-4 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground font-mono">
                          github.com/org/repo
                        </span>
                      </div>
                      <div className="w-full h-8 bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold text-primary-foreground tracking-wide shadow-sm shadow-primary/20">
                        CONNECT
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-3">
                    {t("howItWorks.step1Num")}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t("howItWorks.step1Title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("howItWorks.step1Desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 2: Review */}
            <div className="relative group">
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col h-full">
                {/* Visual Container */}
                <div className="h-[240px] bg-muted/10 border-b border-border flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]"></div>

                  {/* Review Micro UI (Node Graph) */}
                  <div className="relative w-full max-w-[220px] h-[160px] z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    {/* Connections */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line
                        x1="50%"
                        y1="30%"
                        x2="25%"
                        y2="65%"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <line
                        x1="50%"
                        y1="30%"
                        x2="75%"
                        y2="65%"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    {/* Top Node */}
                    <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-primary rounded-xl p-2.5 shadow-sm z-10 flex items-center justify-center">
                      <Network className="w-6 h-6 text-primary" />
                      {/* Checkmark Badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary rounded-full border-2 border-card flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                      </div>
                    </div>

                    {/* Left Node */}
                    <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-2 shadow-sm z-10">
                      <div className="w-4 h-4 rounded bg-muted-foreground/10"></div>
                    </div>

                    {/* Right Node */}
                    <div className="absolute top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-2 shadow-sm z-10">
                      <div className="w-4 h-4 rounded bg-muted-foreground/10"></div>
                    </div>

                    {/* Validation Alert */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-max bg-primary/10 border border-primary/30 rounded-full py-1.5 px-4 flex items-center justify-center gap-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[9px] font-bold text-blue-700 tracking-wider">
                        MAP VALIDATED
                      </span>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-3">
                    {t("howItWorks.step2Num")}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t("howItWorks.step2Title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("howItWorks.step2Desc")}
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 3: Change */}
            <div className="relative group">
              <div className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 flex flex-col h-full">
                {/* Visual Container */}
                <div className="h-[240px] bg-muted/10 border-b border-border flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)]"></div>

                  {/* Change Micro UI (Agent Interface) */}
                  <div className="w-full max-w-[240px] bg-card rounded-xl border border-border overflow-hidden relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="h-7 bg-muted/10 border-b border-border flex items-center px-3 justify-between">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-[8px] text-muted-foreground font-bold tracking-wider">
                          Think4Ever
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-2.5 mb-2 relative">
                        <span className="text-[9px] text-primary font-medium leading-relaxed block">
                          "Implement checkout based on the validated map."
                        </span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-3">
                        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Check
                            className="w-2.5 h-2.5 text-primary"
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-[9px] font-mono font-bold text-blue-700">
                          Context loaded
                        </span>
                      </div>
                      <div className="mt-3 h-1 w-3/4 bg-muted-foreground/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"></div>
                      <div className="mt-1.5 h-1 w-1/2 bg-muted-foreground/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-400"></div>
                      <div className="mt-1.5 h-1 w-5/6 bg-muted-foreground/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500"></div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-3">
                    {t("howItWorks.step3Num")}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t("howItWorks.step3Title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("howItWorks.step3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Keyframes for the line animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slide {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `,
        }}
      />
    </section>
  );
}
