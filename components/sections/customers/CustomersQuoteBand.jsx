"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { ArrowRight, Quote } from "lucide-react";

export default function CustomersQuoteBand() {
  return (
    <section className="py-6 md:py-10">
      <SectionCard>
        <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            {/* Left Column: Heading and Lead */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
                Customer stories
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
                Teams that <span className="text-primary">design</span> before
                they build
              </h2>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mb-6 max-w-xl">
                See how EY Caribbean, YogiFi and Insignian Homes use Think4Ever
                to turn approved intent into applications they can trust and own.
              </p>
              <Button asChild size="lg">
                <Link href="/customers/">
                  Read customer stories
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Right Column: EY Quote by Vernon A. Huerta */}
            <div className="bg-muted/60 border border-border/80 rounded-2xl p-6 sm:p-8 relative">
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              <blockquote className="text-sm sm:text-base md:text-lg font-medium text-foreground leading-relaxed italic mb-4">
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
  );
}
