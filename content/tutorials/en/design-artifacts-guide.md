---
title: "Putting the Blueprint to Work"
description: "How to use the design artifacts Think4Ever generates, by SDLC phase and by role: requirements, flows, rules, data, architecture, UI designs and readiness reports, with real examples."
category: "Design & Build"
readTime: "8 min read"
hideThumbnail: true
image: "/images/tutorials/design-artifacts-guide/concept-ready.jpg"
date: "2026-03-20"
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
<p>Every Think4Ever project produces a Living Blueprint: requirements, flows, rules, data, architecture and screens, all connected and all reviewable. <strong>This guide is about what you do with those artifacts once you have them</strong>: which ones matter in each phase of delivery, who should open which one, and what it saves the team.</p>

<div class="my-6 p-4 rounded-xl bg-[#1D63E0]/5 border border-[#1D63E0]/15 flex flex-wrap gap-2 items-center text-sm text-gray-700">
<span class="font-semibold text-gray-900">Delivery path:</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Business intent</span>
<span class="text-gray-400">or</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Existing code</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-[#FF7A1A] text-white font-semibold text-xs shadow-sm">Living Blueprint</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Build with any agent</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Verify &amp; harden</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Change safely</span>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="why">
<h2 class="text-2xl font-bold text-gray-900 mb-4">AI made code cheap. The blueprint keeps it right.</h2>

<p>Coding agents work from whatever is in their session. People each see their own slice of the system. Think4Ever's design artifacts are the shared record that both read from, so the decision made in a requirements review is the same one an agent builds against three weeks later.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Clarity</h3>
<p class="text-sm text-gray-600">Everyone sees the same system, in the view that fits their role: a flow for the analyst, an ERD for the engineer, a readiness score for the leader.</p>
</div>
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Coherence</h3>
<p class="text-sm text-gray-600">Every agent and every developer builds from the same reviewed spec, pulled over MCP into Claude Code, Cursor, Codex or Think4Ever's own agents.</p>
</div>
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Control</h3>
<p class="text-sm text-gray-600">Changes are checked against approved rules and flows first, so a conflict shows up in review instead of in production.</p>
</div>
</div>

<p class="mt-4">The same artifacts come out whether you start from a sentence of business intent (<a href="/docs/create_project/" class="text-blue-600 hover:underline">Design from intent</a>) or from a repository (<a href="/docs/analyze_code/" class="text-blue-600 hover:underline">Analyze existing code</a>). That is what makes them useful across the whole lifecycle: new builds and inherited systems end up described the same way.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="catalog">
<h2 class="text-2xl font-bold text-gray-900 mb-4">What's in the blueprint, and the question each one answers</h2>

<p>Thirteen artifacts in five families. Each card names the question it settles, how to use it, and who gets the most from it.</p>

<div class="space-y-8 mt-6">

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">1. Intent <span class="text-sm font-normal text-gray-500 ml-2">What are we building, and for whom?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Requirements</h4>
<span class="text-xs text-gray-500">tab &middot; Requirements</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;Did we agree on the goal before anyone wrote code?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Goals, user roles, epics, features and user stories, generated by ThinkBrain from your objective and answers, then approved by you.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Untick scope you don't want, lock the MVP, and give every later artifact a single source it is derived from.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Leader</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Concept map</h4>
<span class="text-xs text-gray-500">tab &middot; Concept</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What are the big pieces, and how do they connect?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Concept blocks for every screen and building block, grouped by module, each with a plain-language summary, fields, actions, connections and roadmap phase.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Check the design is functionally complete, map dependencies, and onboard someone without reading code.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Developer</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business manager</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Functional architecture</h4>
<span class="text-xs text-gray-500">tab &middot; Functional Architecture</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What does this application actually do, end to end?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> All screens and flows mapped end to end as one application concept.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Walk stakeholders through the whole product in one view, or understand an inherited app without opening the code.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Partner</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">2. Behavior <span class="text-sm font-normal text-gray-500 ml-2">How should it work, and what must always be true?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Business flows</h4>
<span class="text-xs text-gray-500">tab &middot; Business Flows</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What happens, step by step, when a user does this?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Each process from trigger to outcome: actors, numbered steps, decisions, success and failure paths, and data touched.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Find UX gaps before build, and derive test scenarios straight from the success and failure paths.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Developer</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Business rules</h4>
<span class="text-xs text-gray-500">tab &middot; Business Rules</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What logic governs the business, independent of the code?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Plain language and short expression, rule type, severity, roadmap phase, linked objects/flows, and violation behavior.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Review with the business owner, catch logic nobody wrote down, and check proposed changes against approved intent.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Security</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Developer</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Roles &amp; permissions</h4>
<span class="text-xs text-gray-500">tab &middot; Roles &amp; Permissions</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;Who can see and do what?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> User types and allowed actions, forming the access control list for frontend and APIs.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Settle access before code exists, then test and audit against it.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Security</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">3. Structure <span class="text-sm font-normal text-gray-500 ml-2">What is it made of, and where does data go?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Data objects</h4>
<span class="text-xs text-gray-500">tab &middot; Data Objects</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What are the nouns of this system?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Entities with fields, types and keys, and relationships (e.g. a pet belongs to a category; orders per pet).</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Give every agent the real schema so none of them invents one.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Developer</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Architect</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Integration maps &amp; APIs</h4>
<span class="text-xs text-gray-500">tab &middot; Integrations</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What do we talk to outside the system?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> External systems (payments, AI models, identity), data exchange points, API endpoints, lifecycle events and config.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Spot third-party risk and contract changes early, and plan environments.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Security</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Developer</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Technical architecture &amp; diagrams</h4>
<span class="text-xs text-gray-500">Technical Diagrams</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;How is it built, and how does data move?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Components by layer linked to source files, plus diagrams (ERD, DFD, security, infra, sequence, stack).</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Review design decisions, brief auditors, and keep diagrams permanently in step with code.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Security</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Leader</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">4. Experience <span class="text-sm font-normal text-gray-500 ml-2">What will people see?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">UI designs</h4>
<span class="text-xs text-gray-500">tab &middot; UI Designs</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;Is this the product we approved, before we pay to build it?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> One screen per concept block, interactive preview of all screens, desktop/tablet/mobile views, point-and-ask edits.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Get sign-off on look and flow early; coding agents build screen by screen against the planned UI.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Developer</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Leader</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">5. Delivery &amp; assurance <span class="text-sm font-normal text-gray-500 ml-2">What do we ship, in what order, and is it ready?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Requirements docs</h4>
<span class="text-xs text-gray-500">Requirements Docs</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What do I send to the stakeholder who won't log in?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Concept Summary, Functional Spec, Technical Spec and Database Design, regenerated from the live blueprint.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Hand formal specs to sponsors, clients and auditors that match what is actually built.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Leader</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Partner</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business manager</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Roadmap phases &amp; build plan</h4>
<span class="text-xs text-gray-500">Develop the app</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;What do we build first, and who builds it?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> Phases derived from design, and reviewable plan where each step names pages, APIs, agent and target screen.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Release in slices, approve the plan before anything runs, and track progress step by step.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business manager</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Architect</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Leader</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Production readiness report</h4>
<span class="text-xs text-gray-500">Production Hardening</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;Is this safe to put in front of real users?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contains</strong> 39 checks across 9 pillars with findings, readiness score and A&ndash;E grade, with Fix findings hand-off over MCP.</div>
<div><strong class="text-gray-900 block font-semibold">Use it to</strong> Gate a release, prioritize fixes by severity, and maintain evidence of what was audited.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audience:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Security</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Leader</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Architect</span>
</div>
</div>

</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="map">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Which artifact earns its keep in which phase</h2>

<p>The blueprint is not a design-phase deliverable that gets shelved. Most artifacts keep working through build, test and change.</p>

<div class="flex flex-wrap items-center gap-6 my-4 p-3.5 bg-gray-50/80 rounded-xl border border-gray-200/80 text-sm">
<span class="text-xs font-bold uppercase tracking-wider text-gray-500">Legend:</span>
<span class="inline-flex items-center gap-2 text-gray-700">
<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span>
<strong class="text-gray-900 font-semibold">Primary:</strong> the artifact drives decisions here
</span>
<span class="inline-flex items-center gap-2 text-gray-700">
<span class="inline-flex items-center justify-center w-5 h-5 rounded-full"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span>
<strong class="text-gray-900 font-semibold">Supporting:</strong> consulted or checked against
</span>
</div>

<div class="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="bg-gray-50/90 border-b border-gray-200">
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-900 text-left border-r border-gray-200">Artifact</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">1 &middot; Discover &amp; define</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">2 &middot; Design</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">3 &middot; Build</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">4 &middot; Test &amp; verify</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">5 &middot; Release &amp; harden</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center">6 &middot; Operate &amp; change</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Requirements</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Concept map</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Functional architecture</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Business flows</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Business rules</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Roles &amp; permissions</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="text-gray-300 font-light">&mdash;</span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Data objects</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Integration maps &amp; APIs</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Technical architecture &amp; diagrams</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">UI designs</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Requirements docs</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Roadmap &amp; build plan</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Production readiness report</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Supporting"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primary"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
</tbody>
</table>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="phases">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Six moments where the blueprint pays off</h2>

<p>For each phase: the moment you are in, the artifacts to open, what to do with them, and what the team gets back. Screens are from real Think4Ever projects; click any one to enlarge.</p>

<div class="space-y-12 mt-8">

<!-- Phase 1 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 1 &middot; Discover &amp; Define</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Turn a business objective into scope everyone signs</h3>
<p class="text-sm italic text-gray-600 mb-4">You have an idea, a brief or a Jira backlog, and a room of people who each picture something different.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Write the objective as an outcome.</strong> &ldquo;Customers can request refunds, managers review exceptions, every decision stays visible to the customer.&rdquo; Attach specs or import from Jira if you have them.</li>
<li><strong>Answer ThinkBrain's questions</strong> in Requirements Analysis. Use <em>Let AI decide</em> where you are unsure and review its choice later.</li>
<li><strong>Review the generated Requirements</strong> together: goals, roles, epics, user stories. Untick what is out of scope, then Approve &amp; Build.</li>
<li><strong>Read the business rules aloud</strong> with the business owner. They are the decisions most often left implicit.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
An approved, plain-language definition of the product that every later artifact and every agent is derived from. Disagreements surface in a review, not in a sprint demo.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/intent-objective.jpg" alt="Design an application screen asking what the application should accomplish, with a business objective box and ready-made solution designs" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Start from the outcome.</strong> The objective box, plus 299 ready-made solution designs to start from.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/requirements-review.jpg" alt="Requirements review listing generated user stories with checkboxes and an Approve and Build button" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Approve before anything is built.</strong> Roles, epics and user stories, each one tickable.</figcaption>
</figure>
</div>

<!-- Phase 2 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 2 &middot; Design</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">See the whole system before you pay to build it</h3>
<p class="text-sm italic text-gray-600 mb-4">Requirements are approved. Now the question is whether the design is complete, consistent and buildable.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Open the Concept Ready summary.</strong> It counts what was created: concept blocks, data objects, flows, rules, integrations and roles.</li>
<li><strong>Walk the business flows</strong> for the main journeys. Check each decision has both a success and a failure path, and that each step touches the right data.</li>
<li><strong>Generate UI screens</strong>, one per concept block, and click Preview Designs to click through the product as a mockup.</li>
<li><strong>Review architecture and data objects</strong> with the tech lead. Fix anything here, by chat or direct edit, while it is still cheap.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
A 360-degree view of the application before development: business intent, technical spec, look and feel and operational workflows, connected so a change in one shows up in the others.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/concept-ready.jpg" alt="Concept Ready dialog over the concept map listing counts of concept blocks, data objects, flows, rules, integrations and roles" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Concept Ready.</strong> For the retirement-planning example, 75 blueprint items from one paragraph of intent.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/business-flows.jpg" alt="Business flows canvas showing process steps and branches" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Business flows</strong> with decisions and data per step.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/ui-designs.jpg" alt="UI Designs tab with a grid of generated screens" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>UI designs,</strong> one screen per concept block.</figcaption>
</figure>
</div>
</div>

<!-- Phase 3 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 3 &middot; Build</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Give every coding agent the same reviewed spec</h3>
<p class="text-sm italic text-gray-600 mb-4">Code is about to be written, possibly by several people and several agents at once.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Pick who builds.</strong> Think4Ever agents on the platform, or Claude Code, Cursor, Codex and other MCP tools on your own subscription. The blueprint is a machine-readable spec either way.</li>
<li><strong>Connect your agent once</strong> through MCP &amp; Tools. It then reads concepts, flows, rules, data objects and screens instead of guessing them.</li>
<li><strong>Plan by roadmap phase.</strong> Tick only the phases to build now, click Draft plan, and review each step's pages, APIs, data, agent and target screen before Confirm and run.</li>
<li><strong>Build screen by screen</strong> against the planned UI. Teams that skip UI design let the coding tool invent the screens, and it shows.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
Agents implement a specified system rather than generate one. In one Claude Code session the agent pulled a 23-entity ERD and named rules from Think4Ever and coded against them, with no re-explaining.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/build-plan.jpg" alt="Review plan dialog listing build steps with pages, APIs and agents" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Review the plan.</strong> Every step names what it builds and which agent does it. Nothing runs until you confirm.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/build-choice.jpg" alt="How do you want to build it dialog with Claude Code, Cursor, Codex and Think4Ever Agents" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Your agent, our blueprint.</strong> External tools don't use Think4Ever credits.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/think-mcp.jpg" alt="Think MCP Server connecting to Claude Code, Codex, Cursor, VS Code, Gemini CLI and Devin" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Think MCP</strong> serves the blueprint to any MCP client.</figcaption>
</figure>
</div>
</div>

<!-- Phase 4 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 4 &middot; Test &amp; Verify</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Test against what was approved, not what was coded</h3>
<p class="text-sm italic text-gray-600 mb-4">The app runs. A running app is the build outcome, not proof that every requirement is met.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Turn flows into test scenarios.</strong> Each flow's trigger, actors, steps and failure paths are a ready-made test outline.</li>
<li><strong>Test every rule's violation path.</strong> Rules state exactly what should happen when they are broken (reject with a 400, re-authenticate, reformat), so the expected result is already written.</li>
<li><strong>Check access against Roles &amp; permissions,</strong> one role at a time.</li>
<li><strong>Compare built screens with UI designs,</strong> and file mismatches as tasks with the blueprint context attached.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
A traceable line from approved rule to test result. The Think4Ever site's own example: a refund window approved at 24 hours but implemented at 48 is flagged before release, not after a customer complaint.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/business-rules.jpg" alt="Business rules list showing rule type, severity, phase, expression, linked objects and flows, and on-violation behavior" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Business rules, Petstore.</strong> &ldquo;Username is the unique business key&rdquo;: expression <code>!exists(user, user.username)</code>, linked to registration and profile, rejected with a 400 on violation.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/flow-detail.jpg" alt="Business flow detail panel with trigger, actors and numbered steps" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Flow detail.</strong> Pet Search &amp; Discovery: validate status, query, return the list or a 400. That is a test case.</figcaption>
</figure>
</div>

<!-- Phase 5 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 5 &middot; Release &amp; Harden</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Decide go or no-go on evidence</h3>
<p class="text-sm italic text-gray-600 mb-4">Someone has to sign off. Today that is often a gut call on code nobody fully reviewed.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Run Production Hardening.</strong> One reviewer agent per pillar reads the concept, the file tree and the code, then scores 39 checks.</li>
<li><strong>Read the summary first.</strong> It names the most urgent fix in plain language, ahead of the checklist.</li>
<li><strong>Click Fix findings</strong> to hand failed checks to Think4Ever agents or your own agent over MCP, then run again.</li>
<li><strong>Rebuild the requirements docs</strong> so the specs you hand to the sponsor, client or auditor match the release.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
A readiness score, a grade and a findings list you can export and keep, instead of a reassurance in a meeting.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/readiness-report.jpg" alt="Production readiness report for Natter with score 57, Grade D, 2 failed, 15 warnings, 5 passed and a security checklist" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Natter readiness report.</strong> 86 files reviewed in under six minutes: score 57, Grade D. The top finding, SEC-03, is missing server-side authorization: any connected user could impersonate anyone.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/requirements-docs.jpg" alt="Requirements Documents page with Concept Summary, Functional Specification, Technical Specification and Database Design cards" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Requirements docs</strong>, each with Open and Rebuild, regenerated from the current blueprint.</figcaption>
</figure>
</div>

<!-- Phase 6 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Phase 6 &middot; Operate &amp; Change</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Change an existing system without breaking it</h3>
<p class="text-sm italic text-gray-600 mb-4">The app is live, or inherited, and the people who wrote it may be gone. Every change is a risk.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Map the code.</strong> Choose Analyze existing code, point at the repository and branch. The source repository is not changed.</li>
<li><strong>Onboard with summaries.</strong> New team members read the screen summaries and business flows first, then the architecture. It is much faster than reading code.</li>
<li><strong>Plan the change in the blueprint.</strong> Edit the block, its items, connections or phase, then check which flows, rules and objects it touches.</li>
<li><strong>Rescan after outside changes.</strong> If code changed outside Think4Ever, a fresh scan brings the blueprint back in step.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">What you get</span>
Documentation recovered for systems that had none, faster onboarding, and changes checked for impact before they land.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/concept-map.jpg" alt="OpenAPI Petstore screen and block architecture grouped into modules with the customer journey" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Petstore, mapped from code.</strong> Four modules and the customer journey: authorize, browse, view a pet, place and manage an order.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/tech-architecture.jpg" alt="Application technical architecture with components grouped by layer" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Technical architecture</strong> by layer, each block linked to its files.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/edit-block.jpg" alt="Edit Block dialog with phase, items and connections" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Edit a block</strong>: phase, items and connections.</figcaption>
</figure>
</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="personas">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Same blueprint, different first click</h2>

<p>Personas follow the project's Value and Differentiation draft. Each panel says what the person is really asking, which artifacts to open first, a short routine, and what they can claim afterwards.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Business leader &middot; CEO, CIO, CTO, CFO</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;Are we getting control and return from what we spend on AI development?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Production readiness report</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Requirements docs</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Roadmap phases</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Check the readiness score and grade on each release candidate.</li>
<li>Read the Concept Summary for programs you sponsor.</li>
<li>Ask for roadmap phases before budget, not after.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> One governed record across teams, vendors and agents; knowledge that stays with the company; evidence ready when auditors or customers ask.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Scale AI development without losing control of what gets built.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Business manager &middot; Product owner, BA, delivery manager</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;Will what ships match what we approved?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Requirements</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business flows</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business rules</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">UI designs</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Approve requirements and untick what is out of scope.</li>
<li>Walk the main flows and click through the UI preview with stakeholders.</li>
<li>Review each rule's severity and on-violation behavior, then approve the build plan by phase.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> What ships matches what was approved, with fewer late surprises and a traceable line from rule to code.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Approve the intent. Know it was built.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Architect &middot; Tech lead</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;How do I keep the design intact when ten agents are writing code?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Technical architecture</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Data objects</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Integration maps</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Concept map</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Review architecture by layer and the ERD before build starts.</li>
<li>Connect the team's agents over MCP so they read the same contracts.</li>
<li>Check impact in the blueprint before approving a change; run hardening before each release.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> Architecture that is enforced, not just documented, and safe refactoring and modernization of legacy systems.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Your architecture, enforced across every agent.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Developer</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;Why am I re-explaining this product to every agent?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Concept map &amp; summaries</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Data objects</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business rules</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">UI designs</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Connect Claude Code, Cursor or Codex to the project once.</li>
<li>Ask the agent to pull the concept, schema and rules before writing code.</li>
<li>On an inherited repo, read block summaries and flows first.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> Less re-prompting and rework, agents that stop inventing schemas, and onboarding to unfamiliar code without reading it line by line.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Stop re-explaining your product to every agent.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">QA &middot; Security &middot; Risk &amp; Compliance</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;What was this supposed to do, and can I prove it does?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Business flows</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Business rules</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Roles &amp; permissions</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Readiness report</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Derive test cases from flow failure paths and rule violations.</li>
<li>Test access one role at a time against the permissions matrix.</li>
<li>Use DFDs, security diagrams and the hardening report as review evidence.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> Documentation, data flows and linked rules for code they did not write, and findings ranked by severity.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Review the system, not just the diff.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Consulting &amp; Delivery Partner</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;How do I deliver a governed result and hand it over cleanly?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Open first:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Functional architecture</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Requirements docs</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Build plan</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Map the client's existing system in the first week.</li>
<li>Agree scope and phases on the blueprint, not in slides.</li>
<li>Hand over the blueprint and rebuilt specs with the code.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Outcome:</strong> A repeatable delivery method they can sell as an outcome, with knowledge transferred cleanly to the client.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Understand, encode, build, govern.&rdquo;</p>
</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="examples">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Three projects, start to finish</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#1D63E0]/20">From intent</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">AI retirement planner</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">One paragraph: a personal retirement-planning app that advises like a professional investment banker. After full discovery and one approval, ThinkBrain produced the blueprint below.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">23</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">blocks</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">20</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">data objects</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">11</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">flows</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">9</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">rules</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">8</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">integrations</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">roles</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">23 screens, from Login to Scenario Modeling and Admin Console across three roadmap phases. Agents completed a 22-step plan to launch.</p>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#FF7A1A]/20">From existing code</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">OpenAPI Petstore</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">A public Spring Boot API for pets, orders and users, imported from GitHub (26 files). Nobody wrote a design document; Think4Ever recovered one.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">10</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">screens</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">10</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">flows</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">11</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">rules</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">6</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">objects</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">roles</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">modules</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">Rules like &ldquo;Username is unique&rdquo; and &ldquo;Session token expires after 1h&rdquo; recovered straight into plain language for confirmation.</p>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">Production hardening</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">Natter messaging app</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">A React messaging frontend built with Lovable. It looked finished. The readiness review said otherwise.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">57</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">readiness</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">D</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">grade</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">86</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">files</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">2</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">failed</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">15</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">warnings</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">5</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">passed</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">Identity was entirely client-supplied, so anyone could impersonate anyone. Handed straight to an agent via Fix findings.</p>
</div>

</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/structure-map.jpg" alt="Project Structure Map filling in by domain during code analysis" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Structure map</strong> filling in by domain while Petstore is analyzed.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/block-summary.jpg" alt="Plain-language summary of a screen: where it fits and who uses it" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Block summary</strong>: what you can do here, who uses it, things to know.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/data-objects.jpg" alt="Data objects Pet, User, Order, Category and Tag with relationships" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Data objects</strong>: Pet, User, Order, Category, Tag.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/technical-diagrams.jpg" alt="Technical Diagrams gallery with stack, security, infrastructure, ERD, DFD and other diagram cards" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Technical diagrams</strong> gallery (Dev mode).</figcaption>
</figure>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="value">
<h2 class="text-2xl font-bold text-gray-900 mb-4">What changes when the design artifacts are live</h2>

<div class="overflow-x-auto my-6 rounded-xl border border-gray-200/90 shadow-sm bg-white">
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="border-b border-gray-200 bg-gray-50/90">
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-900 border-r border-gray-200 w-1/5">Moment</th>
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-700 border-r border-gray-200 w-2/5">
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
<span>Without a living blueprint</span>
</div>
</th>
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-[#1D63E0] w-2/5 bg-[#1D63E0]/5">
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 rounded-full bg-[#1D63E0]"></span>
<span>With Think4Ever's artifacts</span>
</div>
</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Kick-off</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Requirements in slides and tickets, interpreted differently by each team</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Approved goals, roles, epics and stories that every later artifact is derived from</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Design review</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">A diagram drawn once, stale by the next sprint</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Concept, flows, data and screens generated together and kept connected</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Agent session</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">The first part of every session spent re-describing the data model and rules</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">The agent pulls schema, rules and screens over MCP and builds against them</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Testing</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Test cases reverse-engineered from the code that was written</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Test cases taken from approved flows and rule violation paths</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Release</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Go/no-go on confidence</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Readiness score, grade and ranked findings, with fixes handed to agents</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Change &amp; onboarding</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Read the code, ask whoever is left</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Read summaries and flows, check impact in the blueprint, rescan to stay in step</td>
</tr>
</tbody>
</table>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="sources">
<h2 class="text-xl font-bold text-gray-900 mb-4">Sources and notes</h2>

<ul class="list-disc pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Artifact descriptions:</strong> think4ever.com docs (<a href="/docs/create_project/" class="text-blue-600 hover:underline">Create a New Project</a>, <a href="/docs/designer_introduction.html" class="text-blue-600 hover:underline">Designer introduction</a>), the Think4Ever User Manual v1.1, and the how-to guides <a href="/tutorials/build-an-application-from-intent-in-think4ever/" class="text-blue-600 hover:underline">Build an Application from Intent</a>, <a href="/tutorials/turn-existing-code-into-a-living-blueprint/" class="text-blue-600 hover:underline">Turn Existing Code into a Living Blueprint</a> and <a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">Design in Think, Code in Claude</a>.</li>
<li><strong>Examples and counts:</strong> Taken from those guides, the Production Hardening white paper (Natter) and the <em>One Spec, Every Agent</em> white paper (Claude Code session). The 24-versus-48-hour refund example is from the think4ever.com How it works page.</li>
<li><strong>Personas, outcomes and messages:</strong> Come from the project's Value and Differentiation draft. The persona routines and the phase map are recommendations written for this guide, not automated product behavior.</li>
<li><strong>Screenshots:</strong> Technical diagram and requirements-docs screenshots come from the user manual and show the earlier Dev-mode interface.</li>
</ul>
</section>

</div>
