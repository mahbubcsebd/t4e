"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Rocket,
  Quote,
  Sparkles,
  Inbox,
  Calculator,
  Truck,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

export default function InsignianStoryContent() {
  return (
    <div className="py-6 md:py-10 space-y-8 sm:space-y-12">
      {/* ── 1. Top Card: Masthead Hero (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-xs">
            <div className="max-w-4xl">
              {/* Breadcrumb Eyebrow */}
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-wider uppercase text-muted-foreground">
                <Link
                  href="/customers/"
                  className="hover:text-primary underline underline-offset-4 flex items-center gap-1 font-bold text-primary"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Customers
                </Link>
                <span>/</span>
                <span className="font-semibold text-foreground/80">Enterprise</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                From SaaS subscriptions to software it owns: how Insignian Homes is
                building its own CRM
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
                Insignian Homes is one of the largest home textile exporters from
                India to Europe, supplying complete bedding solutions to
                retailers and brands in more than thirty countries. It is using
                Think4Ever to design and build in-house versions of its SaaS
                applications, starting with CRM, to cut subscription costs, reduce
                SaaS sprawl and own software that fits how it works with its
                customers.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/70">
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X%
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    lower annual CRM cost
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    SaaS subscriptions retired or planned
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X weeks
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    to design and build the CRM
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 2. Main Story + Factsheet Sidebar ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
              {/* Main Story Column */}
              <main className="space-y-10">
                {/* Featured Quote */}
                <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 sm:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base sm:text-lg font-medium text-foreground leading-relaxed italic mb-4">
                    &ldquo;
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      SAMPLE, needs CEO approval: We were paying every year for
                      software that was never really built for how we work with our
                      buyers around the world. With Think4Ever we design the
                      application around our own process first, then build it, and we
                      end up owning it.
                    </mark>
                    &rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold">
                      Mahendra Poddar
                    </strong>
                    CEO, Insignian Homes
                  </figcaption>
                </div>

                {/* The Challenge */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The challenge
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Insignian Homes began when a cotton farmer&rsquo;s grandson set
                    out to reconnect with his family&rsquo;s textile heritage. Like
                    most growing exporters, it runs on a stack of off-the-shelf SaaS
                    applications, and its CRM is one of the largest and most
                    important of them. Over time the costs and compromises added up:
                  </p>
                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Rising subscription costs.
                        </strong>{" "}
                        Per-seat pricing grows with every new salesperson, agent and
                        module, and the CRM was one of the largest lines in the
                        software budget{" "}
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                          confirm or remove
                        </mark>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          SaaS sprawl.
                        </strong>{" "}
                        Each team added its own tools. Customer and sales data ended
                        up spread across several applications, with overlapping
                        features, separate logins and integrations to maintain.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          A generic product for a specific business.
                        </strong>{" "}
                        Selling bedding to retailers in more than thirty countries
                        means long B2B relationships: enquiries, sampling,
                        quotations, seasonal ranges, repeat orders and shipments. A
                        generic CRM forced the team to adapt its process to the
                        software{" "}
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                          confirm the main gaps
                        </mark>
                        .
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Building in-house looked too risky.
                        </strong>{" "}
                        Rebuilding an application like a CRM normally takes a large
                        team and months of design work, and AI coding tools alone
                        produce code without the requirements, data model and
                        architecture a business-critical system needs.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* The Solution */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The solution: design first, then build
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Insignian Homes used Think4Ever to design its CRM
                    comprehensively before building it. The team captured how the
                    business actually works once, as objectives and business rules,
                    and let Think4Ever generate the artifacts of the full software
                    development lifecycle from that shared context.
                  </p>
                </section>

                {/* Starting with Customer Relationships */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Starting with customer relationships
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    The CRM focuses on four workflows that match how an
                    international textile exporter works with its buyers:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Inbox className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Enquiry &amp; sampling
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Buyers request new fabrics, weaves, finishes and packaging.
                        Samples are tracked from laboratory dip to buyer sign-off.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Quotation &amp; price breaks
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Quotes calculate yarn, dyeing, weaving and freight costs
                        across order volumes, currencies and Incoterms.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Truck className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Order tracking &amp; shipments
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Production milestones (spinning, weaving, dyeing, stitching,
                        packing) mapped to vessel bookings and container dispatches.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Buyer-specific rules
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Seasonal range calendars, compliance standards (OEKO-TEX,
                        GOTS, Sedex) and buyer-specific packaging guidelines
                        enforced automatically.
                      </p>
                    </div>
                  </div>
                </section>

                {/* How Insignian Homes Builds (Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    How Insignian Homes builds
                  </h2>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Stage</th>
                          <th className="py-3 px-4">What Think4Ever delivered</th>
                          <th className="py-3 px-4">Result for the business</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            1. Business process
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Intent &amp; rules
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Merchandisers and sales leads review and approve the
                            four workflows and their validation rules.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            2. Living Blueprint
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            SDLC artifacts
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Think4Ever generates screens, user journeys, relational
                            data model, security roles and API specifications.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            3. Generated application
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Working CRM
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Frontend and backend code is generated from the approved
                            design, with audit trails and role-based permissions.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            4. Incremental adoption
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Migration
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            The sales team pilots the new CRM alongside the old
                            SaaS tool, migrating customer accounts domain by domain.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Results Table */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Results
                  </h2>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Value area</th>
                          <th className="py-3 px-4">Measure</th>
                          <th className="py-3 px-4">Result</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Ownership
                          </td>
                          <td className="py-3 px-4">Application and data</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              100% owned; runs on Insignian Homes infrastructure
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Fit
                          </td>
                          <td className="py-3 px-4">Workflow alignment</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            Built around textile export workflows, not generic B2B
                            sales
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Cost
                          </td>
                          <td className="py-3 px-4">Ongoing software cost</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X% lower than annual per-seat SaaS renewals
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Extensibility
                          </td>
                          <td className="py-3 px-4">New features and integrations</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            Added in days by updating the Blueprint, without agency
                            fees
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Data sovereignty
                          </td>
                          <td className="py-3 px-4">Customer and pricing data</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              Stored in India under full enterprise control; confirm
                            </mark>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why This Matters for Enterprises */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Why this matters for enterprises
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Own your core tools.
                        </strong>{" "}
                        High-margin businesses should not rent generic software that
                        dictates how they serve their customers. Building in-house is
                        now viable.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Fit the software to the business.
                        </strong>{" "}
                        Workflows reflect real operating steps (sampling, lab dips,
                        seasonal ranges), not SaaS defaults.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Cut recurring SaaS costs.
                        </strong>{" "}
                        Once built, the application costs only hosting and
                        maintenance, with no per-seat growth penalties.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          No migration dead-ends.
                        </strong>{" "}
                        The Living Blueprint documents the entire system, so the
                        company is never dependent on individual developers or an
                        agency.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* What's Next */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    What&rsquo;s next
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      e.g. rolling the CRM out to all sales and merchandising teams
                      and moving the next SaaS application in-house.
                    </mark>{" "}
                    Insignian Homes and Think4Ever plan to continue building
                    together.
                  </p>
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      About Insignian Homes
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Insignian Homes is a home textiles manufacturer and exporter
                      based in India, supplying complete bedding solutions to
                      retailers and brands in more than thirty countries. Its
                      socially compliant factory in Bhiwandi, near Mumbai, produces
                      more than 150,000 duvet sets and sheets and 50,000 quilt sets a
                      month. Learn more at insignianhome.com.
                    </p>
                  </div>
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      About Think4Ever
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      Think4Ever is an AI-native SDLC platform that keeps
                      architecture, code and every dependency connected. Its
                      multi-agent design and development platform captures
                      requirements and business rules as approved intent in a Living
                      Blueprint, generates architecture and documentation, and
                      builds working applications from that shared context, in
                      Think4Ever or in the coding agents your team already uses.
                    </p>
                  </div>
                </div>
              </main>

              {/* Sticky Factsheet Sidebar */}
              <aside className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                  <p className="text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-4">
                    At a glance
                  </p>
                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <dt className="text-muted-foreground font-semibold">Company</dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        Insignian Homes, Bhiwandi (Mumbai), India
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Industry</dt>
                      <dd className="text-foreground mt-0.5">
                        Home textiles: bedding manufacturing and export
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Scale</dt>
                      <dd className="text-foreground mt-0.5">
                        Retailers and brands in 30+ countries; a 150,000 sq ft factory
                        producing 150,000+ duvet sets and sheets a month
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Use case</dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        Designing and building an in-house CRM, and other business
                        applications, to replace SaaS subscriptions
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Website</dt>
                      <dd className="text-foreground mt-0.5">
                        <a
                          href="https://insignianhome.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          insignianhome.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Button asChild size="lg" className="w-full">
                      <Link href="https://portal.think4ever.com/#/register">
                        Start free
                      </Link>
                    </Button>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 3. Band Section (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Design it first. Then build it.
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-2xl mb-6">
              Turn your idea or your existing code into a reviewed Living
              Blueprint, and build from it in Think4Ever or the coding tools you
              already use.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="https://portal.think4ever.com/#/register">
                  Start free
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact-us/">Talk to us</Link>
              </Button>
            </div>
          </Container>
        </SectionCard>
      </section>

      {/* ── 4. Related Stories ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-6">
              More customer stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/customers/ey/"
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Building2 className="w-3 h-3" />
                    Consulting
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    EY Caribbean
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    EY&rsquo;s consulting team builds internal apps and client
                    software from one governed Living Blueprint.
                  </p>
                </div>
                <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read the story →
                </span>
              </Link>

              <Link
                href="/customers/yogifi/"
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Rocket className="w-3 h-3" />
                    Startups
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    YogiFi
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
                    A founder with limited resources takes a new idea from
                    requirements to a deployed product.
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
    </div>
  );
}
