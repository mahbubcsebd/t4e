import React from "react";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  align = "center",
  eyebrow,
  title,
  subtitle,
  animatePulse = false,
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
}) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 mb-12 md:mb-16",
          className,
        )}
      >
        <div className="flex flex-col items-start max-w-xl">
          {eyebrow && (
            <span
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f7fc] text-[#093cad] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20",
                eyebrowClassName,
              )}
            >
              {animatePulse && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1] animate-pulse"></span>
              )}
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-[44px] font-extrabold text-[#09090d] tracking-tight leading-[1.2]",
              titleClassName,
            )}
          >
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="max-w-md">
            <p
              className={cn(
                "text-base sm:text-lg text-[#465a75] leading-relaxed",
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (align === "left") {
    return (
      <div
        className={cn(
          "max-w-2xl text-center lg:text-left relative z-10",
          className,
        )}
      >
        {eyebrow && (
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-4 border border-[#07A7E1]/20",
              eyebrowClassName,
            )}
          >
            {animatePulse && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1] animate-pulse"></span>
            )}
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "max-w-[500px] text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "max-w-[500px] text-sm sm:text-base text-[#465a75] leading-relaxed",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  // Default: align === "center"
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto mb-10 md:mb-14 text-center flex flex-col items-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e7f7fc] text-[#0679a4] text-xs font-bold uppercase tracking-wider mb-3",
            eyebrowClassName,
          )}
        >
          {animatePulse && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#07A7E1] animate-pulse"></span>
          )}
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#09090d] tracking-tight mb-4",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base text-[#465a75] leading-relaxed",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
