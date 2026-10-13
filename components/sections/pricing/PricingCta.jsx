"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";
import { Button } from "@/components/ui/button";

export default function PricingCta() {
  const { t } = useLanguage();

  return (
    <section className="py-6 md:py-8 lg:py-12" id="cta">
      <SectionCard>
        <Container className="w-full relative z-10 border border-border/50 py-10 sm:py-14">
          <div className="max-w-2xl text-center mx-auto w-full">
            <SectionHeading
              eyebrow={t("pricingPage.ctaEyebrow", "Start free")}
              title={t("pricingPage.ctaTitle", "Upload the codebase you're afraid of.")}
              subtitle={t(
                "pricingPage.ctaSubtitle",
                "In minutes you'll see how it actually works, and what every change would touch."
              )}
              className="mb-8 max-w-none"
            />

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="shadow-lg shadow-primary/25">
                <a href="https://portal.think4ever.com/#/register">
                  {t("pricingPage.ctaBtnPrimary", "Analyze a project →")}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border">
                <Link href="/contact-us/">
                  {t("pricingPage.ctaBtnSecondary", "Talk to sales")}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
