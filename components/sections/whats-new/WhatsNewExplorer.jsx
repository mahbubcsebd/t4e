"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { WHATS_NEW_CATEGORIES } from "@/lib/whatsNewCategories";
import WhatsNewMonth from "./WhatsNewMonth";
import { scrollToMonth } from "./scrollToMonth";

const ALL = "All";
const SEARCH_DEBOUNCE_MS = 120;
const HASH_SCROLL_DELAY_MS = 0;
const SITE_HEADER_HEIGHT_PX = 64;
const RESULTS_GAP_PX = 16;

function searchableText(feature) {
  return `${feature.title} ${feature.description} ${feature.category}`.toLowerCase();
}

function filterMonths(months, category, query) {
  const isFiltered = category !== ALL || query !== "";
  const visible = months
    .map((month) => ({
      ...month,
      features: month.features.filter(
        (feature) =>
          (category === ALL || feature.category === category) && searchableText(feature).includes(query),
      ),
      also: category === ALL ? month.also.filter((item) => item.text.toLowerCase().includes(query)) : [],
    }))
    .filter((month) => !isFiltered || month.features.length > 0 || month.also.length > 0);

  return { visible, isFiltered };
}

export default function WhatsNewExplorer({ months, total }) {
  const { t } = useLanguage();
  const [category, setCategory] = useState(ALL);
  const [draftQuery, setDraftQuery] = useState("");
  const [query, setQuery] = useState("");
  const toolbarRef = useRef(null);
  const resultsRef = useRef(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setQuery(draftQuery.trim().toLowerCase()), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [draftQuery]);

  // After a filter or search the list shrinks. If the reader is scrolled far down,
  // bring the top of the results back under the sticky toolbar.
  const revealResults = useCallback(() => {
    const results = resultsRef.current;
    const toolbar = toolbarRef.current;
    if (!results || !toolbar) return;
    const stickyHeight = SITE_HEADER_HEIGHT_PX + toolbar.offsetHeight;
    const top = results.getBoundingClientRect().top + window.scrollY - stickyHeight - RESULTS_GAP_PX;
    if (window.scrollY > top) window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
  }, []);

  useEffect(() => {
    if (!hasInteracted.current) return;
    revealResults();
  }, [category, query, revealResults]);

  // Land on the requested month when the page opens with a #month-year address.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView(), HASH_SCROLL_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = {};
    months.forEach((month) =>
      month.features.forEach((feature) => {
        counts[feature.category] = (counts[feature.category] || 0) + 1;
      }),
    );
    return counts;
  }, [months]);

  const { visible, isFiltered } = useMemo(() => filterMonths(months, category, query), [months, category, query]);
  const hasResults = visible.length > 0;

  const resultCount = useMemo(
    () => visible.reduce((sum, month) => sum + month.features.length + month.also.length, 0),
    [visible],
  );

  const resetFilters = () => {
    hasInteracted.current = true;
    setDraftQuery("");
    setQuery("");
    setCategory(ALL);
  };

  const selectCategory = (code) => {
    hasInteracted.current = true;
    setCategory(code);
  };

  const filterButton = (code, label, count) => {
    const isActive = category === code;
    return (
      <button
        key={code}
        type="button"
        aria-pressed={isActive}
        onClick={() => selectCategory(code)}
        className={`h-8 flex-none cursor-pointer rounded-full border px-3 text-[13px] font-bold tracking-wide transition-colors ${
          isActive
            ? "border-primary-foreground bg-primary-foreground text-white"
            : "border-border bg-white text-muted-foreground hover:border-[#b7ccf4] hover:text-foreground"
        }`}
      >
        {label}
        <span className={`ml-1 font-medium ${isActive ? "text-[#b7ccf4]" : "text-muted-foreground/70"}`}>{count}</span>
      </button>
    );
  };

  return (
    <>
      <div
        ref={toolbarRef}
        className="sticky top-16 z-30 border-b border-border bg-background/95 shadow-sm backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-2.5 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <label className="relative min-w-[200px] flex-1">
              <span className="sr-only">{t("whatsNewPage.searchLabel")}</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="text"
                inputMode="search"
                value={draftQuery}
                onChange={(event) => {
                  hasInteracted.current = true;
                  setDraftQuery(event.target.value);
                }}
                placeholder={t("whatsNewPage.searchPlaceholder")}
                autoComplete="off"
                className="h-[42px] w-full rounded-xl border-[1.5px] border-border bg-white pl-10 pr-10 text-[15px] text-foreground outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/15"
              />
              {draftQuery && (
                <button
                  type="button"
                  aria-label={t("whatsNewPage.clearSearch")}
                  onClick={() => {
                    hasInteracted.current = true;
                    setDraftQuery("");
                  }}
                  className="absolute right-2.5 top-1/2 flex h-6 w-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </label>
            <label className="w-full sm:w-auto">
              <span className="sr-only">{t("whatsNewPage.jumpLabel")}</span>
              <select
                value=""
                onChange={(event) => event.target.value && scrollToMonth(event.target.value)}
                className="h-[42px] w-full cursor-pointer rounded-xl border-[1.5px] border-border bg-white px-2.5 text-sm text-foreground sm:w-auto"
              >
                <option value="">{t("whatsNewPage.jumpLabel")}</option>
                {months.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.month} {month.year} ({month.count} {t("whatsNewPage.newLabel")})
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div
            role="group"
            aria-label={t("whatsNewPage.filterAria")}
            className="flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {filterButton(ALL, t("whatsNewPage.filterAll"), total)}
            {WHATS_NEW_CATEGORIES.map((code) =>
              filterButton(code, t(`whatsNewPage.categories.${code}`, code), categoryCounts[code] || 0),
            )}
          </div>
        </div>
      </div>

      <div ref={resultsRef} className="mx-auto max-w-5xl px-4 pb-6 pt-9 sm:px-6 lg:px-8">
        {isFiltered && (
          <p role="status" className="mb-6 text-sm font-semibold text-muted-foreground">
            {t("whatsNewPage.results").replace("{count}", resultCount)}
          </p>
        )}
        {visible.map((month, index) => (
          <WhatsNewMonth
            key={month.id}
            month={month}
            query={query}
            isLatest={month.id === months[0].id}
            showMarker={!isFiltered && index >= 0}
          />
        ))}

        {!hasResults && (
          <p className="py-10 text-center text-muted-foreground">
            {t("whatsNewPage.emptyText")}{" "}
            <button
              type="button"
              onClick={resetFilters}
              className="cursor-pointer font-bold text-brand-blue underline underline-offset-4"
            >
              {t("whatsNewPage.showEverything")}
            </button>
          </p>
        )}
      </div>
    </>
  );
}
