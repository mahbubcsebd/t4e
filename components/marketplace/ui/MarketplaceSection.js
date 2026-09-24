import React from 'react';

export default function MarketplaceSection({
  children,
  id,
  className = '',
  bg = 'bg-background',
  borderTop = false,
  borderBottom = false,
  padding = 'py-6 md:py-8 lg:py-12',
}) {
  const borders = [
    borderTop ? 'border-t border-border' : '',
    borderBottom ? 'border-b border-border' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bg} ${padding} ${borders} ${className}`}
    >
      {children}
    </section>
  );
}
