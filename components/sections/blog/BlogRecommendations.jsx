"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPost } from "@/lib/blogData";
import { ArrowRight } from "lucide-react";

export const BlogRecommendations = ({ posts, currentPostId }) => {
  const { t, language } = useLanguage();

  const recommendedPosts = posts
    .filter((p) => p.id !== currentPostId)
    .slice(0, 2)
    .map((p) => getLocalizedPost(p, language));

  return (
    <div className="mt-20 border-t border-border/60 pt-16">
      <h3 className="text-2xl font-bold text-foreground mb-8 text-center sm:text-left">
        {t("blogPage.recommendedReading")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {recommendedPosts.map((recommended) => (
          <Link
            key={recommended.id}
            href={`/blog/${recommended.slug}/`}
            className="group shadow-sm block bg-card/80 backdrop-blur-xl rounded-xl p-8 border border-border/60 hover:border-primary/40 hover:shadow-sm hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
              <span className="inline-block self-start text-[9px] font-extrabold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-sm">
                {recommended.category}
              </span>
              <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-6">
                {recommended.title}
              </h4>

              <div className="mt-auto flex items-center justify-between text-xs font-semibold text-muted-foreground pt-4 border-t border-border/60">
                <span>{recommended.date}</span>
                <span className="text-primary font-bold text-sm flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                  {t("blogPage.readMore")}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
