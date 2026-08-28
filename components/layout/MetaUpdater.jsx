"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function MetaUpdater() {
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    let titleKey = "";
    let descKey = "";

    if (pathname === "/contact-us" || pathname === "/contact-us/") {
      titleKey = "contactUsPage.metaTitle";
      descKey = "contactUsPage.metaDesc";
    } else {
      // Default to layout metadata
      titleKey = "layout.metaTitle";
      descKey = "layout.metaDesc";
    }

    const title = t(titleKey);
    const desc = t(descKey);

    // Update document title if translated string is found
    if (title && title !== titleKey) {
      document.title = title;
    }

    // Update meta description
    if (desc && desc !== descKey) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", desc);
      }
    }
  }, [pathname, t]);

  return null;
}
