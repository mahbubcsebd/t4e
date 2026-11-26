"use client";

import en from "@/dictionaries/en.json";
import es from "@/dictionaries/es.json";
import { LanguageProvider } from "@/context/LanguageContext";

const DICTIONARIES = { en, es };

// Wraps only the /[lang]/ routes so the Spanish copy is not shipped with English pages.
export default function EsLanguageProvider({ children }) {
  return <LanguageProvider dictionaries={DICTIONARIES}>{children}</LanguageProvider>;
}
