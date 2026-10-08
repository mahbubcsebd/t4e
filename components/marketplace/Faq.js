'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';
import MarketplaceSectionHeader from '@/components/marketplace/ui/MarketplaceSectionHeader';

const faqs = [
  {
    id: 1,
    question: 'Do both clients and freelancers need a Think4Ever account?',
    answer: 'Yes. Posting, applying, messaging and contracts all run through Think4Ever accounts. Freelancers can start on the free plan.',
  },
  {
    id: 2,
    question: 'How do I post a job?',
    answer: 'Open the Marketplace, go to Jobs and click Post a job. Describe what you need to ThinkBrain, click Apply to form, review the details, and post. You can also attach a PRD, statement of work or designs.',
  },
  {
    id: 3,
    question: 'Can I post a job without a Think4Ever project?',
    answer: 'Yes. Describe the work or attach your PRD and post it. Before you give a freelancer access, create a project in your workspace so their work is saved there and belongs to you.',
  },
  {
    id: 4,
    question: 'Does connecting a project to a job share it with applicants?',
    answer: 'No. Connecting a project only lets ThinkBrain read it to write the posting and score proposals. Nobody gets access until you offer a contract with access and the freelancer accepts it.',
  },
  {
    id: 5,
    question: 'How are freelancers chosen?',
    answer: 'ThinkBrain scores every proposal against your requirements and your connected project, and explains its score. You make the final choice.',
  },
  {
    id: 6,
    question: 'How are prices and timelines set?',
    answer: 'By the freelancer. Freelancers know their own speed with AI coding tools, so they give their own rate and timeline rather than a generic estimate.',
  },
  {
    id: 7,
    question: 'How does payment work?',
    answer: 'Directly between you and the freelancer. The amount on a contract is a record for both of you, not a charge.',
  },
  {
    id: 8,
    question: 'What access does a freelancer get, and when does it end?',
    answer: 'Only the role, projects and access type you choose in the contract: a login to your workspace, a project-scoped MCP token, or both. Access is removed and tokens are revoked automatically when the contract ends or the project is completed.',
  },
  {
    id: 9,
    question: 'Can I outsource a whole project to a team?',
    answer: 'Yes. Full-project outsourcing lets an agency or team handle design and development end to end, while you keep visibility, audit trails and control over what they can reach.',
  },
];


function FaqItem({ item, openId, toggleFaq }) {
  const isOpen = openId === item.id;

  return (
    <div className="border-b border-border/50 last:border-b-0 group/item">
      <button
        onClick={() => toggleFaq(item.id)}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Collapse question: " + item.question : "Expand question: " + item.question}
      >
        <span
          className={`font-medium text-base md:text-lg pr-6 transition-colors duration-300 ${
            isOpen
              ? 'text-foreground'
              : 'text-foreground group-hover:text-primary'
          }`}
        >
          {item.question}
        </span>
        <div
          className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full bg-secondary/50 text-foreground transition-all duration-300 ${
            isOpen
              ? 'bg-primary text-foreground rotate-45'
              : 'group-hover:bg-secondary'
          }`}
        >
          <Plus className="w-5 h-5 transition-transform duration-300" strokeWidth={2} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pb-6 text-[15px] md:text-base text-foreground/80 leading-relaxed md:pr-14">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MarketplaceFaq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  return (
    <MarketplaceSection
      id="marketplace-faq"
      bg="bg-background"
    >
      <SectionCard>
        <div className="bg-card rounded-xl p-6 sm:p-10 md:p-12 lg:p-16 border border-border/50 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl w-full mb-8 md:mb-12">
            <MarketplaceSectionHeader
              eyebrow="Got Questions?"
              title="Frequently Asked"
              highlightText="Questions"
              description="Everything you need to know about hiring and managing world-class talent through Think4Ever Marketplace."
              align="center"
            />
          </div>

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
            {/* Left Column */}
            <div className="flex flex-col">
              {leftColumnFaqs.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  openId={openId}
                  toggleFaq={toggleFaq}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              {rightColumnFaqs.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  openId={openId}
                  toggleFaq={toggleFaq}
                />
              ))}
            </div>
          </div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
