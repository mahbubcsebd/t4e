"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import VideoModal from "@/components/ui/VideoModal";

export default function DesignToCodeHero() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-12 bg-gradient-to-b bg-background border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block px-3 py-1 rounded-full bg-[#eaf0fb] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-4 border border-[#093cad]/20">
          {t("designToCodePage.heroEyebrow")}
        </span>

        <h1 className="max-w-[700px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("designToCodePage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("designToCodePage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="max-w-[600px] text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("designToCodePage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="shadow-md shadow-primary/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("nav.startFree")}
            </a>
          </Button>
          <button
            onClick={() => {
              setVideoId("Lq-vza9_CzI");
              setIsVideoOpen(true);
            }}
            className="btn-alt text-sm py-3 px-6"
          >
            <span>{t("designToCodePage.heroCtaSecondary")}</span>
          </button>
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
