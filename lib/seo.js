import { SITE_URL } from "@/lib/authors";

export const MAX_TITLE_LENGTH = 60;
export const MAX_DESCRIPTION_LENGTH = 160;

const BRAND = "Think4Ever";
const TITLE_SEPARATOR = /\s+[|—–]\s+/;

// Keeps a title inside the SERP limit without cutting words:
// full title -> without trailing brand -> first part + brand -> first part.
export function fitTitle(title) {
  if (!title || title.length <= MAX_TITLE_LENGTH) return title;

  const parts = title.split(TITLE_SEPARATOR);
  const withoutBrand = parts.filter((part) => part.trim() !== BRAND).join(" — ");
  const candidates = [
    withoutBrand,
    `${parts[0]} | ${BRAND}`,
    parts[0],
  ];
  const fits = candidates.find((c) => c.length <= MAX_TITLE_LENGTH);
  if (fits) return fits;
  return truncateAtWord(parts[0], MAX_TITLE_LENGTH);
}

export function fitDescription(description) {
  if (!description || description.length <= MAX_DESCRIPTION_LENGTH) return description;
  return truncateAtWord(description, MAX_DESCRIPTION_LENGTH);
}

function truncateAtWord(text, max) {
  const room = text.slice(0, max - 1);
  const cut = room.lastIndexOf(" ");
  const base = cut > max * 0.6 ? room.slice(0, cut) : room;
  return `${base.replace(/[\s,;:.\-—–]+$/, "")}…`;
}

const localizedPath = (lang, path) =>
  `${SITE_URL}${lang === "en" ? "" : `/${lang}`}${path}`;

// hreflang map for a content page. `langs` = languages that really have it.
export function buildLanguageAlternates(path, langs) {
  const languages = Object.fromEntries(
    langs.map((lang) => [lang, localizedPath(lang, path)]),
  );
  if (languages.en) languages["x-default"] = languages.en;
  return languages;
}
