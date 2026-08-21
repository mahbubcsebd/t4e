"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Play, BookOpen, Layers } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";

export default function ResourceGrid() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section
      className="py-16 md:py-20 bg-card border-b border-border"
      id="resources"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("resourcesPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-4">
            {t("resourcesPage.heroTitlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("resourcesPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("resourcesPage.heroSubtitle")}
          </p>
        </div>

        {/* Product Videos */}
        <div id="videos">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.videosEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              {t("resourcesPage.videosTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t("resourcesPage.videosSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f9fcff] border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#07A7E1] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.video1Type")}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("resourcesPage.video1Title")}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  {t("resourcesPage.video1Desc")}
                </p>
              </div>
              <button
                onClick={() => {
                  setVideoId("FY68DuwOf4Q");
                  setIsVideoOpen(true);
                }}
                className="text-xs font-bold text-[#093cad] hover:text-[#07A7E1] flex items-center gap-1.5 focus:outline-none"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("resourcesPage.video1Link")}</span>
              </button>
            </div>

            <div className="bg-[#f9fcff] border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.video2Type")}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {t("resourcesPage.video2Title")}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                  {t("resourcesPage.video2Desc")}
                </p>
              </div>
              <button
                onClick={() => {
                  setVideoId("Lq-vza9_CzI");
                  setIsVideoOpen(true);
                }}
                className="text-xs font-bold text-[#093cad] hover:text-[#07A7E1] flex items-center gap-1.5 focus:outline-none"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("resourcesPage.video2Link")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Thinking & White Papers */}
        <div
          id="guides"
          className="bg-[#f7fafe] border border-border rounded-3xl p-8 sm:p-10"
        >
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.thinkingEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              {t("resourcesPage.thinkingTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-2">
                  {t("resourcesPage.guide1Type")}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t("resourcesPage.guide1Title")}
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {t("resourcesPage.guide1Desc")}
                </p>
              </div>
              <Link
                href="/blog/think-design-redefining-ai-coding-harness/"
                className="text-xs font-bold text-[#093cad] hover:underline flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t("resourcesPage.guide1Link")}</span>
              </Link>
            </div>

            <div className="bg-card border border-border rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-2">
                  {t("resourcesPage.guide2Type")}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t("resourcesPage.guide2Title")}
                </h3>
                <p className="text-xs text-muted-foreground mb-6">
                  {t("resourcesPage.guide2Desc")}
                </p>
              </div>
              <Link
                href="/blog/one-spec-every-agent-think4ever-mcp/"
                className="text-xs font-bold text-[#093cad] hover:underline flex items-center gap-1"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t("resourcesPage.guide2Link")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Engineering Perspectives */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.perspEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              {t("resourcesPage.perspTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f9fcff] border border-border rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card1Type")}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {t("resourcesPage.card1Title")}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {t("resourcesPage.card1Desc")}
                </p>
              </div>
              <Link
                href="/blog/think4ever-approach-vs-vibe-coding/"
                className="text-xs font-bold text-[#093cad] hover:underline"
              >
                {t("resourcesPage.card1Link")}
              </Link>
            </div>

            <div className="bg-[#f9fcff] border border-border rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card2Type")}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {t("resourcesPage.card2Title")}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {t("resourcesPage.card2Desc")}
                </p>
              </div>
              <Link
                href="/blog/architecture-first-agentic-development-with-think4ever/"
                className="text-xs font-bold text-[#093cad] hover:underline"
              >
                {t("resourcesPage.card2Link")}
              </Link>
            </div>

            <div className="bg-[#f9fcff] border border-border rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card3Type")}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {t("resourcesPage.card3Title")}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {t("resourcesPage.card3Desc")}
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="text-xs font-bold text-[#093cad] hover:underline"
              >
                {t("resourcesPage.card3Link")}
              </Link>
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
