"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-8 md:py-12 lg:py-16" id="register">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-3 sm:p-8 md:p-12 w-full relative z-10 border border-border/50">
          <div className="max-w-3xl text-center mx-auto w-full">
            <SectionHeading
              eyebrow={t("nav.startFree")}
              title={t("cta.title")}
              subtitle={t("cta.subtitle")}
              className="mb-10 max-w-none"
              titleClassName="text-2xl sm:text-muted-foregroundxl md:text-muted-foregroundxl leading-[1.1] mb-5"
              subtitleClassName="max-w-xl mx-auto"
              eyebrowClassName="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            />

            {/* CTA Button */}
            <div className="flex justify-center w-full">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto max-w-xs sm:max-w-none shadow-md shadow-primary/25"
              >
                <Link href="https://portal.think4ever.com/#/register">
                  {t("cta.btn")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
