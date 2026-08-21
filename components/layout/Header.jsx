"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
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
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [scrolled, setScrolled] = useState(false);
  const langDropdownRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLang =
    availableLanguages.find((l) => l.code === language) ||
    availableLanguages[0];

  const resourcesLinks = [
    // {
    //   title:
    //     t("nav.resourceLibrary") === "nav.resourceLibrary"
    //       ? "Resource Library"
    //       : t("nav.resourceLibrary"),
    //   desc: t(
    //     "nav.resourceLibraryDesc",
    //     "Explore our collection of resources.",
    //   ),
    //   href: "/resources",
    //   icon: <Puzzle className="w-4 h-4 text-primary" />,
    // },
    {
      title: t("nav.blog") === "nav.blog" ? "Blog" : t("nav.blog"),
      desc: t("nav.blogDesc", "Read the latest news and articles."),
      href: "/blog",
      icon: <Globe className="w-4 h-4 text-primary" />,
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
      icon: <Rocket className="w-4 h-4 text-primary" />,
    },
    {
      title: t("nav.docsMenu.designerTitle", "Think4Ever Designer"),
      desc: t("nav.docsMenu.designerDesc", "Learn how to map systems."),
      href: "https://think4ever.com/docs/manual_introduction.html",
      icon: <Palette className="w-4 h-4 text-primary" />,
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
      icon: <Users className="w-4 h-4 text-primary" />,
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
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-[0_4px_32px_rgba(9,60,173,0.08)]"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/think4ever-logo.png"
            alt="Think4Ever"
            width={180}
            height={41}
            className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "h-7" : "h-8"
            }`}
            priority
          />
        </Link>

        {/* Center Desktop Menu Items */}
        <nav className="header-nav hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-semibold text-muted-foreground">
          {/* Product Dropdown */}
          <div
            className="relative group"
            onMouseLeave={() => setHowItWorksOpen(false)}
          >
            <button
              onClick={() => setHowItWorksOpen(!howItWorksOpen)}
              onMouseEnter={() => setHowItWorksOpen(true)}
              className="flex items-center gap-1 hover:text-foreground transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.product", "Product")}</span>
              <ChevronDown className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-0 w-64 bg-card rounded-2xl shadow-2xl border border-border py-2 transition-all duration-200 z-50 ${
                howItWorksOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link
                href="/how-it-works"
                className="flex items-start gap-3 px-4 py-3 hover:bg-muted group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-muted border border-border group-hover/item:bg-card shrink-0">
                  <Play className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground group-hover/item:text-primary">
                    {t("nav.howItWorks")}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {t("nav.howItWorksDesc")}
                  </p>
                </div>
              </Link>
              <Link
                href="/code-to-design"
                className="flex items-start gap-3 px-4 py-3 hover:bg-muted group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-muted border border-border group-hover/item:bg-card shrink-0">
                  <Code className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground group-hover/item:text-primary">
                    {t("nav.codeToDesign")}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {t(
                      "nav.codeToDesignDesc",
                      "Reverse engineer code to visuals",
                    )}
                  </p>
                </div>
              </Link>
              <Link
                href="/design-to-code"
                className="flex items-start gap-3 px-4 py-3 hover:bg-muted group/item transition-colors"
              >
                <div className="p-1.5 rounded-lg bg-muted border border-border group-hover/item:bg-card shrink-0">
                  <Palette className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground group-hover/item:text-primary">
                    {t("nav.designToCode")}
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {t("nav.designToCodeDesc", "Turn systems into actual code")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Link
            href="/integrations"
            className="hover:text-foreground transition-colors whitespace-nowrap"
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
              className="flex items-center gap-1 hover:text-foreground transition-colors py-2 whitespace-nowrap"
            >
              <span>{t("nav.resources")}</span>
              <ChevronDown className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[260px] bg-popover rounded-2xl shadow-2xl border border-border p-2 transition-all duration-200 z-50 grid grid-cols-1 gap-1 ${
                resourcesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {resourcesLinks.map((res, idx) => (
                <Link
                  key={idx}
                  href={res.href}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-primary/10 group/item transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-muted border border-border/50 group-hover/item:bg-popover shrink-0 mt-0.5">
                    {res.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#09090d] group-hover/item:text-primary flex items-center gap-1">
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
              className="flex items-center gap-1 hover:text-foreground transition-colors py-2 whitespace-nowrap"
            >
              <span>
                {t("nav.docs") === "nav.docs" ? "Docs" : t("nav.docs")}
              </span>
              <ChevronDown className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-popover rounded-2xl shadow-2xl border border-border p-3 transition-all duration-200 z-50 grid grid-cols-2 gap-2 ${
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
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-primary/10 group/item transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-muted border border-border/50 group-hover/item:bg-popover shrink-0 mt-0.5">
                    {doc.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground group-hover/item:text-primary flex items-center gap-1">
                      <span>{doc.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-40 group-hover/item:opacity-100" />
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-snug mt-0.5">
                      {doc.desc}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/pricing"
            className="hover:text-foreground transition-colors whitespace-nowrap"
          >
            {t("nav.pricing")}
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : mounted ? (
              <Moon className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-[15px] font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="uppercase">{currentLang.code}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute right-0 top-full mt-1 w-36 bg-popover rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border py-2 z-50 transition-all duration-200 ${
                langDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {availableLanguages
                .filter((l) => !l.hidden)
                .map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2 text-[13px] transition-colors ${
                      language === lang.code
                        ? "text-primary font-bold bg-primary/10"
                        : "text-muted-foreground font-medium hover:text-primary hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${lang.code === "en" ? "us" : lang.code}.png`}
                        alt={lang.name}
                        className="w-[18px] h-auto shadow-[0_0_2px_rgba(0,0,0,0.2)] object-cover"
                      />
                      <span>{lang.name}</span>
                    </div>
                    {language === lang.code && (
                      <span className="text-primary text-xs">✓</span>
                    )}
                  </button>
                ))}
            </div>
          </div>

          {/* Sign in text link */}
          <Button asChild variant="ghost">
            <a href="https://portal.think4ever.com/#/login">
              {t("nav.signIn")}
            </a>
          </Button>

          {/* Start free button */}
          <Button asChild className="shadow-md shadow-blue-600/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("nav.startFree")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : mounted ? (
              <Moon className="h-4 w-4" />
            ) : (
              <div className="h-4 w-4" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 text-[14px] font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="uppercase">{currentLang.code}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-popover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                {availableLanguages
                  .filter((l) => !l.hidden)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-[13px] transition-colors ${
                        language === lang.code
                          ? "text-primary font-bold bg-primary/10"
                          : "text-muted-foreground font-medium hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${lang.code === "en" ? "us" : lang.code}.png`}
                          alt={lang.name}
                          className="w-[18px] h-auto rounded-sm shadow-[0_0_2px_rgba(0,0,0,0.2)] object-cover"
                        />
                        <span>{lang.name}</span>
                      </div>
                      {language === lang.code && (
                        <span className="text-primary font-bold text-xs">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors"
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
        <div className="lg:hidden bg-popover border-b border-border px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
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
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1">
                <Link
                  href="/how-it-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  {t("nav.howItWorks")}
                </Link>
                <Link
                  href="/code-to-design"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  {t("nav.codeToDesign")}
                </Link>
                <Link
                  href="/design-to-code"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
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
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1">
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  {t("nav.resourceLibrary")}
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
                >
                  {t("nav.blog")}
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium text-muted-foreground hover:text-primary"
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
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1">
                {docsLinks.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xs font-medium text-muted-foreground hover:text-primary"
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

          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <Button asChild variant="ghost" className="w-full text-center py-3">
              <a href="https://portal.think4ever.com/#/login" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.signIn")}
              </a>
            </Button>
            <Button asChild className="w-full text-center py-3">
              <a href="https://portal.think4ever.com/#/register" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.startFree")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
