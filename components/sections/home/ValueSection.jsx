"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Eye, ShieldCheck, SlidersHorizontal, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import CodingToolPills from "@/components/ui/CodingToolPills";

export default function ValueSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Eye className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("values.card1Tag"),
      title: t("values.card1Title"),
      desc: t("values.card1Desc"),
      highlight: "Full visibility",
      subtext: "EVERY ROLE, ONE VIEW",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#093cad]" />,
      tag: t("values.card2Tag"),
      title: t("values.card2Title"),
      desc: t("values.card2Desc"),
      highlight: "Intent-preserved",
      subtext: "BUSINESS RULES ENFORCED",
    },
    {
      icon: <SlidersHorizontal className="w-5 h-5 text-indigo-600" />,
      tag: t("values.card3Tag"),
      title: t("values.card3Title"),
      desc: t("values.card3Desc"),
      highlight: "Tool-agnostic",
      subtext: "YOUR TOOLS. YOUR CALL.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f5f5f5] whitespace-nowrap">
          VALUES
        </span>
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* 3 Value Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-sm group-hover:scale-110 transition-transform">
                      {v.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#093cad] uppercase bg-[#eaf0fb] px-3 py-1 rounded-full">
                      {v.tag}
                    </span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#09090d] mb-3 leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal">
                    {v.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-1.5 pt-5 border-t border-zinc-200/60">
                  <span className="text-[16px] md:text-[18px] font-bold tracking-tight text-gradient">
                    {v.highlight}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    {v.subtext}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compatibility Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-[#093cad] to-[#07A7E1] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <div>
              <strong className="text-base font-bold text-white block">
                {t("values.compatTitle")}
              </strong>
              <p className="text-sm text-white/80 mt-1 max-w-xl">
                {t("values.compatDesc")}
              </p>
            </div>
          </div>
          <CodingToolPills variant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
