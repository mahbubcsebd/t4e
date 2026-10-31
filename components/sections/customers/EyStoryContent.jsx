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
  Quote,
  Sparkles,
  Layers,
  Sliders,
  Rocket,
  Factory,
} from "lucide-react";

export default function EyStoryContent() {
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
                <span className="font-semibold text-foreground/80">Consulting</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                How EY builds coherent applications faster, for itself and for its
                clients
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
                EY Caribbean&rsquo;s Technology Consulting practice uses Think4Ever
                to build its own internal applications and to deliver client
                software projects, with business intent, policies and acceptance
                criteria carried from the first conversation to released code.
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
                    faster to first accepted release
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    applications delivered in{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1 py-0.5 rounded font-mono border border-[#E6D885]">
                      Y
                    </mark>{" "}
                    months
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X%
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    less rework after review
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

                {/* The Challenge */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The challenge
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Consulting firms are being asked to deliver software faster than
                    ever, and AI coding tools have made writing code dramatically
                    quicker. But speed at the keyboard has not solved the harder
                    problem: making sure what gets built still matches what the
                    business actually needs.
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    EY faced this on two fronts. Internally, teams needed
                    applications to support{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      internal need, e.g. engagement management, knowledge
                      workflows, reporting
                    </mark>
                    . On client engagements, EY delivery teams regularly inherit
                    existing systems whose architecture, dependencies and business
                    rules are only partly documented, and where critical knowledge
                    sits with a handful of people.
                  </p>
                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Context lost in handoffs.
                        </strong>{" "}
                        Business objectives, policies and acceptance criteria were
                        captured in slides and workshops, then drifted as work moved
                        from advisory to delivery teams.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Slow discovery.
                        </strong>{" "}
                        Understanding an existing system before changing it took{" "}
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                          X weeks
                        </mark>{" "}
                        per engagement and had to be repeated whenever teams
                        changed.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Rework and misalignment.
                        </strong>{" "}
                        Faster AI-assisted coding increased the risk of shipping
                        changes that were technically correct but misaligned with
                        approved intent.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Limited capability transfer.
                        </strong>{" "}
                        Clients increasingly want to keep the capability after the
                        engagement ends, not just receive a delivered system.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* Why EY chose Think4Ever (Trio) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Why EY chose Think4Ever
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    EY selected Think4Ever because it treats governed business
                    context, not just code, as the foundation of delivery. The
                    platform gives teams three things that matter in consulting
                    work:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Layers className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Clarity
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Existing code, workflows, objectives, policies and
                        constraints are visible in one reviewable Living Blueprint
                        that clients and EY teams review together.
                      </p>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Coherence
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Applications and changes are built from approved intent, so
                        implementation stays aligned as teams and AI tools move
                        faster.
                      </p>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Control
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        People stay in charge of decisions, approvals and
                        governance, and choose which tools or agents execute the
                        work, inside Think4Ever or in the coding agents teams already
                        use.
                      </p>
                    </div>
                  </div>
                </section>

                {/* The Approach: One Governed Loop (Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The approach: one governed loop
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    EY teams apply the same four-step method to internal builds and to
                    client projects:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Step</th>
                          <th className="py-3 px-4">Stage</th>
                          <th className="py-3 px-4">What EY teams do</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            1. Understand
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Code → Design
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Make the existing architecture, workflows, dependencies
                            and known rules reviewable, working with the people who
                            know them.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            2. Encode
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Business context
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Capture objectives, policies, guardrails, decisions and
                            acceptance criteria as approved intent.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            3. Build
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Design → Code
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Create applications and changes in Think4Ever or
                            supported coding agents, using the same reviewed context.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            4. Govern
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Release and learn
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Test, approve and release; review coherence against
                            intent and keep the Living Blueprint current.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed italic">
                    The speed does not come from skipping understanding. It comes
                    from encoding the important business and system context once,
                    reviewing it, and reusing it across every application and change.
                  </p>
                </section>

                {/* Internal Applications at EY */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Internal applications at EY
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    EY first applied Think4Ever to its own needs, building{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      name and describe the internal application(s), scope, team
                      size and timeline
                    </mark>
                    . Starting internally let EY prove the method on its own systems
                    before bringing it to clients, and gave practitioners hands-on
                    experience with the platform.
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      Result, e.g. The first internal application moved from
                      approved objectives to production in X weeks, compared with a
                      typical Y weeks.
                    </mark>
                  </p>
                </section>

                {/* Client Software Delivery (Timeline) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Client software delivery
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    EY now uses Think4Ever on client engagements{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      client industries or project types; clients may stay anonymous
                    </mark>
                    . Engagements follow a structured rhythm designed to deliver
                    working software early and leave the client with a lasting
                    capability:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <span className="text-xs font-mono font-bold text-primary block mb-1">
                        Days 1–30
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Encode context
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Validated Blueprint, objectives, policies and guardrails; a
                        prioritized outcome backlog; a working thin slice.
                      </p>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <span className="text-xs font-mono font-bold text-primary block mb-1">
                        Days 31–90
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Prove delivery
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        First accepted application, module or major change released,
                        proving the closed-loop method end to end.
                      </p>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <span className="text-xs font-mono font-bold text-primary block mb-1">
                        Quarters 2–3
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Scale outcomes
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Applications, workflows and modernization increments
                        delivered at an agreed cadence from one governed backlog.
                      </p>
                    </div>

                    <div className="bg-muted/30 border border-border rounded-2xl p-5 shadow-xs">
                      <span className="text-xs font-mono font-bold text-primary block mb-1">
                        Quarter 4
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Transfer and expand
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Client team trained, governance embedded, value validated,
                        next domains identified.
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed pt-1">
                    An increment counts as done only when it has an approved
                    objective and acceptance criteria, tested code with deployment
                    or handoff, an updated Blueprint, and a reported outcome
                    measure. After the initial ramp, EY teams target{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      a production-ready increment every 4–6 weeks; confirm cadence
                    </mark>
                    .
                  </p>
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
                            Speed
                          </td>
                          <td className="py-3 px-4">
                            Time to first accepted release
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X weeks, vs. Y weeks previously
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Capacity
                          </td>
                          <td className="py-3 px-4">
                            Discovery and documentation effort
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X% reduction
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Rework
                          </td>
                          <td className="py-3 px-4">Changes reworked after review</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X% fewer
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Throughput
                          </td>
                          <td className="py-3 px-4">
                            Increments or applications delivered
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X in Y months
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Client outcomes
                          </td>
                          <td className="py-3 px-4">
                            Business value delivered for clients
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              e.g. time to market improved
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Capability transfer
                          </td>
                          <td className="py-3 px-4">Client team members trained</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X practitioners
                            </mark>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why This Matters for Consulting Firms */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Why this matters for consulting firms
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Sell outcomes, not hours.
                        </strong>{" "}
                        Clients buy clarity, coherence and control, not just code. A
                        reviewable Living Blueprint makes that value visible to
                        sponsors from the first month.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          A repeatable delivery method.
                        </strong>{" "}
                        The same method works across internal builds, new
                        applications and modernization, so every engagement
                        strengthens the practice.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Capability transfer as a differentiator.
                        </strong>{" "}
                        Clients finish with working software, governed context, a
                        trained team and an expansion roadmap.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Works with existing tools.
                        </strong>{" "}
                        Teams keep the AI coding tools they already rely on, with
                        approved context guiding the work and people keeping
                        approval.
                      </span>
                    </li>
                  </ul>

                  {/* Quote from Sunil Kishen */}
                  <div className="bg-muted/40 border border-border/80 rounded-2xl p-6 mt-6">
                    <blockquote className="text-sm sm:text-base font-medium text-foreground leading-relaxed italic mb-3">
                      &ldquo;EY has shown what happens when a consulting team puts
                      governed business context at the center of delivery.
                      They&rsquo;re building faster and staying aligned with what
                      their clients actually approved.&rdquo;
                    </blockquote>
                    <figcaption className="text-xs text-foreground/70">
                      <strong className="text-foreground block font-bold">
                        Sunil Kishen
                      </strong>
                      Chief Product Officer, Think4Ever
                    </figcaption>
                  </div>
                </section>

                {/* What's Next */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    What&rsquo;s next
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      EY&rsquo;s plans, e.g. expanding to more practices, standing up
                      a center of excellence, or offering Think4Ever-based delivery
                      to more clients.
                    </mark>
                  </p>
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/30 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      About EY
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                        EY-approved boilerplate, supplied by EY.
                      </mark>
                    </p>
                  </div>
                  <div className="bg-muted/30 border border-border rounded-xl p-5">
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
                <div className="bg-muted/20 border border-border rounded-2xl p-6 shadow-xs">
                  <p className="text-xs font-mono font-bold tracking-wider uppercase text-muted-foreground mb-4">
                    At a glance
                  </p>
                  <dl className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <dt className="text-muted-foreground font-semibold">Customer</dt>
                      <dd className="text-foreground font-bold mt-0.5">
                        EY Caribbean, Technology Consulting{" "}
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1 rounded text-xs border border-[#E6D885]">
                          confirm entity name
                        </mark>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Industry</dt>
                      <dd className="text-foreground mt-0.5">
                        Professional services and consulting
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Region</dt>
                      <dd className="text-foreground mt-0.5">Caribbean</dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Use cases</dt>
                      <dd className="text-foreground mt-0.5">
                        Internal application development; client software delivery
                        and modernization
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">
                        Think4Ever used
                      </dt>
                      <dd className="text-foreground font-semibold text-primary mt-0.5">
                        Living Blueprint, Code → Design, Design → Code
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

      {/* ── 3. Partner Pilot Band (White Background) ── */}
      <section>
        <SectionCard>
          <Container className="bg-white border border-border/80 rounded-2xl p-6 sm:p-10 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
              For consulting firms and systems integrators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
              Deliver governed software for your clients
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed max-w-2xl mb-6">
              EY is the first consulting firm to build its delivery practice on
              Think4Ever. If your firm delivers software for clients, we will
              help you run a first engagement with the same method.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="/contact-us/">
                  Talk to us about a partner pilot
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://portal.think4ever.com/#/register">
                  Start free
                </Link>
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

              <Link
                href="/customers/insignian-homes/"
                className="group bg-muted/20 border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 mb-3">
                    <Factory className="w-3 h-3" />
                    Enterprise
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Insignian Homes
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
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
    </div>
  );
}
