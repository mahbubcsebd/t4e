"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Brain, Cpu } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function ModelChoice() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-32 bg-background border-b border-border">
      <Container>
        <SectionCard glowPosition="reverse">
          <SectionHeading
            eyebrow={t("integrationsPage.modelsEyebrow")}
            title={t("integrationsPage.modelsTitle")}
            subtitle={t("integrationsPage.modelsSubtitle")}
            className="mb-12 md:mb-16 relative z-10 max-w-2xl"
          />

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 lg:gap-10 max-w-5xl mx-auto relative z-10">
            {/* Card 1 */}
            <div className="flex-1 relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-[2rem] p-8 sm:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center text-center group overflow-hidden translate-y-0 hover:-translate-y-2">
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 p-5 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.15)] group-hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-all duration-500 group-hover:scale-110">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <span className="mb-6 text-[10px] font-extrabold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-primary/20 group-hover:border-primary/40 transition-colors">
                  {t("integrationsPage.model1Tag")}
                </span>
                <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("integrationsPage.model1Title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 max-w-[300px]">
                  {t("integrationsPage.model1Desc")}
                </p>
              </div>
            </div>

            {/* Central Divider */}
            <div className="hidden md:flex flex-col items-center justify-center relative px-2">
              {/* Vertical dashed line */}
              <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-border/60"></div>
              {/* Center Badge */}
              <div className="relative z-10 bg-card border border-border/80 text-muted-foreground font-bold text-[10px] px-3 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                OR
              </div>
            </div>

            {/* Mobile Divider */}
            <div className="md:hidden flex items-center justify-center relative py-4">
              {/* Horizontal dashed line */}
              <div className="absolute left-[10%] right-[10%] top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-border/60"></div>
              {/* Center Badge */}
              <div className="relative z-10 bg-card border border-border/80 text-muted-foreground font-bold text-[10px] px-3 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                OR
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-[2rem] p-8 sm:p-10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-center text-center group overflow-hidden translate-y-0 hover:-translate-y-2">
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 p-5 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.15)] group-hover:shadow-[0_0_40px_rgba(var(--primary),0.3)] transition-all duration-500 group-hover:scale-110">
                  <Cpu className="w-10 h-10 text-primary" />
                </div>
                <span className="mb-6 text-[10px] font-extrabold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-primary/20 group-hover:border-primary/40 transition-colors">
                  {t("integrationsPage.model2Tag")}
                </span>
                <h3 className="text-2xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t("integrationsPage.model2Title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 max-w-[300px]">
                  {t("integrationsPage.model2Desc")}
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
      </Container>
    </section>
  );
}
