'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import MarketplaceContainer from '@/components/marketplace/ui/MarketplaceContainer';
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from '@/context/LanguageContext';

export default function MarketplaceCta() {
  const { t } = useLanguage();

  const guarantees = [
    t('marketplace.cta.g1', 'Free to join on the Think Free plan'),
    t('marketplace.cta.g2', 'ThinkBrain writes your job post and screening questions'),
    t('marketplace.cta.g3', 'Proposals scored against your requirements'),
    t('marketplace.cta.g4', 'Access you control, removed automatically when the contract ends'),
  ];

  return (
    <MarketplaceSection
      id="marketplace-cta"
      bg="bg-background"
      padding="pb-6 md:pb-8 lg:pb-12"
    >
      <SectionCard>
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="relative flex flex-col items-center text-center p-8 sm:p-12 md:p-16">
            <div className="absolute top-0 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 max-w-2xl flex flex-col items-center">
              <Eyebrow className="mb-4">
                {t('marketplace.cta.eyebrow', 'Get started today')}
              </Eyebrow>

              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
                {t('marketplace.cta.titlePrefix', 'Post your first job in ')}
                <span className="text-primary">{t('marketplace.cta.titleHighlight', 'minutes.')}</span>
              </h2>

              <ul className="space-y-3 mb-8 text-left">
                {guarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
                <Button asChild className="w-full sm:w-auto shadow-sm shadow-primary/20">
                  <Link href="https://portal.think4ever.com/#/login">
                    {t('marketplace.cta.startHiring', 'Start Hiring')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href="https://portal.think4ever.com/#/register">
                    {t('marketplace.cta.apply', 'Apply as Talent')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
