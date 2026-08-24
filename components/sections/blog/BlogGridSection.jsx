"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Search, BookOpen, Layers, Sparkles, ArrowRight } from "lucide-react";
import { BLOG_POSTS, getLocalizedPost } from "@/lib/blogData";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";

const getCategoryIcon = (cat) => {
  if (cat === "mcp") return <Layers className="w-5 h-5 text-primary" />;
  if (cat === "whitepaper")
    return <BookOpen className="w-5 h-5 text-primary" />;
  if (cat === "architecture")
    return <BookOpen className="w-5 h-5 text-primary" />;
  return <Sparkles className="w-5 h-5 text-primary" />;
};

export default function BlogGridSection() {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const localizedPosts = BLOG_POSTS.map((art) =>
    getLocalizedPost(art, language),
  );

  const filtered = localizedPosts.filter((art) => {
    const matchCat = selectedCat === "all" || art.cat === selectedCat;
    const matchSearch =
      (art.title && art.title.toLowerCase().includes(search.toLowerCase())) ||
      (art.desc && art.desc.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* Blog Hero Section */}
      <section className="bg-background py-16 md:py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
            {t("blogPage.heroEyebrow")}
          </span>

          <h1 className="max-w-[650px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {t("blogPage.heroTitlePrefix")}
            <span className="text-primary decoration-[#07A7E1]/30">
              {t("blogPage.heroTitleHighlight")}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("blogPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="py-12 md:py-24 bg-background">
        <SectionCard>
          <Container>
            {/* Filter & Search Controls */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 relative z-10">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white/50 backdrop-blur-sm p-1.5 rounded-xl border border-border/60 shadow-sm">
                {[
                  { id: "all", label: t("blogPage.categories.all") },
                  {
                    id: "architecture",
                    label: t("blogPage.categories.architecture"),
                  },
                  { id: "mcp", label: t("blogPage.categories.mcp") },
                  {
                    id: "whitepaper",
                    label: t("blogPage.categories.whitepaper"),
                  },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCat(cat.id)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      selectedCat === cat.id
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-80 group">
                <input
                  type="text"
                  placeholder={t("blogPage.searchPlaceholder")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-5 py-3.5 rounded-xl border border-border/80 bg-white/50 backdrop-blur-sm text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all shadow-sm placeholder:text-muted-foreground/60"
                />
                <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-3.5 group-focus-within:text-primary transition-colors" />
              </div>
            </div>

            {/* Grid of Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {filtered.map((art, idx) => (
                <div
                  key={idx}
                  className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between group overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
                        {art.type || art.category}
                      </span>
                      <div className="p-2.5 rounded-xl bg-white border border-border/80 shadow-sm group-hover:scale-110 group-hover:border-primary/40 transition-transform duration-500">
                        {art.icon || getCategoryIcon(art.cat)}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      <Link
                        href={`/blog/${art.slug}`}
                        className="before:absolute before:inset-0"
                      >
                        {art.title}
                      </Link>
                    </h3>

                    <p className="text-base text-muted-foreground mb-8 leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                      {art.desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between pt-5 border-t border-border/60 mt-auto">
                    <span className="text-xs font-semibold text-muted-foreground/80">
                      {art.date} • {art.readTime}
                    </span>
                    <span className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                      {t("blogPage.readMore")}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 relative z-10 bg-white/50 border border-border/60 rounded-[2rem] backdrop-blur-sm">
                <p className="text-lg text-muted-foreground">
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </Container>
        </SectionCard>
      </section>
    </>
  );
}
