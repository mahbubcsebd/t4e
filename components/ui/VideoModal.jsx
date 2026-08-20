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
        <div className="relative w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c8d9ed]/50">
          <DialogClose className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-[#465a75] hover:text-[#09090d] rounded-full shadow-sm backdrop-blur-sm transition-colors border border-[#c8d9ed] outline-none">
            <X className="w-5 h-5" />
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
      </DialogContent>
    </Dialog>
  );
}
