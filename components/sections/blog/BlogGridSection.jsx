"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Search, BookOpen, Layers, Sparkles } from "lucide-react";
import { BLOG_POSTS, getLocalizedPost } from "@/lib/blogData";

const getCategoryIcon = (cat) => {
  if (cat === "mcp") return <Layers className="w-5 h-5 text-[#093cad]" />;
  if (cat === "whitepaper") return <BookOpen className="w-5 h-5 text-[#093cad]" />;
  if (cat === "architecture") return <BookOpen className="w-5 h-5 text-[#093cad]" />;
  return <Sparkles className="w-5 h-5 text-[#07A7E1]" />;
};

export default function BlogGridSection() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const localizedPosts = BLOG_POSTS.map((art) => getLocalizedPost(art, language));

  const filtered = localizedPosts.filter((art) => {
    const matchCat = selectedCat === "all" || art.cat === selectedCat;
    const matchSearch =
      (art.title && art.title.toLowerCase().includes(search.toLowerCase())) ||
      (art.desc && art.desc.toLowerCase().includes(search.toLowerCase()));
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
            <span className="text-gradient decoration-[#07A7E1]/30">
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
              {
                id: "architecture",
                label: t("blogPage.categories.architecture"),
              },
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
                    {art.type || art.category}
                  </span>
                  <div className="p-2 rounded-xl bg-white border border-[#c8d9ed]">
                    {art.icon || getCategoryIcon(art.cat)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#09090d] mb-3 leading-snug hover:text-[#093cad] transition-colors">
                  <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#465a75] mb-6 leading-relaxed">
                  {art.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#c8d9ed]/50 text-xs font-semibold text-[#71849c]">
                <span>
                  {art.date} • {art.readTime}
                </span>
                <Link
                  href={`/blog/${art.slug}`}
                  className="text-[#093cad] font-bold hover:underline flex items-center gap-1"
                >
                  <span>{t("blogPage.readMore")}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
