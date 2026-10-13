"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import SectionCard from "@/components/layout/SectionCard";
import { Check, Minus } from "lucide-react";

export default function PricingComparison() {
  const { t } = useLanguage();

  const comparisonData = [
    {
      group: "Plan limits",
      rows: [
        {
          feature: "Price",
          free: "Free",
          new: "$25/month",
          big: "$250/month",
          blue: "Custom",
        },
        {
          feature: "Users",
          free: "1",
          new: "1 (administrator)",
          big: "8, including administrator",
          blue: "Custom",
        },
        {
          feature: "Projects",
          free: "1",
          new: "3",
          big: "20, shared",
          blue: "Custom",
        },
        {
          feature: "Orchestration credits",
          free: "500",
          new: "2,000 a month",
          big: "20,000 a month, pooled",
          blue: "Custom usage pools",
        },
        {
          feature: "Extra credits",
          free: "Upgrade to continue",
          new: "$0.05 per credit",
          big: "$0.05 per credit",
          blue: "Custom",
        },
        {
          feature: "Unused included credits",
          free: "Don't roll over",
          new: "Reset every month",
          big: "Reset every month",
          blue: "Custom",
        },
        {
          feature: "Purchased credits",
          free: false,
          new: "Roll over month to month",
          big: "Roll over month to month",
          blue: "Custom",
        },
      ],
    },
    {
      group: "Design and build",
      rows: [
        {
          feature: "Build new, extend current, modernize legacy",
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: "Living Blueprint: concept, flows, rules, data, architecture",
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: "BYOK (bring your own model)",
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: "Connect Claude Code, Cursor or Codex over MCP",
          free: true,
          new: true,
          big: "✓ For every member",
          blue: true,
        },
      ],
    },
    {
      group: "Team and administration",
      rows: [
        {
          feature: "Company workspace",
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: "Company users with roles",
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: "Per-project access",
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: "Shared credit pool with admin caps",
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: "Priority system orchestration",
          free: false,
          new: false,
          big: true,
          blue: true,
        },
      ],
    },
    {
      group: "Enterprise",
      rows: [
        {
          feature: "Private deployment options",
          free: false,
          new: false,
          big: false,
          blue: true,
        },
        {
          feature: "Stage gates and confidence scoring",
          free: false,
          new: false,
          big: false,
          blue: true,
        },
        {
          feature: "Dedicated support and onboarding",
          free: false,
          new: false,
          big: false,
          blue: true,
        },
      ],
    },
  ];

  const renderVal = (val, isHighlighted = false) => {
    if (val === true) {
      return (
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600">
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
        </span>
      );
    }
    if (val === false) {
      return <Minus className="w-4 h-4 text-muted-foreground/40 inline-block" />;
    }
    if (typeof val === "string" && val.startsWith("✓")) {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
          <Check className="w-3.5 h-3.5" strokeWidth={3} />
          <span>{val.replace("✓", "").trim()}</span>
        </span>
      );
    }
    return (
      <span
        className={`text-xs sm:text-sm font-medium ${
          isHighlighted ? "text-primary font-bold" : "text-foreground"
        }`}
      >
        {val}
      </span>
    );
  };

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="compare">
      <SectionCard>
        <Container>
          <SectionHeading
            eyebrow={t("pricingPage.compareEyebrow", "Compare plans")}
            title={t("pricingPage.compareTitle", "Everything in each plan")}
            className="mb-10 md:mb-14 relative z-10"
          />

          <div className="overflow-x-auto border border-border/70 rounded-2xl bg-card shadow-sm relative z-10">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-border/80 bg-muted/40">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground w-[28%]">
                    Plan
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground w-[18%]">
                    Think Free
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600 w-[18%]">
                    Think New
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary bg-primary/5 w-[18%] border-x border-primary/20">
                    Think Big
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground w-[18%]">
                    Think Blue
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-muted/70 border-y border-border/60">
                      <td
                        colSpan={5}
                        className="py-2.5 px-5 text-xs font-extrabold uppercase tracking-wider text-foreground"
                      >
                        {section.group}
                      </td>
                    </tr>
                    {section.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="border-b border-border/40 hover:bg-muted/20 transition-colors"
                      >
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm text-muted-foreground">
                          {renderVal(row.free)}
                        </td>
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm text-foreground">
                          {renderVal(row.new)}
                        </td>
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm bg-primary/5 border-x border-primary/20">
                          {renderVal(row.big, true)}
                        </td>
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm text-foreground">
                          {renderVal(row.blue)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
