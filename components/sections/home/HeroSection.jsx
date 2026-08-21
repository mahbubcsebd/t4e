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
import { Button } from "@/components/ui/button";

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
    <section className="py-12 md:py-18 lg:py-20 border-b border-border overflow-hidden bg-background transition-colors duration-300">
      <Container>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-12 lg:mb-16 pt-8">
          {/* Eyebrow */}
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6 border border-blue-200">
            {t("hero.eyebrow")}
          </span>

          {/* Main Headline */}
          <h1 className="text-muted-foregroundxl sm:text-muted-foregroundxl md:text-[56px] lg:text-[64px] font-extrabold tracking-tight text-foreground leading-[1.05] mb-6">
            {t("hero.titlePrefix")}
            <br className="hidden md:block" />
            <span className="text-blue-600"> {t("hero.titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-[640px] text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed mb-8">
            {t("hero.subtitle")}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-6">
            <Button asChild className="w-full sm:w-auto">
              <Link href="https://portal.think4ever.com/#/register">
                {t("hero.ctaPrimary")}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                setVideoId("FY68DuwOf4Q");
                setIsVideoOpen(true);
              }}
            >
              {t("hero.ctaSecondary")}
            </Button>
          </div>

          {/* Micro guarantee */}
          <p className="text-xs font-medium text-muted-foreground">
            {t("hero.micro")}
          </p>
        </div>

        {/* The Massive Visual Block */}
        <div className="w-full max-w-5xl mx-auto overflow-hidden">
          <div className="relative rounded-3xl border border-border bg-card p-2 sm:p-4 shadow-2xl">
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 border-b border-border pb-3 sm:pb-5 mb-4 sm:mb-8 relative z-10">
                <div className="flex items-center bg-muted p-1 sm:p-1.5 rounded-xl border border-border w-full sm:w-auto overflow-x-auto hide-scrollbar">
                  <button
                    onClick={() => setActiveScene(1)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 whitespace-nowrap ${
                      activeScene === 1
                        ? "text-blue-600 shadow-sm bg-card border border-border"
                        : "text-muted-foreground hover:text-blue-600 border border-transparent"
                    }`}
                  >
                    {t("hero.tabOne")}
                  </button>
                  <button
                    onClick={() => setActiveScene(2)}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[10px] sm:text-xs font-bold tracking-wider transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 whitespace-nowrap ${
                      activeScene === 2
                        ? "text-blue-600 shadow-sm bg-card border border-border"
                        : "text-muted-foreground hover:text-blue-600 border border-transparent"
                    }`}
                  >
                    {t("hero.tabTwo")}
                  </button>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <span
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${activeScene === 1 ? "bg-blue-600 w-4" : "bg-gray-200 w-2"}`}
                  ></span>
                  <span
                    className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${activeScene === 2 ? "bg-blue-600 w-4" : "bg-slate-200 w-2"}`}
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
                    className="flex-1 flex flex-col justify-between relative z-10"
                  >
                    <div className="text-center mb-8">
                      <span className="inline-block text-[11px] font-medium text-blue-600 bg-blue-600/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardOneBadge")}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-3">
                        {t("hero.cardOneTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center bg-muted/50 p-4 sm:p-8 rounded-2xl border border-border relative max-w-4xl mx-auto w-full">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-card p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm relative z-10"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <Code2 className="w-4 h-4 text-muted-foreground" />
                          <small className="text-[9px] sm:text-[10px] font-bold text-muted-foreground block uppercase tracking-wider">
                            {t("hero.cardOneRepoTag")}
                          </small>
                        </div>
                        <b className="text-xs sm:text-sm font-bold text-foreground block mt-1">
                          {t("hero.cardOneRepoName")}
                        </b>
                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full w-full"></div>
                          <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full w-3/4"></div>
                          <div className="h-1.5 sm:h-2 bg-blue-600 rounded-full w-4/5"></div>
                        </div>
                      </motion.div>

                      {/* Central Interactive Play Button Connection */}
                      <div className="flex items-center justify-center relative py-4 md:py-0 md:px-8 w-full md:w-32 h-full">
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-border"></div>
                          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-border -ml-[1px]"></div>
                        </motion.div>

                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originY: 0 }}
                          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center z-0"
                        >
                          <div className="flex-grow w-[2px] bg-border"></div>
                          <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] border-t-border -mt-[1px]"></div>
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
                          className="relative z-20 group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full shadow-lg border-4 border-background hover:scale-105 transition-transform duration-300 outline-none focus:outline-none shrink-0"
                          aria-label={t("hero.watchDemo")}
                        >
                          <Play
                            className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-1"
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
                        className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm relative z-10"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <LayoutTemplate className="w-4 h-4 text-muted-foreground" />
                          <small className="text-[9px] sm:text-[10px] font-bold text-muted-foreground block uppercase tracking-wider">
                            {t("hero.cardOneBlueprintTag")}
                          </small>
                        </div>
                        <b className="text-xs sm:text-sm font-bold text-foreground block mt-1">
                          {t("hero.cardOneBlueprintName")}
                        </b>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          <span className="bg-muted text-muted-foreground text-[9px] sm:text-[11px] font-medium px-2 py-2 rounded-md border border-border text-center truncate">
                            {t("hero.nodeBooking")}
                          </span>
                          <span className="bg-muted text-muted-foreground text-[9px] sm:text-[11px] font-medium px-2 py-2 rounded-md border border-border text-center truncate">
                            {t("hero.nodePayments")}
                          </span>
                          <span className="bg-muted text-muted-foreground text-[9px] sm:text-[11px] font-medium px-2 py-2 rounded-md border border-border text-center truncate">
                            {t("hero.nodeRefundRule")}
                          </span>
                          <span className="bg-muted text-muted-foreground text-[9px] sm:text-[11px] font-medium px-2 py-2 rounded-md border border-border text-center truncate">
                            {t("hero.nodeUI")}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-8 flex justify-center text-[13px] font-medium text-muted-foreground">
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
                    className="flex-1 flex flex-col justify-between relative z-10"
                  >
                    <div className="text-center mb-8">
                      <span className="inline-block text-[11px] font-medium text-blue-600 bg-blue-600/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {t("hero.cardTwoBadge")}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground mt-3">
                        {t("hero.cardTwoTitle")}
                      </h3>
                    </div>

                    {/* Stage diagram */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-center bg-muted/50 p-4 sm:p-8 rounded-2xl border border-border relative max-w-4xl mx-auto w-full">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1,
                          ease: "easeOut",
                        }}
                        className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm relative z-10 h-full flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <Box className="w-4 h-4 text-muted-foreground" />
                          <small className="text-[9px] sm:text-[10px] font-bold text-muted-foreground block uppercase tracking-wider">
                            {t("hero.cardTwoIntentTag")}
                          </small>
                        </div>
                        <b className="text-xs sm:text-sm font-bold text-foreground block mt-1 leading-snug">
                          {t("hero.cardTwoIntentName")}
                        </b>
                      </motion.div>

                      {/* Central Interactive Play Button Connection */}
                      <div className="flex items-center justify-center relative py-4 md:py-0 md:px-8 w-full md:w-32 h-full">
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originX: 0 }}
                          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center z-0"
                        >
                          <div className="flex-grow h-[2px] bg-border"></div>
                          <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-border -ml-[1px]"></div>
                        </motion.div>

                        <motion.div
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ scaleY: 1, opacity: 1 }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          style={{ originY: 0 }}
                          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center z-0"
                        >
                          <div className="flex-grow w-[2px] bg-border"></div>
                          <div className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[8px] border-t-border -mt-[1px]"></div>
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
                          className="relative z-20 group flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full shadow-lg border-4 border-background hover:scale-105 transition-transform duration-300 outline-none focus:outline-none shrink-0"
                          aria-label={t("hero.watchDemo")}
                        >
                          <Play
                            className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-1"
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
                        className="bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm relative z-10 h-full flex flex-col justify-center"
                      >
                        <div className="flex items-center gap-1 mb-2">
                          <Code2 className="w-4 h-4 text-muted-foreground" />
                          <small className="text-[9px] sm:text-[10px] font-bold text-muted-foreground block uppercase tracking-wider">
                            {t("hero.cardTwoImplTag")}
                          </small>
                        </div>
                        <b className="text-xs sm:text-sm font-bold text-foreground block mt-1 leading-snug">
                          {t("hero.cardTwoImplName")}
                        </b>
                        <span className="mt-4 inline-flex items-center gap-2 bg-muted text-muted-foreground text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-md w-fit border border-border whitespace-nowrap">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600" />{" "}
                          {t("hero.cardTwoStatus")}
                        </span>
                      </motion.div>
                    </div>

                    <div className="mt-8 flex justify-center text-[13px] font-medium text-muted-foreground">
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
