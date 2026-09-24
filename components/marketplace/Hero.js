'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote } from 'lucide-react';
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
              Talent Network Marketplace
            </motion.span>

            {/* Headline — exact home font sizes */}
            <motion.h1
              variants={itemVariants}
              className="text-[32px] leading-[1.1] md:text-[48px] lg:text-[52px] font-extrabold tracking-tight text-foreground mb-4"
            >
              Hire the top tier of
              <br className="hidden md:block" />
              <span className="text-primary"> independent talent</span>
            </motion.h1>

            {/* Subtitle — exact home styles */}
            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-base sm:text-lg text-muted-foreground/90 font-normal leading-relaxed mb-6"
            >
              Think4Ever Marketplace is a premium talent network built for teams
              that need high-quality execution, structured workflows, and vetted
              professionals—not vague promises.
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

            {/* Social proof row */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-0">
              <div className="flex -space-x-2.5">
                {[11, 32, 47].map((img, i) => (
                  <Image
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${img}`}
                    alt={`User ${i + 1}`}
                    width={36}
                    height={36}
                    unoptimized
                    className="w-9 h-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-foreground leading-tight">
                Trusted by{' '}
                <span className="text-primary font-bold">10k+</span>
                <br />
                <span className="font-normal text-muted-foreground text-xs">companies worldwide</span>
              </p>
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

            {/* Floating Review Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -left-4 sm:-left-6 lg:-left-8 bg-card border border-border shadow-2xl shadow-black/10 rounded-2xl p-4 sm:p-5 w-[240px] sm:w-[280px] z-20"
            >
              <Quote className="w-5 h-5 text-foreground absolute top-4 right-4" />

              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-foreground" />
                ))}
              </div>

              <p className="text-[13px] font-medium text-foreground leading-relaxed mb-4 pr-4">
                &ldquo;Their structured talent network cut our onboarding and sourcing
                time in half. Highly recommended.&rdquo;
              </p>

              <div className="flex items-center gap-2.5 pt-3 border-t border-border/40">
                <Image
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Sarah Jenkins"
                  width={32}
                  height={32}
                  unoptimized
                  className="w-8 h-8 rounded-full border-2 border-border object-cover"
                />
                <div>
                  <p className="font-bold text-foreground text-[13px] leading-tight">Sarah Jenkins</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">CTO at TechFlow</p>
                </div>
              </div>
            </motion.div>

            {/* Stats badge top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-card border border-border shadow-xl rounded-2xl px-4 py-3 z-20 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-black">✓</span>
              </div>
              <div>
                <p className="text-[13px] font-bold text-foreground leading-tight">Top 3% Vetted</p>
                <p className="text-[11px] text-muted-foreground">Talent only</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </MarketplaceContainer>
    </section>
  );
}
