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
    question: 'How does the vetting process work?',
    answer:
      'Every professional in our network goes through a rigorous, multi-stage screening process. We test for technical proficiency, communication skills, and past project success. Less than 3% of applicants make it into our active marketplace.',
  },
  {
    id: 2,
    question: 'How quickly can I hire someone?',
    answer:
      'Our matching algorithm and dedicated talent managers can typically connect you with vetted, available candidates within 48 to 72 hours of your initial request.',
  },
  {
    id: 3,
    question: 'Can I hire a full dedicated team?',
    answer:
      'Absolutely. Whether you need a single specialized expert or an entire cross-functional team (including project managers, designers, and developers), we can assemble and deploy a cohesive unit tailored to your project.',
  },
  {
    id: 4,
    question: "What happens if I'm not satisfied with the talent?",
    answer:
      "We offer a no-risk trial period. If you find that a freelancer isn't the perfect fit within the first two weeks, we will seamlessly transition them out and immediately provide a replacement at no additional cost.",
  },
  {
    id: 5,
    question: 'How does billing and invoicing work?',
    answer:
      "We handle all the financial logistics. You'll receive a consolidated, transparent invoice based on clear hourly rates or agreed-upon milestones. Payments are processed securely through our enterprise platform.",
  },
  {
    id: 6,
    question: 'Do you support enterprise compliance?',
    answer:
      'Yes. We take compliance seriously, managing all aspects of worker classification, NDA enforcement, and intellectual property rights assignment to ensure your enterprise is fully protected.',
  },
  {
    id: 7,
    question: 'Are these freelancers or full-time employees?',
    answer:
      'They are independent contractors and freelancers. However, many of our professionals are available for full-time, long-term engagements acting as dedicated extensions of your internal team.',
  },
  {
    id: 8,
    question: 'How is Think4Ever different from standard platforms?',
    answer:
      'Unlike standard platforms where you have to sift through thousands of unvetted bids, we do the heavy lifting. We only provide highly curated, top-tier talent with a focus on enterprise-grade reliability and structured delivery.',
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
