"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-base sm:text-lg text-[#465a75] font-normal leading-relaxed mb-8 max-w-xl">
              {t("hero.subtitle")}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-4">
              <Link
                href="#register"
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
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-[#bcd1e9] bg-gradient-to-br from-[#f9fcff] to-[#ebf4ff] p-6 shadow-2xl shadow-[#142f58]/10 overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col justify-between">
              {/* Scene Switcher Pills */}
              <div className="flex items-center justify-between border-b border-[#c8d9ed]/60 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveScene(1)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeScene === 1
                        ? "bg-[#093cad] text-white shadow-md shadow-[#093cad]/20"
                        : "bg-white text-[#465a75] hover:bg-slate-100"
                    }`}
                  >
                    CODE → DESIGN
                  </button>
                  <button
                    onClick={() => setActiveScene(2)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeScene === 2
                        ? "bg-[#093cad] text-white shadow-md shadow-[#093cad]/20"
                        : "bg-white text-[#465a75] hover:bg-slate-100"
                    }`}
                  >
                    DESIGN → CODE
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${activeScene === 1 ? "bg-[#07A7E1]" : "bg-slate-300"}`}
                  ></span>
                  <span
                    className={`w-2 h-2 rounded-full ${activeScene === 2 ? "bg-[#07A7E1]" : "bg-slate-300"}`}
                  ></span>
                </div>
              </div>

              {/* Animated Content Scene */}
              <AnimatePresence mode="wait">
                {activeScene === 1 ? (
                  <motion.div
                    key="scene1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#0679a4] bg-[#e7f7fc] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardOneBadge")}
                      </span>
                      <h3 className="text-xl font-bold text-[#09090d] mt-2 mb-6">
                        {t("hero.cardOneTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-11 gap-2 items-center bg-white p-4 rounded-xl border border-[#bcd1e9]">
                      <div className="col-span-5 bg-[#f2f7fd] p-3 rounded-lg border border-[#a8c3e2]">
                        <small className="text-[9px] font-bold text-[#4670a7] block uppercase">
                          {t("hero.cardOneRepoTag")}
                        </small>
                        <b className="text-xs font-bold text-[#09090d] block mt-1">
                          {t("hero.cardOneRepoName")}
                        </b>
                        <div className="mt-2 space-y-1">
                          <div className="h-1.5 bg-[#a9b9cc] rounded-full w-full"></div>
                          <div className="h-1.5 bg-[#a9b9cc] rounded-full w-3/4"></div>
                          <div className="h-1.5 bg-[#07A7E1] rounded-full w-4/5"></div>
                        </div>
                      </div>

                      <div className="col-span-1 flex justify-center text-[#07A7E1]">
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </div>

                      <div className="col-span-5 bg-[#f2f7fd] p-3 rounded-lg border border-[#a8c3e2]">
                        <small className="text-[9px] font-bold text-[#4670a7] block uppercase">
                          {t("hero.cardOneBlueprintTag")}
                        </small>
                        <b className="text-xs font-bold text-[#09090d] block mt-1">
                          {t("hero.cardOneBlueprintName")}
                        </b>
                        <div className="grid grid-cols-2 gap-1.5 mt-2">
                          <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-1.5 py-1 rounded border border-[#07A7E1]/30">
                            Booking
                          </span>
                          <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-1.5 py-1 rounded border border-[#07A7E1]/30">
                            Payments
                          </span>
                          <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-1.5 py-1 rounded border border-[#07A7E1]/30">
                            Refund rule
                          </span>
                          <span className="bg-[#eaf4ff] text-[#093cad] text-[9px] font-semibold px-1.5 py-1 rounded border border-[#07A7E1]/30">
                            UI
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-medium text-[#465a75]">
                      <span>Living repository map synced in real-time</span>
                      <button
                        onClick={() => {
                          setVideoId("FY68DuwOf4Q");
                          setIsVideoOpen(true);
                        }}
                        className="text-[#093cad] font-bold flex items-center gap-1 hover:underline focus:outline-none"
                      >
                        <Play className="w-3 h-3 fill-current" /> Watch Demo
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="scene2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-bold text-[#093cad] bg-[#eaf0fb] px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardTwoBadge")}
                      </span>
                      <h3 className="text-xl font-bold text-[#09090d] mt-2 mb-6">
                        {t("hero.cardTwoTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-11 gap-2 items-center bg-white p-4 rounded-xl border border-[#bcd1e9]">
                      <div className="col-span-5 bg-[#f2f7fd] p-3 rounded-lg border border-[#a8c3e2]">
                        <small className="text-[9px] font-bold text-[#4670a7] block uppercase">
                          {t("hero.cardTwoIntentTag")}
                        </small>
                        <b className="text-xs font-bold text-[#09090d] block mt-1 leading-snug">
                          {t("hero.cardTwoIntentName")}
                        </b>
                      </div>

                      <div className="col-span-1 flex justify-center text-[#093cad]">
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </div>

                      <div className="col-span-5 bg-[#f2f7fd] p-3 rounded-lg border border-[#a8c3e2] relative">
                        <small className="text-[9px] font-bold text-[#4670a7] block uppercase">
                          {t("hero.cardTwoImplTag")}
                        </small>
                        <b className="text-xs font-bold text-[#09090d] block mt-1 leading-snug">
                          {t("hero.cardTwoImplName")}
                        </b>
                        <span className="mt-2 inline-flex items-center gap-1 bg-[#e0f7ed] text-[#167451] text-[9px] font-bold px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3 h-3" />{" "}
                          {t("hero.cardTwoStatus")}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-medium text-[#465a75]">
                      <span>
                        Approved intent enforced before code execution
                      </span>
                      <button
                        onClick={() => {
                          setVideoId("Lq-vza9_CzI");
                          setIsVideoOpen(true);
                        }}
                        className="text-[#093cad] font-bold flex items-center gap-1 hover:underline focus:outline-none"
                      >
                        <Play className="w-3 h-3 fill-current" /> Watch Demo
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
