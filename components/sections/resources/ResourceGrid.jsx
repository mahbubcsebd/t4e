"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Play, BookOpen, Layers } from "lucide-react";
import VideoModal from "@/components/ui/VideoModal";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function ResourceGrid() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  return (
    <section className="py-6 md:py-8 lg:py-12 bg-background border-b border-border"
      id="resources"
    >
      {/* Hero Banner (Outside SectionCard) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-12">
        <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("resourcesPage.heroEyebrow")}
        </span>

        <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("resourcesPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("resourcesPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("resourcesPage.heroSubtitle")}
        </p>
      </div>

      <SectionCard>
        <Container>
          <div className="space-y-16 relative z-10">
            {/* Product Videos */}
            <div id="videos">
              <div className="mb-8 text-center sm:text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  {t("resourcesPage.videosEyebrow")}
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  {t("resourcesPage.videosTitle")}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  {t("resourcesPage.videosSubtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Video 1 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.video1Type")}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.video1Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {t("resourcesPage.video1Desc")}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setVideoId("FY68DuwOf4Q");
                        setIsVideoOpen(true);
                      }}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-full transition-colors focus:outline-none w-max border border-primary/20"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t("resourcesPage.video1Link")}</span>
                    </button>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.video2Type")}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.video2Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {t("resourcesPage.video2Desc")}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setVideoId("Lq-vza9_CzI");
                        setIsVideoOpen(true);
                      }}
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary bg-primary/5 hover:bg-primary/10 px-4 py-2.5 rounded-full transition-colors focus:outline-none w-max border border-primary/20"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{t("resourcesPage.video2Link")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Thinking & White Papers */}
            <div id="guides" className="pt-8 border-t border-border/50">
              <div className="mb-8 text-center sm:text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  {t("resourcesPage.thinkingEyebrow")}
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  {t("resourcesPage.thinkingTitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Guide 1 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-indigo-200">
                        {t("resourcesPage.guide1Type")}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.guide1Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {t("resourcesPage.guide1Desc")}
                      </p>
                    </div>
                    <Link
                      href="/blog/think-design-redefining-ai-coding-harness/"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors w-max"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{t("resourcesPage.guide1Link")}</span>
                    </Link>
                  </div>
                </div>

                {/* Guide 2 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-indigo-200">
                        {t("resourcesPage.guide2Type")}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.guide2Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {t("resourcesPage.guide2Desc")}
                      </p>
                    </div>
                    <Link
                      href="/blog/one-spec-every-agent-think4ever-mcp/"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors w-max"
                    >
                      <Layers className="w-4 h-4" />
                      <span>{t("resourcesPage.guide2Link")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineering Perspectives */}
            <div className="pt-8 border-t border-border/50">
              <div className="mb-8 text-center sm:text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  {t("resourcesPage.perspEyebrow")}
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  {t("resourcesPage.perspTitle")}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Perspective 1 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.card1Type")}
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.card1Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {t("resourcesPage.card1Desc")}
                      </p>
                    </div>
                    <Link
                      href="/blog/think4ever-approach-vs-vibe-coding/"
                      className="mt-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("resourcesPage.card1Link")}
                    </Link>
                  </div>
                </div>

                {/* Perspective 2 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.card2Type")}
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.card2Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {t("resourcesPage.card2Desc")}
                      </p>
                    </div>
                    <Link
                      href="/blog/architecture-first-agentic-development-with-think4ever/"
                      className="mt-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("resourcesPage.card2Link")}
                    </Link>
                  </div>
                </div>

                {/* Perspective 3 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.card3Type")}
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.card3Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {t("resourcesPage.card3Desc")}
                      </p>
                    </div>
                    <Link
                      href="/how-it-works"
                      className="mt-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("resourcesPage.card3Link")}
                    </Link>
                  </div>
                </div>

                {/* Perspective 4 */}
                <div className="shadow-sm relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col justify-between group overflow-hidden translate-y-0 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-4 border border-primary/20">
                        {t("resourcesPage.card4Type")}
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {t("resourcesPage.card4Title")}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {t("resourcesPage.card4Desc")}
                      </p>
                    </div>
                    <Link
                      href="/blog/code-visualization-real-codebases/"
                      className="mt-auto text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {t("resourcesPage.card4Link")}
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </SectionCard>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
