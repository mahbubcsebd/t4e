"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f7fafe] to-white border-b border-border">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#07A7E1]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3">
            {t("contact.eyebrow")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
            {t("contact.titlePrefix")}
            <span className="text-gradient decoration-[#07A7E1]/30">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <div className="w-full lg:flex-1">
            <ContactForm />
          </div>
          <div className="w-full lg:w-auto">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
