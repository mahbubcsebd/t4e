"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#c8d9ed] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/think4ever-logo.png"
              alt="Think4Ever"
              width={150}
              height={34}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Footer Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold text-[#465a75]">
            <Link href="/how-it-works" className="hover:text-[#093cad] transition-colors">
              {t("nav.product")}
            </Link>
            <Link href="/code-to-design" className="hover:text-[#093cad] transition-colors">
              {t("nav.codeToDesign")}
            </Link>
            <Link href="/design-to-code" className="hover:text-[#093cad] transition-colors">
              {t("nav.designToCode")}
            </Link>
            <Link href="/integrations" className="hover:text-[#093cad] transition-colors">
              {t("nav.integrations")}
            </Link>
            <Link href="/resources" className="hover:text-[#093cad] transition-colors">
              {t("nav.resources")}
            </Link>
            <Link href="/blog" className="hover:text-[#093cad] transition-colors">
              {t("nav.blog")}
            </Link>
            <Link href="/pricing" className="hover:text-[#093cad] transition-colors">
              {t("nav.pricing")}
            </Link>
            <Link href="/faq" className="hover:text-[#093cad] transition-colors">
              {t("footer.faq")}
            </Link>
            <a
              href="https://think4ever.com/docs/onboarding.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#093cad] transition-colors"
            >
              {t("nav.docs")}
            </a>
            <Link href="/security" className="hover:text-[#093cad] transition-colors">
              {t("footer.trust")}
            </Link>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71849c]">
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy-policy" className="hover:text-[#093cad] transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#093cad] transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/contact-us" className="hover:text-[#093cad] transition-colors">
              {t("footer.contact")}
            </Link>
          </div>
          <p className="font-semibold">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
