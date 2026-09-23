'use client';

import React from 'react';
import MarketplaceContainer from '@/components/marketplace/ui/MarketplaceContainer';

const logos = [
  { name: 'Acme Corp', icon: '❖', colorClass: 'hover:text-blue-600' },
  { name: 'Globex', icon: '✦', colorClass: 'hover:text-purple-600' },
  { name: 'Soylent', icon: '⎈', colorClass: 'hover:text-emerald-500' },
  { name: 'Initech', icon: '⬡', colorClass: 'hover:text-orange-500' },
  { name: 'Stark Ind', icon: '✜', colorClass: 'hover:text-red-600' },
  { name: 'Wayne Ent', icon: '⌾', colorClass: 'hover:text-amber-500' },
];

export default function MarketplaceTrustedBy() {
  return (
    <div className="relative py-6 md:py-8 bg-background border-b border-border overflow-hidden">
      <MarketplaceContainer>
        <div className="text-center mb-6">
          <p className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
            Trusted by innovative teams worldwide
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-10 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 text-muted-foreground transition-all duration-300 cursor-pointer grayscale hover:grayscale-0 hover:scale-105 ${logo.colorClass}`}
            >
              <span className="text-3xl">{logo.icon}</span>
              <span className="text-xl font-bold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </MarketplaceContainer>
    </div>
  );
}
