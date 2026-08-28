"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { useLanguage } from "@/context/LanguageContext";
import {
  Check,
  CheckCircle2,
  GitBranch,
  Network,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-4 md:py-6 lg:py-8 " id="how-it-works">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
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
              <div className="absolute top-[-5px] left-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_#093cad] animate-[slide_4s_ease-in-out_infinite]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 relative z-10">
              {/* STEP 1: Connect */}
              <div className="relative group">
                <div className="gemini-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
                  {/* Visual Container */}
                  <div className="h-[240px] bg-slate-50/50 border-b border-border/50 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,60,173,0.05)_0%,transparent_70%)]"></div>

                    {/* Connect Micro UI */}
                    <div className="w-full max-w-[260px] bg-card rounded-xl border border-border overflow-hidden relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="h-8 bg-muted/10 border-b border-border flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                      </div>
                      <div className="p-4 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <GitBranch className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-16 bg-muted-foreground/20 rounded-full mb-1.5"></div>
                            <div className="h-1.5 w-24 bg-muted-foreground/10 rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-full h-9 border border-border rounded-lg flex items-center px-3 gap-2 bg-muted/10">
                          <SiGithub className="w-4 h-4 text-muted-foreground" />
                          <span className="text-[11px] text-muted-foreground font-mono">
                            github.com/org/repo
                          </span>
                        </div>
                        <div className="w-full h-9 bg-primary rounded-lg flex items-center justify-center text-[11px] font-bold text-primary-foreground tracking-wide shadow-primary/20">
                          CONNECT
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-2">
                      {t("howItWorks.step1Num")}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t("howItWorks.step1Title")}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step1Desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 2: Review */}
              <div className="relative group">
                <div className="gemini-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
                  {/* Visual Container */}
                  <div className="h-[240px] bg-slate-50/50 border-b border-border/50 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,60,173,0.05)_0%,transparent_70%)]"></div>

                    {/* Review Micro UI (Node Graph) */}
                    <div className="relative w-full max-w-[240px] h-[170px] z-10 group-hover:-translate-y-2 transition-transform duration-500">
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
                      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-primary rounded-xl p-3 z-10 flex items-center justify-center">
                        <Network className="w-6 h-6 text-primary" />
                        {/* Checkmark Badge */}
                        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary rounded-full border-2 border-card flex items-center justify-center">
                          <Check
                            className="w-3 h-3 text-primary-foreground"
                            strokeWidth={3}
                          />
                        </div>
                      </div>

                      {/* Left Node */}
                      <div className="absolute top-[65%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-2.5 z-10">
                        <div className="w-5 h-5 rounded bg-muted-foreground/10"></div>
                      </div>

                      {/* Right Node */}
                      <div className="absolute top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-card border border-border rounded-lg p-2.5 z-10">
                        <div className="w-5 h-5 rounded bg-muted-foreground/10"></div>
                      </div>

                      {/* Validation Alert */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-max bg-primary/10 border border-primary/30 rounded-full py-1.5 px-4 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-blue-700 tracking-wider">
                          MAP VALIDATED
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-2">
                      {t("howItWorks.step2Num")}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t("howItWorks.step2Title")}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step2Desc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* STEP 3: Change */}
              <div className="relative group">
                <div className="gemini-card rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-500 flex flex-col h-full">
                  {/* Visual Container */}
                  <div className="h-[240px] bg-slate-50/50 border-b border-border/50 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,60,173,0.05)_0%,transparent_70%)]"></div>

                    {/* Change Micro UI (Agent Interface) */}
                    <div className="w-full max-w-[260px] bg-card rounded-xl border border-border overflow-hidden relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="h-8 bg-muted/10 border-b border-border flex items-center px-4 justify-between">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                          <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                          <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[9px] text-muted-foreground font-bold tracking-wider">
                            Think4Ever
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="bg-primary/10 border border-primary/30 rounded-lg p-2.5 mb-3 relative">
                          <span className="text-[11px] text-primary font-medium leading-relaxed block">
                            "Implement checkout based on the validated map."
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 mt-3">
                          <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <Check
                              className="w-2.5 h-2.5 text-primary"
                              strokeWidth={3}
                            />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-blue-700">
                            Context loaded
                          </span>
                        </div>
                        <div className="mt-3 h-1.5 w-3/4 bg-muted-foreground/10 rounded-full"></div>
                        <div className="mt-2 h-1.5 w-1/2 bg-muted-foreground/10 rounded-full"></div>
                        <div className="mt-2 h-1.5 w-5/6 bg-muted-foreground/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-2">
                      {t("howItWorks.step3Num")}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {t("howItWorks.step3Title")}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {t("howItWorks.step3Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

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
