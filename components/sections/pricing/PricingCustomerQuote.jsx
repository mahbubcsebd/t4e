"use client";

import React from "react";
import Link from "next/link";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import { Quote, ArrowRight } from "lucide-react";

export default function PricingCustomerQuote() {
  return (
    <section className="py-6 md:py-8">
      <SectionCard>
        <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-8 h-8 text-primary/30 mx-auto mb-3" />
            <blockquote className="text-base sm:text-lg md:text-xl font-medium text-foreground leading-relaxed italic mb-4">
              &ldquo;Creating software is becoming easier. Governing it is becoming harder. Think4Ever makes the entire journey transparent, traceable, and auditable.&rdquo;
            </blockquote>
            <figcaption className="text-xs sm:text-sm text-foreground/75 mb-4">
              <strong className="text-foreground font-bold">Vernon A. Huerta</strong>, Partner, EY Caribbean Technology Consulting Lead
            </figcaption>
            <div>
              <Link
                href="/customers/ey/"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:underline"
              >
                Read how EY builds coherent applications faster with Think4Ever
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </SectionCard>
    </section>
  );
}
