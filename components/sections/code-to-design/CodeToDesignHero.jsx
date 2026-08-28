"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import VideoModal from "@/components/ui/VideoModal";

export default function CodeToDesignHero() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section className="pt-8 lg:pt-12 pb-4 lg:pb-8 bg-gradient-to-b bg-background border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("codeToDesignPage.heroEyebrow")}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("codeToDesignPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("codeToDesignPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("codeToDesignPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="shadow-md shadow-primary/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("nav.startFree")}
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setVideoId("FY68DuwOf4Q");
              setIsVideoOpen(true);
            }}
          >
            <span>{t("codeToDesignPage.heroCtaSecondary")}</span>
          </Button>
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
