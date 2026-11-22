import { SITE_URL, authorUrl, resolveAuthor } from "@/lib/authors";

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Think4Ever",
  url: SITE_URL,
  logo: `${SITE_URL}/images/opengraph-image.jpg`,
  sameAs: ["https://www.linkedin.com/company/think4ever-global-inc/"],
};

export function toIsoDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  // Local parts: "November 17, 2026" parses as local midnight, toISOString would shift the day.
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function buildPersonLd(author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${authorUrl(author)}#person`,
    name: author.name,
    jobTitle: author.jobTitle,
    description: author.bio,
    url: authorUrl(author),
    worksFor: { "@id": ORGANIZATION["@id"], "@type": "Organization", name: ORGANIZATION.name },
    ...(author.sameAs.length > 0 && { sameAs: author.sameAs }),
  };
}

export function buildArticleLd({ post, url, datePublished, image, type = "BlogPosting" }) {
  const author = resolveAuthor(post.author);
  const authorNode = author
    ? { "@type": "Person", "@id": `${authorUrl(author)}#person`, name: author.name, url: authorUrl(author) }
    : { "@type": "Organization", name: ORGANIZATION.name, url: SITE_URL };

  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: post.title,
    description: post.desc || post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: post.lang,
    datePublished,
    dateModified: datePublished,
    ...(image && { image: [image] }),
    author: authorNode,
    publisher: ORGANIZATION,
  };
}
