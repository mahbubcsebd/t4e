"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function MicrosoftStoreIcon({ className = "w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="10.5" height="10.5" fill="#f25022" />
      <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7fba00" />
      <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
      <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
    </svg>
  );
}

export function GooglePlayIcon({ className = "w-5 h-5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 26" aria-hidden="true">
      <path
        d="M1.2.6 13.4 12.8 1.2 25c-.4-.3-.7-.8-.7-1.4V2c0-.6.3-1.1.7-1.4Z"
        fill="#00d2ff"
      />
      <path
        d="m17.5 8.7-4.1 4.1 4.1 4.1 4.6-2.6c1.3-.8 1.3-2.2 0-3l-4.6-2.6Z"
        fill="#ffd400"
      />
      <path
        d="M13.4 12.8 1.2 25c.5.4 1.2.4 1.9 0l14.4-8.1-4.1-4.1Z"
        fill="#ff3a44"
      />
      <path
        d="M13.4 12.8 17.5 8.7 3.1.6C2.4.2 1.7.2 1.2.6l12.2 12.2Z"
        fill="#00f076"
      />
    </svg>
  );
}

export default function StoreButtons({
  variant = "dark",
  className = "",
  showOnly = null, // "windows" | "android" | null
}) {
  const { t } = useLanguage();

  const isLight = variant === "light";

  // Smaller, premium button styling that scales smoothly from mobile to desktop
  const buttonBaseClass = cn(
    "group inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-2.5 md:gap-3 px-2.5 py-2 sm:px-3.5 sm:py-2.5 md:px-4.5 md:py-2.5 rounded-lg sm:rounded-[10px] transition-all duration-200 w-full sm:w-auto sm:min-w-[170px] md:min-w-[195px]",
    isLight
      ? "bg-white text-[#0B1B3A] border border-border shadow-sm sm:shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/40"
      : "bg-[#0B1B3A] text-white border border-white/10 shadow-md sm:shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#10244C]"
  );

  const containerClass = showOnly
    ? cn("flex items-center w-full sm:w-auto", className)
    : cn(
        "grid grid-cols-2 gap-2 sm:gap-3.5 sm:flex sm:flex-wrap sm:items-center w-full sm:w-auto",
        className
      );

  return (
    <div className={containerClass}>
      {(!showOnly || showOnly === "windows") && (
        <a
          href="https://apps.microsoft.com/detail/9nj1lbpvwn49?hl=en-US&gl=US&ocid=pdpshare"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonBaseClass}
          aria-label="Download Think4Ever from Microsoft Store"
        >
          <MicrosoftStoreIcon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 shrink-0 transition-transform group-hover:scale-105" />
          <div className="text-left leading-tight min-w-0">
            <span
              className={cn(
                "block text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-medium tracking-wide uppercase truncate",
                isLight ? "text-muted-foreground" : "text-white/70"
              )}
            >
              {t("appsPage.hero.getOnStore", "Get it from")}
            </span>
            <span className="block text-[11px] sm:text-[13px] md:text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              {t("appsPage.hero.microsoftStore", "Microsoft Store")}
            </span>
          </div>
        </a>
      )}

      {(!showOnly || showOnly === "android") && (
        <a
          href="https://play.google.com/store/apps/details?id=com.think4ever.t4e"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonBaseClass}
          aria-label="Download Think4Ever on Google Play"
        >
          <GooglePlayIcon className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 shrink-0 transition-transform group-hover:scale-105" />
          <div className="text-left leading-tight min-w-0">
            <span
              className={cn(
                "block text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-medium tracking-wide uppercase truncate",
                isLight ? "text-muted-foreground" : "text-white/70"
              )}
            >
              {t("appsPage.hero.getOnPlay", "Get it on")}
            </span>
            <span className="block text-[11px] sm:text-[13px] md:text-[14.5px] font-bold tracking-tight whitespace-nowrap">
              {t("appsPage.hero.googlePlay", "Google Play")}
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
