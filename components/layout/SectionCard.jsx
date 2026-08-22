import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div
      className={cn(
        "bg-[#F2F1ED] border border-border rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-sm relative overflow-hidden",
        className,
      )}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
