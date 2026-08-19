"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Layout, Workflow, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductModelSection() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Cpu className="w-5 h-5 text-[#07A7E1]" />,
      tag: t("productModel.persp1Tag"),
      title: t("productModel.persp1Title"),
      highlight: "Architecture-first",
      subtext: "BEFORE EVERY COMMIT",
    },
    {
      icon: <Layout className="w-5 h-5 text-[#093cad]" />,
      tag: t("productModel.persp2Tag"),
      title: t("productModel.persp2Title"),
      highlight: "Business aligned",
      subtext: "ONE SHARED BLUEPRINT",
    },
    {
      icon: <Workflow className="w-5 h-5 text-indigo-600" />,
      tag: t("productModel.persp3Tag"),
      title: t("productModel.persp3Title"),
      highlight: "Operations ready",
      subtext: "WORKFLOW DRIVEN",
    },
    {
      icon: <Database className="w-5 h-5 text-cyan-600" />,
      tag: t("productModel.persp4Tag"),
      title: t("productModel.persp4Title"),
      highlight: "MCP-native",
      subtext: "NO LOCK-IN. NO CONTEXT LOSS.",
    },
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-white relative overflow-hidden"
      id="product"
    >
      {/* Background Watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-0 select-none">
        <span className="font-bold font-sans text-[24vw] uppercase tracking-tighter leading-none text-[#f5f5f5] whitespace-nowrap">
          BLUEPRINT
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
              {t("productModel.eyebrow")}
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
              <span className="text-gradient">{t("productModel.title")}</span>
            </h2>
            <p className="text-[15px] lg:text-[16px] text-zinc-500 leading-[1.6] max-w-xl">
              {t("productModel.subtitle")}
            </p>
          </motion.div>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex bg-[#f8fafc]/50 rounded-3xl border border-zinc-200/60 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] h-full relative"
            >
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-[#093cad] uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#09090d] leading-[1.3] mb-3">
                    {card.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-1.5 pt-5 border-t border-zinc-200/60">
                  <span className="text-[16px] md:text-[18px] font-bold tracking-tight inline-block w-fit text-gradient">
                    {card.highlight}
                  </span>
                  <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    {card.subtext}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Blueprint Bar */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#093cad] to-[#07A7E1] p-6 rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold text-white/80 uppercase tracking-widest block">
                  {t("productModel.centerTag")}
                </span>
                <strong className="text-base sm:text-lg font-bold block">
                  {t("productModel.centerTitle")}
                </strong>
              </div>
            </div>
            <span className="bg-white text-[#093cad] text-xs font-bold px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
              Real-time Sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
