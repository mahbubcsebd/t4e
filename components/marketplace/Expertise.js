'use client';

import React, { useState } from 'react';
import SectionCard from '@/components/layout/SectionCard';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Bot,
  PenTool,
  LineChart,
  Languages,
  HeadphonesIcon,
  Database,
  Calculator,
  HardHat,
  Scale,
  GraduationCap,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';
import MarketplaceSectionHeader from '@/components/marketplace/ui/MarketplaceSectionHeader';
import MarketplaceSection from '@/components/marketplace/ui/MarketplaceSection';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const categories = [
  {
    id: 1,
    title: 'Development & IT',
    icon: Code2,
    subcategories: [
      'Web Development',
      'Mobile Development',
      'Ecommerce Development',
      'Desktop Application Development',
      'Game Design & Development',
      'Scripts & Utilities',
      'QA & Testing',
      'Web & Mobile Design',
      'Product Management & Scrum',
      'Blockchain & Cryptocurrency',
      'Database Management & Administration',
      'ERP/CRM Software',
      'Information Security & Compliance',
      'Network & System Administration',
      'DevOps & Solution Architecture',
    ],
  },
  {
    id: 2,
    title: 'AI Services',
    icon: Bot,
    subcategories: [
      'AI Agent Development',
      'AI Apps & Integration',
      'AI Chatbot Development',
      'Machine Learning & Deep Learning',
      'Generative AI Modeling',
      'Prompt Engineering',
      'AI Data Annotation & Training',
      'AI Content & Art',
      'AI Automation & Workflows',
    ],
  },
  {
    id: 3,
    title: 'Design & Creative',
    icon: PenTool,
    subcategories: [
      'Branding & Logo Design',
      'Graphic, Editorial & Presentation Design',
      'Art & Illustration',
      'Web & App Design (UI/UX)',
      'Product Design',
      'Video & Animation',
      'Motion Graphics',
      'Audio & Music Production',
      'Photography',
      'Performing Arts',
      'NFT, AR/VR & Game Art',
      'Packaging & Print Design',
      'Fashion & Merchandise',
    ],
  },
  {
    id: 4,
    title: 'Sales & Marketing',
    icon: LineChart,
    subcategories: [
      'Digital Marketing',
      'Social Media Marketing',
      'SEO & Search Marketing',
      'Lead Generation & Telemarketing',
      'Marketing, PR & Brand Strategy',
      'Email & Marketing Automation',
      'Ecommerce Marketing',
      'Marketing Analytics',
    ],
  },
  {
    id: 5,
    title: 'Writing & Translation',
    icon: Languages,
    subcategories: [
      'Content Writing',
      'Sales & Marketing Copywriting',
      'Editing & Proofreading',
      'Professional & Business Writing',
      'Technical Writing',
      'Book & eBook Writing',
      'Scriptwriting & Creative Writing',
      'Translation & Localization',
      'Language Tutoring & Interpretation',
    ],
  },
  {
    id: 6,
    title: 'Admin & Customer Support',
    icon: HeadphonesIcon,
    subcategories: [
      'Virtual Assistance',
      'Data Entry & Transcription',
      'Project Management',
      'Market Research & Product Reviews',
      'Customer Service & Tech Support',
      'Community Management & Moderation',
      'Ecommerce Management',
    ],
  },
  {
    id: 7,
    title: 'Data Science & Analytics',
    icon: Database,
    subcategories: [
      'Data Analysis & Business Intelligence',
      'Data Visualization',
      'Data Extraction / ETL',
      'Data Mining & Management',
      'Experimentation & Testing',
    ],
  },
  {
    id: 8,
    title: 'Finance & Accounting',
    icon: Calculator,
    subcategories: [
      'Accounting & Bookkeeping',
      'Financial Planning & Analysis',
      'Tax Preparation',
      'Management Consulting & Analysis',
      'Recruiting & Human Resources',
      'Personal & Professional Coaching',
    ],
  },
  {
    id: 9,
    title: 'Engineering & Architecture',
    icon: HardHat,
    subcategories: [
      'Building & Landscape Architecture',
      'Interior & Trade Show Design',
      '3D Modeling & CAD',
      'Civil & Structural Engineering',
      'Mechanical & Energy Engineering',
      'Electrical & Electronic Engineering',
      'Chemical Engineering',
      'Physical Sciences',
      'Contract Manufacturing',
    ],
  },
  {
    id: 10,
    title: 'Legal',
    icon: Scale,
    subcategories: [
      'Corporate & Contract Law',
      'Intellectual Property Law',
      'International & Immigration Law',
      'Finance & Tax Law',
      'Public Law',
      'Paralegal Services',
    ],
  },
  {
    id: 11,
    title: 'Education & Training',
    icon: GraduationCap,
    subcategories: [
      'Tutoring',
      'Course Creation & Instructional Design',
      'Career Coaching & Resume Writing',
      'Corporate Training',
    ],
  },
];

export default function MarketplaceExpertise() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MarketplaceSection id="marketplace-expertise" bg="bg-background">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <MarketplaceSectionHeader
            eyebrow="Browse Expertise"
            title="Find freelancers for"
            highlightText="every type of work"
            description="Access a global network of top-tier professionals ready to execute your most critical initiatives."
            align="left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-10"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={cardVariants}
                  onClick={() => setSelectedCategory(category)}
                  className="group relative p-6 h-[140px] rounded-xl bg-background border border-border/70 shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div className="flex justify-between items-start">
                    <Icon
                      className="w-6 h-6 text-[#0033a0] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <ArrowRight className="w-4 h-4 text-[#0033a0] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>

                  <h3 className="text-[15px] font-medium text-foreground transition-colors duration-300 pr-4 leading-tight">
                    {category.title}
                  </h3>
                </motion.div>
              );
            })}

            {/* Explore More Card */}
            <motion.div
              variants={cardVariants}
              className="group relative p-6 h-[140px] rounded-xl bg-[#0033a0] text-white hover:bg-[#002780] transition-colors duration-300 cursor-pointer flex flex-col justify-between shadow-md"
            >
              <div className="flex justify-between items-start">
                <Sparkles className="w-6 h-6 text-white/90" strokeWidth={1.5} />
                <ArrowRight className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1">
                  Explore 100+ Skills
                </h3>
                <p className="text-[13px] text-white/80 font-medium">
                  View all categories
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionCard>

      {/* Subcategory Modal using Shadcn Dialog */}
      <Dialog 
        open={!!selectedCategory} 
        onOpenChange={(open) => !open && setSelectedCategory(null)}
      >
        <DialogContent 
          className="sm:max-w-4xl rounded-2xl md:rounded-[20px] p-5 md:p-8 overflow-hidden gap-6 md:gap-8 bg-background border-border/20 shadow-2xl z-[1000] w-[95vw] md:w-full"
          overlayClassName="z-[1000] bg-black/20 backdrop-blur-sm"
        >
          {selectedCategory && (
            <>
              <DialogHeader className="p-0 text-left pr-6 md:pr-0">
                <div className="flex items-start md:items-center gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-background border border-border/60 flex items-center justify-center text-[#0033a0] shadow-sm mt-1 md:mt-0">
                    <selectedCategory.icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <DialogTitle className="text-xl md:text-[26px] font-semibold text-foreground tracking-tight leading-tight">
                      {selectedCategory.title}
                    </DialogTitle>
                    <DialogDescription className="text-sm md:text-[15px] text-muted-foreground mt-1.5 md:mt-1">
                      Select a specialization to find top talent
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="p-0 max-h-[60vh] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border/50 hover:[&::-webkit-scrollbar-thumb]:bg-border/80 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pb-2">
                  {selectedCategory.subcategories.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center px-4 py-3 md:px-5 md:py-4 rounded-lg border border-border/60 bg-background hover:border-[#0033a0]/40 hover:shadow-sm transition-all duration-300 cursor-pointer group"
                    >
                      <span className="text-[14px] md:text-[14.5px] font-normal text-foreground/80 group-hover:text-[#0033a0] transition-colors duration-200">
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </MarketplaceSection>
  );
}
