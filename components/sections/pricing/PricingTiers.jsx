"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export default function PricingTiers() {
  const { t } = useLanguage();

  const plans = [
    {
      tag: t("pricingPage.plan1Tag"),
      price: t("pricingPage.plan1Price"),
      period: "",
      desc: t("pricingPage.plan1Desc"),
      list: t("pricingPage.plan1List") || ["500 orchestration credits", "1 project", "Bring your own keys"],
      btnText: t("pricingPage.plan1Btn"),
      btnClass: "btn-alt",
      href: "https://portal.think4ever.com/#/register",
      featured: false,
    },
    {
      tag: t("pricingPage.plan2Tag"),
      price: t("pricingPage.plan2Price"),
      period: t("pricingPage.plan2Period"),
      desc: t("pricingPage.plan2Desc"),
      list: t("pricingPage.plan2List") || ["2,000 credits per month", "Up to 3 projects", "Bring your own keys"],
      btnText: t("pricingPage.plan2Btn"),
      btnClass: "btn-primary",
      href: "https://portal.think4ever.com/#/register",
      featured: true,
    },
    {
      tag: t("pricingPage.plan3Tag"),
      price: t("pricingPage.plan3Price"),
      period: t("pricingPage.plan3Period"),
      desc: t("pricingPage.plan3Desc"),
      list: t("pricingPage.plan3List") || ["Up to 5 users", "Up to 5 projects", "Team usage controls"],
      btnText: t("pricingPage.plan3Btn"),
      btnClass: "btn-alt",
      href: "https://think4ever.com/contact-us/",
      featured: false,
    },
    {
      tag: t("pricingPage.plan4Tag"),
      price: t("pricingPage.plan4Price"),
      period: "",
      desc: t("pricingPage.plan4Desc"),
      list: t("pricingPage.plan4List") || ["Private deployment options", "Custom usage controls", "Dedicated support"],
      btnText: t("pricingPage.plan4Btn"),
      btnClass: "bg-[#09090d] text-white hover:bg-slate-800 font-semibold rounded-full px-6 py-2.5 text-xs text-center transition-all",
      href: "https://think4ever.com/contact-us/",
      featured: false,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#c8d9ed]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                plan.featured
                  ? "bg-[#f2f7ff] border-2 border-[#093cad] shadow-xl relative -translate-y-2"
                  : "bg-[#f9fcff] border border-[#c8d9ed] hover:border-[#093cad] hover:shadow-md"
              }`}
            >
              <div>
                {plan.featured && (
                  <span className="absolute -top-3 right-6 bg-[#093cad] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                    Popular
                  </span>
                )}
                <span className="text-xs font-bold text-[#093cad] uppercase tracking-wider block mb-2">
                  {plan.tag}
                </span>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#09090d]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-xs font-semibold text-[#465a75]">
                      {plan.period}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#465a75] mb-6 leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="space-y-3 mb-8 pt-4 border-t border-[#c8d9ed]/50 text-xs font-semibold text-[#09090d]">
                  {plan.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#07A7E1] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={plan.href} className={`${plan.btnClass} w-full justify-center text-xs py-3`}>
                <span>{plan.btnText}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
