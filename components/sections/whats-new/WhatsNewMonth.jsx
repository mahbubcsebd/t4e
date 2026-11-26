"use client";

import { useLanguage } from "@/context/LanguageContext";
import { scrollToMonth } from "./scrollToMonth";

function Highlight({ text, query }) {
  if (!query) return text;
  const start = text.toLowerCase().indexOf(query);
  if (start < 0) return text;
  const end = start + query.length;
  return (
    <>
      {text.slice(0, start)}
      <mark className="rounded-sm bg-primary/20 px-0.5 text-inherit">{text.slice(start, end)}</mark>
      {text.slice(end)}
    </>
  );
}

function DocLink({ link }) {
  return (
    <a
      href={link.href}
      className="inline-flex items-center gap-1.5 rounded-full bg-[#cce6ff]/60 px-2.5 py-1 text-[13px] font-bold text-[#093cad] transition-colors hover:bg-[#cce6ff]"
    >
      {link.prefix ? (
        <>
          {link.prefix}: <em className="font-medium not-italic text-muted-foreground">{link.title}</em>
        </>
      ) : (
        link.title
      )}{" "}
      →
    </a>
  );
}

function FeatureCard({ feature, query, categoryLabel }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue">{categoryLabel}</span>
      <h3 className="mt-1.5 text-[17px] font-bold leading-snug text-foreground">
        <Highlight text={feature.title} query={query} />
      </h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
        <Highlight text={feature.description} query={query} />
      </p>
      {feature.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {feature.links.map((link) => (
            <DocLink key={link.href} link={link} />
          ))}
        </div>
      )}
    </article>
  );
}

function AlsoNewRow({ items, query, label }) {
  const pill = "rounded-full px-3 py-1 text-[13px]";
  return (
    <div className="mt-4 flex flex-wrap items-center gap-1.5">
      <b className="mr-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</b>
      {items.map((item) =>
        item.link ? (
          <a
            key={item.text}
            href={item.link.href}
            className={`${pill} bg-[#cce6ff]/60 text-[#093cad] transition-colors hover:bg-[#cce6ff]`}
          >
            <Highlight text={item.text} query={query} /> →
          </a>
        ) : (
          <span key={item.text} className={`${pill} bg-muted text-foreground`}>
            <Highlight text={item.text} query={query} />
          </span>
        ),
      )}
    </div>
  );
}

export default function WhatsNewMonth({ month, query, isLatest, showMarker }) {
  const { t } = useLanguage();

  return (
    <>
      <section
        id={month.id}
        aria-labelledby={`${month.id}-heading`}
        className="relative ml-2 scroll-mt-48 border-l-2 border-border pb-11 pl-6 sm:ml-2.5 sm:pl-10"
      >
        <span
          aria-hidden="true"
          className="absolute -left-[13px] top-2.5 flex h-3.5 w-6 items-center rounded-full bg-brand-blue pl-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-white ring-[2.5px] ring-inset ring-primary" />
        </span>

        <div className="flex items-baseline justify-between gap-4">
          <h2
            id={isLatest ? "latest" : `${month.id}-heading`}
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            <a
              href={`#${month.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToMonth(month.id);
              }}
              className="hover:text-brand-blue"
            >
              {month.month} <span className="font-medium text-slate-600">{month.year}</span>
            </a>
          </h2>
          <span className="shrink-0 text-xs font-bold tracking-[0.14em] text-brand-blue">
            {month.count} {t("whatsNewPage.newLabel").toUpperCase()}
          </span>
        </div>

        <p className="mt-2 text-xl font-bold text-foreground">{month.title}</p>
        <p className="mt-1 max-w-3xl text-muted-foreground">{month.summary}</p>

        {month.features.length > 0 && (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {month.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                query={query}
                categoryLabel={t(`whatsNewPage.categories.${feature.category}`, feature.category)}
              />
            ))}
          </div>
        )}

        {month.also.length > 0 && <AlsoNewRow items={month.also} query={query} label={t("whatsNewPage.alsoNew")} />}
      </section>

      {showMarker && month.marker && (
        <div className="relative -mt-3.5 mb-10 sm:pl-0">
          <div aria-hidden="true" className="absolute inset-x-0 top-1/2 border-t-[1.5px] border-dashed border-primary/60" />
          <span className="relative inline-block rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-primary-foreground sm:text-sm">
            {month.marker}
          </span>
        </div>
      )}
    </>
  );
}
