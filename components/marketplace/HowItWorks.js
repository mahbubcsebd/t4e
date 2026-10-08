'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  UserPlus,
  FileCheck,
  Search,
  ShieldCheck,
  FileText,
  Star,
  PlayCircle,
  UserCheck
} from 'lucide-react';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import Eyebrow from "@/components/ui/Eyebrow";
import { useLanguage } from '@/context/LanguageContext';

export default function MarketplaceHowItWorks() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('hiring');

  const tabData = {
    hiring: [
      {
        id: 'h1',
        title: t('marketplace.howItWorks.h1Title', 'Describe what you need'),
        description: t('marketplace.howItWorks.h1Desc', 'Type a short request and ThinkBrain drafts the job post, budget and screening questions for you. You can connect a Think4Ever project so the post is precise. Connecting a project doesn’t give anyone access.'),
        icon: FileText,
      },
      {
        id: 'h2',
        title: t('marketplace.howItWorks.h2Title', 'Get scored proposals'),
        description: t('marketplace.howItWorks.h2Desc', 'ThinkBrain scores every proposal against your requirements, so you can go straight to the best fits. Message, shortlist or decline with one click.'),
        icon: Star,
      },
      {
        id: 'h3',
        title: t('marketplace.howItWorks.h3Title', 'Offer a contract with the access you choose'),
        description: t('marketplace.howItWorks.h3Desc', 'Pick the freelancer’s role, the projects they can reach, and the type of access: a login to your workspace, a project-scoped MCP token for tools like Claude Code, Codex or Cursor, or both. Work that doesn’t need your project can have no access at all.'),
        icon: FileCheck,
      },
      {
        id: 'h4',
        title: t('marketplace.howItWorks.h4Title', 'Get the work done in your workspace'),
        description: t('marketplace.howItWorks.h4Desc', 'Everything they build stays in your project. When the contract ends, access is removed and tokens are revoked automatically.'),
        icon: ShieldCheck,
      },
    ],
    findingWork: [
      {
        id: 'w1',
        title: t('marketplace.howItWorks.w1Title', 'Sign up free'),
        description: t('marketplace.howItWorks.w1Desc', 'A free Think4Ever account (Think Free) is all you need.'),
        icon: UserPlus,
      },
      {
        id: 'w2',
        title: t('marketplace.howItWorks.w2Title', 'Set up your profile'),
        description: t('marketplace.howItWorks.w2Desc', 'Add your headline, skills and experience. Clients see it next to every proposal you send.'),
        icon: UserCheck,
      },
      {
        id: 'w3',
        title: t('marketplace.howItWorks.w3Title', 'Find a job and send a proposal'),
        description: t('marketplace.howItWorks.w3Desc', 'Search and filter jobs by category, budget and experience level. Send your approach, your own rate and timeline, and answers to the screening questions.'),
        icon: Search,
      },
      {
        id: 'w4',
        title: t('marketplace.howItWorks.w4Title', 'Accept the contract and start'),
        description: t('marketplace.howItWorks.w4Desc', 'Your access is set up automatically. Work in the client’s workspace, or connect from Claude Code, Codex or Cursor with the MCP details on your contract.'),
        icon: PlayCircle,
      },
    ],
  };

  return (
    <MarketplaceSection id="marketplace-how-it-works" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
        {/* Header and Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 md:mb-14 gap-8">
          <div>
            <Eyebrow className="mb-4">
              {t('marketplace.howItWorks.eyebrow', 'Platform Guide')}
            </Eyebrow>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-extrabold tracking-tight text-foreground mb-4">
              {t('marketplace.howItWorks.titlePrefix', 'How it ')}<span className="text-primary">{t('marketplace.howItWorks.titleHighlight', 'works')}</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              {t('marketplace.howItWorks.subtitle', "Whether you need to hire top talent or you're looking for your next big project, our platform makes it seamless.")}
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
              {t('marketplace.howItWorks.tabHiring', 'For hiring')}
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
              {t('marketplace.howItWorks.tabFinding', 'For finding work')}
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
