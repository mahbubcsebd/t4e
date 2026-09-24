import React from 'react';
import { cn } from '@/lib/utils';

export default function Eyebrow({ 
  children, 
  className, 
  animatePulse = true, 
  uppercase = true 
}) {
  if (!children) return null;
  
  return (
    <span 
      className={cn(
        "inline-flex items-start gap-1.5 px-3 py-1 rounded-full bg-muted text-foreground text-[11px] sm:text-xs font-bold tracking-wider border border-border",
        uppercase && "uppercase",
        className
      )}
    >
      {animatePulse && (
        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary animate-pulse mt-[5px]" />
      )}
      <span className="leading-relaxed sm:leading-normal text-left">{children}</span>
    </span>
  );
}
