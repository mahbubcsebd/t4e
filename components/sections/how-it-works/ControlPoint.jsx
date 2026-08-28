'use client';

import Container from '@/components/layout/Container';
import SectionCard from '@/components/layout/SectionCard';
import SectionHeading from '@/components/layout/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ControlPoint() {
  const { t } = useLanguage();

  const controlList = t('howItWorksPage.controlList') || [
    'Make hidden assumptions visible',
    'Resolve conflicts between intent and implementation',
    'Give coding agents grounded context',
  ];

  const proofPills = t('howItWorksPage.proofPills') || [
    'Human decision',
    'Updated criteria',
    'Agent context',
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-background border-b border-border">
      <SectionCard>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column Copy */}
            <div>
              <SectionHeading
                align="left"
                eyebrow={t('howItWorksPage.controlEyebrow')}
                title={t('howItWorksPage.controlTitle')}
                subtitle={t('howItWorksPage.controlSubtitle')}
                className="mb-8"
              />

              <ul className="space-y-4">
                {controlList.map((item, idx) => (
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

            {/* Right Column Frame (Premium Glassmorphism) */}
            <div className="relative bg-card/80 backdrop-blur-xl border border-border/60 rounded-xl p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Approved Rule */}
                <div className="bg-white border border-primary/20 rounded-xl p-5 mb-4 shadow-sm group-hover:border-primary/40 transition-colors duration-300">
                  <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider block mb-3 w-max">
                    {t('howItWorksPage.approvedTag')}
                  </span>
                  <h4 className="text-sm font-bold text-foreground">
                    {t('howItWorksPage.approvedRule')}
                  </h4>
                </div>

                {/* Divergence Alert */}
                <div className="bg-slate-50 border border-border/80 rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm group-hover:border-primary/30 transition-colors duration-300">
                  <div className="p-1.5 bg-white border border-border/80 rounded-full shrink-0 shadow-sm">
                    <AlertTriangle className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-foreground text-xs font-semibold leading-relaxed mt-0.5">
                    {t('howItWorksPage.divergence')}
                  </span>
                </div>

                {/* Proof Pills */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {proofPills.map((pill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white border border-border/80 text-muted-foreground px-3 py-1.5 rounded-md shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
