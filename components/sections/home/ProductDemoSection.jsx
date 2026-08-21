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
        <div className="bg-[#f2f7ff] rounded-3xl border border-[#c8d9ed]/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
          {/* Subtle background watermark */}
          <div className="absolute right-0 bottom-0 text-[#093cad]/[0.03] text-[180px] font-black leading-none select-none pointer-events-none overflow-hidden">
            T4E
          </div>

          {/* Left: Text */}
          <SectionHeading 
            align="left"
            eyebrow={t("demo.eyebrow")}
            title={t("demo.title")}
            subtitle={t("demo.subtitle")}
          />

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto relative z-10">
            <button
              onClick={() => {
                setVideoId("FY68DuwOf4Q");
                setIsVideoOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-3 text-sm transition-all whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnCodeToDesign")}</span>
            </button>
            <button
              onClick={() => {
                setVideoId("Lq-vza9_CzI");
                setIsVideoOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-gray-700 hover:bg-gray-50 font-bold rounded-full px-6 py-3 text-sm transition-all border border-gray-200 whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnDesignToCode")}</span>
            </button>
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
