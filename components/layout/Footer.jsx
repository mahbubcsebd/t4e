"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#c8d9ed] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-3">
              <Image
                src="/images/think4ever-logo.png"
                alt="Think4Ever"
                width={180}
                height={41}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[#71849c] text-sm leading-relaxed max-w-sm">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div className="flex flex-col gap-4 text-sm">
              <h4 className="font-bold text-[#09090d] uppercase tracking-wider text-xs mb-2">
                {t("nav.product")}
              </h4>
              <Link
                href="/how-it-works"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.howItWorks")}
              </Link>
              <Link
                href="/code-to-design"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.codeToDesign")}
              </Link>
              <Link
                href="/design-to-code"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.designToCode")}
              </Link>
              <Link
                href="/integrations"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.integrations")}
              </Link>
              <Link
                href="/pricing"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.pricing")}
              </Link>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4 text-sm">
              <h4 className="font-bold text-[#09090d] uppercase tracking-wider text-xs mb-2">
                {t("nav.resources")}
              </h4>
              <Link
                href="/resources"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.resourceLibrary") === "nav.resourceLibrary"
                  ? "Resource Library"
                  : t("nav.resourceLibrary")}
              </Link>
              <Link
                href="/blog"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.blog")}
              </Link>
              <Link
                href="/faq"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("footer.faq")}
              </Link>
              <a
                href="https://think4ever.com/docs/onboarding.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("nav.docs")}
              </a>
              <Link
                href="/security"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("footer.trust")}
              </Link>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-4 text-sm">
              <h4 className="font-bold text-[#09090d] uppercase tracking-wider text-xs mb-2">
                {t("privacyPolicyPage.heroEyebrow")}
              </h4>
              <Link
                href="/contact-us"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("footer.contact")}
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[#465a75] hover:text-[#093cad] transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-[#c8d9ed]/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#71849c] font-medium">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@Think4EverInc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71849c] hover:text-[#093cad] transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/think4ever-global-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71849c] hover:text-[#093cad] transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
