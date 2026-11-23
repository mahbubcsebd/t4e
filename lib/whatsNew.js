import en from "@/content/whats-new/en.json";
import es from "@/content/whats-new/es.json";
import nl from "@/content/whats-new/nl.json";
import linkHrefs from "@/content/whats-new/links.json";

const CONTENT = { en, es, nl };
const LABEL_SEPARATOR = ": ";
const DOCS_PREFIX = "/docs/";

// Docs live outside the Next.js app, so they are never language-prefixed.
function localizeHref(href, lang) {
  if (href.startsWith(DOCS_PREFIX) || lang === "en") return href;
  return `/${lang}${href}`;
}

function resolveLink(key, labels, lang) {
  const label = labels[key] ?? "";
  const href = localizeHref(linkHrefs[key], lang);
  const splitAt = label.indexOf(LABEL_SEPARATOR);
  if (splitAt < 0) return { prefix: "", title: label, href };
  return {
    prefix: label.slice(0, splitAt),
    title: label.slice(splitAt + LABEL_SEPARATOR.length),
    href,
  };
}

/**
 * Month data for the What's new page, with links resolved for the language.
 * Falls back to English when the language has no content file.
 */
export function getWhatsNew(lang) {
  const content = CONTENT[lang] || CONTENT.en;

  const months = content.months.map((month) => ({
    ...month,
    features: month.features.map((feature) => ({
      ...feature,
      links: feature.links.map((key) => resolveLink(key, content.links, lang)),
    })),
    also: month.also.map((item) => ({
      text: item.text,
      link: item.link ? resolveLink(item.link, content.links, lang) : null,
    })),
  }));

  const total = months.reduce((sum, month) => sum + month.count, 0);
  return { months, total, monthCount: months.length };
}
