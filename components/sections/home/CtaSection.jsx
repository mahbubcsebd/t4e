"use client";

import Container from "@/components/ui/Container";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-white" id="register">
      <Container className="max-w-3xl text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f7fc] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-6 border border-[#c8d9ed]">
          {t("nav.startFree")}
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#09090d] tracking-tight mb-5 leading-[1.1]">
          {t("cta.title")}
        </h2>
        <p className="text-base sm:text-lg text-[#465a75] mb-10 max-w-xl mx-auto leading-relaxed">
          {t("cta.subtitle")}
        </p>

        {/* CTA Button */}
        <Link
          href="https://portal.think4ever.com/#/register"
          className="inline-flex items-center justify-center gap-2 text-base font-medium text-white rounded-full px-10 py-4 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #07A7E1 0%, #093cad 100%)",
          }}
        >
          <span>{t("cta.btn")}</span>
        </Link>

        {/* Trust micro-copy */}
        <p className="text-xs text-[#8a9ab5] mt-4 font-medium">
          No credit card required · Free to start
        </p>
      </Container>
    </section>
  );
}
