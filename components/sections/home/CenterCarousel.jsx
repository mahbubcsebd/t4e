"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function CenterCarousel({ items }) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }
    }, 5000);
  }, [items.length, isHovered]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
    startAutoplay(); // Reset timer on manual interaction
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    startAutoplay();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    startAutoplay();
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      className="relative z-10 flex flex-col items-center text-center w-full h-full justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Top Elements */}
      <div className="flex flex-col items-center w-full">
        <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 mb-6 group-hover:scale-105 transition-transform duration-500 shrink-0">
          <Layers className="w-10 h-10 text-white" />
        </div>

        <span className="inline-block px-3 py-1 bg-card text-primary border border-primary/30 rounded-md text-[10px] font-extrabold uppercase tracking-widest mb-6 shrink-0">
          {t("productModel.centerTag") || "UNIVERSAL META-MODEL"}
        </span>

        {/* Dynamic Text Area - Absolute positioning prevents layout shift during transition */}
        <div className="relative w-full h-[120px] sm:h-[100px] mb-8 shrink-0">
          <AnimatePresence>
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-x-0 top-0 flex flex-col items-center w-full"
            >
              <h3 className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-3 px-2">
                {items[currentIndex].icon && (
                  <span className="shrink-0">{items[currentIndex].icon}</span>
                )}
                <span>{items[currentIndex].title}</span>
              </h3>
              <p className="text-sm text-muted-foreground max-w-[300px] leading-relaxed">
                {items[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Image Carousel Area - Fully Rounded (Circle) */}
      <div className="relative mt-auto pt-4 pb-2 w-full flex justify-center items-center">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[8px] border-background bg-muted shrink-0 ring-1 ring-border/40 group-hover:shadow-[0_20px_50px_-12px_rgba(var(--primary),0.3)] transition-shadow duration-700">
          {/* Removed mode="wait" to allow true crossfading without blanking */}
          <AnimatePresence>
            <motion.div
              key={`image-${currentIndex}`}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* The wrapper slowly zooms in while active */}
              <motion.div
                className="w-full h-full relative"
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                  duration: 12,
                  ease: "linear",
                }}
              >
                <Image
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 256px"
                  quality={90}
                  priority={currentIndex === 0}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows (Positioned outside the circle) */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 z-20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 z-20"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 h-[8px] shrink-0">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToIndex(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === currentIndex
                ? "w-8 h-2 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                : "w-2 h-2 bg-border hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
