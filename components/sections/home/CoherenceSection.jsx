"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AlertCircle, AlertOctagon, CheckCircle } from "lucide-react";

export default function CoherenceSection() {
  const { t } = useLanguage();

  const impactNodes = t("coherence.nodes") || [
    "Refund policy",
    "Payments API",
    "Customer UI",
    "Notifications",
    "Acceptance tests",
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40" id="code-to-design">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("coherence.eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
            {t("coherence.titlePrefix")}
            <span className="text-gradient underline decoration-[#07A7E1]/30">
              {t("coherence.titleHighlight")}
            </span>
          </h2>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("coherence.subtitle")}
          </p>
        </div>

        {/* Approval Comparison Panel */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            {/* Approved Business Intent */}
            <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-6 shadow-md relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("coherence.approvedTag")}
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <strong className="text-base font-bold text-[#09090d] block mb-2">
                {t("coherence.approvedTitle")}
              </strong>
              <p className="text-xs text-[#465a75]">
                {t("coherence.approvedDesc")}
              </p>
            </div>

            {/* Proposed Implementation (Conflict) */}
            <div className="bg-[#fff8f9] border-2 border-rose-400/50 rounded-2xl p-6 shadow-md relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("coherence.proposedTag")}
                </span>
                <AlertOctagon className="w-5 h-5 text-rose-500" />
              </div>
              <strong className="text-base font-bold text-rose-900 block mb-2">
                {t("coherence.proposedTitle")}
              </strong>
              <p className="text-xs text-rose-700">
                {t("coherence.proposedDesc")}
              </p>
            </div>
          </div>

          {/* Coherence Check Alert Banner */}
          <div className="bg-gradient-to-r from-rose-500 to-amber-500 text-white p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <AlertCircle className="w-6 h-6 shrink-0 text-white" />
              <div>
                <span className="text-[10px] font-extrabold text-white/80 uppercase tracking-wider block">
                  {t("coherence.alertTag")}
                </span>
                <strong className="text-sm sm:text-base font-bold block">
                  {t("coherence.alertTitle")}
                </strong>
              </div>
            </div>

            <span className="bg-white text-rose-600 text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm">
              {t("coherence.alertDesc")}
            </span>
          </div>

          {/* Change Impact Nodes */}
          <div className="bg-white border border-[#c8d9ed] rounded-2xl p-6">
            <div className="mb-3">
              <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block">
                {t("coherence.impactTag")}
              </span>
              <strong className="text-sm font-bold text-[#09090d]">
                {t("coherence.impactTitle")}
              </strong>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {impactNodes.map((node, i) => (
                <span
                  key={i}
                  className="bg-[#f2f7ff] border border-[#c8d9ed] text-[#314865] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#07A7E1]"></span>
                  {node}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
