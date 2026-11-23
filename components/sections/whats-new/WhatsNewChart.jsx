"use client";

import { useLanguage } from "@/context/LanguageContext";
import { scrollToMonth } from "./scrollToMonth";

const MONTH_LABEL_LENGTH = 3;
const MIN_BAR_PERCENT = 16;

function barTone(index, lastIndex) {
  if (index === lastIndex) return "bg-primary-foreground";
  return index % 2 === 0 ? "bg-brand-blue" : "bg-[#b7ccf4]";
}

export default function WhatsNewChart({ months, total }) {
  const { t } = useLanguage();
  const chronological = [...months].reverse();
  const lastIndex = chronological.length - 1;
  const peak = Math.max(...chronological.map((month) => month.count));

  return (
    <div className="mt-10 lg:mt-14" role="group" aria-label={t("whatsNewPage.chartAria")}>
      <div
        className="grid items-end h-[150px] sm:h-[220px] gap-1 sm:gap-2 lg:gap-3.5"
        style={{ gridTemplateColumns: `repeat(${chronological.length}, minmax(0, 1fr))` }}
      >
        {chronological.map((month, index) => {
          const height = Math.max(MIN_BAR_PERCENT, Math.round((month.count / peak) * 100));
          const tooltip = `${month.month} ${month.year}: ${month.count} ${t("whatsNewPage.newLabel")}`;
          return (
            <a
              key={month.id}
              href={`#${month.id}`}
              aria-label={tooltip}
              onClick={(event) => {
                event.preventDefault();
                scrollToMonth(month.id);
              }}
              style={{ height: `${height}%` }}
              className={`group relative block w-full rounded-full transition-all duration-200 hover:-translate-y-1 hover:brightness-110 focus-visible:-translate-y-1 ${barTone(index, lastIndex)}`}
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1 sm:top-2 grid aspect-square w-2.5 sm:w-3.5 lg:w-[18px] -translate-x-1/2 place-items-center rounded-full bg-white"
              >
                <span
                  className={`aspect-square w-[45%] rounded-full ${index % 2 === 1 && index !== lastIndex ? "bg-primary-foreground" : "bg-primary"}`}
                />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-primary-foreground px-2 py-1 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                {tooltip}
              </span>
            </a>
          );
        })}
      </div>

      <div
        aria-hidden="true"
        className="mt-2.5 grid gap-1 sm:gap-2 lg:gap-3.5 text-center text-[9px] sm:text-xs font-bold tracking-wide text-muted-foreground"
        style={{ gridTemplateColumns: `repeat(${chronological.length}, minmax(0, 1fr))` }}
      >
        {chronological.map((month, index) => {
          const showYear = index === 0 || month.id.startsWith("january-");
          return (
            <div key={month.id}>
              {month.month.slice(0, MONTH_LABEL_LENGTH).toUpperCase()}
              {showYear && <small className="block text-[9px] sm:text-[11px] text-foreground">{month.year}</small>}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-1 border-t border-border pt-3.5 text-[13px] text-muted-foreground sm:flex-row sm:justify-between sm:gap-4">
        <span>{t("whatsNewPage.chartHint")}</span>
        <span>
          {t("whatsNewPage.chartTotal")
            .replace("{total}", total)
            .replace("{months}", chronological.length)}
        </span>
      </div>
    </div>
  );
}
