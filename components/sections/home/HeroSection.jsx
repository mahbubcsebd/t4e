"use client";

import Container from "@/components/layout/Container";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Box,
  Code2,
  LayoutTemplate,
} from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeScene, setActiveScene] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  // Auto toggle hero showcase scene every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScene((prev) => (prev === 1 ? 2 : 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-18 lg:py-20 bg-gradient-to-b from-white via-[#f7fafe] to-white border-b border-[#c8d9ed]/40 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold tracking-wide mb-4 border border-[#07A7E1]/20">
              {t("hero.eyebrow")}
            </span>

            {/* Main Headline */}
            <h1 className="md:max-w-[500px] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#09090d] leading-[1.1] mb-5">
              {t("hero.titlePrefix")}
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-[480px] text-base sm:text-lg text-[#465a75] font-normal leading-relaxed mb-8">
              {t("hero.subtitle")}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-4">
              <Link
                href="https://portal.think4ever.com/#/register"
                className="btn-primary w-full sm:w-auto justify-center text-sm py-3 px-7"
              >
                <span>{t("hero.ctaPrimary")}</span>
              </Link>
              <button
                onClick={() => {
                  setVideoId("FY68DuwOf4Q");
                  setIsVideoOpen(true);
                }}
                className="btn-alt w-full sm:w-auto justify-center text-sm py-3 px-6"
              >
                <span>{t("hero.ctaSecondary")}</span>
              </button>
            </div>

            {/* Micro guarantee */}
            <p className="text-xs font-medium text-[#71849c]">
              {t("hero.micro")}
            </p>
          </div>

          {/* Right Column Motion Card */}
          <div className="lg:col-span-6 w-full max-w-full overflow-hidden">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 sm:p-6 shadow-xl shadow-slate-200/50 overflow-hidden min-h-[460px] sm:min-h-0 sm:h-[480px] lg:h-[460px] flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 border-b border-slate-100 pb-3 sm:pb-5 mb-4 sm:mb-6">
                <div className="flex items-center bg-slate-50 p-1 sm:p-1.5 rounded-xl border border-slate-100 shadow-inner w-full sm:w-auto overflow-x-auto hide-scrollbar">
                  <button
                    onClick={() => setActiveScene(1)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`relative flex-1 sm:flex-none px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-[9px] sm:text-[11px] font-semibold tracking-wider transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 whitespace-nowrap ${
                      activeScene === 1
                        ? "text-[#093cad] shadow-sm bg-white border border-slate-200/60"
                        : "text-slate-500 hover:text-[#093cad] border border-transparent"
                    }`}
                  >
                    {t("hero.tabOne")}
                  </button>
                  <button
                    onClick={() => setActiveScene(2)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`relative flex-1 sm:flex-none px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-lg text-[9px] sm:text-[11px] font-semibold tracking-wider transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 whitespace-nowrap ${
                      activeScene === 2
                        ? "text-[#093cad] shadow-sm bg-white border border-slate-200/60"
                        : "text-slate-500 hover:text-[#093cad] border border-transparent"
                    }`}
                  >
                    {t("hero.tabTwo")}
                  </button>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <span
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${activeScene === 1 ? "bg-[#07A7E1] w-4" : "bg-slate-200 w-2"}`}
                  ></span>
                  <span
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${activeScene === 2 ? "bg-[#093cad] w-4" : "bg-slate-200 w-2"}`}
                  ></span>
                </div>
              </div>

              {/* Animated Content Scene */}
              <AnimatePresence mode="wait">
                {activeScene === 1 ? (
                  <motion.div
                    key="scene1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-medium text-[#07A7E1] bg-[#07A7E1]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardOneBadge")}
                      </span>
                      <h3 className="text-xl font-medium text-[#09090d] mt-2 mb-6">
                        {t("hero.cardOneTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-center bg-slate-50/50 p-2.5 sm:p-5 rounded-2xl border border-slate-100 relative">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm relative z-10"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Code2 className="w-3 h-3 text-slate-400" />
                          <small className="text-[8px] sm:text-[9px] font-medium text-slate-500 block uppercase tracking-wider">
                            {t("hero.cardOneRepoTag")}
                          </small>
                        </div>
                        <b className="text-[10px] sm:text-xs font-medium text-[#09090d] block mt-1">
                          {t("hero.cardOneRepoName")}
                        </b>
                        <div className="mt-2 sm:mt-3 space-y-1.5">
                          <div className="h-1 sm:h-1.5 bg-slate-200 rounded-full w-full"></div>
                          <div className="h-1 sm:h-1.5 bg-slate-200 rounded-full w-3/4"></div>
                          <div className="h-1 sm:h-1.5 bg-[#07A7E1] rounded-full w-4/5"></div>
                        </div>
                      </motion.div>

                      {/* Central Interactive Play Button Connection */}
                      <div className="flex items-center justify-center relative px-1 sm:px-6 w-12 sm:w-28 h-full">
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-slate-300"></div>
                          <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-300 -ml-[1px]"></div>
                        </motion.div>

                        {/* Mobile Connecting Line (shorter) */}
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex sm:hidden items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-slate-300"></div>
                          <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-300 -ml-[1px]"></div>
                        </motion.div>

                        {/* The Play Button */}
                        <motion.button
                          initial={{ scale: 0.65, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.0,
                            type: "spring",
                            stiffness: 250,
                            damping: 20,
                          }}
                          onClick={() => {
                            setVideoId("FY68DuwOf4Q");
                            setIsVideoOpen(true);
                          }}
                          className="relative z-20 group flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-[#093cad] rounded-full shadow-lg border-2 border-white hover:scale-105 transition-transform duration-300 outline-none focus:outline-none shrink-0"
                          aria-label={t("hero.watchDemo")}
                        >
                          <Play
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5"
                            fill="currentColor"
                          />
                        </motion.button>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          ease: "easeOut",
                        }}
                        className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm relative z-10"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <LayoutTemplate className="w-3 h-3 text-slate-400" />
                          <small className="text-[8px] sm:text-[9px] font-medium text-slate-500 block uppercase tracking-wider">
                            {t("hero.cardOneBlueprintTag")}
                          </small>
                        </div>
                        <b className="text-[10px] sm:text-xs font-medium text-[#09090d] block mt-1">
                          {t("hero.cardOneBlueprintName")}
                        </b>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 mt-2 sm:mt-3">
                          <span className="bg-slate-50 text-slate-600 text-[8px] sm:text-[9px] font-medium px-1 sm:px-1.5 py-1 sm:py-1.5 rounded border border-slate-200 text-center truncate">
                            {t("hero.nodeBooking")}
                          </span>
                          <span className="bg-slate-50 text-slate-600 text-[8px] sm:text-[9px] font-medium px-1 sm:px-1.5 py-1 sm:py-1.5 rounded border border-slate-200 text-center truncate">
                            {t("hero.nodePayments")}
                          </span>
                          <span className="bg-slate-50 text-slate-600 text-[8px] sm:text-[9px] font-medium px-1 sm:px-1.5 py-1 sm:py-1.5 rounded border border-slate-200 text-center truncate">
                            {t("hero.nodeRefundRule")}
                          </span>
                          <span className="bg-slate-50 text-slate-600 text-[8px] sm:text-[9px] font-medium px-1 sm:px-1.5 py-1 sm:py-1.5 rounded border border-slate-200 text-center truncate">
                            {t("hero.nodeUI")}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-5 flex justify-center text-[13px] font-medium text-slate-500">
                      <span>{t("hero.cardOneFooter")}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="scene2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-medium text-[#093cad] bg-[#093cad]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardTwoBadge")}
                      </span>
                      <h3 className="text-xl font-medium text-[#09090d] mt-2 mb-6">
                        {t("hero.cardTwoTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-center bg-slate-50/50 p-2.5 sm:p-5 rounded-2xl border border-slate-100 relative">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm relative z-10 h-full flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Box className="w-3 h-3 text-slate-400" />
                          <small className="text-[8px] sm:text-[9px] font-medium text-slate-500 block uppercase tracking-wider">
                            {t("hero.cardTwoIntentTag")}
                          </small>
                        </div>
                        <b className="text-[10px] sm:text-xs font-medium text-[#09090d] block mt-1 leading-snug">
                          {t("hero.cardTwoIntentName")}
                        </b>
                      </motion.div>

                      {/* Central Interactive Play Button Connection */}
                      <div className="flex items-center justify-center relative px-1 sm:px-6 w-12 sm:w-28 h-full">
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden sm:flex items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-slate-300"></div>
                          <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-300 -ml-[1px]"></div>
                        </motion.div>

                        {/* Mobile Connecting Line (shorter) */}
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex sm:hidden items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-slate-300"></div>
                          <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-slate-300 -ml-[1px]"></div>
                        </motion.div>

                        {/* The Play Button */}
                        <motion.button
                          initial={{ scale: 0.65, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.0,
                            type: "spring",
                            stiffness: 250,
                            damping: 20,
                          }}
                          onClick={() => {
                            setVideoId("Lq-vza9_CzI");
                            setIsVideoOpen(true);
                          }}
                          className="relative z-20 group flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 bg-[#093cad] rounded-full shadow-lg border-2 border-white hover:scale-105 transition-transform duration-300 outline-none focus:outline-none shrink-0"
                          aria-label={t("hero.watchDemo")}
                        >
                          <Play
                            className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5"
                            fill="currentColor"
                          />
                        </motion.button>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          ease: "easeOut",
                        }}
                        className="bg-white p-2.5 sm:p-4 rounded-xl border border-slate-200 shadow-sm relative z-10 h-full flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Code2 className="w-3 h-3 text-slate-400" />
                          <small className="text-[8px] sm:text-[9px] font-medium text-slate-500 block uppercase tracking-wider">
                            {t("hero.cardTwoImplTag")}
                          </small>
                        </div>
                        <b className="text-[10px] sm:text-xs font-medium text-[#09090d] block mt-1 leading-snug">
                          {t("hero.cardTwoImplName")}
                        </b>
                        <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 sm:gap-1.5 bg-slate-50 text-slate-600 text-[8px] font-medium px-1.5 sm:px-2 py-1 rounded-md w-fit border border-slate-200 whitespace-nowrap">
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-green-600" />{" "}
                          {t("hero.cardTwoStatus")}
                        </span>
                      </motion.div>
                    </div>

                    <div className="mt-5 flex justify-center text-[13px] font-medium text-slate-500">
                      <span>{t("hero.cardTwoFooter")}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
