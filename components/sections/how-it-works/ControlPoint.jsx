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
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column Copy */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
              {t("howItWorksPage.controlEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
              {t("howItWorksPage.controlTitle")}
            </h2>
            <p className="text-base text-[#465a75] leading-relaxed mb-6">
              {t("howItWorksPage.controlSubtitle")}
            </p>

            <ul className="space-y-3">
              {controlList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#09090d]">
                  <CheckCircle2 className="w-5 h-5 text-[#07A7E1] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Frame */}
          <div className="bg-white border border-[#c8d9ed] rounded-2xl p-6 sm:p-8 shadow-xl relative">
            <div className="bg-[#f2f7fd] border border-[#bcd1e9] rounded-xl p-5 mb-4">
              <span className="text-[10px] font-bold text-[#093cad] uppercase tracking-wider block mb-1">
                {t("howItWorksPage.approvedTag")}
              </span>
              <h4 className="text-sm font-bold text-[#09090d]">
                {t("howItWorksPage.approvedRule")}
              </h4>
            </div>

            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 text-amber-900 text-xs font-semibold flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>{t("howItWorksPage.divergence")}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#c8d9ed]/50">
              {proofPills.map((pill, i) => (
                <span key={i} className="text-xs font-bold text-[#093cad] bg-[#eaf0fb] px-3 py-1.5 rounded-lg border border-[#c8d9ed]">
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
