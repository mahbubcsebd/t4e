"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useAuthModal } from "@/context/AuthModalContext";

const HERO_ID = "home-hero";

// Phones only: appears once the hero (and its prompt box) has scrolled away,
// so "Start free" is always one tap away on the long page.
export default function StickyStartBar() {
  const { t } = useLanguage();
  const { openAuthModal } = useAuthModal();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(HERO_ID);
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 px-4 pt-3 shadow-[0_-6px_20px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button
        size="lg"
        tabIndex={isVisible ? 0 : -1}
        onClick={() => openAuthModal("signup")}
        className="w-full min-h-11 cursor-pointer"
      >
        {t("nav.startFree")}
      </Button>
    </div>
  );
}
