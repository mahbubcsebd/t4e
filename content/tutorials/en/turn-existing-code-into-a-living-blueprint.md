---
title: "How to: Turn Existing Code into a Living Blueprint"
description: "Learn how Think4Ever analyzes your existing repository and creates a complete set of design artifacts that stays up to date with the code."
---

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
<p>Developers are writing code faster than ever with AI assistants, often at the expense of architectural context and business rules. Manual code reviews and testing catch some issues, but they depend on design documents that someone keeps up to date by hand. Think4Ever analyzes your existing repository and creates a <strong>Living Blueprint</strong>: a complete set of design artifacts that stays up to date with the code.</p>

<p class="mt-4">From your code, Think4Ever builds:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Requirement specifications</strong></li>
<li><strong>Functional architecture:</strong> every screen and flow, end to end</li>
<li><strong>Application technical architecture:</strong> frontend UI, backend APIs and data model, each block mapped to its files</li>
<li><strong>Concept map:</strong> a system map of the screens and building blocks, with plain-language summaries</li>
<li><strong>Business flows</strong> and <strong>business rules</strong></li>
<li><strong>UI designs</strong> and <strong>data objects</strong></li>
<li><strong>Roles &amp; permissions</strong>, plus integration maps, API endpoints, state and lifecycle events, jobs, environments and configuration</li>
</ul>

<p class="mt-4">Use it to onboard developers, review a system before changing it, or bring an existing app into Think4Ever so new work stays true to the design.</p>

<p class="mt-4">This guide follows the public <a href="https://github.com/OpenAPITools/openapi-petstore" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">OpenAPI Petstore</a> sample, a Spring Boot API for pets, orders and users. Analyzing existing code is one of two starting points. The other is designing from intent, covered in <a href="https://claude.ai/code/artifact/a5a82168-4db3-41f2-963c-dcb08e2b9351" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Build an Application from Intent</a>. Both lead to the same Living Blueprint.</p>

<p class="mt-4"><strong>Watch it first:</strong> see the whole flow in the two-minute <a href="https://www.youtube.com/watch?v=FY68DuwOf4Q" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Code &rarr; Design video</a>, also on the <a href="/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">think4ever.com</a> home page.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 1: Bring in your code</h2>
<ol class="list-decimal pl-6 space-y-4">
<li><strong>Choose Analyze existing code.</strong> When you start a project, Think4Ever asks <em>"What do you need to understand or change?"</em> Pick <strong>Analyze existing code &rarr; Analyze a project</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-1.jpg" alt="What do you need to understand or change?" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="2">
<li><strong>Point Think4Ever at the repository.</strong> This guide imports from a public GitHub URL. Enter the <strong>Repository URL</strong>, for example <code>https://github.com/OpenAPITools/openapi-petstore.git</code>, and the <strong>Branch</strong>, for example <code>main</code>.</li>
<li><strong>Click Import.</strong> Think4Ever downloads a snapshot of the repository into your project folder and starts mapping the system.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-2.jpg" alt="Import from a public GitHub URL" class="w-full h-auto" />
</div>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 2: Let Think4Ever analyze the code</h2>
<p>Think4Ever reads the codebase file by file and builds the concept, business flows, data objects and permissions as it goes. A bar at the top shows progress, for example <strong>0/26 files</strong>. Keep the page open: the concept syncs automatically when the analysis finishes.</p>

<p class="mt-4">While it works, the <strong>Project Structure Map</strong> fills in. Related code is grouped into domains, such as Pet Inventory Management, Order Management and User Account Management. Each finding is written in plain language, tagged by domain, role and technology, and linked to the source files it came from.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-3.jpg" alt="Project Structure Map" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">When the analysis is done, you have a full Application Blueprint for the codebase. The next step shows how to explore it.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 3: Explore the blueprint</h2>
<p>The blueprint is organized in tabs across the top of the project: <strong>Requirements</strong>, <strong>Functional Architecture</strong>, <strong>Concept</strong>, <strong>Business Flows</strong>, <strong>Roles &amp; Permissions</strong>, <strong>Business Rules</strong>, <strong>UI Designs</strong> and more. For the Petstore, Think4Ever found 10 screens, 10 business flows, 11 business rules, 6 data objects and 4 roles.</p>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Screens and building blocks</h3>
<p>The <strong>Concept</strong> tab is a system map of every code module and how the blocks relate. Start with the full view for an at-a-glance overview, then zoom into any node to drill down. Use it to understand the design as a whole, check that it's functionally complete, and map dependencies.</p>

<p class="mt-4">Each screen and block shows the fields, buttons and links it holds. The Petstore came out as four modules: API Portal &amp; Auth, Pet Management, Store &amp; Orders, and User Management. The customer journey is shown as well: authorize, browse, view a pet, place an order, and manage it.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-4.jpg" alt="Concept tab system map" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Open any block to read its <strong>Summary</strong>: what you can do on the screen, where it fits in the app, who uses it, and things to know. You can copy the summary or rebuild it.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-5.jpg" alt="Summary modal" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Functional and technical architecture</h3>
<p>The <strong>Functional Architecture</strong> tab maps the complete application concept: all screens and flows, end to end. You no longer need to read the code to understand what the application does.</p>

<p class="mt-4">The <strong>application technical architecture</strong> covers the full stack: frontend UI, backend APIs and data model. Components are grouped by layer, for example client, web/API server, application services, data store, security &amp; authorization, and CI/CD &amp; deployment. Each block lists its technologies and links to the specific files, scripts and configuration modules behind it. Click a group to see its runtime, components, source files and relationships.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-6.jpg" alt="Technical architecture" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Business flows</h3>
<p>The <strong>Business Flows</strong> tab maps each process from trigger to outcome, including success and failure paths and the data each step touches. Click a flow to see its description, trigger, actors and numbered steps. For example, Pet Search &amp; Discovery: validate status values, query the repository, then return the pet list or a 400 error.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-7.jpg" alt="Business Flows" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Use the flows to check and fill in UX interactions, state changes and business logic, so the design is complete.</p>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Business rules</h3>
<p>The <strong>Business Rules</strong> tab lists the rules hidden in the code, in plain language and as a short expression. Each rule shows its type (constraint, validation or automation), its severity, the roadmap phase it belongs to, the objects and flows it touches, and what happens <strong>on violation</strong>. For example: "Username is the unique business key", which is rejected with a 400 error if the username already exists.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-8.jpg" alt="Business Rules" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">As the application, the business or compliance requirements change, add new rules here, so the blueprint keeps recording why the code behaves as it does.</p>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Data objects</h3>
<p>The <strong>Data Objects</strong> view shows each entity's fields, types and keys, and how the entities relate, such as a pet belonging to a category, or many orders per pet.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-9.jpg" alt="Data Objects" class="w-full h-auto" />
</div>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Step 4: Change the system with confidence</h2>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Refine the design</h3>
<p>The blueprint is editable. In the <strong>Concept</strong> tab, open a block and click edit to change:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>its name and description</li>
<li>the <strong>roadmap phase</strong> it belongs to, for example Phase 2: Security &amp; Authorization</li>
<li>its <strong>items</strong>: the fields, buttons and checkboxes on the screen. Use <strong>Add New Item</strong> or <strong>Remove</strong>.</li>
<li>its <strong>connections</strong> to other screens, with the action that links them. Use <strong>Add New Connection</strong> or <strong>Remove</strong>.</li>
</ul>

<p class="mt-4">Then click <strong>Save</strong>. You can also ask ThinkBrain in the chat to make changes for you.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-10.jpg" alt="Edit Block modal" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Keep every change true to intent</h3>
<p>Plan changes against the blueprint before you touch the code. Compare a proposed implementation with the approved business rules, and use the flows, data objects and architecture to see what else a change affects.</p>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Build with the tools you already use</h3>
<p>The <strong>Think MCP Server</strong> makes the reviewed blueprint available to your coding tools through the Model Context Protocol, including Claude Code, Codex, Cursor, VS Code, Gemini CLI, Devin and Windsurf. Whichever tool or model writes the code, it works from the same design. For the full setup with Claude Code, see <a href="/tutorials/how-to-design-in-think/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a>. To have Think4Ever agents build or extend the app instead, follow Step 4 of <a href="https://claude.ai/code/artifact/a5a82168-4db3-41f2-963c-dcb08e2b9351" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Build an Application from Intent</a>.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/turn-existing-code-into-a-living-blueprint/turn-existing-code-into-a-living-blueprint-11.jpg" alt="Think MCP Server" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Clarity, coherence and control</h3>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Clarity</strong> on how the whole system works, for every role</li>
<li><strong>Coherence</strong> on the effects of each change, checked against approved business rules</li>
<li><strong>Control</strong> of the work across your coding tools, models and environments</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Tips and FAQ</h2>
<div class="space-y-4 mt-6">
<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Keep the page open during analysis.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>The concept syncs automatically when the analysis finishes.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Start with the summaries.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>To onboard someone, have them read the screen summaries and the business flows first, then the architecture. It's much faster than reading the code.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Check the business rules.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>The rules Think4Ever finds are often the logic nobody wrote down. Review them with the business owner and fix anything that doesn't match intent.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Does Think4Ever change my repository?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>The import takes a snapshot of the repository into your Think4Ever project folder. The source repository itself isn't changed.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>What if the code changes later?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Ask Think4Ever for a fresh scan of the code. It updates the structure and concepts so the blueprint matches the code again.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Can I start from an idea instead?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Yes. Choose <strong>Design from intent</strong>. See <a href="https://claude.ai/code/artifact/a5a82168-4db3-41f2-963c-dcb08e2b9351" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Build an Application from Intent</a>.</p>
</div>
</details>
</div>

<p class="mt-8 text-gray-600">Ready to try it? Create your first Living Blueprint for free at <a href="/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">think4ever.com</a> and choose <strong>Analyze existing code</strong>.</p>
</section>
