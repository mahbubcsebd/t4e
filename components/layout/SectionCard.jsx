import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className={cn("w-full", className)}>
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
