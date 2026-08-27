import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className, noBackground = false }) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div
        className={cn(
          "w-full rounded-2xl",
          !noBackground && "bg-[#cce6ff] border border-[#aaccff] p-2 sm:p-4 md:p-6 shadow-[0_0_30px_rgba(14,165,233,0.15)]",
          className
        )}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
