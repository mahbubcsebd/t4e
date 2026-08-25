"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ArrowRight, ArrowDown, FolderTree, Blocks } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";

export default function SeeSystem() {
  const { t } = useLanguage();

  const seeSystemList = t("codeToDesignPage.seeSystemList") || [
    "Architecture and service boundaries",
    "Dependencies and data movement",
    "Business workflows and rules",
    "Change impact across the system",
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border bg-background">
      <SectionCard>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column Copy */}
            <div className="order-1 md:order-1">
              <SectionHeading
                align="left"
                eyebrow={t("codeToDesignPage.seeSystemEyebrow")}
                title={t("codeToDesignPage.seeSystemTitle")}
                subtitle={t("codeToDesignPage.seeSystemSubtitle")}
                className="mb-8"
              />

              <ul className="space-y-4">
                {seeSystemList.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base font-semibold text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Diagram Mock (Premium Glassmorphism) */}
            <div className="order-2 md:order-2 relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
                {/* Source Code Block */}
                <div className="col-span-1 md:col-span-5 bg-white border border-border/80 rounded-xl p-5 shadow-sm group-hover:border-primary/30 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <FolderTree className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <small className="text-[9px] font-extrabold text-primary uppercase block leading-none">
                        appointment-platform
                      </small>
                      <strong className="text-xs font-bold text-foreground">
                        src/
                      </strong>
                    </div>
                  </div>

                  <div className="text-[11px] font-mono leading-relaxed space-y-2 flex-grow">
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                      services/booking
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                      policies/refunds
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                      payments
                    </div>
                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                      customer-ui
                    </div>
                  </div>
                </div>

                {/* Arrow Divider */}
                <div className="col-span-1 flex justify-center text-primary/50 group-hover:text-primary transition-colors duration-300">
                  <ArrowRight className="hidden md:block w-6 h-6" />
                  <ArrowDown className="block md:hidden w-6 h-6" />
                </div>

                {/* Blueprint Block */}
                <div className="col-span-1 md:col-span-5 bg-white border border-primary/20 rounded-xl p-5 shadow-sm group-hover:border-primary/40 group-hover:bg-primary/[0.05] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-primary/10">
                    <div className="p-1.5 bg-primary rounded-lg">
                      <Blocks className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <small className="text-[9px] font-extrabold text-primary uppercase block leading-none">
                        Living Blueprint
                      </small>
                      <strong className="text-xs font-bold text-foreground">
                        Connected system
                      </strong>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["Booking", "Payments", "Refund rule", "UI"].map(
                      (tag, i) => (
                        <span
                          key={i}
                          className="bg-white border border-border text-foreground text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
