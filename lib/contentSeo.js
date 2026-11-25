import fs from "node:fs";
import path from "node:path";
import { SLUG_ALIASES } from "@/lib/markdown";
import { buildLanguageAlternates, fitDescription, fitTitle } from "@/lib/seo";

const LANGS = ["en", "es", "nl"];
const CONTENT_ROOT = path.join(process.cwd(), "content");

// getPostBySlug/getTutorialBySlug fall back to English, so check the file itself.
export function hasTranslation(kind, slug, lang) {
  const realSlug = kind === "blog" ? SLUG_ALIASES[slug] || slug : slug;
  return fs.existsSync(path.join(CONTENT_ROOT, kind, lang, `${realSlug}.md`));
}

// hreflang alternates for a blog post or tutorial, limited to real translations.
export function contentAlternates(kind, slug, canonicalSlug = slug) {
  const langs = LANGS.filter((lang) => hasTranslation(kind, slug, lang));
  return buildLanguageAlternates(`/${kind}/${canonicalSlug}/`, langs);
}

// Title/description sized for search results; OG keeps the same text.
export function seoText(title, suffix, description) {
  return {
    title: fitTitle(`${title} | ${suffix}`),
    description: fitDescription(description),
  };
}
