import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import nl from "@/dictionaries/nl.json";


const dictionaries = { en, es, nl };

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export function getLocalizedMetadata(lang, routeKey, fallbackMetadata, urlSlug = routeKey) {
  const dict = dictionaries[lang] || dictionaries["en"];

  let dictKey = null;
  if (routeKey === "home") {
    // handled explicitly later
  } else {
    dictKey = toCamelCase(routeKey) + "Page";
    // Route "terms-and-conditions" keeps its copy under termsPage.
    if (dictKey === "termsAndConditionsPage") dictKey = "termsPage";
  }

  let title = fallbackMetadata?.title;
  let description = fallbackMetadata?.description;

  if (routeKey === "home") {
    title = dict.layout?.metaTitle || dict.metaTitle || title;
    description = dict.layout?.metaDesc || dict.metaDesc || description;
  } else if (dictKey && dict[dictKey]) {
    title = dict[dictKey].metaTitle || title;
    description = dict[dictKey].metaDesc || description;
  }

  const BASE_URL = "https://think4ever.com";
  // Trailing slash everywhere: it is the served URL and the one in the sitemap.
  const routePath = routeKey === 'home' ? '/' : `/${urlSlug}/`;
  const currentPath = lang === 'en' ? routePath : `/${lang}${routePath}`;

  // nl pages fall back to English UI copy, so only en/es are declared as alternates.
  const languages = {
    'en': `${BASE_URL}${routePath}`,
    'es': `${BASE_URL}/es${routePath}`,
    'x-default': `${BASE_URL}${routePath}`,
  };

  const result = { 
    ...fallbackMetadata,
    alternates: {
      canonical: `${BASE_URL}${currentPath}`,
      languages: languages
    }
  };
  
  const defaultImage = [
    {
      url: 'https://think4ever.com/images/opengraph-image.jpg',
      width: 1080,
      height: 1081,
      alt: 'Think4Ever',
    },
  ];

  if (title) {
    result.title = title;
    result.openGraph = { ...(result.openGraph || {}), title, images: defaultImage };
    result.twitter = { ...(result.twitter || {}), title, images: defaultImage };
  }
  
  if (description) {
    result.description = description;
    result.openGraph = { ...(result.openGraph || {}), description };
    result.twitter = { ...(result.twitter || {}), description };
  }
  
  return result;
}
