import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import nl from "@/dictionaries/nl.json";

const dictionaries = { en, es, nl };

export function getLocalizedMetadata(lang, routeKey, fallbackMetadata) {
  const dict = dictionaries[lang] || dictionaries["en"];

  let dictKey = null;
  if (routeKey === "contact-us") {
    dictKey = "contactUsPage";
  } else if (routeKey === "home") {
    // handled explicitly later
  } else {
    dictKey = routeKey + "Page";
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
  const routePath = routeKey === 'home' ? '' : `/${routeKey}`;
  const currentPath = lang === 'en' ? routePath : `/${lang}${routePath}`;

  const languages = {
    'en': `${BASE_URL}${routePath}`,
    'es': `${BASE_URL}/es${routePath}`,
    'nl': `${BASE_URL}/nl${routePath}`,
  };

  const result = { 
    ...fallbackMetadata,
    alternates: {
      canonical: `${BASE_URL}${currentPath}`,
      languages: languages
    }
  };
  
  if (title) {
    result.title = title;
    if (result.openGraph) result.openGraph.title = title;
    if (result.twitter) result.twitter.title = title;
  }
  
  if (description) {
    result.description = description;
    if (result.openGraph) result.openGraph.description = description;
    if (result.twitter) result.twitter.description = description;
  }
  
  return result;
}
