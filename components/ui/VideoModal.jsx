"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function VideoModal({ isOpen, onClose, videoId }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="w-full max-w-5xl p-0 bg-transparent border-0 shadow-none sm:max-w-5xl" 
        showCloseButton={false}
        overlayClassName="bg-black/70 backdrop-blur-sm"
      >
        <DialogTitle className="sr-only">Video Player</DialogTitle>
        <div className="relative w-full">
          <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden border border-[#c8d9ed]/50">
            {/* Close button inside video top-right corner */}
            <DialogClose className="absolute top-3 right-3 z-[60] p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors outline-none cursor-pointer backdrop-blur-sm">
              <X className="w-5 h-5" strokeWidth={2.5} />
              <span className="sr-only">Close video</span>
            </DialogClose>
            <div className="relative w-full pb-[56.25%] bg-[#09090d]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
