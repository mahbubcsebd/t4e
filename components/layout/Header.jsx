"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname, useRouter } from "next/navigation";
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
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t, language, setLanguage, availableLanguages } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLangCode) => {
    setLanguage(newLangCode);
    setLangDropdownOpen(false);
  };

  const localizeHref = (href) => {
    if (language === 'en' || !href.startsWith('/')) return href;
    return `/${language}${href}`;
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);
  const [mobileHowItWorksOpen, setMobileHowItWorksOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileDocsOpen, setMobileDocsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const desktopLangDropdownRef = useRef(null);
  const mobileLangDropdownRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event) => {
      const isOutsideDesktop = desktopLangDropdownRef.current && !desktopLangDropdownRef.current.contains(event.target);
      const isOutsideMobile = mobileLangDropdownRef.current && !mobileLangDropdownRef.current.contains(event.target);
      
      if (isOutsideDesktop && isOutsideMobile) {
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
    {
      title: t("nav.library") === "nav.library" ? "Library" : t("nav.library"),
      desc: t("nav.libraryDesc") === "nav.libraryDesc" ? "Explore our collection of resources." : t("nav.libraryDesc"),
      href: localizeHref("/resources/"),
      icon: <Puzzle className="w-4 h-4 text-primary" />,
    },
    {
      title: t("nav.blog") === "nav.blog" ? "Blog" : t("nav.blog"),
      desc: t("nav.blogDesc", "Read the latest news and articles."),
      href: localizeHref("/blog"),
      icon: <Globe className="w-4 h-4 text-primary" />,
    },
    {
      title: t("nav.faq", "FAQ"),
      desc: t("nav.faqDesc", "Frequently asked questions."),
      href: localizeHref("/faq"),
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
      icon: <Code className="w-4 h-4 text-primary" />,
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
      className={`sticky top-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-border shadow-sm dark:shadow-none"
          : "bg-background border-transparent shadow-none"
      }`}
    >
      <div
        className={`max-w-[1600px] mx-auto px-5 flex items-center justify-between gap-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-16" : "h-[76px]"
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
              scrolled ? "h-10" : "h-[46px]"
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
                href={localizeHref("/how-it-works")}
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
                href={localizeHref("/code-to-design")}
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
                href={localizeHref("/design-to-code")}
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
            href={localizeHref("/integrations")}
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
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[260px] bg-card rounded-2xl shadow-2xl border border-border p-2 transition-all duration-200 z-50 grid grid-cols-1 gap-1 ${
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
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-card rounded-2xl shadow-2xl border border-border p-3 transition-all duration-200 z-50 grid grid-cols-2 gap-2 ${
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
            href={localizeHref("/pricing")}
            className="hover:text-foreground transition-colors whitespace-nowrap"
          >
            {t("nav.pricing")}
          </Link>
        </nav>

        {/* Right Action Items */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={desktopLangDropdownRef}>
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
              className={`absolute right-0 top-full mt-1 w-36 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border py-2 z-50 transition-all duration-200 ${
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
                    onClick={() => handleLanguageChange(lang.code)}
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
          <Button asChild className="shadow-md shadow-primary/25">
            <a href="https://portal.think4ever.com/#/register">
              {t("nav.startFree")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <div className="relative" ref={mobileLangDropdownRef}>
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
              <div className="absolute right-0 top-full mt-1 w-36 bg-card rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-border py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                {availableLanguages
                  .filter((l) => !l.hidden)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-0 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-0">
              <button
                onClick={() => setMobileHowItWorksOpen(!mobileHowItWorksOpen)}
                className="flex items-center justify-between text-[15px] font-semibold text-[#314865] w-full text-left py-2.5"
              >
                <span>{t("nav.product", "Product")}</span>
                <motion.div
                  animate={{ rotate: mobileHowItWorksOpen ? 180 : 0 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {mobileHowItWorksOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1 pb-2 pt-1">
                      <Link
                        href={localizeHref("/how-it-works")}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t("nav.howItWorks")}
                      </Link>
                      <Link
                        href={localizeHref("/code-to-design")}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t("nav.codeToDesign")}
                      </Link>
                      <Link
                        href={localizeHref("/design-to-code")}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t("nav.designToCode")}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="py-1">
              <Link
                href={localizeHref("/integrations")}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-[#314865] hover:text-primary transition-colors block py-1.5"
              >
                {t("nav.integrations")}
              </Link>
            </div>

            <div className="flex flex-col gap-0">
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="flex items-center justify-between text-[15px] font-semibold text-[#314865] w-full text-left py-2.5"
              >
                <span>{t("nav.resources")}</span>
                <motion.div animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {mobileResourcesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1 pb-2 pt-1">
                      {/* Resource Library link removed per request */}
                      <Link
                        href="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        {t("nav.blog")}
                      </Link>
                      <Link
                        href="/faq"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        FAQ
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-0">
              <button
                onClick={() => setMobileDocsOpen(!mobileDocsOpen)}
                className="flex items-center justify-between text-[15px] font-semibold text-[#314865] w-full text-left py-2.5"
              >
                <span>{t("nav.docs")}</span>
                <motion.div animate={{ rotate: mobileDocsOpen ? 180 : 0 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {mobileDocsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-border/50 ml-1 pb-2 pt-1">
                      {docsLinks.map((doc, idx) => (
                        <a
                          key={idx}
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between text-[13px] font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>{doc.title}</span>
                          <ExternalLink className="w-3 h-3 opacity-50" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="py-1 mb-2">
              <Link
                href={localizeHref("/pricing")}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-semibold text-[#314865] hover:text-primary transition-colors block py-1.5"
              >
                {t("nav.pricing")}
              </Link>
            </div>

            <div className="pt-2 pb-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="w-full text-center">
                <a
                  href="https://portal.think4ever.com/#/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.signIn")}
                </a>
              </Button>
              <Button
                asChild
                className="w-full text-center bg-[#093cad] hover:bg-[#093cad]/90 text-white"
              >
                <a
                  href="https://portal.think4ever.com/#/register"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("nav.startFree")}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
