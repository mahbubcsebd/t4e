import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-[2.5rem] p-6 sm:p-10 md:p-16 overflow-hidden",
        "border border-[#b8d8f5]/50",
        "dark:bg-gradient-to-br dark:from-muted/20 dark:via-background dark:to-background dark:border-border",
        className,
      )}
      style={{ backgroundColor: "#c7dff7" }}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
