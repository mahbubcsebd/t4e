"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Layers, Sparkles, ArrowRight, Search } from "lucide-react";

export default function BlogGridSection() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const articles = [
    {
      slug: "think-design-redefining-ai-coding-harness",
      type: "White paper",
      cat: "whitepaper",
      title: "Think Design: Redefining the AI coding harness for enterprise software development",
      desc: "A framework for moving beyond prompt-to-code toward structured, reviewed system context.",
      date: "April 18, 2026",
      readTime: "8 min read",
      icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
      external: "https://think4ever.com/blog/think-design-redefining-ai-coding-harness/",
    },
    {
      slug: "one-spec-every-agent-think4ever-mcp",
      type: "MCP & agent ecosystems",
      cat: "mcp",
      title: "One spec, every agent: How Think4Ever and MCP power consistent AI development",
      desc: "How Think4Ever and Model Context Protocol provide a consistent system model across coding agents.",
      date: "April 12, 2026",
      readTime: "6 min read",
      icon: <Layers className="w-5 h-5 text-[#093cad]" />,
      external: "https://think4ever.com/blog/one-spec-every-agent-think4ever-mcp/",
    },
    {
      slug: "think4ever-approach-vs-vibe-coding",
      type: "Perspective",
      cat: "architecture",
      title: "Think4Ever vs. vibe coding: Why architecture matters when generation is easy",
      desc: "Why system intent, review and coherence matter when code generation becomes instantaneous.",
      date: "April 05, 2026",
      readTime: "5 min read",
      icon: <Sparkles className="w-5 h-5 text-[#07A7E1]" />,
      external: "https://think4ever.com/blog/think4ever-approach-vs-vibe-coding/",
    },
    {
      slug: "architecture-first-agentic-development-with-think4ever",
      type: "Architecture",
      cat: "architecture",
      title: "Architecture-first agentic development with Think4Ever",
      desc: "Use explicit system structure and boundary models to guide agentic implementation without drift.",
      date: "March 28, 2026",
      readTime: "7 min read",
      icon: <BookOpen className="w-5 h-5 text-[#093cad]" />,
      external: "https://think4ever.com/blog/architecture-first-agentic-development-with-think4ever/",
    },
  ];

  const filtered = articles.filter((art) => {
    const matchCat = selectedCat === "all" || art.cat === selectedCat;
    const matchSearch = art.title.toLowerCase().includes(search.toLowerCase()) || art.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20">
            {t("blogPage.heroEyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight mb-4">
            {t("blogPage.heroTitlePrefix")}
            <span className="text-gradient underline decoration-[#07A7E1]/30">
              {t("blogPage.heroTitleHighlight")}
            </span>
          </h1>
          <p className="text-base text-[#465a75] leading-relaxed">
            {t("blogPage.heroSubtitle")}
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-[#c8d9ed]/50">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: t("blogPage.categories.all") },
              { id: "architecture", label: t("blogPage.categories.architecture") },
              { id: "mcp", label: t("blogPage.categories.mcp") },
              { id: "whitepaper", label: t("blogPage.categories.whitepaper") },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCat === cat.id
                    ? "bg-[#093cad] text-white shadow-md"
                    : "bg-[#f2f7ff] text-[#465a75] hover:bg-[#e2edfc]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder={t("blogPage.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full border border-[#c8d9ed] text-xs focus:outline-none focus:border-[#093cad]"
            />
            <Search className="w-4 h-4 text-[#71849c] absolute left-3 top-2.5" />
          </div>
        </div>

        {/* Grid of Articles */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((art, idx) => (
            <div
              key={idx}
              className="bg-[#f9fcff] border border-[#c8d9ed] rounded-3xl p-8 hover:border-[#093cad] transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#c8d9ed] text-[#093cad]">
                    {art.type}
                  </span>
                  <div className="p-2 rounded-xl bg-white border border-[#c8d9ed]">
                    {art.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#09090d] mb-3 leading-snug hover:text-[#093cad] transition-colors">
                  <a href={art.external} target="_blank" rel="noopener noreferrer">
                    {art.title}
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-[#465a75] mb-6 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#c8d9ed]/50 text-xs font-semibold text-[#71849c]">
                <span>{art.date} • {art.readTime}</span>
                <a
                  href={art.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#093cad] font-bold hover:underline flex items-center gap-1"
                >
                  <span>{t("blogPage.readMore")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
