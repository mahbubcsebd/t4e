"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";
import { Button } from "@/components/ui/button";

export default function ProductDemoSection() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section
      className="px-4 sm:px-6 md:px-8 py-6"
      id="resources"
    >
      <div className="bg-card rounded-xl border border-border overflow-hidden relative max-w-[1400px] mx-auto py-8 md:py-12 transition-colors duration-300">
        <Container>
        {/* Clean card matching other sections */}
        <div className="gemini-card rounded-3xl p-8 sm:p-16 flex flex-col items-center justify-center gap-8 overflow-hidden relative text-center max-w-5xl mx-auto">
          {/* Subtle background watermark */}
          <div className="absolute right-0 bottom-0 text-muted-foreground/[0.05] text-[180px] font-black leading-none select-none pointer-events-none overflow-hidden z-0">
            T4E
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-6 border border-primary/20">
              {t("demo.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-muted-foregroundxl font-extrabold text-foreground mb-4 tracking-tight">
              {t("demo.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("demo.subtitle")}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button
                className="w-full sm:w-auto"
                onClick={() => {
                  setVideoId("FY68DuwOf4Q");
                  setIsVideoOpen(true);
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                {t("demo.btnCodeToDesign")}
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => {
                  setVideoId("Lq-vza9_CzI");
                  setIsVideoOpen(true);
                }}
              >
                <Play className="w-5 h-5 fill-current" />
                {t("demo.btnDesignToCode")}
              </Button>
            </div>
          </div>
        </div>
        </Container>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
