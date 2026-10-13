"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";

export default function PricingFaq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0); // first item open by default like HTML

  const items = t("pricingPage.faqItems") || [
    {
      q: "Who is the administrator?",
      a: "The person who signs up and subscribes. The administrator manages users, roles, project access and credits, and can see every project in the company workspace.",
    },
    {
      q: "Do my team members need their own Think4Ever accounts?",
      a: "No. On Think Big, the administrator creates company users inside your workspace with a login and a temporary password. Each user gets an email and sets their own password at first sign-in. They don't sign up or pay separately.",
    },
    {
      q: "What can each team member see?",
      a: "Each user sees only the projects the administrator assigned to them, plus any projects they created themselves. The administrator sees all company projects.",
    },
    {
      q: "Who pays for AI usage?",
      a: "All AI work by every user is paid from the company's shared credit pool. On Think Big, the administrator can set caps so no single user or project uses more than its share.",
    },
    {
      q: "Do unused credits roll over?",
      a: "Included credits reset every month. Any included credits you don't use by the end of the month don't roll over. Credits you buy on top of your plan, at $0.05 each, do roll over from month to month until you use them.",
    },
    {
      q: "What happens when we reach the project limit?",
      a: "You can archive a project, add one more project for credits from your company pool, or upgrade to a plan with a higher limit.",
    },
    {
      q: "How do I remove someone's access?",
      a: "The administrator can deactivate a user at any time, and that user loses access immediately.",
    },
    {
      q: "Can I use my own coding tools?",
      a: "Yes. Claude Code, Cursor, Codex and other MCP-compatible tools can build from your Think4Ever design through the Think MCP server, on your own subscription. See How to: Design in Think, Code in Claude.",
    },
    {
      q: "Can I bring my own model?",
      a: "Yes. Every plan supports BYOK, so you can use supported provider credentials instead of putting all model usage into one bundle.",
    },
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="faq">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.faqEyebrow", "FAQ")}
            title={t("pricingPage.faqTitle", "Questions about plans")}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-card/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-primary/40 shadow-sm shadow-primary/5"
                      : "border-border/60 hover:border-primary/30"
                  }`}
                >
                  <button
                    onClick={() => toggleItem(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-foreground hover:text-primary transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <div
                      className={`flex shrink-0 items-center justify-center w-7 h-7 rounded-full transition-colors ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        strokeWidth={2.5}
                      />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                        {item.q.includes("coding tools") ? (
                          <p>
                            Yes. Claude Code, Cursor, Codex and other MCP-compatible tools
                            can build from your Think4Ever design through the Think MCP
                            server, on your own subscription. See{" "}
                            <Link
                              href="/tutorials/how-to-design-in-think/"
                              className="text-primary font-semibold hover:underline"
                            >
                              How to: Design in Think, Code in Claude
                            </Link>
                            .
                          </p>
                        ) : (
                          <p>{item.a}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
