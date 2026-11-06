"use client";

import Image from "next/image";
import { ArrowRight, Paperclip } from "lucide-react";
import SectionCard from "@/components/layout/SectionCard";
import SectionHeading from "@/components/layout/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const COVER_IMAGE = "/images/discover-role/cover.jpg";

// Same order as the `discoverRole.roles` array in the dictionaries.
const ROLE_IMAGES = [
  "/images/discover-role/role-1.jpg", // Product Managers
  "/images/discover-role/role-2.jpg", // Developers
  "/images/discover-role/role-3.jpg", // Software Architects
  "/images/discover-role/role-4.jpg", // Business Leaders
  "/images/discover-role/role-5.jpg", // Consulting Partners
  "/images/discover-role/role-6.jpg", // Quality Assurance
];

// Alternating tilt gives the "pinned file" look without feeling random.
const TILTS = ["rotate-3", "-rotate-2", "rotate-2", "-rotate-3", "rotate-2", "-rotate-2"];

function CoverTile({ t }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#093cad] text-white flex flex-col min-h-[380px] md:col-span-2 lg:col-span-1 lg:row-span-2">
      <div className="relative z-10 p-6 sm:p-8">
        <p className="flex items-baseline gap-2 leading-none">
          <span className="text-7xl sm:text-8xl font-extrabold text-primary tracking-tight">
            {t("discoverRole.coverCount", "6")}
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-primary">
            {t("discoverRole.coverWord", "roles")}
          </span>
        </p>
        <p className="mt-4 text-xl sm:text-2xl font-semibold leading-snug max-w-xs">
          {t("discoverRole.coverText", "that need Think4Ever but don't know it yet.")}
        </p>
        <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold italic text-white/80">
          {t("discoverRole.coverCta", "Find yours")}
          <ArrowRight className="w-4 h-4 rotate-90 lg:rotate-0" aria-hidden="true" />
        </p>
      </div>

      <div className="relative mt-auto h-48 sm:h-56 lg:h-64">
        <Image
          src={COVER_IMAGE}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#093cad] via-[#093cad]/30 to-transparent" />
      </div>
    </div>
  );
}

function RoleCard({ role, index, roleLabel, useLabel }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative pt-4">
      {/* Folder tab */}
      <span className="absolute top-0 left-5 h-5 w-20 rounded-t-lg bg-[#f4ead7] border border-b-0 border-[#e6d6b8]" aria-hidden="true" />

      <div className="relative h-full rounded-xl rounded-tl-none bg-[#fbf6ec] border border-[#e6d6b8] p-5 sm:p-6 flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#093cad]/10 group-hover:border-primary/40">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c]">
              {roleLabel}
            </span>
            <span className="block text-5xl font-extrabold text-primary leading-none mt-1 tracking-tight">
              {number}
            </span>
          </div>

          <div className={`relative shrink-0 transition-transform duration-500 group-hover:rotate-0 ${TILTS[index % TILTS.length]}`}>
            <Paperclip
              className="absolute -top-3 right-3 z-10 w-5 h-5 text-slate-400 -rotate-12"
              aria-hidden="true"
            />
            <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-md overflow-hidden bg-white p-1 shadow-md ring-1 ring-black/5">
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                <Image
                  src={ROLE_IMAGES[index]}
                  alt={role.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
          {role.name}
        </h3>

        <div className="mt-3 pt-3 border-t border-dashed border-[#d9c7a3]">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a7a5c] mb-1">
            {useLabel}
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function DiscoverRoleSection() {
  const { t } = useLanguage();
  const roles = t("discoverRole.roles");
  const roleList = Array.isArray(roles) ? roles.slice(0, ROLE_IMAGES.length) : [];

  return (
    <section className="py-6 md:py-8 lg:py-12" id="discover-your-role">
      <SectionCard>
        <div className="bg-card rounded-xl p-5 sm:p-8 md:p-10 border border-border/50 relative z-10">
          <SectionHeading
            eyebrow={t("discoverRole.eyebrow", "Who it's for")}
            title={t("discoverRole.title", "Discover your")}
            highlightText={t("discoverRole.highlight", "Role")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <CoverTile t={t} />
            {roleList.map((role, index) => (
              <RoleCard
                key={role.name}
                role={role}
                index={index}
                roleLabel={t("discoverRole.roleLabel", "Role")}
                useLabel={t("discoverRole.useLabel", "How they use Think4Ever")}
              />
            ))}
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
