'use client';

import Container from '@/components/layout/Container';
import SectionCard from '@/components/layout/SectionCard';
import SectionHeading from '@/components/layout/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, CheckCircle2, Layers, Target } from 'lucide-react';

export default function CoherencePrompt() {
  const { t } = useLanguage();

  const list = t('designToCodePage.coherenceList') || [
    'Review objectives and business rules',
    'Make architecture decisions explicit',
    'Connect acceptance criteria to implementation',
    'Resolve divergence before execution',
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 border-b border-border bg-background">
      <SectionCard>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Copy */}
            <div className="order-2 md:order-1">
              <SectionHeading
                align="left"
                eyebrow={t('designToCodePage.coherenceEyebrow')}
                title={t('designToCodePage.coherenceTitle')}
                subtitle={t('designToCodePage.coherenceSubtitle')}
                className="mb-8"
              />

              <ul className="space-y-4">
                {list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base font-semibold text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Diagram Mock (Premium Glassmorphism) */}
            <div className="order-1 md:order-2 relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
                {/* Objective Block */}
                <div className="col-span-1 md:col-span-5 bg-white border border-border/80 rounded-xl p-5 shadow-sm group-hover:border-primary/30 transition-colors duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                      <div className="p-1.5 bg-primary/10 rounded-lg">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <small className="text-[9px] font-extrabold text-primary uppercase block leading-none">
                        Approved Objective
                      </small>
                    </div>

                    <strong className="text-xs sm:text-sm font-bold text-foreground block leading-snug mb-4">
                      Refunds remain reviewable and customer-visible.
                    </strong>
                  </div>

                  <span className="inline-flex w-max items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 text-[9px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    Approved blueprint
                  </span>
                </div>

                {/* Arrow Divider */}
                <div className="col-span-1 flex justify-center text-primary/50 group-hover:text-primary transition-colors duration-300 md:rotate-0 rotate-90">
                  <ArrowRight className="w-6 h-6" />
                </div>

                {/* Context Block */}
                <div className="col-span-1 md:col-span-5 bg-white border border-border/80 rounded-xl p-5 shadow-sm group-hover:border-primary/30 transition-colors duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
                      <div className="p-1.5 bg-primary rounded-lg">
                        <Layers className="w-4 h-4 text-white" />
                      </div>
                      <small className="text-[9px] font-extrabold text-primary uppercase block leading-none">
                        Implementation Context
                      </small>
                    </div>

                    <strong className="text-xs sm:text-sm font-bold text-foreground block leading-snug mb-4">
                      Rule + workflow + acceptance criteria
                    </strong>
                  </div>

                  <span className="inline-flex w-max items-center gap-1.5 bg-[#e0f7ed] text-[#167451] border border-[#167451]/20 text-[9px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    ✓ objective preserved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
