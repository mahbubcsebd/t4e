"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function CenterCarousel({ items }) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);
  }, [items.length]);

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
    <div className="relative z-10 flex flex-col items-center text-center w-full h-full justify-between">
      {/* Static Top Elements */}
      <div className="flex flex-col items-center w-full">
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
      <div className="relative mt-auto pt-5 pb-0 w-full flex justify-center items-center group">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-lg border-[6px] border-[#aaccff] bg-muted shrink-0 group-hover:border-primary/60 group-hover:shadow-primary/20 transition-all duration-700">
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
              {/* Hardware acceleration and anti-aliasing fixes to prevent the "waving" / shimmering effect during slow zoom */}
              <motion.div
                className="w-full h-full relative origin-center"
                initial={{ scale: 1.6, z: 0, rotationZ: 0.01 }}
                animate={{ scale: 2.0, z: 0, rotationZ: 0.01 }}
                transition={{
                  duration: 12,
                  ease: "linear",
                }}
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={items[currentIndex].image}
                  alt={items[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 400px, 400px"
                  quality={65}
                  priority={currentIndex === 0}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
