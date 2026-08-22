import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div
      className={cn(
        "bg-[#ddebfb] border border-[#c6def8] rounded-2xl p-6 sm:p-10 md:p-8 shadow-[0_0_40px_rgba(14,165,233,0.15)]",
        className,
      )}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
