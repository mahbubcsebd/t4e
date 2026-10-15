"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/layout/SectionHeading";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { MicrosoftStoreIcon, GooglePlayIcon } from "./StoreButtons";

export default function AppsScreenshots() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("windows"); // "windows" | "android"
  const [zoomImage, setZoomImage] = useState(null);

  const scrollRef = useRef(null);

  const rawWin = t("appsPage.screenshots.windows");
  const rawAndroid = t("appsPage.screenshots.android");

  const winShots = Array.isArray(rawWin)
    ? rawWin
    : [
        { src: "/images/apps/win-2.png", title: "Concept map" },
        { src: "/images/apps/win-3.png", title: "Screen and block architecture" },
        { src: "/images/apps/win-4.png", title: "Business flows" },
        { src: "/images/apps/win-5.png", title: "Roles and permissions" },
        { src: "/images/apps/win-6.png", title: "UI designs" },
        { src: "/images/apps/win-7.png", title: "Technical diagrams" },
      ];

  const androidShots = Array.isArray(rawAndroid)
    ? rawAndroid
    : [
        { src: "/images/apps/android-phone-1.png", title: "Business flows", type: "tall" },
        { src: "/images/apps/android-phone-2.png", title: "Functional architecture", type: "tall" },
        { src: "/images/apps/android-phone-3.png", title: "Data objects", type: "tall" },
        { src: "/images/apps/android-phone-6.png", title: "Concept map", type: "tall" },
        { src: "/images/apps/android-phone-7.png", title: "UI designs", type: "tall" },
        { src: "/images/apps/android-tablet-2.png", title: "Your projects, on a tablet", type: "wide" },
        { src: "/images/apps/android-tablet-1.png", title: "Business flows, on a tablet", type: "wide" },
        { src: "/images/apps/android-tablet-3.png", title: "Concept, on a tablet", type: "wide" },
      ];

  const currentShots = activeTab === "windows" ? winShots : androidShots;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 border-b border-border" id="screenshots">
      <SectionCard>
        <Container className="overflow-hidden">
          {/* Heading */}
          <SectionHeading
            eyebrow={t("appsPage.screenshots.eyebrow", "Screenshots")}
            title={t("appsPage.screenshots.title", "See the apps in action")}
            subtitle={t(
              "appsPage.screenshots.subtitle",
              "Scroll through each view to see how Think4Ever renders on desktop, tablets, and phones."
            )}
            className="mb-8"
          />

          {/* Platform Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
            <div className="inline-flex items-center gap-1.5 p-1 rounded-2xl bg-muted border border-border/80">
              <button
                onClick={() => {
                  setActiveTab("windows");
                  if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "windows"
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeTab === "windows"}
              >
                <MicrosoftStoreIcon className="w-4 h-4" />
                <span>{t("appsPage.screenshots.windowsTitle", "Windows")}</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {winShots.length}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab("android");
                  if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                }}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeTab === "android"
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-pressed={activeTab === "android"}
              >
                <GooglePlayIcon className="w-4 h-4" />
                <span>{t("appsPage.screenshots.androidTitle", "Android")}</span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600">
                  {androidShots.length}
                </span>
              </button>
            </div>

            {/* Scroll Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full bg-card hover:bg-muted border border-border flex items-center justify-center text-foreground transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full bg-card hover:bg-muted border border-border flex items-center justify-center text-foreground transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Screenshots Scroll Strip */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth no-scrollbar snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {currentShots.map((shot, idx) => {
              const isTall = shot.type === "tall";

              return (
                <figure
                  key={idx}
                  className="group relative shrink-0 snap-start flex flex-col cursor-pointer"
                  onClick={() => setZoomImage(shot)}
                >
                  <div
                    className={`relative rounded-2xl overflow-hidden border border-border/90 bg-slate-900 shadow-md group-hover:shadow-2xl group-hover:border-primary/50 transition-all duration-300 ${
                      isTall
                        ? "w-[200px] sm:w-[220px] md:w-[240px] h-[360px] sm:h-[400px] md:h-[440px]"
                        : "w-[340px] sm:w-[460px] md:w-[540px] h-[240px] sm:h-[300px] md:h-[340px]"
                    }`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.title}
                      fill
                      sizes={isTall ? "240px" : "(max-width: 768px) 460px, 540px"}
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Hover Zoom Hint Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <div className="px-3.5 py-1.5 rounded-full bg-white/90 text-foreground text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                        <ZoomIn className="w-4 h-4 text-primary" />
                        <span>Enlarge</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <figcaption className="mt-3 text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors text-left flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                    <span>{shot.title}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Container>
      </SectionCard>

      {/* Lightbox Modal */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-border flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
              <h4 className="text-base sm:text-lg font-bold text-foreground">
                {zoomImage.title}
              </h4>
              <button
                onClick={() => setZoomImage(null)}
                className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
              <Image
                src={zoomImage.src}
                alt={zoomImage.title}
                fill
                sizes="1200px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
