import { SITE_URL, resolveAuthor } from "@/lib/authors";

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Think4Ever",
  alternateName: ["Think Forever", "Think 4 Ever"],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/t4e-logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/think4ever-global-inc/",
    "https://www.youtube.com/@Think4EverInc",
  ],
};

export function toIsoDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  // Local parts: "November 17, 2026" parses as local midnight, toISOString would shift the day.
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function buildArticleLd({ post, url, datePublished, image, type = "BlogPosting" }) {
  const author = resolveAuthor(post.author);
  const authorNode = author
    ? { "@type": "Person", name: author.name, jobTitle: author.jobTitle, worksFor: { "@id": ORGANIZATION["@id"] } }
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

// Home page: who we are (Organization), the site (WebSite) and the product.
export function buildHomeLd({ description }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ORGANIZATION,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Think4Ever",
        inLanguage: ["en", "es"],
        publisher: { "@id": ORGANIZATION["@id"] },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Think4Ever",
        url: SITE_URL,
        description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web, Windows, Android",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free plan, 500 credits, no card required",
        },
        publisher: { "@id": ORGANIZATION["@id"] },
      },
    ],
  };
}
