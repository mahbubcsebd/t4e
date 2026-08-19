'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ZoomableImage } from '@/components/ZoomableImage';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

export const BlogArticle = ({ post }) => {
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
  }, [post.content, zoomedImgSrc]);

  return (
    <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="mb-8"
      >
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#07A7E1] to-[#093cad] text-white text-[11px] font-bold tracking-widest rounded-md mb-6 uppercase">
          {post.category}
        </span>
        <h1 className="text-[28px] sm:text-[40px] lg:text-[48px] font-bold text-[#1f2937] leading-[1.15] tracking-tight mb-8">
          {post.title}
        </h1>
        
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[13px] text-gray-400 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
              {post.author.charAt(0)}
            </div>
            <span className="text-gray-900 font-bold">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mb-12 relative aspect-[2/1] overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
      >
        <ZoomableImage
          src={post.image}
          alt={post.title}
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
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Global Dialog for content inline images */}
      <Dialog open={!!zoomedImgSrc} onOpenChange={(open) => !open && setZoomedImgSrc(null)}>
        <DialogContent 
          className="max-w-[95vw] md:max-w-5xl bg-transparent border-0 shadow-none p-0 flex items-center justify-center focus:outline-none z-[100]"
          showCloseButton={false}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Zoomed Image View</DialogTitle>
          {zoomedImgSrc && (
            <div className="relative max-w-fit max-h-[85vh] mx-auto flex justify-center items-start">
              {/* Custom Close Button Outside of the Image (relative to tight image boundary) */}
              <button 
                onClick={() => setZoomedImgSrc(null)}
                className="absolute -top-3.5 -right-3.5 text-white/90 hover:text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all duration-200 cursor-pointer z-50 shadow-md border border-white/10"
                aria-label="Close dialog"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <img
                src={zoomedImgSrc}
                alt="Zoomed Content"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl select-none bg-black/5 block"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </article>
  );
};
