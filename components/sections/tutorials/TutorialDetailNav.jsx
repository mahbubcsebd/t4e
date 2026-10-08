"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const TutorialDetailNav = () => {
  const { t } = useLanguage();
  return (
    <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hidden">
      <Link
        href="#"
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium text-[14px] hidden"
      >
        <ArrowLeft
          size={18}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>{t("nav.tutorialsBack", "Back to Tutorials")}</span>
      </Link>
    </div>
  );
};
