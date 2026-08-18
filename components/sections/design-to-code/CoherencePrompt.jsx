"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CoherencePrompt() {
  const { t } = useLanguage();

  const list = t("designToCodePage.coherenceList") || [
    "Review objectives and business rules",
    "Make architecture decisions explicit",
    "Connect acceptance criteria to implementation",
    "Resolve divergence before execution",
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Copy */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#f2f7ff] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-3">
              {t("designToCodePage.coherenceEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
              {t("designToCodePage.coherenceTitle")}
            </h2>
            <p className="text-base text-[#465a75] leading-relaxed mb-6">
              {t("designToCodePage.coherenceSubtitle")}
            </p>

            <ul className="space-y-3">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#09090d]">
                  <CheckCircle2 className="w-5 h-5 text-[#093cad] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Diagram Mock */}
          <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-11 gap-3 items-center">
              <div className="col-span-5 bg-white p-4 rounded-xl border border-[#bcd1e9]">
                <small className="text-[9px] font-bold text-[#093cad] uppercase block mb-1">
                  APPROVED OBJECTIVE
                </small>
                <strong className="text-xs font-bold text-[#09090d] block leading-snug">
                  Refunds remain reviewable and customer-visible.
                </strong>
                <span className="inline-block mt-2 bg-[#eaf0fb] text-[#093cad] text-[9px] font-bold px-2 py-0.5 rounded">
                  Approved blueprint
                </span>
              </div>

              <div className="col-span-1 flex justify-center text-[#093cad]">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="col-span-5 bg-white p-4 rounded-xl border border-[#bcd1e9]">
                <small className="text-[9px] font-bold text-[#4670a7] uppercase block mb-1">
                  IMPLEMENTATION CONTEXT
                </small>
                <strong className="text-xs font-bold text-[#09090d] block leading-snug">
                  Rule + workflow + acceptance criteria
                </strong>
                <span className="inline-block mt-2 bg-[#e0f7ed] text-[#167451] text-[9px] font-bold px-2 py-0.5 rounded">
                  ✓ objective preserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
