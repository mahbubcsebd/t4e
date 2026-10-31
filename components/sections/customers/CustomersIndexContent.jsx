"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import {
  ArrowRight,
  Building2,
  Rocket,
  Factory,
  Quote,
} from "lucide-react";

export default function CustomersIndexContent() {
  return (
    <div className="py-6 md:py-10 space-y-8 sm:space-y-12">
      {/* ── 1. Top Card: Masthead Hero (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="max-w-4xl mx-auto text-center">
              <Eyebrow className="mb-4">
                Customers
              </Eyebrow>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                Teams that <span className="text-primary">design</span> before they build
              </h1>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
                See how a global consulting firm, a founder and an enterprise
                exporter use Think4Ever to turn approved intent into applications
                they can trust and own.
              </p>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Featured Story (EY) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              {/* Left Column: Lead */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
                  Featured · Consulting
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-snug mb-4">
                  How EY builds coherent applications faster, for itself and for
                  its clients
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6">
                  EY Caribbean&rsquo;s Technology Consulting practice uses
                  Think4Ever to build its own internal applications and to deliver
                  client software projects, with business intent, policies and
                  acceptance criteria carried from the first conversation to
                  released code.
                </p>
                <Button asChild size="lg">
                  <Link href="/customers/ey/">
                    Read the EY story
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Right Column: Featured Quote */}
              <div className="bg-muted/50 border border-border/80 rounded-2xl p-6 sm:p-8 relative">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                  &ldquo;Creating software is becoming easier. Governing it is
                  becoming harder. Think4Ever makes the entire journey
                  transparent, traceable, and auditable.&rdquo;
                </blockquote>
                <figcaption className="text-xs sm:text-sm text-foreground/70">
                  <strong className="text-foreground block font-bold">
                    Vernon A. Huerta
                  </strong>
                  Partner, EY Caribbean Technology Consulting Lead
                </figcaption>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 3. Find a Story Like Yours (Grid) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="mb-8 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                Explore stories
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Find a story like yours
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Consulting */}
              <Link
                href="/customers/ey/"
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <Building2 className="w-3 h-3" />
                      Consulting
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    You deliver software for clients and need it to match what they
                    approved.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    EY Caribbean
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    EY&rsquo;s consulting team builds internal apps and client
                    software from one governed Living Blueprint.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read the story →
                </span>
              </Link>

              {/* Card 2: Startups */}
              <Link
                href="/customers/yogifi/"
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <Rocket className="w-3 h-3" />
                      Startups
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    You&rsquo;re a founder with a new idea and a small team.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    YogiFi
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    A founder with limited resources takes a new idea from
                    requirements to a deployed product.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read the story →
                </span>
              </Link>

              {/* Card 3: Enterprise */}
              <Link
                href="/customers/insignian-homes/"
                className="group flex flex-col justify-between bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      <Factory className="w-3 h-3" />
                      Enterprise
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    You&rsquo;re paying for SaaS tools that don&rsquo;t fit how your
                    business works.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Insignian Homes
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    A global exporter replaces per-seat SaaS with applications it
                    designs and owns, starting with CRM.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read the story →
                </span>
              </Link>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. In Their Words (Quotes Section) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="mb-8 text-center max-w-xl mx-auto">
              <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground block mb-2">
                In their words
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                What leaders say about building with Think4Ever
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quote 1: Vernon Huerta */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed italic mb-4">
                  &ldquo;Creating software is becoming easier. Governing it is
                  becoming harder. Think4Ever makes the entire journey
                  transparent, traceable, and auditable.&rdquo;
                </blockquote>
                <figcaption className="text-xs text-foreground/70 border-t border-border pt-3">
                  <strong className="text-foreground block font-bold text-sm">
                    Vernon A. Huerta
                  </strong>
                  Partner, EY Caribbean Technology Consulting Lead
                </figcaption>
              </div>

              {/* Quote 2: Muralidhar Somisetty */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed italic mb-4">
                  &ldquo;Think4Ever has been invaluable in helping us
                  comprehensively design our YogiFi Smart Yoga teacher portal
                  before we coded it and tested it.&rdquo;
                </blockquote>
                <figcaption className="text-xs text-foreground/70 border-t border-border pt-3">
                  <strong className="text-foreground block font-bold text-sm">
                    Muralidhar Somisetty
                  </strong>
                  Founder and CEO, YogiFi
                </figcaption>
              </div>

              {/* Quote 3: Mahendra Poddar */}
              <div className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col justify-between">
                <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed italic mb-4">
                  &ldquo;
                  <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                    SAMPLE, needs CEO approval: We were paying every year for
                    software that was never really built for how we work with our
                    buyers around the world. With Think4Ever we design the
                    application around our own process first, then build it, and
                    we end up owning it.
                  </mark>
                  &rdquo;
                </blockquote>
                <figcaption className="text-xs text-foreground/70 border-t border-border pt-3">
                  <strong className="text-foreground block font-bold text-sm">
                    Mahendra Poddar
                  </strong>
                  CEO, Insignian Homes
                </figcaption>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 5. Last Card: Band & Next Story (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center pb-8 border-b border-border/70 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  For consulting firms and systems integrators
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                  EY was first. Your firm can be next.
                </h2>
                <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-xl mb-6">
                  Consulting teams use Think4Ever to deliver client software from
                  one governed Living Blueprint, and to leave each client with
                  working software, governed context and a trained team.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact-us/">Talk to us about a partner pilot</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/customers/ey/">Read the EY story</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8 text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Write the next story with us
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-5">
                  Start with your idea or your existing codebase. If you are already
                  building with Think4Ever and want to share your results, we would
                  like to hear from you.
                </p>
                <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                  <Button asChild size="default">
                    <Link href="https://portal.think4ever.com/#/register">
                      Start free
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="default">
                    <Link href="/contact-us/">Share your story</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>
    </div>
  );
}
