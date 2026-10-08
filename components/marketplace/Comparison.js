'use client';

import React from 'react';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import MarketplaceSectionHeader from '@/components/marketplace/ui/MarketplaceSectionHeader';
import SectionCard from '@/components/layout/SectionCard';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function MarketplaceComparison() {
  const comparisonData = [
    {
      feature: 'Job posts',
      typical: 'Written by hand, often vague',
      think4ever: 'Drafted by ThinkBrain from a short prompt, with scope, deliverables and screening questions',
    },
    {
      feature: 'Choosing a freelancer',
      typical: 'Read every proposal yourself',
      think4ever: 'ThinkBrain scores each proposal against your requirements',
    },
    {
      feature: 'Onboarding',
      typical: 'Days of repo sharing and environment setup',
      think4ever: 'Instant access to the projects and tools you choose',
    },
    {
      feature: 'Control',
      typical: 'External repos, limited visibility',
      think4ever: 'Role-based access, audit trails, work stays in your workspace',
    },
    {
      feature: 'Pricing the work',
      typical: 'Generic estimates',
      think4ever: 'Freelancers set their own rate and timeline',
    },
  ];

  return (
    <MarketplaceSection id="why-marketplace" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <MarketplaceSectionHeader title="Why Think4Ever Marketplace" />

          <div className="mt-10 overflow-x-auto rounded-xl border border-border/70">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-muted/50 border-b border-border/70">
                  <th className="p-4 md:p-6 font-semibold text-foreground w-1/4"></th>
                  <th className="p-4 md:p-6 font-semibold text-muted-foreground w-[37.5%] border-l border-border/70">
                    Typical freelance marketplaces
                  </th>
                  <th className="p-4 md:p-6 font-bold text-primary w-[37.5%] border-l border-border/70 bg-primary/5">
                    Think4Ever Marketplace
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/70">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 md:p-6 font-medium text-foreground align-top">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-6 text-muted-foreground align-top border-l border-border/70">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive/70 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.typical}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-foreground font-medium align-top border-l border-border/70 bg-primary/5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{row.think4ever}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
