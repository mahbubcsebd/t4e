import { SITE_URL } from "@/lib/authors";

// Titles above this length get no brand suffix appended (see seoText).
// Text is never cut: search engines shorten it themselves.
export const MAX_TITLE_LENGTH = 60;

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
