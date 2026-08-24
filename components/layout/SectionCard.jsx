import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div
        className={cn(
          "w-full bg-[#cce6ff] border border-[#aaccff] rounded-2xl p-4 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(14,165,233,0.2)]",
          className,
        )}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
