"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ZoomableImage } from "@/components/ZoomableImage";

export default function IntegrationsHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-16 md:py-20 border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
          {t("integrationsPage.heroEyebrow")}
        </span>

        <h1 className=" max-w-[650px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
          {t("integrationsPage.heroTitlePrefix")}
          <span className="text-primary decoration-[#07A7E1]/30">
            {t("integrationsPage.heroTitleHighlight")}
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {t("integrationsPage.heroSubtitle")}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="shadow-md shadow-primary/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("nav.startFree")}
            </a>
          </Button>
          {/* <a
            href="https://think4ever.com/docs/onboarding.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-alt text-sm py-3 px-6"
          >
            <span>{t("integrationsPage.heroCtaSecondary")}</span>
          </a> */}
        </div>

        {/* MCP Integrations Screenshot */}
        <div className="mt-12 flex justify-center">
          <div className="relative group max-w-[340px] w-full overflow-hidden rounded-2xl border border-border/80 bg-slate-50 dark:bg-card p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(7,167,225,0.15)] hover:border-primary/30">
            <div className="rounded-xl overflow-hidden border border-border/50">
              <ZoomableImage
                src="/images/claude.jpeg"
                alt="Think4Ever MCP Integrations Portal Screenshot"
                width={367}
                height={496}
                className="w-full h-auto object-cover select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
