"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { Button } from "@/components/ui/button";
import StoreButtons from "@/components/sections/apps/StoreButtons";

const ROW_KEYS = ["context", "knowledge", "changes", "tools"];

export default function ContextGapSection() {
  const { t } = useLanguage();
  const { openAuthModal } = useAuthModal();
  const withoutLabel = t("contextGap.withoutTitle");
  const withLabel = t("contextGap.withTitle");

  return (
    <section
      aria-labelledby="context-gap-title"
      className="relative mx-auto max-w-[1040px] px-4 pb-14 pt-6 md:px-6"
    >
      <div className="mx-auto mb-12 flex w-full max-w-[640px] flex-col items-center gap-4">
        <div className="flex w-full items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t("portalStart.installApp")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
        </div>
        <StoreButtons variant="blue" className="max-w-[460px]" />
      </div>

      <span className="block text-center text-xs font-bold uppercase tracking-[0.08em] text-slate-600">
        {t("contextGap.eyebrow")}
      </span>
      <h2
        id="context-gap-title"
        className="mt-2 text-balance text-center text-[26px] font-black leading-[1.12] tracking-tight text-[#0B1B3A] sm:text-[34px] md:text-[40px]"
      >
        {t("contextGap.titleBefore")}{" "}
        <span className="text-[#FF7A1A]">{t("contextGap.titleHighlight")}</span>
        {t("contextGap.titleAfter")}
      </h2>

      <table className="mt-7 w-full overflow-hidden rounded-2xl border-[1.5px] border-slate-200 bg-white text-left shadow-[0_10px_30px_-12px_rgba(11,27,58,.18)] max-md:block [border-collapse:separate] [border-spacing:0]">
        <caption className="sr-only">{t("contextGap.caption")}</caption>
        <thead className="max-md:hidden">
          <tr>
            <th scope="col" className="px-[18px] py-4">
              <span className="sr-only">{t("contextGap.area")}</span>
            </th>
            <th
              scope="col"
              className="px-[18px] py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-[#9A3D00]"
            >
              {withoutLabel}
            </th>
            <th
              scope="col"
              className="bg-[#EEF4FF] px-[18px] py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-[#093CAD]"
            >
              {withLabel}
            </th>
          </tr>
        </thead>
        <tbody className="max-md:block">
          {ROW_KEYS.map((key) => (
            <tr key={key} className="max-md:block max-md:border-t max-md:border-slate-200 max-md:first:border-t-0">
              <th
                scope="row"
                className="border-t border-slate-200 px-[18px] py-4 align-top text-[15px] font-bold text-[#0B1B3A] max-md:block max-md:border-0 max-md:px-4 max-md:pb-1.5 max-md:pt-4 md:w-[18%]"
              >
                {t(`contextGap.rows.${key}.label`)}
              </th>
              <td className="border-t border-slate-200 px-[18px] py-4 align-top text-[15px] text-slate-600 max-md:block max-md:border-0 max-md:px-4 max-md:py-1.5">
                <span className="flex items-start gap-2">
                  <X className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#C2570C]" strokeWidth={2.4} aria-hidden="true" />
                  <span>
                    <b className="font-bold text-[#9A3D00] md:hidden">{withoutLabel}: </b>
                    {t(`contextGap.rows.${key}.without`)}
                  </span>
                </span>
              </td>
              <td className="border-t border-slate-200 bg-[#F5F8FF] px-[18px] py-4 align-top text-[15px] font-medium text-[#0B1B3A] max-md:mx-3 max-md:mb-3.5 max-md:mt-1 max-md:block max-md:rounded-xl max-md:border-0 max-md:px-4 max-md:py-3">
                <span className="flex items-start gap-2">
                  <Check className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[#1D63E0]" strokeWidth={2.6} aria-hidden="true" />
                  <span>
                    <b className="font-bold text-[#093CAD] md:hidden">{withLabel}: </b>
                    {t(`contextGap.rows.${key}.with`)}
                  </span>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-[18px] gap-y-2.5">
        <Button size="lg" onClick={() => openAuthModal("signup")}>
          {t("contextGap.cta")}
          <ArrowRight className="h-4 w-4" strokeWidth={2.6} aria-hidden="true" />
        </Button>
        <small className="text-[13.5px] text-slate-600">{t("contextGap.note")}</small>
      </div>
    </section>
  );
}
