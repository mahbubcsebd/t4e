"use client";

import Container from "@/components/layout/Container";

import SectionHeading from "@/components/layout/SectionHeading";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-32 bg-background" id="register">
      <Container className="max-w-3xl text-center">
        <SectionHeading 
          eyebrow={t("nav.startFree")}
          title={t("cta.title")}
          subtitle={t("cta.subtitle")}
          className="mb-10 max-w-none"
          titleClassName="text-3xl sm:text-muted-foregroundxl md:text-muted-foregroundxl leading-[1.1] mb-5"
          subtitleClassName="max-w-xl mx-auto"
          eyebrowClassName="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
        />

        {/* CTA Button */}
        <Button asChild className="px-10 py-4 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5">
          <Link href="https://portal.think4ever.com/#/register">
            {t("cta.btn")}
          </Link>
        </Button>

        {/* Trust micro-copy */}
        <p className="text-xs text-[#8a9ab5] mt-4 font-medium">
          No credit card required · Free to start
        </p>
      </Container>
    </section>
  );
}
