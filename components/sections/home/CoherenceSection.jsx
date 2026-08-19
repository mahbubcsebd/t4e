"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { AlertCircle, AlertOctagon, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section
      className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-[#f8fafc] relative overflow-hidden"
      id="code-to-design"
    >
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#ededf0] whitespace-nowrap">
          COHERENCE
        </span>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Section Label + Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          {/* Left label */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 lg:mt-[22px] lg:justify-end lg:pr-12"
          >
            <span className="text-[#353B3E] font-medium text-[13px] md:text-[17px] leading-[1.6] tracking-[4px] md:tracking-[8px] uppercase whitespace-nowrap">
              {t("coherence.eyebrow")}
            </span>
            <span className="w-16 h-[1px] bg-zinc-300 inline-block" />
          </motion.div>

          {/* Right heading */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090d] leading-[1.1] tracking-tight">
              {t("coherence.titlePrefix")}
              <span className="text-gradient"> {t("coherence.titleHighlight")}</span>
            </h2>
            <p className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] max-w-xl">
              {t("coherence.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* Approval Comparison Panel */}
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-4 items-stretch"
          >
            {/* Approved Business Intent */}
            <div className="bg-white border-2 border-emerald-500/40 rounded-3xl p-7 shadow-md relative h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("coherence.approvedTag")}
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-500" />
              </div>
              <strong className="text-base font-bold text-[#09090d] block mb-2">
                {t("coherence.approvedTitle")}
              </strong>
              <p className="text-[14px] text-zinc-500 leading-relaxed">
                {t("coherence.approvedDesc")}
              </p>
            </div>

            {/* Proposed Implementation (Conflict) */}
            <div className="bg-[#fff8f9] border-2 border-rose-400/50 rounded-3xl p-7 shadow-md relative h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold text-rose-700 bg-rose-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("coherence.proposedTag")}
                </span>
                <AlertOctagon className="w-5 h-5 text-rose-500" />
              </div>
              <strong className="text-base font-bold text-rose-900 block mb-2">
                {t("coherence.proposedTitle")}
              </strong>
              <p className="text-[14px] text-rose-700 leading-relaxed">
                {t("coherence.proposedDesc")}
              </p>
            </div>
          </motion.div>

          {/* Coherence Check Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-gradient-to-r from-rose-500 to-amber-500 text-white p-6 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
          >
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
          </motion.div>

          {/* Change Impact Nodes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-zinc-200/60 rounded-3xl p-7 shadow-sm"
          >
            <div className="mb-4">
              <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block">
                {t("coherence.impactTag")}
              </span>
              <strong className="text-sm font-bold text-[#09090d]">
                {t("coherence.impactTitle")}
              </strong>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
