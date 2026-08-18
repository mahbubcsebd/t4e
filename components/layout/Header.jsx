"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, Globe, Menu, X, ExternalLink, Rocket, Palette, Code, Users, Settings, Puzzle, Terminal } from "lucide-react";

export default function Header() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  const currentLang = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  const docsLinks = [
    {
      title: t("header.docs.onboardingTitle", "Customer Onboarding"),
      desc: "Get started with Think4Ever.",
      href: "https://think4ever.com/docs/onboarding.html",
      icon: <Rocket className="w-4 h-4 text-[#07A7E1]" />,
    },
    {
      title: t("header.docs.designerTitle", "Think4Ever Designer"),
      desc: "Learn how to map systems.",
      href: "https://think4ever.com/docs/manual_introduction.html",
      icon: <Palette className="w-4 h-4 text-[#093cad]" />,
    },
    {
      title: t("header.docs.developerTitle", "Think4Ever Developer"),
      desc: "Technical guide for developers.",
      href: "https://think4ever.com/docs/dev/start_new_project.html",
      icon: <Code className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: t("header.docs.portalTitle", "Think4Ever Portal"),
      desc: "Manage team dashboard.",
      href: "https://think4ever.com/docs/portal/dashboard.html",
      icon: <Users className="w-4 h-4 text-[#07A7E1]" />,
    },
    {
      title: t("header.docs.reverseEngineeringTitle", "Reverse Engineering"),
      desc: "Reverse engineer codebases.",
      href: "https://think4ever.com/docs/reverse_engineering.html",
      icon: <Settings className="w-4 h-4 text-slate-600" />,
    },
    {
      title: t("header.docs.thinkMcpTitle", "Think MCP"),
      desc: "Claude Code, Codex, and Cursor.",
      href: "https://think4ever.com/docs/manual_think_mcp.html",
      icon: <Puzzle className="w-4 h-4 text-amber-500" />,
    },
    {
      title: t("header.docs.vscodePluginTitle", "VS Code Plugin"),
      desc: "Access T4E inside VS Code.",
      href: "https://think4ever.com/docs/dev/vs_code_integration.html",
      icon: <Code className="w-4 h-4 text-blue-600" />,
    },
    {
      title: t("header.docs.thinkApiTitle", "Think API"),
      desc: "Programmatically manage tokens.",
      href: "https://think4ever.com/docs/manual_think_api.html",
      icon: <Terminal className="w-4 h-4 text-emerald-600" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#c8d9ed]/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/think4ever-logo.png"
            alt="Think4Ever"
            width={150}
            height={34}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Desktop Menu Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-semibold text-[#465a75]">
          <Link href="/how-it-works" className="hover:text-[#093cad] transition-colors whitespace-nowrap">
            {t("nav.product")}
          </Link>
          <Link href="/code-to-design" className="hover:text-[#093cad] transition-colors whitespace-nowrap">
            {t("nav.codeToDesign")}
          </Link>
          <Link href="/design-to-code" className="hover:text-[#093cad] transition-colors whitespace-nowrap">
            {t("nav.designToCode")}
          </Link>
          <Link href="/integrations" className="hover:text-[#093cad] transition-colors whitespace-nowrap">
            {t("nav.integrations")}
          </Link>

          {/* Resources Dropdown with chevron */}
          <div className="relative group" onMouseLeave={() => setResourcesOpen(false)}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onMouseEnter={() => setResourcesOpen(true)}
              className="flex items-center gap-1 hover:text-[#093cad] transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.resources")}</span>
              <ChevronDown className="w-4 h-4 text-[#07A7E1] group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-0 w-56 bg-white rounded-2xl shadow-2xl border border-[#c8d9ed] py-2 transition-all duration-200 z-50 ${
                resourcesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link href="/resources" className="block px-4 py-2.5 text-xs font-semibold text-[#09090d] hover:bg-[#f2f7ff] hover:text-[#093cad]">
                {t("nav.resourceLibrary")}
              </Link>
              <Link href="/blog" className="block px-4 py-2.5 text-xs font-semibold text-[#09090d] hover:bg-[#f2f7ff] hover:text-[#093cad]">
                {t("nav.blog")}
              </Link>
              <Link href="/resources#videos" className="block px-4 py-2.5 text-xs font-semibold text-[#09090d] hover:bg-[#f2f7ff] hover:text-[#093cad]">
                {t("nav.productVideos")}
              </Link>
              <Link href="/resources#guides" className="block px-4 py-2.5 text-xs font-semibold text-[#09090d] hover:bg-[#f2f7ff] hover:text-[#093cad]">
                {t("nav.whitePapers")}
              </Link>
              <Link href="/faq" className="block px-4 py-2.5 text-xs font-semibold text-[#09090d] hover:bg-[#f2f7ff] hover:text-[#093cad]">
                FAQ
              </Link>
            </div>
          </div>

          {/* Docs Dropdown */}
          <div className="relative group" onMouseLeave={() => setDocsOpen(false)}>
            <button
              onClick={() => setDocsOpen(!docsOpen)}
              onMouseEnter={() => setDocsOpen(true)}
              className="flex items-center gap-1 hover:text-[#093cad] transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.docs")}</span>
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-2xl border border-[#c8d9ed] p-3 transition-all duration-200 z-50 grid grid-cols-2 gap-2 ${
                docsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {docsLinks.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#f2f7ff] group/item transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#f7fafe] border border-[#c8d9ed]/50 group-hover/item:bg-white shrink-0 mt-0.5">
                    {doc.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#09090d] group-hover/item:text-[#093cad] flex items-center gap-1">
                      <span>{doc.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-40 group-hover/item:opacity-100" />
                    </div>
                    <p className="text-[10px] text-[#71849c] leading-snug mt-0.5">
                      {doc.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Link href="/pricing" className="hover:text-[#093cad] transition-colors whitespace-nowrap">
            {t("nav.pricing")}
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#c8d9ed] hover:border-[#093cad] text-xs font-semibold text-[#314865] bg-white transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#07A7E1]" />
              <span>{currentLang.flag} {currentLang.name}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-xl border border-[#c8d9ed] py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium transition-colors ${
                      language === lang.code
                        ? "bg-[#f2f7ff] text-[#093cad] font-bold"
                        : "text-[#314865] hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                    {language === lang.code && <span className="text-[#07A7E1] font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sign in text link */}
          <a
            href="https://portal.think4ever.com/#/login"
            className="text-[15px] font-semibold text-[#465a75] hover:text-[#093cad] transition-colors whitespace-nowrap"
          >
            {t("nav.signIn")}
          </a>

          {/* Start free solid blue pill button */}
          <a
            href="https://portal.think4ever.com/#/register"
            className="bg-[#093cad] hover:bg-[#072f85] text-white text-[15px] font-bold px-6 py-2.5 rounded-full transition-all shadow-md shadow-blue-600/20 whitespace-nowrap inline-flex items-center justify-center"
          >
            <span>{t("nav.startFree")}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#c8d9ed] text-xs font-medium text-[#314865]"
          >
            <span>{currentLang.flag}</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#09090d] hover:text-[#093cad] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c8d9ed] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.product")}
          </Link>
          <Link href="/code-to-design" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.codeToDesign")}
          </Link>
          <Link href="/design-to-code" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.designToCode")}
          </Link>
          <Link href="/integrations" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.integrations")}
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.resources")}
          </Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.blog")}
          </Link>
          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold text-[#314865]">
            {t("nav.pricing")}
          </Link>
          <a
            href="https://think4ever.com/docs/onboarding.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-[#314865] flex items-center justify-between"
          >
            <span>{t("nav.docs")}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </a>

          <div className="pt-4 border-t border-[#c8d9ed] flex flex-col gap-3">
            <a
              href="https://portal.think4ever.com/#/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-sm font-semibold text-[#314865] py-2"
            >
              {t("nav.signIn")}
            </a>
            <a
              href="https://portal.think4ever.com/#/register"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#093cad] text-white text-center text-sm font-bold py-3 rounded-full"
            >
              <span>{t("nav.startFree")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
