"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionCard from "@/components/layout/SectionCard";

export default function PricingTiers() {
  const { t } = useLanguage();

  const plans = [
    {
      tag: t("pricingPage.plan1Tag"),
      name: t("pricingPage.plan1Name"),
      price: t("pricingPage.plan1Price"),
      desc: t("pricingPage.plan1Desc"),
      list: t("pricingPage.plan1List") || [],
      btnText: t("pricingPage.plan1Btn"),
      btnClass: "btn-primary",
      href: "https://portal.think4ever.com/#/register",
      featured: false,
    },
    {
      tag: t("pricingPage.plan2Tag"),
      name: t("pricingPage.plan2Name"),
      price: t("pricingPage.plan2Price"),
      desc: t("pricingPage.plan2Desc"),
      list: t("pricingPage.plan2List") || [],
      btnText: t("pricingPage.plan2Btn"),
      btnClass: "btn-primary",
      href: "https://portal.think4ever.com/#/register",
      featured: true,
    },
    {
      tag: t("pricingPage.plan3Tag"),
      name: t("pricingPage.plan3Name"),
      price: t("pricingPage.plan3Price"),
      desc: t("pricingPage.plan3Desc"),
      list: t("pricingPage.plan3List") || [],
      btnText: t("pricingPage.plan3Btn"),
      btnClass: "btn-primary",
      href: "https://think4ever.com/contact-us/",
      featured: false,
    },
    {
      tag: t("pricingPage.plan4Tag"),
      name: t("pricingPage.plan4Name"),
      price: t("pricingPage.plan4Price"),
      desc: t("pricingPage.plan4Desc"),
      list: t("pricingPage.plan4List") || [],
      btnText: t("pricingPage.plan4Btn"),
      btnClass: "btn-primary",
      href: "https://think4ever.com/contact-us/",
      featured: false,
    },
  ];

  return (
    <section className="py-12 md:py-24 border-b border-border">
      <SectionCard className="!p-4 sm:!p-8 md:!p-10">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-xl p-6 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-2 shadow-sm ${
                  plan.featured
                    ? "bg-card border-2 border-primary/40 shadow-2xl shadow-primary/10"
                    : "bg-card/60 backdrop-blur-sm border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                }`}
              >
                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute -top-3.5 right-6">
                    <span className="bg-primary text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-lg shadow-primary/30">
                      Popular
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  <span
                    className={`text-sm font-semibold block mb-4 ${plan.featured ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}`}
                  >
                    {plan.tag}
                  </span>

                  <div className="flex flex-row items-end gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
                      {plan.price.split("/")[0]}
                    </span>
                    {plan.price.split("/")[1] && (
                      <span className="text-sm font-medium pb-1.5 text-muted-foreground">
                        /{plan.price.split("/")[1]}
                      </span>
                    )}
                  </div>

                  <p className="text-base mb-8 leading-relaxed text-muted-foreground">
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-8 pt-6 border-t text-xs border-border/50 text-muted-foreground font-medium">
                    {plan.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div
                          className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-full shrink-0 transition-colors ${plan.featured ? "bg-primary/20 text-primary" : "bg-muted border border-border group-hover/item:bg-primary/10 group-hover/item:border-primary/30 text-primary/70 group-hover/item:text-primary"}`}
                        >
                          <Check className="w-2.5 h-2.5" strokeWidth={3} />
                        </div>
                        <span
                          className={`leading-tight transition-colors ${plan.featured ? "text-foreground" : "group-hover/item:text-foreground"}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto">
                  <Link
                    href={plan.href}
                    className={`flex w-full items-center justify-center rounded-xl text-sm font-bold py-3.5 transition-all duration-300 ${
                      plan.featured
                        ? "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
                        : "bg-muted text-foreground border border-border/50 hover:bg-primary/10 hover:border-primary/20 hover:text-primary"
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
