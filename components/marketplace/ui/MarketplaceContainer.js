import React from 'react';

export default function MarketplaceContainer({ children, className = '' }) {
  return (
    <div className={`max-w-[1600px] mx-auto px-5 w-full relative z-10 ${className}`}>
      {children}
    </div>
  );
}
