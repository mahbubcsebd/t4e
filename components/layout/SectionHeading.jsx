import React from "react";
import { cn } from "@/lib/utils";
import Eyebrow from "@/components/ui/Eyebrow";

export default function SectionHeading({
  align = "center",
  eyebrow,
  title,
  highlightText,
  subtitle,
  animatePulse = true,
  className,
  titleClassName,
  subtitleClassName,
  eyebrowClassName,
}) {
  if (align === "split") {
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center md:flex-row md:items-center md:text-left justify-between gap-6 md:gap-12 mb-8 md:mb-16",
          className,
        )}
      >
        <div className="flex flex-col items-center md:items-start max-w-xl">
          {eyebrow && (
            <Eyebrow className={eyebrowClassName} animatePulse={animatePulse}>
              {eyebrow}
            </Eyebrow>
          )}
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight leading-[1.2]",
              titleClassName,
            )}
          >
            {title}{" "}
            {highlightText && <span className="text-primary">{highlightText}</span>}
          </h2>
        </div>
        {subtitle && (
          <div className="max-w-md w-full">
            <p
              className={cn(
                "text-base sm:text-lg text-muted-foreground leading-relaxed",
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
          "max-w-2xl text-left relative z-10",
          className,
        )}
      >
        {eyebrow && (
          <Eyebrow className={eyebrowClassName} animatePulse={animatePulse}>
            {eyebrow}
          </Eyebrow>
        )}
        <h2
          className={cn(
            "max-w-[500px] text-2xl sm:text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight mb-4",
            titleClassName,
          )}
        >
          {title}{" "}
          {highlightText && <span className="text-primary">{highlightText}</span>}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "max-w-[500px] text-sm sm:text-base text-muted-foreground leading-relaxed",
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
        "max-w-3xl mx-auto mb-8 md:mb-14 text-center flex flex-col items-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow className={eyebrowClassName} animatePulse={animatePulse}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight mb-4",
          titleClassName,
        )}
      >
        {title}{" "}
        {highlightText && <span className="text-primary">{highlightText}</span>}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lg text-muted-foreground leading-relaxed",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
