'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MarketplaceContainer from '@/components/marketplace/ui/MarketplaceContainer';

import Eyebrow from "@/components/ui/Eyebrow";

export default function MarketplaceHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-background pt-8 lg:pt-12 pb-4 lg:pb-8 overflow-hidden transition-colors duration-300">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <MarketplaceContainer>
        {/* Two-column grid — same gap as home hero */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* LEFT: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl mx-auto lg:max-w-none"
          >
            {/* Eyebrow badge — exact home pattern */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-foreground text-xs font-bold tracking-wide mb-4 border border-border"
            >
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Think4Ever Marketplace
            </motion.span>

            {/* Headline — exact home font sizes */}
            <motion.h1
              variants={itemVariants}
              className="text-[32px] leading-[1.1] md:text-[48px] lg:text-[52px] font-extrabold tracking-tight text-foreground mb-4"
            >
              The outsourcing marketplace for the <span className="text-primary">AI era.</span>
            </motion.h1>

            {/* Subtitle — exact home styles */}
            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-base sm:text-lg text-muted-foreground/90 font-normal leading-relaxed mb-6"
            >
              Where AI-enabled freelancers and enterprises get work done. Outsource a single task or an entire project, right inside Think4Ever: ThinkBrain writes the job post and scores proposals, and your hire starts in your project with no repo sharing or setup.
            </motion.p>

            {/* CTAs — exact home pattern: default size, gap-4, mb-4, center on mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-4"
            >
              <Button asChild className="w-full sm:w-auto">
                <Link href="https://portal.think4ever.com/#/register">
                  Find Talent
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link href="https://portal.think4ever.com/#/register">
                  Find Work
                </Link>
              </Button>
            </motion.div>

            {/* Expertise pills — same divider + label pattern as home Integrations */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center lg:items-start w-full">
              <div className="w-full h-[1px] bg-border/50 mb-5" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Top Expertise
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {['AI Development', 'Design', 'System Architecture', 'Data Science', 'Marketing'].map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border/60 text-xs font-semibold text-foreground/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image + Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1 relative mt-10 lg:mt-0"
          >
            {/* Hero Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] bg-muted overflow-hidden shadow-2xl shadow-primary/10 rounded-tr-[60px] rounded-bl-[60px] rounded-tl-2xl rounded-br-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop"
                alt="Team collaboration at Think4Ever Marketplace"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Features Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-4 sm:-left-6 lg:-left-8 bg-card border border-border shadow-2xl shadow-black/10 rounded-2xl p-5 w-[260px] sm:w-[300px] z-20"
            >
              <ul className="space-y-3">
                {[
                  "ThinkBrain writes your job post",
                  "Proposals scored against your requirements",
                  "Access you control, removed when the contract ends"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary text-[10px] font-black">✓</span>
                    </div>
                    <span className="text-[13px] font-medium text-foreground leading-snug">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </MarketplaceContainer>
    </section>
  );
}
