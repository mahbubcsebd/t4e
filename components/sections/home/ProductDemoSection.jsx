"use client";

import VideoModal from "@/components/ui/VideoModal";
import SectionCard from "@/components/layout/SectionCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Play } from "lucide-react";
import { useState } from "react";

export default function ProductDemoSection() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section className="py-6 md:py-8 lg:py-12 " id="resources">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="w-full">
          {/* Clean card matching other sections */}
          <div className="gemini-card rounded-xl p-4 sm:p-16 flex flex-col items-center justify-center gap-8 overflow-hidden relative text-center w-full">
            {/* Subtle background watermark */}
            <div className="absolute right-0 bottom-0 text-muted-foreground/[0.05] text-[180px] font-black leading-none select-none pointer-events-none overflow-hidden z-0">
              T4E
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide mb-6 border border-primary/20">
                {t("demo.eyebrow")}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[42px] md:text-muted-foregroundxl font-extrabold text-foreground mb-4 tracking-tight">
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
        </div>
      </SectionCard>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
