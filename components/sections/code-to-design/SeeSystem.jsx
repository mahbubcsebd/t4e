"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SeeSystem() {
  const { t } = useLanguage();

  const seeSystemList = t("codeToDesignPage.seeSystemList") || [
    "Architecture and service boundaries",
    "Dependencies and data movement",
    "Business workflows and rules",
    "Change impact across the system",
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Diagram Mock */}
          <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-11 gap-3 items-center">
              <div className="col-span-5 bg-white p-4 rounded-xl border border-[#bcd1e9]">
                <small className="text-[9px] font-bold text-[#4670a7] uppercase block mb-1">
                  appointment-platform
                </small>
                <strong className="text-xs font-bold text-[#09090d] block mb-2">src/</strong>
                <div className="text-[10px] text-[#465a75] font-mono leading-relaxed space-y-1">
                  <div>services/booking</div>
                  <div>policies/refunds</div>
                  <div>payments</div>
                  <div>customer-ui</div>
                </div>
              </div>

              <div className="col-span-1 flex justify-center text-[#07A7E1]">
                <ArrowRight className="w-5 h-5" />
              </div>

              <div className="col-span-5 bg-white p-4 rounded-xl border border-[#bcd1e9]">
                <small className="text-[9px] font-bold text-[#4670a7] uppercase block mb-1">
                  LIVING BLUEPRINT
                </small>
                <strong className="text-xs font-bold text-[#09090d] block mb-2">Connected system</strong>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-2 py-0.5 rounded">Booking</span>
                  <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-2 py-0.5 rounded">Payments</span>
                  <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-2 py-0.5 rounded">Refund rule</span>
                  <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-2 py-0.5 rounded">UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Copy */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
              {t("codeToDesignPage.seeSystemEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
              {t("codeToDesignPage.seeSystemTitle")}
            </h2>
            <p className="text-base text-[#465a75] leading-relaxed mb-6">
              {t("codeToDesignPage.seeSystemSubtitle")}
            </p>

            <ul className="space-y-3">
              {seeSystemList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#09090d]">
                  <CheckCircle2 className="w-5 h-5 text-[#07A7E1] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
