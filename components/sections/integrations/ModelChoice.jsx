"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Brain, Cpu } from "lucide-react";

export default function ModelChoice() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("integrationsPage.modelsEyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
            {t("integrationsPage.modelsTitle")}
          </h2>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("integrationsPage.modelsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f2f7ff] border border-[#c8d9ed]/50">
                <Brain className="w-5 h-5 text-[#093cad]" />
              </div>
              <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider bg-[#eaf0fb] px-3 py-1 rounded-full">
                {t("integrationsPage.model1Tag")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#09090d] mb-2">
              {t("integrationsPage.model1Title")}
            </h3>
            <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
              {t("integrationsPage.model1Desc")}
            </p>
          </div>

          <div className="bg-white border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#f2f7ff] border border-[#c8d9ed]/50">
                <Cpu className="w-5 h-5 text-[#07A7E1]" />
              </div>
              <span className="text-xs font-bold text-[#07A7E1] uppercase tracking-wider bg-[#e7f7fc] px-3 py-1 rounded-full">
                {t("integrationsPage.model2Tag")}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#09090d] mb-2">
              {t("integrationsPage.model2Title")}
            </h3>
            <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed">
              {t("integrationsPage.model2Desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
