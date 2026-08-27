"use client";

import React from "react";
import ContactForm from "./ContactForm";
import ContactSidebar from "./ContactSidebar";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";
import SectionHeading from "@/components/layout/SectionHeading";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background border-b border-border" id="contact">
      <SectionCard>
        <Container className="w-full relative z-10 border border-border/50">
          <div className="text-center">
            <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4">
              {t("contact.eyebrow")}
            </span>

            <h1 className="max-w-[750px] mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-6">
              {t("contact.titlePrefix")}{" "}
              <span className="text-primary decoration-[#07A7E1]/30">
                {t("contact.titleHighlight")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            <div className="w-full lg:w-1/2">
              <ContactForm />
            </div>
            <div className="w-full lg:w-1/2">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
