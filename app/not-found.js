"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:py-24">
        <SectionCard className="max-w-4xl mx-auto">
          <div className="gemini-card rounded-2xl p-8 sm:p-12 md:p-16 border border-border/50 text-center relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <span className="inline-block text-xs sm:text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {t("notFoundPage.eyebrow") || "Error 404"}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
                {t("notFoundPage.title") || "Page not found"}
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-12 leading-relaxed max-w-lg mx-auto">
                {t("notFoundPage.description") || "The page you're looking for doesn't exist or has been moved. Let's get you back to building and understanding your codebase."}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="shadow-md shadow-primary/25 min-w-[220px] h-12 text-[15px] font-semibold transition-all hover:scale-105">
                  <a href="https://portal.think4ever.com/#/register">
                    {t("notFoundPage.ctaPrimary") || "Analyze a project"}
                  </a>
                </Button>
                <Button asChild variant="outline" className="min-w-[220px] h-12 bg-card hover:bg-muted border-border text-[15px] font-medium transition-all hover:border-primary/30">
                  <Link href="/">
                    {t("notFoundPage.ctaSecondary") || "Return home"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
