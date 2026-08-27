"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import nl from "@/dictionaries/nl.json";

const dictionaries = { en, es, nl };

const LanguageContext = createContext();

export const availableLanguages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", hidden: true },
];

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("think4ever_lang");
    if (saved && dictionaries[saved]) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    if (dictionaries[lang]) {
      setLanguageState(lang);
      localStorage.setItem("think4ever_lang", lang);
    }
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
