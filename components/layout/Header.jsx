"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  ExternalLink,
  Rocket,
  Palette,
  Code,
  Users,
  Settings,
  Puzzle,
  Terminal,
  Play,
} from "lucide-react";

export default function Header() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [mobileHowItWorksOpen, setMobileHowItWorksOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);

  const currentLang =
    availableLanguages.find((l) => l.code === language) ||
    availableLanguages[0];

  const resourcesLinks = [
    {
      title:
        t("nav.resourceLibrary") === "nav.resourceLibrary"
          ? "Resource Library"
          : t("nav.resourceLibrary"),
      desc: t("nav.resourceLibraryDesc", "Explore our collection of resources."),
      href: "/resources",
      icon: <Puzzle className="w-4 h-4 text-[#07A7E1]" />,
    },
    {
      title: t("nav.blog") === "nav.blog" ? "Blog" : t("nav.blog"),
      desc: t("nav.blogDesc", "Read the latest news and articles."),
      href: "/blog",
      icon: <Globe className="w-4 h-4 text-[#093cad]" />,
    },
    {
      title: t("nav.faq", "FAQ"),
      desc: t("nav.faqDesc", "Frequently asked questions."),
      href: "/faq",
      icon: <Settings className="w-4 h-4 text-slate-600" />,
    },
  ];

  const docsLinks = [
    {
      title: t("nav.docsMenu.onboardingTitle", "Customer Onboarding"),
      desc: t("nav.docsMenu.onboardingDesc", "Get started with Think4Ever."),
      href: "https://think4ever.com/docs/onboarding.html",
      icon: <Rocket className="w-4 h-4 text-[#07A7E1]" />,
    },
    {
      title: t("nav.docsMenu.designerTitle", "Think4Ever Designer"),
      desc: t("nav.docsMenu.designerDesc", "Learn how to map systems."),
      href: "https://think4ever.com/docs/manual_introduction.html",
      icon: <Palette className="w-4 h-4 text-[#093cad]" />,
    },
    {
      title: t("nav.docsMenu.developerTitle", "Think4Ever Developer"),
      desc: t("nav.docsMenu.developerDesc", "Technical guide for developers."),
      href: "https://think4ever.com/docs/dev/start_new_project.html",
      icon: <Code className="w-4 h-4 text-indigo-600" />,
    },
    {
      title: t("nav.docsMenu.portalTitle", "Think4Ever Portal"),
      desc: t("nav.docsMenu.portalDesc", "Manage team dashboard."),
      href: "https://think4ever.com/docs/portal/dashboard.html",
      icon: <Users className="w-4 h-4 text-[#07A7E1]" />,
    },
    {
      title: t("nav.docsMenu.reverseEngTitle", "Reverse Engineering"),
      desc: t("nav.docsMenu.reverseEngDesc", "Reverse engineer codebases."),
      href: "https://think4ever.com/docs/reverse_engineering.html",
      icon: <Settings className="w-4 h-4 text-slate-600" />,
    },
    {
      title: t("nav.docsMenu.mcpTitle", "Think MCP"),
      desc: t("nav.docsMenu.mcpDesc", "Claude Code, Codex, and Cursor."),
      href: "https://think4ever.com/docs/manual_think_mcp.html",
      icon: <Puzzle className="w-4 h-4 text-amber-500" />,
    },
    {
      title: t("nav.docsMenu.vscodeTitle", "VS Code Plugin"),
      desc: t("nav.docsMenu.vscodeDesc", "Access T4E inside VS Code."),
      href: "https://think4ever.com/docs/dev/vs_code_integration.html",
      icon: <Code className="w-4 h-4 text-blue-600" />,
    },
    {
      title: t("nav.docsMenu.apiTitle", "Think API"),
      desc: t("nav.docsMenu.apiDesc", "Programmatically manage tokens."),
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
            width={180}
            height={41}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Center Desktop Menu Items */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-semibold text-[#465a75]">
          {/* Product Dropdown */}
          <div
            className="relative group"
            onMouseLeave={() => setHowItWorksOpen(false)}
          >
            <button
              onClick={() => setHowItWorksOpen(!howItWorksOpen)}
              onMouseEnter={() => setHowItWorksOpen(true)}
              className="flex items-center gap-1 hover:text-[#093cad] transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.product", "Product")}</span>
              <ChevronDown className="w-4 h-4 text-[#07A7E1] group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-[#c8d9ed] py-2 transition-all duration-200 z-50 ${
                howItWorksOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                href="/how-it-works"
                className="flex items-start gap-3 px-4 py-3 hover:bg-[#f2f7ff] group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#f7fafe] border border-[#c8d9ed]/50 group-hover/item:bg-white shrink-0">
                  <Play className="w-4 h-4 text-[#07A7E1]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#09090d] group-hover/item:text-[#093cad]">
                    {t("nav.howItWorks")}
                  </div>
                  <p className="text-[10px] text-[#71849c] mt-0.5">
                    {t("nav.howItWorksDesc")}
                  </p>
                </div>
              </Link>
              <Link
                href="/code-to-design"
                className="flex items-start gap-3 px-4 py-3 hover:bg-[#f2f7ff] group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#f7fafe] border border-[#c8d9ed]/50 group-hover/item:bg-white shrink-0">
                  <Code className="w-4 h-4 text-[#093cad]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#09090d] group-hover/item:text-[#093cad]">
                    {t("nav.codeToDesign")}
                  </div>
                  <p className="text-[10px] text-[#71849c] mt-0.5">
                    {t("nav.codeToDesignDesc", "Reverse engineer code to visuals")}
                  </p>
                </div>
              </Link>
              <Link
                href="/design-to-code"
                className="flex items-start gap-3 px-4 py-3 hover:bg-[#f2f7ff] group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-[#f7fafe] border border-[#c8d9ed]/50 group-hover/item:bg-white shrink-0">
                  <Palette className="w-4 h-4 text-[#07A7E1]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#09090d] group-hover/item:text-[#093cad]">
                    {t("nav.designToCode")}
                  </div>
                  <p className="text-[10px] text-[#71849c] mt-0.5">
                    {t("nav.designToCodeDesc", "Turn systems into actual code")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            href="/integrations"
            className="hover:text-[#093cad] transition-colors whitespace-nowrap"
          >
            {t("nav.integrations")}
          </Link>

          {/* Resources Dropdown with chevron */}
          <div
            className="relative group"
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onMouseEnter={() => setResourcesOpen(true)}
              className="flex items-center gap-1 hover:text-[#093cad] transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.resources")}</span>
              <ChevronDown className="w-4 h-4 text-[#07A7E1] group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[260px] bg-white rounded-2xl shadow-2xl border border-[#c8d9ed] p-2 transition-all duration-200 z-50 grid grid-cols-1 gap-1 ${
                resourcesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {resourcesLinks.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-[#f2f7ff] group/item transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#f7fafe] border border-[#c8d9ed]/50 group-hover/item:bg-white shrink-0 mt-0.5">
                    {res.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#09090d] group-hover/item:text-[#093cad] flex items-center gap-1">
                      <span>{res.title}</span>
                    </div>
                    <p className="text-[10px] text-[#71849c] leading-snug mt-0.5">
                      {res.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Docs Dropdown */}
          <div
            className="relative group"
            onMouseLeave={() => setDocsOpen(false)}
          >
            <button
              onClick={() => setDocsOpen(!docsOpen)}
              onMouseEnter={() => setDocsOpen(true)}
              className="flex items-center gap-1 hover:text-[#093cad] transition-colors py-2 whitespace-nowrap"
            >
              <span>
                {t("nav.docs") === "nav.docs" ? "Docs" : t("nav.docs")}
              </span>
              <ChevronDown className="w-4 h-4 text-[#07A7E1] group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-2xl border border-[#c8d9ed] p-3 transition-all duration-200 z-50 grid grid-cols-2 gap-2 ${
                docsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
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

          <Link
            href="/pricing"
            className="hover:text-[#093cad] transition-colors whitespace-nowrap"
          >
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
              <span>
                {currentLang.flag} {currentLang.name}
              </span>
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
                    {language === lang.code && (
                      <span className="text-[#07A7E1] font-bold">✓</span>
                    )}
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
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#c8d9ed] text-xs font-medium text-[#314865]"
            >
              <span>{currentLang.flag}</span>
              <ChevronDown className="w-3 h-3" />
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
                    {language === lang.code && (
                      <span className="text-[#07A7E1] font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#09090d] hover:text-[#093cad] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c8d9ed] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setMobileHowItWorksOpen(!mobileHowItWorksOpen)}
              className="flex items-center justify-between text-sm font-semibold text-[#314865] w-full text-left"
            >
              <span>{t("nav.product", "Product")}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileHowItWorksOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileHowItWorksOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#c8d9ed]/50 ml-1">
                <Link
                  href="/how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  {t("nav.howItWorks")}
                </Link>
                <Link
                  href="/code-to-design"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  {t("nav.codeToDesign")}
                </Link>
                <Link
                  href="/design-to-code"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  {t("nav.designToCode")}
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-[#314865]"
          >
            {t("nav.integrations")}
          </Link>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="flex items-center justify-between text-sm font-semibold text-[#314865] w-full text-left"
            >
              <span>{t("nav.resources")}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#c8d9ed]/50 ml-1">
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  {t("nav.resourceLibrary")}
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  {t("nav.blog")}
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
              className="flex items-center justify-between text-sm font-semibold text-[#314865] w-full text-left"
            >
              <span>{t("nav.docs")}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileDocsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileDocsOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-[#c8d9ed]/50 ml-1">
                {docsLinks.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xs font-medium text-[#465a75] hover:text-[#093cad]"
                  >
                    <span>{doc.title}</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-[#314865]"
          >
            {t("nav.pricing")}
          </Link>

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
