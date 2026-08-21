'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomableImage } from '@/components/ZoomableImage';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPost } from '@/lib/blogData';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

export const BlogArticle = ({ post }) => {
  const { language } = useLanguage();
  const localizedPost = getLocalizedPost(post, language);
  const [zoomedImgSrc, setZoomedImgSrc] = useState(null);

  // Dynamically query all images rendered via dangerouslySetInnerHTML
  useEffect(() => {
    const proseEl = document.querySelector('.prose');
    if (!proseEl) return;
    
    const images = proseEl.querySelectorAll('img');
    const handleClick = (e) => {
      setZoomedImgSrc(e.target.src);
    };
    
    images.forEach(img => {
      img.style.cursor = 'zoom-in';
      img.classList.add('transition-opacity', 'duration-200', 'hover:opacity-95');
      img.addEventListener('click', handleClick);
    });
    
    return () => {
      images.forEach(img => {
        img.removeEventListener('click', handleClick);
      });
    };
  }, [localizedPost.content, zoomedImgSrc]);

  return (
    <article className="bg-card rounded-3xl p-6 sm:p-10 lg:p-16 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-border">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mb-8"
      >
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white text-[11px] font-bold tracking-widest rounded-md mb-6 uppercase">
          {localizedPost.category}
        </span>
        <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#1f2937] leading-[1.15] tracking-tight mb-8">
          {localizedPost.title}
        </h1>
        
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-gray-400 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
              {localizedPost.author ? localizedPost.author.charAt(0) : "T"}
            </div>
            <span className="text-foreground font-bold">{localizedPost.author || "Think4Ever Team"}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{localizedPost.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{localizedPost.readTime}</span>
          </div>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mb-12 relative aspect-[2/1] overflow-hidden rounded-2xl border border-border shadow-sm"
      >
        <ZoomableImage
          src={localizedPost.image}
          alt={localizedPost.title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Article Content */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="prose max-w-none prose-headings:text-[#1f2937] prose-headings:font-bold prose-p:text-[16px] prose-p:leading-[1.7] prose-p:text-gray-500 prose-strong:text-[#1f2937] prose-strong:font-bold prose-th:text-white"
        dangerouslySetInnerHTML={{ __html: localizedPost.content }}
      />

      {/* Global Dialog for content inline images */}
      <Dialog open={!!zoomedImgSrc} onOpenChange={(open) => !open && setZoomedImgSrc(null)}>
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
