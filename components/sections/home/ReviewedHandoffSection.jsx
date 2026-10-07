"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";
import { Code, GitFork, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const steps = [
  {
    icon: <Code className="w-5 h-5 text-[#314865]" />,
    recommended: true,
    highlighted: false,
    category: "CODE \u2192 UNDERSTANDING",
    title: "Analyze existing code",
    desc: "Turn a project into a visual, reviewable map of the system.",
    link: "Analyze a project",
    href: "/how-it-works",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#314865]" />,
    recommended: false,
    highlighted: true,
    category: "CODE \u2192 PRODUCTION READY",
    title: "Production hardening",
    desc: "Import your codebase, map the system, then let reviewer agents audit it against a production-readiness checklist: security, configuration, reliability, data, observability, deploy and more.",
    link: "Harden a project",
    href: "/blog/from-prototype-to-production-think4ever-hardening",
  },
  {
    icon: <GitFork className="w-5 h-5 text-[#314865]" />,
    recommended: false,
    highlighted: false,
    category: "INTENT \u2192 SYSTEM DESIGN",
    title: "Design from intent",
    desc: "Define what must be true and review the system before implementation.",
    link: "Design a system",
    href: "/design-to-code",
  },
];

export default function ReviewedHandoffSection() {
  // Scroll into view when navigating from another page via hash
  useEffect(() => {
    if (window.location.hash === "#reviewed-handoff") {
      const timer = setTimeout(() => {
        const el = document.getElementById("reviewed-handoff");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="py-6 md:py-8 lg:py-12" id="reviewed-handoff">
      <SectionCard className="max-w-[1600px] mx-auto">
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 w-full relative z-10 border border-border/50">
          {/* Header */}
          <SectionHeading
            eyebrow="Welcome to Think4Ever"
            title="What do you need to understand"
            highlightText="or change?"
            subtitle="Choose the fastest path to a useful system view. You can switch paths later."
          />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {steps.map((step, idx) => {
              const inner = (
                <>
                  {/* Top row: icon + recommended badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#eef3fb] dark:bg-muted border border-[#d6e4f7] dark:border-border flex items-center justify-center">
                      {step.icon}
                    </div>
                    {step.recommended && (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#314865] bg-[#eef3fb] border border-[#c8d9f0] rounded-full px-2.5 py-1">
                        Recommended
                      </span>
                    )}
                  </div>

                  {/* Category label */}
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">
                    {step.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-[#1a2a3a] dark:text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#5a7a99] dark:text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </>
              );

              const cardClass = `relative group bg-white dark:bg-card rounded-2xl p-6 transition-all duration-300 flex flex-col h-full ${
                step.highlighted
                  ? "border-2 border-primary shadow-sm shadow-primary/10 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                  : "border border-[#d6e4f7] dark:border-border shadow-sm"
              }`;

              if (step.highlighted) {
                return (
                  <Link key={idx} href={step.href} className={cardClass}>
                    {inner}
                  </Link>
                );
              }

              return (
                <div key={idx} className={cardClass}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
