"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ZoomableImage({
  src,
  alt = "Image",
  width,
  height,
  fill,
  className = "",
  priority = false,
  quality,
  sizes,
  style,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${className} cursor-zoom-in transition-opacity duration-200 hover:opacity-95`}
        priority={priority}
        quality={quality}
        sizes={sizes}
        style={style}
        onClick={() => setIsOpen(true)}
        {...props}
      />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-[95vw] md:max-w-5xl bg-transparent border-0 ring-0 shadow-none p-0 flex items-center justify-center focus:outline-none z-[100]"
          showCloseButton={false}
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="relative max-w-fit max-h-[85vh] mx-auto flex justify-center items-start">
            {/* Custom Close Button Outside of the Image (relative to tight image boundary) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3.5 -right-3.5 text-white/90 hover:text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all duration-200 cursor-pointer z-50 shadow-md border border-white/10"
              aria-label="Close dialog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl select-none bg-black/5 block"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
