"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export default function TwoWaysIn() {
  const { t } = useLanguage();

  const path1Pills = t("howItWorksPage.path1Pills") || ["architecture", "dependencies", "business flows"];
  const path2Pills = t("howItWorksPage.path2Pills") || ["business intent", "decisions", "acceptance criteria"];

  return (
    <section className="py-16 md:py-20 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
            {t("howItWorksPage.twoWaysEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            {t("howItWorksPage.twoWaysTitle")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("howItWorksPage.twoWaysSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-11 gap-6 items-center max-w-5xl mx-auto">
          {/* Path 1: Code to Design */}
          <div className="md:col-span-5 bg-card border border-border rounded-2xl p-7 hover:border-primary transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("howItWorksPage.path1Tag")}
                </span>
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("howItWorksPage.path1Title")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {t("howItWorksPage.path1Desc")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              {path1Pills.map((pill, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-card border border-border text-muted-foreground px-2.5 py-1 rounded-md">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow Separator */}
          <div className="md:col-span-1 flex justify-center text-primary/40">
            <ArrowRight className="w-8 h-8 rotate-90 md:rotate-0" />
          </div>

          {/* Path 2: Design to Code */}
          <div className="md:col-span-5 bg-card border border-border rounded-2xl p-7 hover:border-primary transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("howItWorksPage.path2Tag")}
                </span>
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t("howItWorksPage.path2Title")}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {t("howItWorksPage.path2Desc")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              {path2Pills.map((pill, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-card border border-border text-muted-foreground px-2.5 py-1 rounded-md">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
