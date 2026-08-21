"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#09090d] pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gradient accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#093cad]/60 to-transparent" />

      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#093cad]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5 flex flex-col items-start gap-5">
            <Link href="/" className="mb-1">
              <Image
                src="/images/think4ever-logo.png"
                alt="Think4Ever"
                width={180}
                height={41}
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="text-[#8a9ab5] text-sm leading-relaxed max-w-sm">
              {t("hero.subtitle")}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.youtube.com/@Think4EverInc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8a9ab5] hover:text-white hover:bg-[#093cad]/60 hover:border-[#093cad]/40 transition-all duration-300"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/think4ever-global-inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#8a9ab5] hover:text-white hover:bg-[#07A7E1]/60 hover:border-[#07A7E1]/40 transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Product Column */}
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                {t("nav.product")}
              </h4>
              <Link
                href="/how-it-works"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.howItWorks")}
              </Link>
              <Link
                href="/code-to-design"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.codeToDesign")}
              </Link>
              <Link
                href="/design-to-code"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.designToCode")}
              </Link>
              <Link
                href="/integrations"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.integrations")}
              </Link>
              <Link
                href="/pricing"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.pricing")}
              </Link>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                {t("nav.resources")}
              </h4>
              <Link
                href="/resources"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.resourceLibrary") === "nav.resourceLibrary"
                  ? "Resource Library"
                  : t("nav.resourceLibrary")}
              </Link>
              <Link
                href="/blog"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.blog")}
              </Link>
              <Link
                href="/faq"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("footer.faq")}
              </Link>
              <a
                href="https://think4ever.com/docs/onboarding.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("nav.docs")}
              </a>
              <Link
                href="/security"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("footer.trust")}
              </Link>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-2">
                Legal & Privacy
              </h4>
              <Link
                href="/contact-us"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("footer.contact")}
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[#8a9ab5] hover:text-white transition-colors duration-200"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8a9ab5]/70 font-medium">
            {t("footer.copyright")}
          </p>
          {/* Gradient badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-[#8a9ab5]">
              Think4Ever Inc.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
