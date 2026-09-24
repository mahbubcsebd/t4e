import React from 'react';
import { cn } from '@/lib/utils';
import Eyebrow from "@/components/ui/Eyebrow";

/**
 * Matches the site-wide SectionHeading component's design exactly.
 * - eyebrow: bg-primary/10 text-primary pill badge (uppercase, xs, font-bold)
 * - h2: text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight
 * - description: text-lg text-muted-foreground (center) / text-sm sm:text-base (left)
 */
export default function MarketplaceSectionHeader({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
  animatePulse = true,
}) {
  const isLeft = align === 'left';

  if (isLeft) {
    return (
      <div className={cn('max-w-2xl text-left relative z-10 mb-10 md:mb-14', className)}>
        {eyebrow && (
          <Eyebrow animatePulse={animatePulse}>{eyebrow}</Eyebrow>
        )}
        <h2 className="max-w-[500px] text-2xl sm:text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight mb-4">
          {title}{' '}
          {highlightText && <span className="text-primary">{highlightText}</span>}
        </h2>
        {description && (
          <p className="max-w-[500px] text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Default: center
  return (
    <div className={cn('max-w-3xl mx-auto mb-8 md:mb-14 text-center flex flex-col items-center', className)}>
      {eyebrow && (
        <Eyebrow animatePulse={animatePulse}>{eyebrow}</Eyebrow>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold text-foreground tracking-tight mb-4">
        {title}{' '}
        {highlightText && <span className="text-primary">{highlightText}</span>}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
