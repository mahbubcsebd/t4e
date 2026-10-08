'use client';

import React from 'react';
import { Briefcase, Building2 } from 'lucide-react';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import MarketplaceSectionHeader from '@/components/marketplace/ui/MarketplaceSectionHeader';

export default function MarketplaceTwoWays() {
  const cards = [
    {
      title: 'Task freelancing',
      description:
        'Turn a backlog item, a module refactor, a custom application or any other task into a job listing, and hire a specialist for it.',
      icon: Briefcase,
    },
    {
      title: 'Full-project outsourcing',
      description:
        'Hand an entire design and development project to an outside team or agency. You keep full visibility, audit trails and control over exactly what they can access.',
      icon: Building2,
    },
  ];

  return (
    <MarketplaceSection id="two-ways-to-work" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <MarketplaceSectionHeader title="Two ways" highlightText="to work" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-background border border-border/70 rounded-xl p-8 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-[#eef3fb] dark:bg-muted border border-[#d6e4f7] dark:border-border flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-[#314865]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#1a2a3a] dark:text-foreground mb-4">
                  {card.title}
                </h3>
                <p className="text-[14px] text-[#5a7a99] dark:text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
