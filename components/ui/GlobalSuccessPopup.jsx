"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

export function GlobalSuccessPopup({ isOpen, onClose, title, message }) {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md gemini-card border border-border/50 bg-card/95 backdrop-blur-2xl shadow-2xl p-0 overflow-hidden">
        <div className="p-8 pb-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#e0f7ed] text-[#167451] flex items-center justify-center mx-auto mb-5 shadow-sm border border-[#b2e8d0]">
            <Check className="w-8 h-8" />
          </div>
          <DialogHeader className="mb-2">
            <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight text-center">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-base text-muted-foreground leading-relaxed">
            {message}
          </DialogDescription>
        </div>
        <div className="bg-muted/40 p-4 border-t border-border/50 flex justify-center">
          <Button onClick={() => onClose(false)} variant="default" className="w-full max-w-[200px] h-11 text-[15px]">
            {t("contact.okay") || "Okay"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
