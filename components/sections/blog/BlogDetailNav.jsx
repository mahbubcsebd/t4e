"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const BlogDetailNav = () => {
  const { t, language } = useLanguage();
  const blogHref = language === 'en' ? '/blog/' : `/${language}/blog/`;
  return (
    <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <Link
        href={blogHref}
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-[14px]"
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>{t("blogPage.backToArticles")}</span>
      </Link>
    </div>
  );
};
