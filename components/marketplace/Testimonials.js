'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import MarketplaceSectionHeader from '@/components/marketplace/ui/MarketplaceSectionHeader';
import SectionCard from '@/components/layout/SectionCard';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';

const testimonials = [
  {
    id: 1,
    quote:
      'We discovered CTO-level expertise on the platform—someone who had already served as a startup CTO—willing to contribute to our core infrastructure. That kind of talent brings tremendous value to us.',
    name: 'Saswata Basu',
    role: 'CEO',
    company: 'Züs',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Think4Ever isn't just a hiring platform for us—it's a strategic partner. It's helped us fill every technical gap, accelerate our delivery from months to weeks, and even bring on leaders who've become foundational.",
    name: 'David Wrench',
    role: 'Co-Founder and CEO',
    company: 'Datajoi',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The safety features are nice, but what really builds our confidence is how we consistently find experts who deliver on highly technical, complex projects... It helped us build a community of incredible talent.",
    name: 'Gabriel Richman',
    role: 'Founder and CEO',
    company: 'Omic',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
  },
  {
    id: 4,
    quote:
      "I found two awesome candidates and wound up hiring an AI freelancer based in Paris...I love the platform and the amount of talent I have access to. We really couldn't be this far along without help from the network.",
    name: 'Matt See',
    role: 'Co-Founder and CEO',
    company: 'Lighthouse',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    id: 5,
    quote:
      "In this early stage, we really need to be lean, targeted, and prove out all the things that we're doing. Being able to really find the right people, and interview different people where you know they're immensely talented, has been awesome.",
    name: 'Jen Libby',
    role: 'Founder and CEO',
    company: 'Promly',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
  },
  {
    id: 6,
    quote:
      "Think4Ever is paramount to the success that we've had. We can't accomplish what we do without our freelance staff. We fully consider them part of our core team. They are exceptionally talented, professional, and productive.",
    name: 'Bryan Goltzman',
    role: 'CEO',
    company: 'Liquid Screen Design',
    avatar: 'https://i.pravatar.cc/150?img=59',
    rating: 5,
  },
];

export default function MarketplaceTestimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MarketplaceSection id="marketplace-testimonials" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <MarketplaceSectionHeader
            eyebrow="Client Success"
            title="Proven results from"
            highlightText="innovative teams"
            description="We have a reputation for helping clients around the world find success on their most important and complex projects."
            align="center"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={cardVariants}
                className="group relative flex flex-col justify-between h-full p-6 lg:p-8 rounded-2xl bg-background border border-border/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground rotate-180 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-foreground"
                      />
                    ))}
                  </div>

                  {/* Quote Text - truncated to keep cards shorter */}
                  <p className="text-[14px] leading-relaxed text-foreground/80 mb-8 line-clamp-5">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-border/50">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[14px] font-bold text-foreground leading-none mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] text-muted-foreground leading-none">
                      {testimonial.role},{' '}
                      <span className="font-medium">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionCard>
    </MarketplaceSection>
  );
}
