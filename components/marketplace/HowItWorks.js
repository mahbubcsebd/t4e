'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  UserPlus,
  FileCheck,
  CreditCard,
  Search,
  ShieldCheck,
} from 'lucide-react';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import Eyebrow from "@/components/ui/Eyebrow";

const tabData = {
  hiring: [
    {
      id: 'h1',
      title: 'Post a job',
      description:
        'Post a job, review proposals and bring a freelancer into your workspace with a role and project you choose.',
      icon: Briefcase,
    },
    {
      id: 'h2',
      title: 'Get proposals and hire',
      description:
        'Compare bids, reviews, and prior work. Interview favorites and hire the best fit for your project.',
      icon: UserPlus,
    },
    {
      id: 'h3',
      title: 'Pay securely',
      description:
        'Pay for work safely and securely through our platform only when you are satisfied with the outcome.',
      icon: CreditCard,
    },
  ],
  findingWork: [
    {
      id: 'w1',
      title: 'Create your profile',
      description:
        'You are set up as Client & Freelancer. Keep your profile sharp so the right people find you and your skills.',
      icon: FileCheck,
    },
    {
      id: 'w2',
      title: 'Browse jobs',
      description:
        'Browse open jobs, send proposals and work directly inside your clients\u2019 workspaces on exciting projects.',
      icon: Search,
    },
    {
      id: 'w3',
      title: 'Work and get paid',
      description:
        'Deliver great work, build your reputation, and get paid securely on time, every time.',
      icon: ShieldCheck,
    },
  ],
};

export default function MarketplaceHowItWorks() {
  const [activeTab, setActiveTab] = useState('hiring');

  return (
    <MarketplaceSection id="marketplace-how-it-works" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-14 gap-8">
          <div>
            <Eyebrow className="mb-4">
        Platform Guide
      </Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight text-foreground mb-4">
              How it <span className="text-primary">works</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Whether you need to hire top talent or you're looking for your
              next big project, our platform makes it seamless.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex p-1 bg-muted/40 rounded-full border border-border/60">
            <button
              onClick={() => setActiveTab('hiring')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'hiring'
                  ? 'bg-background shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="View Hiring guide"
            >
              For hiring
            </button>
            <button
              onClick={() => setActiveTab('findingWork')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'findingWork'
                  ? 'bg-background shadow-sm text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="View Finding Work guide"
            >
              For finding work
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {tabData[activeTab].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative flex flex-col p-8 rounded-2xl bg-background border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Step Number Background */}
                    <div className="absolute top-4 right-6 text-8xl font-black text-foreground/5 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105">
                      {index + 1}
                    </div>

                    <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6 text-foreground group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">
                      {item.title}
                    </h3>

                    <p className="text-[15px] text-muted-foreground leading-relaxed relative z-10 flex-grow">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
