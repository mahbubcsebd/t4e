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
  Factory,
  Quote,
  Sparkles,
  Layers,
  Palette,
  Code2,
  Database,
  Server,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function YogiFiStoryContent() {
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
                <span className="font-semibold text-foreground/80">Startups</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-5">
                From idea to real product: how YogiFi designed and built its Smart
                Yoga teacher portal
              </h1>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mb-8">
                YogiFi makes what it calls the world&rsquo;s first smart yoga mat
                that detects your posture and gives real-time feedback while you
                practice. With a new idea and limited resources, its founder used
                Think4Ever to design the YogiFi Smart Yoga teacher portal end to
                end before coding and testing it, and to carry it from requirements
                through to deployment.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/70">
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X weeks
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    from idea to a working teacher portal
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      6
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    SDLC stages generated, from requirements to deployment
                  </span>
                </div>
                <div className="bg-muted/40 border border-border rounded-xl p-4">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-mono font-bold border border-[#E6D885]">
                      X
                    </mark>
                  </span>
                  <span className="text-xs text-foreground/70 leading-snug">
                    teachers or studios piloting the portal
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
                    &ldquo;Think4Ever has been a magical wand that helps turn an
                    idea into a real product, to accelerate and validate its real
                    impact in the field. I have experienced it myself using the
                    platform, where it actually created multiple SDLC artifacts,
                    from requirements to design to database schema design to code to
                    deployment. This is the part I liked most compared to just
                    generative AI coding tools, and it delivers much more value to
                    everyone in the organization, from product managers to product
                    designers to engineers.&rdquo;
                  </blockquote>
                  <figcaption className="text-xs sm:text-sm text-foreground/70">
                    <strong className="text-foreground block font-bold">
                      Muralidhar Somisetty
                    </strong>
                    Founder and CEO, YogiFi
                  </figcaption>
                </div>

                {/* The Challenge */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The challenge
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Every founder with a new idea faces the same problem: the only
                    way to find out whether the idea works is to put a real product
                    in front of real users, and building that product usually takes a
                    team the company does not have yet. For YogiFi, that meant:
                  </p>
                  <ul className="space-y-3 pt-2 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          A new idea that has to prove itself in the field.
                        </strong>{" "}
                        A smart yoga mat only shows its value when people practice on
                        it. YogiFi needed working software quickly to validate its
                        real impact, not just a prototype or a pitch.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Limited resources.
                        </strong>{" "}
                        An early-stage startup cannot staff separate product
                        management, design and engineering functions, yet the
                        product still needs all three.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Getting the design right before writing code.
                        </strong>{" "}
                        The teacher portal extends YogiFi from home practice to yoga
                        teachers{" "}
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                          what the portal does, e.g. teachers manage classes and see
                          students&rsquo; mat feedback
                        </mark>
                        . Mistakes in requirements, flows or the data model are
                        expensive to undo once code is written.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Code alone is not a product.
                        </strong>{" "}
                        AI coding tools produce code quickly, but they skip the
                        requirements, design and data model a growing product
                        depends on.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* The Solution: Design First, Then Build (Table) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    The solution: design first, then build
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Instead of prompting an AI coding tool one change at a time, the
                    founder captured the idea once and let Think4Ever generate the
                    artifacts of the full software development lifecycle from that
                    shared context. Each step builds on an approved earlier one
                    instead of being reinvented by hand:
                  </p>

                  <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted/70 border-b border-border text-foreground font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Step</th>
                          <th className="py-3 px-4">What Think4Ever produced</th>
                          <th className="py-3 px-4">How it helped</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/70 text-foreground/80 text-xs sm:text-sm">
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            1. Requirements
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Objectives and business rules
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            The idea for the teacher portal is captured as
                            objectives, business rules and acceptance criteria, then
                            reviewed and approved.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            2. Architecture
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Component and integration view
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            The system architecture is generated, showing the
                            portal, its data stores and its connections to
                            YogiFi&rsquo;s existing cloud and mat APIs.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            3. UI &amp; flows
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Screen maps and user journeys
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Teacher workflows (creating classes, assigning students,
                            reviewing mat feedback) are generated as reviewable
                            screens and navigation flows.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            4. Data model
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Entities, fields and relationships
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            A relational data model is created for teachers,
                            classes, students and mat sessions, ready for database
                            migration.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            5. Code generation
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Working frontend and backend
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            Working code is generated from the approved design, in
                            Think4Ever or in coding agents the team chooses.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground whitespace-nowrap">
                            6. Deployment
                          </td>
                          <td className="py-3 px-4 text-primary font-semibold whitespace-nowrap">
                            Deployed application
                          </td>
                          <td className="py-3 px-4 leading-relaxed">
                            The application is packaged, tested against the
                            acceptance criteria, and deployed to a staging or
                            production environment.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Value for Everyone on the Team (Trio) */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Value for everyone on the team
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    Because each artifact is generated and kept current, the work is
                    useful well beyond engineering. As YogiFi grows its team, each
                    role starts from something concrete:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <FileText className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Product managers
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Approved objectives, business rules and acceptance criteria
                        that define what the portal must do.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Palette className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Product designers
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        User flows and UI designs that can be reviewed and changed
                        before development starts.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-1">
                        Engineers
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                        Architecture, database schema and working code built from the
                        approved design, plus a clear view of how a change affects
                        the rest of the system.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Validating Impact Faster */}
                <section className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Validating impact faster
                  </h2>
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    With a working, deployed portal, YogiFi can put its product in
                    front of teachers and students and learn from real use{" "}
                    <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded font-medium border border-[#E6D885]">
                      pilot studios, teachers or classes
                    </mark>
                    . Feedback flows back into the Blueprint, and the next version is
                    built from the updated design.
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
                            Time from idea to working teacher portal
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X weeks, vs. Y weeks expected
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Completeness
                          </td>
                          <td className="py-3 px-4">SDLC artifacts generated</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            Requirements, flows, UI designs, database schema, code
                            and deployment{" "}
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              confirm
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Capacity
                          </td>
                          <td className="py-3 px-4">
                            Team needed to build and launch
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              e.g. founder plus X engineers
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Cost
                          </td>
                          <td className="py-3 px-4">
                            Development cost vs. alternatives
                          </td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              e.g. X% lower than an agency estimate
                            </mark>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-bold text-foreground">
                            Field validation
                          </td>
                          <td className="py-3 px-4">Users of the portal</td>
                          <td className="py-3 px-4 font-semibold text-primary">
                            <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded border border-[#E6D885]">
                              X teachers, studios or students
                            </mark>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Why This Matters for Founders */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Why this matters for founders
                  </h2>
                  <ul className="space-y-3 text-sm sm:text-base text-foreground/80">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          From idea to real product.
                        </strong>{" "}
                        A founder can turn a new idea into deployed software and
                        start validating it in the field without first building a
                        full team.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          Design before code.
                        </strong>{" "}
                        Requirements, flows and the data model are reviewed before
                        development starts, which avoids expensive rework later.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          More than code.
                        </strong>{" "}
                        Unlike AI coding tools alone, Think4Ever produces the full
                        set of SDLC artifacts, so the product stays documented and
                        understandable as it grows.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>
                        <strong className="text-foreground font-bold">
                          No lock-in.
                        </strong>{" "}
                        Everything the startup builds can be exported, so the
                        company owns its product and its design.
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
                      e.g. expanding the teacher portal, launching a student app, or
                      scaling from pilots to paying studios.
                    </mark>{" "}
                    YogiFi and Think4Ever plan to continue building together.
                  </p>
                </section>

                {/* About Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
                  <div className="bg-muted/40 border border-border rounded-xl p-5">
                    <h3 className="text-sm font-bold text-foreground mb-1.5">
                      About YogiFi
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                      YogiFi makes an AI-powered smart yoga mat. Built-in pressure
                      sensors detect posture and sync with the YogiFi app for
                      AI-guided sessions and real-time posture correction. Learn
                      more at us.yogifismart.com.
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
                        YogiFi (Smart Yoga USA LLC)
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Website</dt>
                      <dd className="text-foreground mt-0.5">
                        <a
                          href="https://us.yogifismart.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        >
                          us.yogifismart.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Stage</dt>
                      <dd className="text-foreground mt-0.5">
                        <mark className="bg-[#FFF2A8] text-[#3D3300] px-1.5 py-0.5 rounded text-xs border border-[#E6D885]">
                          Early-stage startup; confirm stage and funding
                        </mark>
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Industry</dt>
                      <dd className="text-foreground mt-0.5">
                        Connected fitness: an AI-powered smart yoga mat with
                        real-time posture feedback
                      </dd>
                    </div>
                    <div className="border-t border-border/60 pt-3">
                      <dt className="text-muted-foreground font-semibold">Use case</dt>
                      <dd className="text-foreground mt-0.5 font-medium">
                        Designing and building the Smart Yoga teacher portal, from
                        requirements to deployment
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
