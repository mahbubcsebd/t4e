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
    localStorage.setItem("think4ever_lang", lang);
    
    if (lang === language) return;
    
    let newPathname = pathname || "/";
    
    // If currently on a translated route, strip the prefix
    if (language !== "en") {
      // replace only the first occurrence which is the language prefix
      newPathname = newPathname.replace(`/${language}`, "") || "/";
    }
    
    // If going to a translated route, add the prefix
    if (lang !== "en") {
      newPathname = `/${lang}${newPathname === "/" ? "" : newPathname}`;
    }
    
    router.push(newPathname);
  };

  // Helper to fetch nested key, e.g. t('nav.product')
  const t = (path) => {
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
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
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
