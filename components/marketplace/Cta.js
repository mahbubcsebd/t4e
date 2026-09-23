'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import MarketplaceContainer from '@/components/marketplace/ui/MarketplaceContainer';

const stats = [
  { value: '10K+', label: 'Companies hiring', icon: Users },
  { value: '3%',   label: 'Acceptance rate',  icon: Star },
  { value: '48h',  label: 'Average match time', icon: Zap },
];

const guarantees = [
  'No-risk 2-week trial on every hire',
  'Vetted senior professionals only',
  'Dedicated talent manager support',
  'Secure milestone-based payments',
];

export default function MarketplaceCta() {
  return (
    <MarketplaceSection
      id="marketplace-cta"
      bg="bg-background"
      padding="pb-6 md:pb-8 lg:pb-12"
    >
      {/* SectionCard gives the same light-blue wrapper every home section uses */}
      <SectionCard>
        {/* inner white card — exact same as home sections */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">

          {/* Thin primary accent line at the top */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT — Text + CTAs */}
            <div className="relative flex flex-col justify-center p-6 sm:p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-border/50">
              <div className="absolute top-0 left-0 w-[260px] h-[260px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              <div className="relative z-10 max-w-md">
                {/* Eyebrow */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Get started today
                </span>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
                  Build your team with{' '}
                  <span className="text-primary">top-tier talent</span>
                </h2>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Join thousands of innovative companies that trust Think4Ever
                  Marketplace to source, vet, and deploy world-class
                  independent professionals.
                </p>

                {/* Guarantee checklist */}
                <ul className="space-y-2 mb-7">
                  {guarantees.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs — default Button size to match home */}
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="w-full sm:w-auto shadow-sm shadow-primary/20">
                    <Link href="https://portal.think4ever.com/#/login">
                      Start Hiring
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="https://portal.think4ever.com/#/register">
                      Apply as Talent
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT — Stats + Testimonial */}
            <div className="relative flex flex-col justify-center p-6 sm:p-8 md:p-10 bg-slate-50/50">
              <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-primary/5 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {stats.map(({ value, label, icon: Icon }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-card border border-border/60 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">{value}</span>
                      <span className="text-[11px] text-muted-foreground mt-1 leading-tight text-center">{label}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border/50 mb-6" />

                {/* Testimonial */}
                <div className="flex items-start gap-3">
                  <div className="flex -space-x-2.5 shrink-0 mt-0.5">
                    {[11, 32, 47, 68].map((img, i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${img}`}
                        alt={`Customer ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-card object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-0.5 mb-1.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/80 leading-snug font-medium">
                      &ldquo;Found an exceptional CTO-level engineer within 48 hours.
                      Absolutely game-changing for our roadmap.&rdquo;
                    </p>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      <span className="font-semibold text-foreground">David Wrench</span>
                      {' '}· Co-Founder, Datajoi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
