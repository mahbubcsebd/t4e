---
title: "How We Built Our Growth Metrics Dashboard with think4ever and Cursor"
description: "Design the system in think4ever, hand a build brief to Cursor and check the result against the design. Here is how we built our internal growth metrics dashboard in two days."
date: "November 17, 2026"
readTime: "8 min read"
category: "Product"
author: "Sunil Kishen"
image: "/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Every internal tool at think4ever starts as a design in think4ever and ends as code written by an AI coding agent. We design the system in think4ever, then hand a build brief to whichever agent fits the job: Codex, Claude or, in this post, Cursor.</p>
<p class="mt-4">Here is one real example: the dashboard our leadership team uses to see how think4ever is growing. It follows the same pattern as our <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a> tutorial, with Cursor writing the code.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg" alt="The finished dashboard: every data source in one place." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The finished dashboard: every data source in one place.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">The problem: our numbers lived in eight places</h2>
<p>Our growth data was spread across eight tools, each measuring a different part of the funnel, with overlapping figures and no easy way to deduplicate them. Leadership wanted one view of how acquisition and conversion were going, and where the biggest friction sat, from the moment someone sees an ad to the moment they create a project.</p>
<p class="mt-4">So we set out to build a single dashboard that:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Tracks new accounts each month and the full funnel, from ad impression to project creation</li>
<li>Shows ad spend by platform and landing page visits by channel</li>
<li>Pulls data from HubSpot, Google Analytics 4, Google Tag Manager, PostHog, Microsoft Clarity, Meta, LinkedIn and Google Ads</li>
<li>Lets only our team sign in, with company single sign-on</li>
</ul>
<p class="mt-4">Inside, each person has one of three roles:</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Role</th><th class="py-3 px-4 font-bold border-b border-gray-200">Who</th><th class="py-3 px-4 font-bold border-b border-gray-200">What they can do</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Admin</td><td class="py-3 px-4">The team that builds the dashboard</td><td class="py-3 px-4">Everything: connect and sync data sources, edit data and prepare the metrics for leadership</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Read</td><td class="py-3 px-4">Leadership and anyone who needs the numbers</td><td class="py-3 px-4">View every metric</td></tr>
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Ads</td><td class="py-3 px-4">The marketing team</td><td class="py-3 px-4">Everything a reader can do, plus the ad loader: upload an ad once and publish it to Meta, LinkedIn and Google Ads</td></tr>
</tbody>
</table>
</div>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 1: Design it in think4ever</h2>
<p>We didn't start in a code editor. We started in think4ever, with Design from intent.</p>
<ol class="list-decimal pl-6 mt-4 space-y-3">
<li><strong>Describe the goal.</strong> We wrote down the metrics we wanted, how to split them into sections, who would use the dashboard and what "done" looks like.</li>
<li><strong>Settle the big decisions first.</strong> think4ever raised the open questions up front: how often data refreshes, which database to use, how to define an active user and how to connect each data source.</li>
<li><strong>Answer the requirements questions.</strong> Over three rounds we pinned down metric definitions, date ranges and access rules. We let the AI decide only where a choice did not matter.</li>
<li><strong>Approve the blueprint.</strong> We reviewed the goals, roles, rules, workflows and technical decisions, then clicked Approve &amp; Build.</li>
<li><strong>Review the screens.</strong> think4ever generated all nine screens, from sign-in to timeline notes. We checked them in Preview Designs and fixed gaps before any code existed.</li>
</ol>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-2.jpg" alt="Requirements: goals, roles and features, agreed before any code." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Requirements: goals, roles and features, agreed before any code.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-3.jpg" alt="The blueprint in think4ever: every screen and block of the dashboard." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The blueprint in think4ever: every screen and block of the dashboard.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-4.jpg" alt="The nine generated screens, ready to review." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The nine generated screens, ready to review.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-5.jpg" alt="The Data Sources screen as designed in think4ever." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The Data Sources screen as designed in think4ever.</figcaption>
</figure>
<p class="mt-4">The result was a single source of truth: every metric defined and every screen agreed. That is what made the next step fast.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 2: Hand the design to Cursor</h2>
<p>With the design approved, we let Cursor write the code. Cursor reads the design straight from think4ever over MCP, so nothing gets lost in a copy-and-paste spec. Our <a href="https://think4ever.com/docs/think_mcp" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Think MCP docs</a> explain how to connect Claude, Codex and Cursor.</p>
<p class="mt-4"><strong>Connect Cursor once.</strong> In the project, open MCP &amp; Tools and create an access token. Add the think4ever server to Cursor's MCP settings, restart Cursor and check that the think4ever tools load. The steps are the same as in our <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a> tutorial.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-6.jpg" alt="think4ever gives you the Cursor setup snippet. Your token is shown only once." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever gives you the Cursor setup snippet. Your token is shown only once.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-7.jpg" alt="think4ever connected in Cursor." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever connected in Cursor.</figcaption>
</figure>
<p class="mt-4"><strong>Copy the build brief.</strong> In UI Designs, click Build UI and copy the brief. It tells the agent to load the concept, technical requirements and screen designs before writing any code.</p>
<p class="mt-4"><strong>Start in an empty folder.</strong> We opened a fresh folder in Cursor, pasted the brief and let Cursor pull the design.</p>
<p class="mt-4">From there, Cursor built a Node.js and Express app with a MySQL database and a plain JavaScript frontend. It wired up the data sources and built each screen against the approved designs. The build runs in Cursor, so it uses no think4ever credits.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-8.jpg" alt="Cursor building the dashboard from the think4ever design." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Cursor building the dashboard from the think4ever design.</figcaption>
</figure>
<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">Bringing the code back</h3>
<p>To keep the design and the code in step, we connected the project to GitHub through think4ever's version control. One push from Cursor and one pull in think4ever, and think4ever read the code and mapped what Cursor had built.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-9.jpg" alt="The dashboard's code on GitHub." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The dashboard's code on GitHub.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-10.jpg" alt="think4ever reads the code back and maps it to the design." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever reads the code back and maps it to the design.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-11.jpg" alt="How the pieces fit: every source lands in one database before the dashboard reads it." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">How the pieces fit: every source lands in one database before the dashboard reads it.</figcaption>
</figure>
<p class="mt-4">think4ever also checked the code against our own build rules. It flagged that the API routes all sit in one server file instead of separate folders. That is fine for an internal tool for now, and our production hardening review will tell us whether to split it before it grows.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 3: Check it against the design</h2>
<p>Because the design lives in think4ever, "is it done?" has a clear answer. We asked Cursor to check its work against the blueprint:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Every screen in the designs has a page</li>
<li>The metric definitions in the code match the ones we agreed</li>
<li>Roles are enforced: readers cannot edit data or sync sources</li>
<li>Every chart has empty, loading and error states</li>
<li>The tests and the build pass from a clean checkout</li>
</ul>
<p class="mt-4">When the code drifted, we didn't argue with the agent. We told it to reload the relevant screens and rules from think4ever and fix the gap. When we wanted a change, we made it in the design first, then had Cursor rebuild from the updated brief.</p>
<p class="mt-4">From the first prompt to a dashboard the team uses every day took two days, including the changes team members made in parallel.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">One design, many coding agents</h2>
<p>The dashboard is not a one-off. Every internal tool we build follows the same loop: design in think4ever, build with whichever AI coding agent fits the job, and check the result against the design.</p>
<p class="mt-4">That lets us pick the agent per project without changing how we work: Cursor when we want to stay in the editor, Codex for long autonomous runs, and Claude to review a tool and find gaps in its logic. To use Claude Code as the builder instead, see our <a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Claude</a> tutorial. The design, the rules and the checklist stay the same.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-12.jpg" alt="One design in think4ever feeds every coding agent." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">One design in think4ever feeds every coding agent.</figcaption>
</figure>
<p class="mt-4">Other tools we have built this way include a tool for our early builders program and Research Hub, which tracks what we have done and what is still missing.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What we learned</h2>
<p><strong>Define metrics before code.</strong> Most dashboard bugs are definition bugs. Settling what counts as an active user during requirements saved us rework.</p>
<p class="mt-4"><strong>Change the design, not the prompt.</strong> When something needs to change, update it in think4ever and rebuild. The design stays the source of truth.</p>
<p class="mt-4"><strong>Keep the brief fresh.</strong> Copy it again whenever you change the design or switch projects, or the agent works from an old version.</p>
<p class="mt-4"><strong>Treat tokens like passwords.</strong> Keep them out of code and screenshots, and revoke any that leak.</p>
<p class="mt-4"><strong>Use each tool for what it does best.</strong> There are more AI agents than ever. The work is knowing which one fits each job and connecting them. think4ever makes that connection easy and keeps the context from getting lost.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Try it yourself</h2>
<p>Pick one internal tool you have been putting off. Design it in think4ever, connect your favorite coding agent and let it build from the brief. You can <a href="https://portal.think4ever.com/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">start free</a>, with 500 credits.</p>
<p class="mt-4">Want the step-by-step setup? See our tutorial, <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>. The same steps work for Cursor.</p>
</section>
</div>
