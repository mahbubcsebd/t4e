"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react";

export default function ControlPoint() {
  const { t } = useLanguage();

  const controlList = t("howItWorksPage.controlList") || [
    "Make hidden assumptions visible",
    "Resolve conflicts between intent and implementation",
    "Give coding agents grounded context",
  ];

  const proofPills = t("howItWorksPage.proofPills") || ["Human decision", "Updated criteria", "Agent context"];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-muted/20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column Copy */}
          <div>
            <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-3">
              {t("howItWorksPage.controlEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              {t("howItWorksPage.controlTitle")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              {t("howItWorksPage.controlSubtitle")}
            </p>

            <ul className="space-y-3">
              {controlList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Frame */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl relative">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-4">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-1">
                {t("howItWorksPage.approvedTag")}
              </span>
              <h4 className="text-sm font-bold text-foreground">
                {t("howItWorksPage.approvedRule")}
              </h4>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 text-amber-900 text-xs font-semibold flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{t("howItWorksPage.divergence")}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
              {proofPills.map((pill, i) => (
                <span key={i} className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                  ✓ {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
