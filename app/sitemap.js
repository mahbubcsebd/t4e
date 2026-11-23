import { SITE_URL } from "@/lib/authors";
import { toIsoDate } from "@/lib/jsonLd";
import { getAllPosts } from "@/lib/markdown";
import { getAllTutorials } from "@/lib/tutorials";

export const dynamic = "force-static";

const LANGS = ["en", "es", "nl"];

// Public pages. register and onboarding are app flows, so they stay out.
const STATIC_ROUTES = [
  "",
  "blog",
  "tutorials",
  "price",
  "customers",
  "how-it-works",
  "integrations",
  "marketplaces",
  "resources",
  "whats-new",
  "security",
  "faq",
  "contact-us",
  "apps",
  "code-to-design",
  "design-to-code",
  "privacy-policy",
  "terms-and-conditions",
];

const localizedUrl = (lang, path) => {
  const prefix = lang === "en" ? "" : `/${lang}`;
  return `${SITE_URL}${prefix}${path ? `/${path}` : ""}${path || lang !== "en" ? "/" : ""}`;
};

const entry = (lang, path, lastModified) => ({
  url: localizedUrl(lang, path),
  ...(lastModified && { lastModified }),
});

export default function sitemap() {
  const enPosts = getAllPosts("en");
  const entries = [];

  for (const lang of LANGS) {
    for (const route of STATIC_ROUTES) entries.push(entry(lang, route));

    for (const post of enPosts) {
      entries.push(entry(lang, `blog/${post.canonicalSlug || post.slug}`, toIsoDate(post.date)));
    }
    for (const tutorial of getAllTutorials(lang)) {
      entries.push(entry(lang, `tutorials/${tutorial.slug}`, toIsoDate(tutorial.date)));
    }
  }

  return entries;
}
