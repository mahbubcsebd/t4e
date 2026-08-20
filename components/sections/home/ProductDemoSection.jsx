"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play, ArrowRight } from "lucide-react";
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean card matching other sections */}
        <div className="bg-[#f2f7ff] rounded-3xl border border-[#c8d9ed]/70 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
          {/* Subtle background watermark */}
          <div className="absolute right-0 bottom-0 text-[#093cad]/[0.03] text-[180px] font-black leading-none select-none pointer-events-none overflow-hidden">
            T4E
          </div>

          {/* Left: Text */}
          <div className="max-w-2xl text-center lg:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
              {t("demo.eyebrow")}
            </span>
            <h2 className="max-w-[500px] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4">
              {t("demo.title")}
            </h2>
            <p className="max-w-[500px] text-sm sm:text-base text-[#465a75] leading-relaxed">
              {t("demo.subtitle")}
            </p>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto relative z-10">
            <button
              onClick={() => {
                setVideoId("FY68DuwOf4Q");
                setIsVideoOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#093cad] hover:bg-[#072f85] text-white font-bold rounded-full px-6 py-3 text-sm transition-all shadow-md shadow-blue-600/20 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #07A7E1 0%, #093cad 100%)",
              }}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnCodeToDesign")}</span>
            </button>
            <button
              onClick={() => {
                setVideoId("Lq-vza9_CzI");
                setIsVideoOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-[#093cad] hover:bg-[#f2f7ff] font-bold rounded-full px-6 py-3 text-sm transition-all shadow-sm border border-[#c8d9ed] whitespace-nowrap"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{t("demo.btnDesignToCode")}</span>
            </button>
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
