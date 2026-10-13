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
      group: t("pricingPage.compareGroupLimits", "Plan limits"),
      rows: [
        {
          feature: t("pricingPage.compareRowPrice", "Price"),
          free: t("pricingPage.compareValFree", "Free"),
          new: t("pricingPage.compareValNewPrice", "$25/month"),
          big: t("pricingPage.compareValBigPrice", "$250/month"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
        {
          feature: t("pricingPage.compareRowUsers", "Users"),
          free: "1",
          new: t("pricingPage.compareValNewUsers", "1 (administrator)"),
          big: t("pricingPage.compareValBigUsers", "8, including administrator"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
        {
          feature: t("pricingPage.compareRowProjects", "Projects"),
          free: "1",
          new: "3",
          big: t("pricingPage.compareValBigProjects", "20, shared"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
        {
          feature: t("pricingPage.compareRowCredits", "Orchestration credits"),
          free: "500",
          new: t("pricingPage.compareValNewCredits", "2,000 a month"),
          big: t("pricingPage.compareValBigCredits", "20,000 a month, pooled"),
          blue: t("pricingPage.compareValBlueCredits", "Custom usage pools"),
        },
        {
          feature: t("pricingPage.compareRowExtraCredits", "Extra credits"),
          free: t("pricingPage.compareValUpgrade", "Upgrade to continue"),
          new: t("pricingPage.compareValPerCredit", "$0.05 per credit"),
          big: t("pricingPage.compareValPerCredit", "$0.05 per credit"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
        {
          feature: t("pricingPage.compareRowUnused", "Unused included credits"),
          free: t("pricingPage.compareValDontRollOver", "Don't roll over"),
          new: t("pricingPage.compareValResetMonthly", "Reset every month"),
          big: t("pricingPage.compareValResetMonthly", "Reset every month"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
        {
          feature: t("pricingPage.compareRowPurchased", "Purchased credits"),
          free: false,
          new: t("pricingPage.compareValRollOver", "Roll over month to month"),
          big: t("pricingPage.compareValRollOver", "Roll over month to month"),
          blue: t("pricingPage.compareValCustom", "Custom"),
        },
      ],
    },
    {
      group: t("pricingPage.compareGroupDesign", "Design and build"),
      rows: [
        {
          feature: t("pricingPage.compareRowBuild", "Build new, extend current, modernize legacy"),
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowBlueprint", "Living Blueprint: concept, flows, rules, data, architecture"),
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowByok", "BYOK (bring your own model)"),
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowMcp", "Connect Claude Code, Cursor or Codex over MCP"),
          free: true,
          new: true,
          big: t("pricingPage.compareValForEveryMember", "✓ For every member"),
          blue: true,
        },
      ],
    },
    {
      group: t("pricingPage.compareGroupTeam", "Team and administration"),
      rows: [
        {
          feature: t("pricingPage.compareRowWorkspace", "Company workspace"),
          free: true,
          new: true,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowUsersRoles", "Company users with roles"),
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowProjectAccess", "Per-project access"),
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowSharedPool", "Shared credit pool with admin caps"),
          free: false,
          new: false,
          big: true,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowPriority", "Priority system orchestration"),
          free: false,
          new: false,
          big: true,
          blue: true,
        },
      ],
    },
    {
      group: t("pricingPage.compareGroupEnterprise", "Enterprise"),
      rows: [
        {
          feature: t("pricingPage.compareRowPrivate", "Private deployment options"),
          free: false,
          new: false,
          big: false,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowStageGates", "Stage gates and confidence scoring"),
          free: false,
          new: false,
          big: false,
          blue: true,
        },
        {
          feature: t("pricingPage.compareRowSupport", "Dedicated support and onboarding"),
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
                    {t("pricingPage.compareColPlan", "Plan")}
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground w-[18%]">
                    {t("pricingPage.plan1Name", "Think Free")}
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600 w-[18%]">
                    {t("pricingPage.plan2Name", "Think New")}
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary bg-primary/5 w-[18%] border-x border-primary/20">
                    {t("pricingPage.plan3Name", "Think Big")}
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground w-[18%]">
                    {t("pricingPage.plan4Name", "Think Blue")}
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
