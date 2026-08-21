import React from "react";
import { cn } from "@/lib/utils";

export default function SectionCard({
  children,
  className,
  glowPosition = "default", // 'default', 'reverse', 'none'
}) {
  return (
    <div
      className={cn(
        "bg-muted/5 border border-border rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-sm relative overflow-hidden",
        className
      )}
    >
      {/* Subtle Background Elements inside the card */}
      {glowPosition !== "none" && (
        <>
          <div
            className={cn(
              "absolute w-96 h-96 rounded-full blur-3xl pointer-events-none",
              glowPosition === "default"
                ? "top-0 right-0 -mt-20 -mr-20 bg-primary/10"
                : "top-0 left-0 -mt-20 -ml-20 bg-primary/10"
            )}
          ></div>
          <div
            className={cn(
              "absolute w-80 h-80 rounded-full blur-3xl pointer-events-none",
              glowPosition === "default"
                ? "bottom-0 left-0 -mb-20 -ml-20 bg-blue-500/5"
                : "bottom-0 right-0 -mb-20 -mr-20 bg-blue-500/5"
            )}
          ></div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
