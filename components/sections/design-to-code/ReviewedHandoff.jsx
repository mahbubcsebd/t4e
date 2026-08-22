"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Target, CheckSquare, Sparkles } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function ReviewedHandoff() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t("designToCodePage.step1Num"),
      title: t("designToCodePage.step1Title"),
      desc: t("designToCodePage.step1Desc"),
      icon: <Target className="w-8 h-8 text-primary relative z-10" />,
    },
    {
      num: t("designToCodePage.step2Num"),
      title: t("designToCodePage.step2Title"),
      desc: t("designToCodePage.step2Desc"),
      icon: <CheckSquare className="w-8 h-8 text-primary relative z-10" />,
    },
    {
      num: t("designToCodePage.step3Num"),
      title: t("designToCodePage.step3Title"),
      desc: t("designToCodePage.step3Desc"),
      icon: <Sparkles className="w-8 h-8 text-primary relative z-10" />,
    },
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border bg-background overflow-hidden">
      <SectionCard>
        <Container>
          <SectionHeading
            align="center"
            eyebrow={t("designToCodePage.handoffEyebrow")}
            title={t("designToCodePage.handoffTitle")}
            className="mb-14"
          />

          <div className="relative">
            {/* Horizontal connection line (Desktop) */}
            <div className="hidden lg:block absolute top-[80px] left-[15%] right-[15%] border-t-2 border-dashed border-border/80 z-0">
              {/* Animated particle moving across */}
              <div className="absolute top-[-5px] left-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(9,60,173,0.8)] animate-[slide_4s_ease-in-out_infinite]"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 relative z-10">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-border/60 rounded-xl hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden group flex flex-col h-full"
                >
                  {/* Top Visual Area */}
                  <div className="h-[180px] bg-white border-b border-border/40 flex items-center justify-center relative overflow-hidden">
                    {/* Number Badge */}
                    <span className="absolute top-6 left-6 text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider border border-primary/20 shadow-sm">
                      {s.num}
                    </span>

                    {/* Icon Container */}
                    <div className="relative p-5 rounded-2xl bg-white border border-border/80 shadow-md group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-primary/20 transition-all duration-500 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {s.icon}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 sm:p-10 flex flex-col flex-1 bg-white">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
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
