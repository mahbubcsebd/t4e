---
title: 'How to: Design in Think, Code in Codex'
description: 'Learn how to connect OpenAI Codex to Think4Ever over MCP and build your project.'
category: 'Development'
readTime: '5 min read'
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
<p>You design the application in Think4Ever, from business intent to approved blueprint and UI screens. Then OpenAI Codex builds it on your computer, reading the design from Think4Ever over MCP. Think4Ever stays the design source of truth while Codex writes and tests the code, on your own OpenAI subscription.</p>

<p class="mt-4">This guide follows a real example, <strong>AppointFlow</strong>: an appointment booking system that connects customers with service providers, with separate dashboards for customers, providers and administrators. It covers:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Designing the app from intent and approving the blueprint</li>
<li>Choosing a theme and generating the UI screens</li>
<li>Connecting Codex to Think4Ever</li>
<li>Handing Codex a build brief and verifying what it builds</li>
</ul>

<p class="mt-4">The same approach works with Claude Code. See <a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a>.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Before you start</h2>
<p>You need:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>A Think4Ever account</li>
<li>Codex installed and signed in with your OpenAI account</li>
<li>Node.js, so Codex can run the npx bridge that connects it to Think4Ever</li>
<li>An empty folder on your computer for the application</li>
</ul>

<p class="mt-4">Keep access tokens out of screenshots and out of source control.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 1: Design the app in Think4Ever</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Choose Design from intent.</strong> Create a project and pick <strong>Design from intent &rarr; Design a system</strong>. This route turns a business outcome into a reviewable system design before any code is written.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-1.jpg" alt="Choose Design from intent in Think4Ever" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Describe the business objective.</strong> Say what the application should accomplish: the users, main workflows, business constraints, preferred tech stack, integrations, and what success looks like. Attach specs or mockups if they matter. Then click <strong>Continue</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-2.jpg" alt="Describe the business objective" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li><strong>Resolve the first decisions.</strong> Think4Ever flags conflicts and open choices in your description, such as a stack mismatch, the ORM, the payment model and notification channels. Pick the intended option for each so the design does not rest on hidden assumptions, then click <strong>Submit</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-3.jpg" alt="Resolve first decisions" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Work through the Requirements Analysis rounds.</strong> Each round asks more specific questions, for example how booking slots are generated, how deposits work, or whether customers can book as guests. Choose the matching option, add your own answer with <strong>Add new item</strong>, or tick <strong>Let AI decide</strong> only when the choice really does not matter. Click <strong>Submit Answers</strong> after each round.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-4.jpg" alt="Requirements Analysis Round 1" class="w-full h-auto" />
</div>
</figure>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-5.jpg" alt="Requirements Analysis Round 2" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="5">
<li><strong>Approve the blueprint.</strong> Review the assembled goals, roles, rules, workflows and technical decisions. Fix anything incomplete or contradictory, then click <strong>Approve &amp; Build</strong>. This is the handoff from product definition to generated design.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-6.jpg" alt="Approve the blueprint" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li><strong>Choose a theme.</strong> Pick the visual theme that fits the product. Click <strong>Full Demo</strong> to explore a theme, then <strong>Select Theme</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-7.jpg" alt="Choose a theme" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="7">
<li><strong>Generate the UI.</strong> Start the UI build and wait for it to finish. Screens appear as they are completed. AppointFlow got 21 screens covering customer, provider and admin flows.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-8.jpg" alt="Generate the UI screens" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="8">
<li><strong>Review the screens.</strong> Open <strong>UI Designs</strong> and check the gallery and the interactive <strong>Preview Designs</strong> mockup across all the main flows. Fix missing screens or product decisions in Think4Ever before you start coding.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-9.jpg" alt="Review the UI screens" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 2: Connect Codex to Think4Ever</h2>

<p>You connect once. After that, every Codex session on your computer can read your Think4Ever designs.</p>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li>In your Think4Ever project, open <strong>MCP &amp; Tools &rarr; Codex</strong>.</li>
<li>Click <strong>Create token</strong> and copy it straight away. It's shown only once. Manage or revoke tokens later under <strong>API &rarr; Access Tokens</strong>.</li>
<li>Copy the generated configuration block into your Codex config file, <code>~/.codex/config.toml</code>. Codex reaches Think4Ever's HTTP server through the mcp-remote bridge. The block looks like this, with your own server address and token:</li>
</ol>

<div class="my-6">
<pre class="bg-gray-50 rounded-xl p-4 overflow-x-auto text-sm border border-gray-200"><code>[mcp_servers.think4ever]
command = "npx"
args = [
  "-y", "mcp-remote",
  "https://YOUR_THINK_CELL/mcp",
  "--header", "Authorization: Bearer tf_YOUR_TOKEN"
]</code></pre>
</div>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li>Save the file and restart Codex. The think4ever tools load in the new session.</li>
<li>Check the connection: ask Codex to list its think4ever tools, or to name your active project.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-10.jpg" alt="MCP and Tools — Codex panel in Think4Ever" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Never commit the token to your repository.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 3: Give Codex the build brief</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Choose Build with Codex.</strong> In UI Designs, click <strong>Build UI</strong>. In <strong>How do you want to build it?</strong>, choose <strong>Codex</strong>. Codex builds on your computer with your OpenAI subscription, so no Think4Ever credits are used.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-11.jpg" alt="Choose Build with Codex in UI Designs" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Copy the brief.</strong> The Codex panel recaps the one-time connection (with a link to <strong>Open the connection guide</strong>) and shows a project-specific build brief. Click <strong>Copy the brief</strong>. The brief names your project and concept, and tells Codex to load the active concept, technical requirements, every concept block and every UI design before writing code. Copy it again whenever you switch projects or rebuild the concept.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-12.jpg" alt="Copy the build brief from the Codex panel" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li><strong>Open an empty project folder.</strong> In Codex, create or select an empty folder and open it as the project root. Codex writes the application and its project instructions there.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-13.jpg" alt="Open an empty project folder in Codex" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Paste the brief and send it.</strong> Start a new task, paste the whole brief and send it. Let Codex load the design from Think4Ever before it creates any files. The brief also tells Codex to ask instead of guessing when the spec is unclear, and to check its code against Think4Ever's hardening checklist before calling the build done.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-14.jpg" alt="Paste the brief and send it to Codex" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 4: Build and verify the app</h2>

<p>Codex scaffolds the application, installs dependencies, runs its checks and compares the result with the Think4Ever design. Approve each command only when it fits your project and environment.</p>

<p class="mt-4">When it's done, check that:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>The tech stack matches the Think4Ever technical requirements</li>
<li>Every important screen in Think4Ever has a route or app state</li>
<li>Roles, permissions, validation, error states and business rules are enforced in code</li>
<li>Layout, forms, navigation and responsive behavior match the UI designs</li>
<li>Tests and the production build pass, and the app starts from a clean checkout</li>
</ul>

<h3 class="text-lg font-bold text-gray-900 mt-6 mb-3">Useful follow-up prompts</h3>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li><em>"Compare the current app with every Think UI design and list the remaining differences before changing code."</em></li>
<li><em>"Run the tests and production build, fix failures, then summarize the commands and results."</em></li>
<li><em>"Reload the Think role definitions and check every route for missing permission enforcement."</em></li>
</ul>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>

<p class="mt-4"><strong>Codex doesn't see the think4ever tools.</strong> Restart Codex after changing <code>config.toml</code>. If the bridge won't start, check that Node.js and npx are installed.</p>

<p class="mt-4"><strong>Authentication errors.</strong> Create a new token in Think4Ever, replace the old one in <code>config.toml</code>, and restart Codex. Revoke any token that was exposed.</p>

<p class="mt-4"><strong>Codex opens the wrong design.</strong> Copy a fresh build brief and check its project and concept IDs.</p>

<p class="mt-4"><strong>The app drifts from the design.</strong> Ask Codex to reload the relevant Think4Ever screens and business rules before it edits more code.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">References</h2>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li><a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a>, the same workflow with Claude Code</li>
<li><a href="https://learn.chatgpt.com/docs/extend/mcp" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">OpenAI Codex MCP documentation</a></li>
</ul>
</section>

</div>
