"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Link2, CheckSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t("howItWorks.step1Num"),
      title: t("howItWorks.step1Title"),
      desc: t("howItWorks.step1Desc"),
      icon: <Link2 className="w-6 h-6 text-[#07A7E1]" />,
      highlight: "< 4 min",
      subtext: "ANY REPO, ZERO CONFIG",
    },
    {
      num: t("howItWorks.step2Num"),
      title: t("howItWorks.step2Title"),
      desc: t("howItWorks.step2Desc"),
      icon: <CheckSquare className="w-6 h-6 text-[#093cad]" />,
      highlight: "157+",
      subtext: "TECH STACKS SUPPORTED",
    },
    {
      num: t("howItWorks.step3Num"),
      title: t("howItWorks.step3Title"),
      desc: t("howItWorks.step3Desc"),
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      highlight: "299+",
      subtext: "PRE-BUILT ARCHITECTURES",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-[#f8fafc] relative overflow-hidden"
      id="how-it-works"
    >
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#ededf0] whitespace-nowrap">
          HOW
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
              {t("howItWorks.eyebrow")}
            </span>
            <span className="w-16 h-[1px] bg-zinc-300 inline-block" />
          </motion.div>

          {/* Right heading */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="text-[28px] sm:text-[40px] md:text-[54px] lg:text-[60px] font-bold text-[#09090d] leading-[1.1] tracking-tight">
              <span className="text-gradient">{t("howItWorks.title")}</span>
            </h2>
          </motion.div>
        </div>

        {/* 3 Step Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-white rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative"
            >
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-extrabold text-[#093cad] bg-[#eaf0fb] px-3 py-1 rounded-full uppercase tracking-wider">
                      {s.num}
                    </span>
                    <div className="p-3 bg-[#f2f7ff] rounded-xl border border-zinc-200/60 shadow-sm group-hover:scale-110 transition-transform">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#09090d] mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-zinc-500 leading-[1.6] font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-1.5 pt-5 border-t border-zinc-200/60">
                  <span className="text-[18px] md:text-[20px] font-bold tracking-tight text-gradient">
                    {s.highlight}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    {s.subtext}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
