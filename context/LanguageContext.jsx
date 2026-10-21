"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import nl from "@/dictionaries/nl.json";

const dictionaries = { en, es, nl };

const LanguageContext = createContext();

import { usePathname, useRouter } from "next/navigation";

export const availableLanguages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", hidden: true },
];

export function getLocalizedPathname(targetLang, currentPath, currentLang) {
  let p = currentPath || "/";

  // Strip current language prefix if it's not 'en'
  if (currentLang && currentLang !== "en") {
    p = p.replace(new RegExp(`^/${currentLang}(/|$)`), "/");
  }

  // Ensure leading slash
  if (!p.startsWith("/")) {
    p = "/" + p;
  }

  // Add target language prefix if not 'en'
  if (targetLang && targetLang !== "en") {
    p = `/${targetLang}${p === "/" ? "/" : p}`;
  }

  // Ensure trailing slash for static export compatibility (trailingSlash: true)
  if (!p.endsWith("/") && !p.includes(".")) {
    p += "/";
  }

  return p;
}

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  let language = "en";
  if (pathname) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && dictionaries[segments[0]] && segments[0] !== "en") {
      language = segments[0];
    }
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    if (!dictionaries[lang]) return;
    try {
      localStorage.setItem("think4ever_lang", lang);
    } catch (e) {}
    
    if (lang === language) return;
    
    const currentPath = typeof window !== "undefined" ? window.location.pathname : (pathname || "/");
    const targetPath = getLocalizedPathname(lang, currentPath, language);
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const finalUrl = `${targetPath}${search}${hash}`;

    // Native browser navigation ensures fresh static HTML load and avoids
    // Next.js client-side Flight (.txt) routing issues on cPanel/WAF
    if (typeof window !== "undefined") {
      window.location.href = finalUrl;
    } else {
      router.push(finalUrl);
    }
  };

  // Helper to fetch nested key, e.g. t('nav.product')
  const t = (path, defaultValue) => {
    const dict = dictionaries[language] || dictionaries["en"];
    const keys = path.split(".");
    let current = dict;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if key missing in target lang
        let fallback = dictionaries["en"];
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk];
          } else {
            return defaultValue !== undefined ? defaultValue : path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages, getLocalizedPathname }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
