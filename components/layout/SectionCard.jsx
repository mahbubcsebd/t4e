import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div
      className={cn(
        "max-w-[1400px] mx-auto bg-[#cce6ff] border border-[#aaccff] rounded-2xl p-6 sm:p-10 md:p-8 shadow-[0_0_50px_rgba(14,165,233,0.2)]",
        className,
      )}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
