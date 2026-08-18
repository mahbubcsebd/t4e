"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function EnterpriseEvaluation() {
  const { t } = useLanguage();

  const evalList = t("securityPage.evalList") || [
    "Repository and project access",
    "Model-provider data flows",
    "Deployment topology",
    "Usage controls and support",
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f7fafe] border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
              {t("securityPage.evalEyebrow")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
              {t("securityPage.evalTitle")}
            </h2>
            <p className="text-base text-[#465a75] leading-relaxed mb-6">
              {t("securityPage.evalSubtitle")}
            </p>

            <ul className="space-y-3">
              {evalList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#09090d]">
                  <CheckCircle2 className="w-5 h-5 text-[#07A7E1] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column Box */}
          <div className="bg-white border border-[#c8d9ed] rounded-2xl p-8 shadow-xl">
            <span className="text-xs font-extrabold text-[#093cad] uppercase tracking-wider bg-[#eaf0fb] px-3 py-1 rounded-full inline-block mb-3">
              Security Review
            </span>
            <h3 className="text-xl font-bold text-[#09090d] mb-3">
              {t("securityPage.reviewTitle")}
            </h3>
            <p className="text-xs sm:text-sm text-[#465a75] leading-relaxed mb-6">
              {t("securityPage.reviewDesc")}
            </p>
            <a
              href="https://think4ever.com/contact-us/"
              className="btn-primary text-xs py-3 px-6 w-full justify-center"
            >
              <span>Contact Think4Ever</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
