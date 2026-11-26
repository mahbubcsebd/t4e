import { SITE_URL } from "@/lib/authors";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";

const DICTIONARIES = { en, es };
const HOME_LABEL = { en: "Home", es: "Inicio" };

function stripLinkToken(text) {
  return String(text).replace(/\{link\}/g, "").replace(/\s+/g, " ").trim();
}

function toQuestions(items) {
  return items
    .map((item) => ({ question: item.q || item.question, answer: item.a || item.answer }))
    .filter((item) => typeof item.question === "string" && typeof item.answer === "string")
    .map((item) => ({
      "@type": "Question",
      name: stripLinkToken(item.question),
      acceptedAnswer: { "@type": "Answer", text: stripLinkToken(item.answer) },
    }));
}

/**
 * JSON-LD for a static marketing page: WebPage + BreadcrumbList,
 * plus FAQPage when the page shows a list of questions.
 */
export function buildPageLd({ lang = "en", dictKey, path, faqPath }) {
  const dict = DICTIONARIES[lang] || en;
  const page = dict[dictKey] || {};
  const prefix = lang === "en" ? "" : `/${lang}`;
  const url = `${SITE_URL}${prefix}${path}`;
  const name = page.metaTitle;
  const faqItems = faqPath ? faqPath.split(".").reduce((node, key) => node?.[key], dict) : null;

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name,
      description: page.metaDesc,
      inLanguage: lang,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: HOME_LABEL[lang] || HOME_LABEL.en, item: `${SITE_URL}${prefix}/` },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  ];

  if (Array.isArray(faqItems) && faqItems.length > 0) {
    graph.push({ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: toQuestions(faqItems) });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
