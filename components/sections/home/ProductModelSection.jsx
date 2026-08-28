"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { useLanguage } from "@/context/LanguageContext";
import {
  Cpu,
  Database,
  Layers,
  Layout,
  RefreshCw,
  Workflow,
} from "lucide-react";

export default function ProductModelSection() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-8 lg:py-12 " id="product">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          {/* Editorial Header */}
          <SectionHeading
            eyebrow={t("productModel.eyebrow")}
            title={t("productModel.title")}
            subtitle={t("productModel.subtitle")}
          />

          {/* The Blueprint Architecture Visual */}
          <div className="relative w-full mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
              {/* Left Column (Perspectives 1 & 3) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-2 lg:order-1">
                {/* Perspective 1: Engineering */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -right-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp1Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp1Title")}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Perspective 3: Operations */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -right-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp3Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp3Title")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column (Universal Meta-Model Core) */}
              <div className="lg:col-span-4 flex justify-center relative z-20 order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="relative w-full max-w-sm h-full flex flex-col">
                  {/* Glowing Background Effect */}
                  <div className="absolute inset-0 bg-primary blur-2xl opacity-10 rounded-xl"></div>

                  <div className="gemini-card rounded-xl p-8 relative overflow-hidden group flex-1 flex flex-col items-center justify-center min-h-[280px]">
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 mb-6 group-hover:scale-105 transition-transform duration-500">
                        <Layers className="w-10 h-10 text-white" />
                      </div>

                      <span className="inline-block px-3 py-1 bg-card text-primary border border-primary/30 rounded-md text-[10px] font-extrabold uppercase tracking-widest mb-3">
                        {t("productModel.centerTag")}
                      </span>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-5">
                        {t("productModel.centerTitle")}
                      </h3>

                      <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-primary bg-blue-50 px-3 py-1.5 rounded-full border border-primary/20">
                        <RefreshCw
                          className="w-3.5 h-3.5 animate-spin-slow"
                          style={{ animationDuration: "4s" }}
                        />
                        Real-time Sync
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Perspectives 2 & 4) */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:gap-16 relative z-10 order-3">
                {/* Perspective 2: Product */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -left-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp2Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp2Title")}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Perspective 4: Business */}
                <div className="gemini-card rounded-xl p-6  hover:-translate-y-1 transition-all duration-300 relative group h-full flex flex-col justify-center">
                  {/* Connecting Line to Center */}
                  <div className="absolute -left-[120px] top-1/2 w-[120px] border-t-2 border-dotted border-border/80 hidden lg:block z-[-1]"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-primary border border-primary/20 shrink-0">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">
                        {t("productModel.persp4Tag")}
                      </span>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {t("productModel.persp4Title")}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
