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
      >
        <DialogTitle className="sr-only">Video Player</DialogTitle>
        <DialogClose className="absolute -top-12 right-0 md:-right-12 z-[60] p-2 bg-transparent text-slate-600 hover:text-slate-900 transition-colors outline-none cursor-pointer">
          <X className="w-8 h-8" />
          <span className="sr-only">Close video</span>
        </DialogClose>
        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden border border-[#c8d9ed]/50">
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
      </DialogContent>
    </Dialog>
  );
}
