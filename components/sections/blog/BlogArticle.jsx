"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomableImage } from "@/components/ZoomableImage";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getLocalizedPost } from "@/lib/blogData";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const BlogArticle = ({ post }) => {
  const { language } = useLanguage();
  const localizedPost = getLocalizedPost(post, language);
  const [zoomedImgSrc, setZoomedImgSrc] = useState(null);

  // Dynamically query all images rendered via dangerouslySetInnerHTML
  useEffect(() => {
    const proseEl = document.querySelector(".prose");
    if (!proseEl) return;

    const images = proseEl.querySelectorAll("img");
    const handleClick = (e) => {
      setZoomedImgSrc(e.target.src);
    };

    images.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.classList.add(
        "transition-opacity",
        "duration-200",
        "hover:opacity-95",
        "rounded-xl",
        "shadow-sm",
        "border",
        "border-border/50",
      );
      img.addEventListener("click", handleClick);
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("click", handleClick);
      });
    };
  }, [localizedPost.content, zoomedImgSrc]);

  return (
    <article className="relative rounded-xl p-5 sm:p-10 lg:p-16 shadow-sm border border-border/60 overflow-hidden">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-10 text-center sm:text-left"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-widest rounded-full mb-6 uppercase shadow-sm">
            {localizedPost.category}
          </span>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-[1.15] tracking-tight mb-8">
            {localizedPost.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-4 text-[13px] text-muted-foreground font-medium">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold shadow-sm">
                {localizedPost.author ? localizedPost.author.charAt(0) : "T"}
              </div>
              <span className="text-foreground font-bold">
                {localizedPost.author || "Think4Ever Team"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>{localizedPost.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <span>{localizedPost.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        {!post.noThumb && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-12 relative aspect-[2/1] overflow-hidden rounded-2xl border border-border/80 shadow-md group"
          >
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <ZoomableImage
              src={localizedPost.image}
              alt={localizedPost.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </motion.div>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="prose max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-[16px] prose-p:leading-loose prose-p:text-muted-foreground prose-strong:text-foreground prose-strong:font-bold prose-th:text-foreground prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-foreground prose-blockquote:font-medium prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: localizedPost.content }}
        />
      </div>

      {/* Global Dialog for content inline images */}
      <Dialog
        open={!!zoomedImgSrc}
        onOpenChange={(open) => !open && setZoomedImgSrc(null)}
      >
        <DialogContent
          className="max-w-[95vw] md:max-w-5xl bg-transparent border-0 shadow-none p-0 flex items-center justify-center focus:outline-none z-[100]"
          showCloseButton={false}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Zoomed image preview</DialogTitle>
          {zoomedImgSrc && (
            <div className="relative w-full h-[85vh] flex items-center justify-center">
              <Image
                src={zoomedImgSrc}
                alt="Zoomed image"
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </article>
  );
};
