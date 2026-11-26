import fs from "node:fs";
import path from "node:path";
import { SLUG_ALIASES } from "@/lib/markdown";
import { MAX_TITLE_LENGTH, buildLanguageAlternates } from "@/lib/seo";

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

// Title/description for search results; OG keeps the same text.
// Adds the brand suffix only when the result still fits; never cuts text.
function withSuffix(title, suffix) {
  const full = `${title} | ${suffix}`;
  return full.length <= MAX_TITLE_LENGTH ? full : title;
}

// seoTitle (frontmatter) replaces the heading-based title when set.
export function seoText(title, suffix, description, seoTitle) {
  return {
    title: seoTitle || withSuffix(title, suffix),
    description,
  };
}
