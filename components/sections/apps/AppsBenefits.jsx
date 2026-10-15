"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import {
  Monitor,
  CheckCircle2,
  LayoutGrid,
  ShieldCheck,
  Terminal,
  Smartphone,
} from "lucide-react";

export default function AppsBenefits() {
  const { t } = useLanguage();

  const icons = [
    <Monitor key="monitor" className="w-5 h-5 text-primary" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-primary" />,
    <LayoutGrid key="grid" className="w-5 h-5 text-primary" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-primary" />,
    <Terminal key="terminal" className="w-5 h-5 text-primary" />,
    <Smartphone key="phone" className="w-5 h-5 text-primary" />,
  ];

  const rawItems = t("appsPage.benefits.items");
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="py-8 md:py-12 lg:py-16 border-b border-border" id="benefits">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("appsPage.benefits.eyebrow", "Why use the apps")}
            title={t(
              "appsPage.benefits.title",
              "The whole platform, wherever you work"
            )}
            subtitle={t(
              "appsPage.benefits.subtitle",
              "Everything you do on think4ever.com, from mapping a codebase to approving a blueprint, now runs in a native app."
            )}
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-card/70 hover:bg-card border border-border/80 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  {icons[idx] || <CheckCircle2 className="w-5 h-5 text-primary" />}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
