"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";

export default function PricingTiers() {
  const { t, language } = useLanguage();

  const localizeHref = (href) => {
    if (language === 'en' || !href.startsWith('/')) return href;
    return `/${language}${href}`;
  };

  const plans = [
    {
      tag: t("pricingPage.plan1Tag"),
      name: t("pricingPage.plan1Name"),
      price: t("pricingPage.plan1Price"),
      desc: t("pricingPage.plan1Desc"),
      limits: t("pricingPage.plan1Limits") || [],
      list: t("pricingPage.plan1List") || [],
      btnText: t("pricingPage.plan1Btn"),
      href: "https://portal.think4ever.com/#/register",
      featured: false,
    },
    {
      tag: t("pricingPage.plan2Tag"),
      badge: t("pricingPage.plan2Badge", "POPULAR"),
      badgeColor: "orange",
      name: t("pricingPage.plan2Name"),
      price: t("pricingPage.plan2Price"),
      desc: t("pricingPage.plan2Desc"),
      limits: t("pricingPage.plan2Limits") || [],
      list: t("pricingPage.plan2List") || [],
      btnText: t("pricingPage.plan2Btn"),
      href: "https://portal.think4ever.com/#/register",
      featured: true,
    },
    {
      tag: t("pricingPage.plan3Tag"),
      badge: t("pricingPage.plan3Badge", "FOR TEAMS"),
      badgeColor: "blue",
      name: t("pricingPage.plan3Name"),
      price: t("pricingPage.plan3Price"),
      desc: t("pricingPage.plan3Desc"),
      limits: t("pricingPage.plan3Limits") || [],
      list: t("pricingPage.plan3List") || [],
      btnText: t("pricingPage.plan3Btn"),
      href: "/contact-us/",
      featured: false,
      team: true,
    },
    {
      tag: t("pricingPage.plan4Tag"),
      name: t("pricingPage.plan4Name"),
      price: t("pricingPage.plan4Price"),
      desc: t("pricingPage.plan4Desc"),
      limits: t("pricingPage.plan4Limits") || [],
      list: t("pricingPage.plan4List") || [],
      btnText: t("pricingPage.plan4Btn"),
      href: "/contact-us/",
      featured: false,
    },
  ];

  return (
    <section className="py-6 md:py-8 lg:py-12 border-b border-border" id="plans">
      <SectionCard>
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl p-6 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-2 shadow-sm ${
                  plan.featured
                    ? "bg-card border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10"
                    : plan.team
                    ? "bg-card border-2 border-primary/50 shadow-2xl shadow-primary/10"
                    : "bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6 z-20">
                    <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-lg bg-amber-600 text-white shadow-amber-600/30">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-grow">
                  <span
                    className={`text-sm font-bold tracking-wide block mb-3 uppercase ${
                      plan.featured || plan.team
                        ? "text-[#093cad]"
                        : "text-muted-foreground group-hover:text-[#093cad] transition-colors"
                    }`}
                  >
                    {plan.tag}
                  </span>

                  <div className="flex flex-row items-baseline gap-1 mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                      {plan.price.split("/")[0]}
                    </span>
                    {plan.price.split("/")[1] && (
                      <span className="text-sm font-medium text-muted-foreground">
                        /{plan.price.split("/")[1]}
                      </span>
                    )}
                  </div>

                  <p className="text-sm min-h-[44px] mb-4 leading-relaxed text-muted-foreground">
                    {plan.desc}
                  </p>

                  {/* Limits summary boxes */}
                  {plan.limits && plan.limits.length > 0 && (
                    <div className="grid grid-cols-3 gap-1.5 mb-6">
                      {plan.limits.map((lim, lIdx) => (
                        <div
                          key={lIdx}
                          className={`rounded-lg py-2 px-1 text-center border transition-colors ${
                            plan.featured
                              ? "bg-amber-500/5 border-amber-500/20"
                              : plan.team
                              ? "bg-primary/5 border-primary/20"
                              : "bg-muted/60 border-border/60"
                          }`}
                        >
                          <b className="block text-base sm:text-lg font-bold text-foreground leading-tight">
                            {lim.val}
                          </b>
                          <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider block mt-0.5">
                            {lim.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-3 mb-8 pt-5 border-t border-border/50 text-xs text-muted-foreground font-medium flex-grow">
                    {plan.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 group/item">
                        <div
                          className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-full shrink-0 transition-colors ${
                            plan.featured
                              ? "bg-amber-500/20 text-amber-700"
                              : plan.team
                              ? "bg-primary/20 text-primary"
                              : "bg-muted border border-border group-hover/item:bg-muted text-foreground/70 group-hover/item:text-foreground"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span
                          className={`leading-tight transition-colors ${
                            plan.featured || plan.team
                              ? "text-foreground font-medium"
                              : "group-hover/item:text-foreground"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto">
                  <Link
                    href={localizeHref(plan.href)}
                    className={`flex w-full items-center justify-center rounded-full text-sm font-bold py-3.5 transition-all duration-300 ${
                      plan.featured
                        ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/25 hover:shadow-xl hover:shadow-amber-600/40 hover:-translate-y-0.5"
                        : plan.team
                        ? "bg-[#093cad] hover:bg-[#072d82] text-white shadow-lg shadow-[#093cad]/25 hover:shadow-xl hover:shadow-[#093cad]/40 hover:-translate-y-0.5"
                        : "bg-muted text-foreground border border-border/60 hover:bg-muted/80 hover:border-border hover:text-foreground"
                    }`}
                  >
                    <span>{plan.btnText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
