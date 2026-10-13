'use client';

import Container from '@/components/layout/Container';
import SectionCard from '@/components/layout/SectionCard';
import SectionHeading from '@/components/layout/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { Briefcase, Gauge, LayoutGrid, Terminal, Users } from 'lucide-react';

export default function PricingTeams() {
  const { t } = useLanguage();

  const icons = [LayoutGrid, Users, Gauge, Terminal, Briefcase];

  const values = t('pricingPage.teamsValues') || [
    {
      title: 'One shared blueprint per project',
      desc: "Everyone works from the same concepts, flows, rules and screens, so designs don't drift apart.",
    },
    {
      title: 'Roles and per-project access',
      desc: 'Give each person a role such as Developer, Project Manager or QA Engineer, and open only the projects they need. Deactivate anyone instantly.',
    },
    {
      title: 'Pooled credits with admin caps',
      desc: "Busy teammates draw more and quieter ones draw less, so no credits sit stranded in someone else's account.",
    },
    {
      title: 'Parallel coding with your tools',
      desc: 'Each member connects their own Claude Code, Cursor or Codex session to the same project through the Think MCP server.',
    },
    {
      title: 'Bring in freelancers when you need them',
      desc: 'Hire through the Think4Ever Marketplace and give freelancers scoped access to your projects that ends with the contract.',
    },
  ];

  return (
    <section
      className="py-6 md:py-8 lg:py-12 border-b border-border"
      id="teams"
    >
      <SectionCard>
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left side: Value props */}
            <div className="lg:col-span-7 flex flex-col">
              <SectionHeading
                align="left"
                eyebrow={t('pricingPage.teamsEyebrow', 'Think Big')}
                eyebrowClassName="bg-blue-50 text-[#093cad] border-[#093cad]/25 font-extrabold text-xs px-3.5 py-1.5 shadow-sm mb-2"
                title={
                  <>
                    <span className="text-[#093cad] mr-2">
                      {t('pricingPage.teamsHeadingHighlight', 'Think Big:')}
                    </span>
                    {t(
                      'pricingPage.teamsTitle',
                      'Built for teams that work on the same system',
                    )}
                  </>
                }
                titleClassName="max-w-[620px]"
                subtitle={t(
                  'pricingPage.teamsSubtitle',
                  'Separate accounts mean separate workspaces, split credits and projects nobody else can open. Think Big puts the whole team on one Living Blueprint.',
                )}
                className="mb-8"
              />

              <div className="space-y-4">
                {values.map((val, idx) => {
                  const Icon = icons[idx % icons.length];
                  return (
                    <div
                      key={idx}
                      className="bg-card/70 border border-border/60 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-1">
                          {val.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right side: Side card comparison */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="bg-[#0b1b3a] text-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#1d3159]">
                <h3 className="text-2xl font-extrabold mb-2 tracking-tight">
                  {t(
                    'pricingPage.teamsSideCard.title',
                    'A team of 8, two ways',
                  )}
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {t(
                    'pricingPage.teamsSideCard.desc',
                    'What your team gets with separate Think New accounts compared with one Think Big plan.',
                  )}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* 8 x Think New */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 pb-2 border-b border-white/10">
                      {t(
                        'pricingPage.teamsSideCard.col1.title',
                        '8 × Think New',
                      )}
                    </h4>
                    <dl className="space-y-3.5 text-xs">
                      <div>
                        <dt className="text-slate-400 uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelWorkspaces', 'Workspaces')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col1.workspaces',
                            '8 separate',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelCredits', 'Credits')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col1.credits',
                            '16,000, split 2k',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelProjects', 'Projects')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col1.projects',
                            '24, locked to 1',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelAdmin', 'Administrator')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col1.admin',
                            'None across team',
                          )}
                        </dd>
                      </div>
                      <div className="pt-2 border-t border-white/10">
                        <dt className="text-slate-400 uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelPrice', 'Price')}
                        </dt>
                        <dd className="font-extrabold text-base text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col1.price',
                            '$200/month',
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Think Big */}
                  <div className="bg-[#1447b8]/40 border-2 border-[#548bf5]/60 rounded-xl p-5 flex flex-col justify-between shadow-lg shadow-blue-900/30">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#548bf5]/30">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#9cc0ff]">
                        {t('pricingPage.plan3Name', 'Think Big')}
                      </h4>
                      <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#3b82f6] text-white">
                        {t('pricingPage.labelShared', 'Shared')}
                      </span>
                    </div>
                    <dl className="space-y-3.5 text-xs">
                      <div>
                        <dt className="text-[#9cc0ff] uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelWorkspaces', 'Workspaces')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col2.workspaces',
                            '1 shared',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#9cc0ff] uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelCredits', 'Credits')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col2.credits',
                            '20,000, pooled',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#9cc0ff] uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelProjects', 'Projects')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col2.projects',
                            '20, team shared',
                          )}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[#9cc0ff] uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelAdmin', 'Administrator')}
                        </dt>
                        <dd className="font-bold text-sm text-white mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col2.admin',
                            'Roles, access, caps',
                          )}
                        </dd>
                      </div>
                      <div className="pt-2 border-t border-[#548bf5]/30">
                        <dt className="text-[#9cc0ff] uppercase tracking-wider text-[10px]">
                          {t('pricingPage.labelPrice', 'Price')}
                        </dt>
                        <dd className="font-extrabold text-base text-[#9cc0ff] mt-0.5">
                          {t(
                            'pricingPage.teamsSideCard.col2.price',
                            '$250/month',
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
