"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";

export default function ProductDemoSection() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section
      className="py-20 md:py-28 bg-white border-b border-zinc-200/60"
      id="resources"
    >
      <Container>
        {/* Clean card matching other sections */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-sm p-8 sm:p-16 flex flex-col items-center justify-center gap-8 overflow-hidden relative text-center max-w-5xl mx-auto">
          {/* Subtle background watermark */}
          <div className="absolute right-0 bottom-0 text-gray-200/[0.2] text-[180px] font-black leading-none select-none pointer-events-none overflow-hidden z-0">
            T4E
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-6 border border-blue-200">
              {t("demo.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#09090d] mb-4 tracking-tight">
              {t("demo.title")}
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              {t("demo.subtitle")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <button
                onClick={() => {
                  setVideoId("FY68DuwOf4Q");
                  setIsVideoOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 py-3.5 text-base transition-all whitespace-nowrap"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{t("demo.btnCodeToDesign")}</span>
              </button>
              <button
                onClick={() => {
                  setVideoId("Lq-vza9_CzI");
                  setIsVideoOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-700 hover:bg-gray-50 font-bold rounded-full px-8 py-3.5 text-base transition-all border border-gray-200 whitespace-nowrap"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{t("demo.btnDesignToCode")}</span>
              </button>
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
