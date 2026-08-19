"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Play, BookOpen, Layers } from "lucide-react";

export default function ResourceGrid() {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40"
      id="resources"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
            {t("resourcesPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight leading-[1.15] mb-4">
            {t("resourcesPage.heroTitlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("resourcesPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("resourcesPage.heroSubtitle")}
          </p>
        </div>

        {/* Product Videos */}
        <div id="videos">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.videosEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-[#09090d]">
              {t("resourcesPage.videosTitle")}
            </h2>
            <p className="text-xs sm:text-sm text-[#465a75]">
              {t("resourcesPage.videosSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#07A7E1] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.video1Type")}
                </span>
                <h3 className="text-xl font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.video1Title")}
                </h3>
                <p className="text-xs sm:text-sm text-[#465a75] mb-6">
                  {t("resourcesPage.video1Desc")}
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=FY68DuwOf4Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#093cad] hover:text-[#07A7E1] flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("resourcesPage.video1Link")}</span>
              </a>
            </div>

            <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.video2Type")}
                </span>
                <h3 className="text-xl font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.video2Title")}
                </h3>
                <p className="text-xs sm:text-sm text-[#465a75] mb-6">
                  {t("resourcesPage.video2Desc")}
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=Lq-vza9_CzI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#093cad] hover:text-[#07A7E1] flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t("resourcesPage.video2Link")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Thinking & White Papers */}
        <div
          id="guides"
          className="bg-[#f7fafe] border border-[#c8d9ed] rounded-3xl p-8 sm:p-10"
        >
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.thinkingEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-[#09090d]">
              {t("resourcesPage.thinkingTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-2">
                  {t("resourcesPage.guide1Type")}
                </span>
                <h3 className="text-lg font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.guide1Title")}
                </h3>
                <p className="text-xs text-[#465a75] mb-6">
                  {t("resourcesPage.guide1Desc")}
                </p>
              </div>
              <a
                href="https://think4ever.com/blog/think-design-redefining-ai-coding-harness/"
                className="text-xs font-bold text-[#093cad] hover:underline flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t("resourcesPage.guide1Link")}</span>
              </a>
            </div>

            <div className="bg-white border border-[#c8d9ed] rounded-2xl p-7 hover:border-[#093cad] transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-2">
                  {t("resourcesPage.guide2Type")}
                </span>
                <h3 className="text-lg font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.guide2Title")}
                </h3>
                <p className="text-xs text-[#465a75] mb-6">
                  {t("resourcesPage.guide2Desc")}
                </p>
              </div>
              <a
                href="https://think4ever.com/blog/one-spec-every-agent-think4ever-mcp/"
                className="text-xs font-bold text-[#093cad] hover:underline flex items-center gap-1"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{t("resourcesPage.guide2Link")}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Engineering Perspectives */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-1">
              {t("resourcesPage.perspEyebrow")}
            </span>
            <h2 className="text-2xl font-bold text-[#09090d]">
              {t("resourcesPage.perspTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card1Type")}
                </span>
                <h3 className="text-base font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.card1Title")}
                </h3>
                <p className="text-xs text-[#465a75] mb-4">
                  {t("resourcesPage.card1Desc")}
                </p>
              </div>
              <a
                href="https://think4ever.com/blog/think4ever-approach-vs-vibe-coding/"
                className="text-xs font-bold text-[#093cad] hover:underline"
              >
                {t("resourcesPage.card1Link")}
              </a>
            </div>

            <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card2Type")}
                </span>
                <h3 className="text-base font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.card2Title")}
                </h3>
                <p className="text-xs text-[#465a75] mb-4">
                  {t("resourcesPage.card2Desc")}
                </p>
              </div>
              <a
                href="https://think4ever.com/blog/architecture-first-agentic-development-with-think4ever/"
                className="text-xs font-bold text-[#093cad] hover:underline"
              >
                {t("resourcesPage.card2Link")}
              </a>
            </div>

            <div className="bg-[#f9fcff] border border-[#c8d9ed] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#093cad] uppercase tracking-wider block mb-2">
                  {t("resourcesPage.card3Type")}
                </span>
                <h3 className="text-base font-bold text-[#09090d] mb-2">
                  {t("resourcesPage.card3Title")}
                </h3>
                <p className="text-xs text-[#465a75] mb-4">
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
    </section>
  );
}
