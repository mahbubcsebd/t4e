'use client';

import SectionCard from '@/components/layout/SectionCard';
import SectionHeading from '@/components/layout/SectionHeading';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useAuthModal } from '@/context/AuthModalContext';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Paperclip } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const IMAGE_DIR = '/images/roles';
const PANEL_IMAGE = `${IMAGE_DIR}/roles-panel.jpg`;
const GUIDE_PATH = '/tutorials/design-artifacts-guide/';
const GUIDE_PERSONAS_PATH = `${GUIDE_PATH}#personas`;

// Same order as the `discoverRole.roles` array in the dictionaries.
const ROLE_IMAGES = [
  `${IMAGE_DIR}/role-product-managers.jpg`,
  `${IMAGE_DIR}/role-developers.jpg`,
  `${IMAGE_DIR}/role-architects.jpg`,
  `${IMAGE_DIR}/role-business-leaders.jpg`,
  `${IMAGE_DIR}/role-consulting-partners.jpg`,
  `${IMAGE_DIR}/role-qa-security.jpg`,
];

// Alternating tilt gives the "pinned file" look without feeling random.
const TILTS = [
  'rotate-3',
  '-rotate-2',
  'rotate-2',
  '-rotate-3',
  'rotate-2',
  '-rotate-2',
];

const formatNumber = (index) => String(index + 1).padStart(2, '0');

function CoverTile({ t, guideHref }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#093cad] text-white flex flex-col min-h-[380px] md:col-span-2 lg:col-span-1 lg:row-span-2">
      <div className="relative z-10 p-6 sm:p-8">
        <p className="flex items-baseline gap-2 leading-none">
          <span className="text-7xl sm:text-8xl font-extrabold text-primary tracking-tight">
            {t('discoverRole.coverCount', '6')}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-primary">
            {t('discoverRole.coverWord', 'roles')}
          </span>
        </p>
        <h3 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug max-w-xs">
          {t(
            'discoverRole.coverText',
            "that need Think4Ever but don't know it yet.",
          )}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#d6e3ff] leading-relaxed max-w-xs">
          {t('discoverRole.coverBody')}
        </p>

        <div className="mt-5 grid gap-2.5">
          <a
            href="#role-cards"
            className="inline-flex w-max max-w-full items-center gap-1.5 text-sm font-bold italic text-white hover:underline underline-offset-4"
          >
            {t('discoverRole.coverCta', 'Find yours')}
            <ArrowRight
              className="w-4 h-4 rotate-90 lg:rotate-0"
              aria-hidden="true"
            />
          </a>
          <Link
            href={guideHref}
            className="inline-flex w-max max-w-full items-center gap-1.5 text-sm font-medium text-[#d6e3ff] hover:text-white hover:underline underline-offset-4"
          >
            {t('discoverRole.guideLink')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="relative mt-auto h-48 sm:h-56 lg:h-64 hidden lg:block">
        <Image
          src={PANEL_IMAGE}
          alt={t('discoverRole.panelAlt')}
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#093cad] via-[#093cad]/30 to-transparent" />
      </div>
    </div>
  );
}

function RoleCard({ role, index, roleLabel, useLabel, moreLabel, onOpen }) {
  return (
    <div className="group relative pt-4">
      {/* Folder tab */}
      <span
        className="absolute top-0 left-5 h-5 w-20 rounded-t-lg bg-[#f4ead7] border border-b-0 border-[#e6d6b8]"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-haspopup="dialog"
        className="relative h-full w-full text-left cursor-pointer rounded-xl rounded-tl-none bg-[#fbf6ec] border border-[#e6d6b8] p-5 sm:p-6 flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#093cad]/10 group-hover:border-primary/40 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="flex items-start justify-between gap-4 mb-5">
          <span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
              {roleLabel}
            </span>
            <span className="block text-5xl font-extrabold text-primary leading-none mt-1 tracking-tight">
              {formatNumber(index)}
            </span>
          </span>

          <span
            className={`relative shrink-0 transition-transform duration-500 group-hover:rotate-0 ${TILTS[index % TILTS.length]}`}
          >
            <Paperclip
              className="absolute -top-3 right-3 z-10 w-5 h-5 text-slate-400 -rotate-12"
              aria-hidden="true"
            />
            <span className="relative block w-20 h-24 sm:w-24 sm:h-28 rounded-md overflow-hidden bg-white p-1 shadow-md ring-1 ring-black/5">
              <span className="relative block w-full h-full rounded-sm overflow-hidden">
                <Image
                  src={ROLE_IMAGES[index]}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </span>
            </span>
          </span>
        </span>

        <span className="block text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
          {role.name}
        </span>
        <span className="block mt-0.5 text-xs text-[#8a7a5c]">{role.who}</span>

        <span className="block mt-3 pt-3 border-t border-dashed border-[#d9c7a3]">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c] mb-1">
            {useLabel}
          </span>
          <span className="block text-sm text-[#24407e] leading-relaxed">
            {role.desc}
          </span>
        </span>

        <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#093cad]">
          {moreLabel}
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
}

function RoleDialog({ role, index, t, guideHref, onStart, onOpenChange }) {
  if (!role) return null;

  return (
    <DialogContent
      showCloseButton={false}
      aria-describedby={undefined}
      className="p-0 gap-0 sm:max-w-[880px] max-h-[calc(100dvh-24px)] overflow-y-auto rounded-2xl bg-white"
    >
      <div className="grid md:grid-cols-[1.15fr_1fr]">
        <div className="grid content-start gap-5 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
                {t('discoverRole.roleLabel', 'Role')}{' '}
                <b className="text-primary">{formatNumber(index)}</b>
              </span>
              <DialogTitle className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {role.name}
              </DialogTitle>
              <p className="mt-1 text-sm text-muted-foreground">{role.who}</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label={t('discoverRole.close', 'Close')}
              className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-border"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <blockquote className="border-l-[3px] border-primary py-1 pl-3.5 text-base sm:text-lg font-medium text-foreground">
            {role.question}
          </blockquote>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
              {t('discoverRole.openFirstLabel')}
            </span>
            <ul className="mt-2 flex flex-wrap gap-2">
              {role.openFirst.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[#e6d6b8] bg-white px-3 py-1 text-xs sm:text-sm font-semibold text-[#24407e]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
              {t('discoverRole.routineLabel')}
            </span>
            <ol className="mt-2 grid list-decimal gap-2 pl-5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground marker:font-bold marker:text-primary">
              {role.routine.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid content-start gap-5 border-t border-[#e6d6b8] bg-[#fbf6ec] p-6 sm:p-8 md:border-l md:border-t-0">
          <figure>
            <Image
              src={ROLE_IMAGES[index]}
              alt={role.caption}
              width={480}
              height={314}
              className="block h-auto max-h-[300px] w-full rounded-lg border border-[#e6d6b8] bg-white object-cover object-top"
            />
            <figcaption className="mt-1.5 text-xs text-muted-foreground">
              {role.caption}
            </figcaption>
          </figure>

          <div className="grid gap-1.5 border-t border-dashed border-[#d9c7a3] pt-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
              {t('discoverRole.outcomeLabel')}
            </span>
            <p className="text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
              {role.outcome}
            </p>
          </div>

          <p className="font-bold text-[#093cad]">{role.desc}</p>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onStart}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#093cad] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0b4bd6]"
            >
              {t('discoverRole.startFree')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <a
              href={guideHref}
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center rounded-full border border-[#c9d6f2] bg-white px-5 py-2.5 text-sm font-bold text-[#093cad] transition-colors hover:border-[#093cad]"
            >
              {t('discoverRole.fullPlaybook')}
            </a>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default function DiscoverRoleSection() {
  const { t, language } = useLanguage();
  const { openAuthModal } = useAuthModal();
  const [activeIndex, setActiveIndex] = useState(null);

  const roles = t('discoverRole.roles');
  const roleList = Array.isArray(roles)
    ? roles.slice(0, ROLE_IMAGES.length)
    : [];
  const localize = (path) => (language === 'en' ? path : `/${language}${path}`);
  const guideHref = localize(GUIDE_PATH);
  const personasHref = localize(GUIDE_PERSONAS_PATH);

  const handleOpenChange = (isOpen) => {
    if (!isOpen) setActiveIndex(null);
  };

  const handleStart = () => {
    setActiveIndex(null);
    openAuthModal('signup');
  };

  return (
    <section className="py-6 md:py-8 lg:py-12" id="roles">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <SectionHeading
            eyebrow={t('discoverRole.eyebrow', "Who it's for")}
            title={t('discoverRole.title', 'Discover your')}
            highlightText={t('discoverRole.highlight', 'Role')}
            subtitle={t('discoverRole.sub')}
          />

          <div
            id="role-cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 scroll-mt-24"
          >
            <CoverTile t={t} guideHref={guideHref} />
            {roleList.map((role, index) => (
              <RoleCard
                key={role.name}
                role={role}
                index={index}
                roleLabel={t('discoverRole.roleLabel', 'Role')}
                useLabel={t('discoverRole.useLabel', 'How they use Think4Ever')}
                moreLabel={t('discoverRole.moreLabel')}
                onOpen={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </SectionCard>

      <Dialog open={activeIndex !== null} onOpenChange={handleOpenChange}>
        <RoleDialog
          role={activeIndex === null ? null : roleList[activeIndex]}
          index={activeIndex ?? 0}
          t={t}
          guideHref={personasHref}
          onStart={handleStart}
          onOpenChange={handleOpenChange}
        />
      </Dialog>
    </section>
  );
}
