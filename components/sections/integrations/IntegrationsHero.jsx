"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import CodingToolPills from "@/components/ui/CodingToolPills";
import Eyebrow from "@/components/ui/Eyebrow";

export default function IntegrationsHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-8 lg:pt-12 pb-4 lg:pb-8 bg-background border-b border-border text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow className="mb-4">
        {t("integrationsPage.heroEyebrow")}
      </Eyebrow>

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

        <div className="pt-6 mt-6 border-t border-border/50 max-w-4xl mx-auto">
          <CodingToolPills
            variant="light"
            className="justify-center"
            allTools={true}
          />
        </div>
      </div>
    </section>
  );
}
