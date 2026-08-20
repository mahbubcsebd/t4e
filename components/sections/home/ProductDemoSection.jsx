"use client";

import Container from "@/components/ui/Container";

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

          {/* Right: Video Cards */}
          <div className="flex flex-col sm:flex-row items-stretch gap-4 shrink-0 w-full lg:w-auto relative z-10">
            {/* Card 1 */}
            <button
              onClick={() => {
                setVideoId("FY68DuwOf4Q");
                setIsVideoOpen(true);
              }}
              className="group flex flex-col items-start gap-4 bg-white border border-[#c8d9ed] hover:border-[#07A7E1]/50 rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 text-left w-full sm:w-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-[#e7f7fc] text-[#07A7E1] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#07A7E1] group-hover:text-white transition-all duration-300">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-[#07A7E1] uppercase tracking-widest mb-1">
                  {t("demo.eyebrow")}
                </span>
                <span className="block text-[15px] font-semibold text-[#09090d] leading-tight group-hover:text-[#07A7E1] transition-colors">
                  {t("demo.btnCodeToDesign")}
                </span>
              </div>
            </button>

            {/* Card 2 */}
            <button
              onClick={() => {
                setVideoId("Lq-vza9_CzI");
                setIsVideoOpen(true);
              }}
              className="group flex flex-col items-start gap-4 bg-white border border-[#c8d9ed] hover:border-[#093cad]/50 rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 text-left w-full sm:w-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-[#f2f7ff] text-[#093cad] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#093cad] group-hover:text-white transition-all duration-300">
                <Play className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[10px] font-semibold text-[#093cad] uppercase tracking-widest mb-1">
                  {t("demo.eyebrow")}
                </span>
                <span className="block text-[15px] font-semibold text-[#09090d] leading-tight group-hover:text-[#093cad] transition-colors">
                  {t("demo.btnDesignToCode")}
                </span>
              </div>
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
