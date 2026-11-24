---
title: "Spec Drift: The Silent Failure of Agentic Coding"
description: "Context is not compliance: why coding agents need design as their harness, and how Gap Analysis brings the code back to what you intended."
date: "November 23, 2026"
readTime: "6 min read"
category: "Product"
author: "Sunil Kishen"
image: "/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Giving a coding agent detailed context, even a complete design, does not mean it will build the application you intended. It will build something that runs, while quietly drifting from the specification. We call this spec drift, and the agent is not the one who will tell you about it.</p>
<p class="mt-4">We built think4ever Gap Analysis, our newest feature, to catch it. Here is what it found on a real project.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What we found</h2>
<p>We connected a real customer project to Claude Code through the Think MCP server. The full design was there for the agent to read: more than 100 screens, 34 business flows, 92 business rules, 26 roles and 126 data objects. Claude Code read it and built the app, phase by phase.</p>
<p class="mt-4">Then we measured the code against the design. The first analysis of one phase found 72% of the design in the code. The first analysis of the next phase found 8%.</p>
<p class="mt-4">This was not a weak prompt or a missing spec. The agent had everything. The gaps are the kind that look done and are not:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Screens and fields missing, while the main screens worked.</li>
<li>Flows that stopped at the happy path, with exceptions, approvals and later steps never built.</li>
<li>Business rules not enforced, even though they were in the design the agent read.</li>
<li>Functions with the right names and empty bodies, which look finished in a summary.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Why it happens</h2>
<p>This is not a flaw of one tool. It is how today's coding agents work:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>They optimize for "it runs".</strong> Compilers, tests and the browser tell the agent the code works. Nothing tells it the code is complete.</li>
<li><strong>Context drifts, so the code drifts from the spec.</strong> A real design is large. Over a long session, parts of it drop out of the agent's working memory, and plausible assumptions fill the gaps. Context drift is the cause; spec drift is the result.</li>
<li><strong>"Done" is self-reported.</strong> The agent decides when to stop, and grades its own work.</li>
</ul>
<p class="mt-4">Speed and context are not conformance. Spec drift is silent: without an independent check against the design, the gap between "it runs" and "it is what we intended" stays invisible until users find it.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Design is the harness</h2>
<p>This is the strongest argument for designing first. Without a design, agentic coding is ad hoc: the agent invents screens, data and flows as it goes, and nobody can say what is missing, because nothing defines what should be there.</p>
<p class="mt-4">With a design in think4ever, "done" has a definition. But handing the design to the agent only gives it context. A harness also needs a feedback loop that measures the code against the design and sends the gaps back. That is what Gap Analysis adds.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Introducing think4ever Gap Analysis</h2>
<p>Gap Analysis is our newest think4ever feature. It shows what is built and what is still missing: it compares your think4ever design with the code in your project and puts a percentage on every part of it.</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Every part of the design is scored:</strong> screens down to each field and button, business flows step by step, data objects, business rules, API endpoints, roles, and more. Red is mostly missing, orange is partly built, green is built.</li>
<li><strong>Every score has a reason:</strong> what was found, what is missing, and the code itself, with the gap marked.</li>
<li><strong>Findings become tasks:</strong> "Create tasks from the findings" puts every gap on the task board, with a sub-task for each missing point.</li>
<li><strong>It works from your coding agent:</strong> Claude Code, Cursor or Codex can start an analysis, read the gaps and fix them over MCP, for example "Close the gaps of this task and check it again."</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">The closed loop</h2>
<p class="rounded-xl bg-[#eaf1ff] px-5 py-4 text-center text-sm font-bold text-[#1b30a7] md:text-base">Design &rarr; Build &rarr; Bring the code back &rarr; Gap Analysis &rarr; Tasks &rarr; Fix &rarr; Check again</p>
<ol class="list-decimal pl-6 mt-6 space-y-3">
<li><strong>Design in think4ever:</strong> concept, flows, data, rules and UI screens.</li>
<li><strong>Build</strong> with Claude Code over MCP, or Cursor, Codex or the think4ever agents.</li>
<li><strong>Bring the code back</strong> into think4ever and run Gap Analysis against the design.</li>
<li><strong>Create the task list</strong> from the findings.</li>
<li><strong>Hand the tasks to Claude Code</strong> to fix, then bring the fixed code back.</li>
<li><strong>Check again</strong> and repeat until the parts that matter are green.</li>
</ol>
<p class="mt-4">The coding agent does the work. The design decides when it is finished.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">In practice: a real project through the cycle</h2>
<p>The screens below come from a real-life customer project, a manufacturing ERP designed in think4ever and coded by Claude Code over MCP, going through this cycle. Identifying details are blurred.</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Phase</th><th class="py-3 px-4 font-bold border-b border-gray-200">First analysis</th><th class="py-3 px-4 font-bold border-b border-gray-200">After closing gaps</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Phase 2</td><td class="py-3 px-4">72%</td><td class="py-3 px-4">94% one day later</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Phase 3</td><td class="py-3 px-4">8%</td><td class="py-3 px-4">87%, then 95% two days later</td></tr>
</tbody>
</table>
</div>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg" alt="Gap Analysis in think4ever: every analysis kept by date and phase, with the score for each part of the design." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Every analysis is kept by date and phase: Phase 3 went from 8% to 87% to 95%, and Phase 2 from 72% to 94%.</figcaption>
</figure>
<p class="mt-4">At 95%, every one of the 90 items in the phase was built. Yet the analysis still found what matters most: business rules. Confirming a cut plan did not lock it as designed, and the rule "no colour mixing in a lay" had no reject path in the code. These are the gaps that pass a demo and fail in production, and the agent's own sense of "done" did not flag them.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-2.jpg" alt="The 95% Gap Analysis result: 90 items checked, with the remaining rule gaps called out in the summary." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">The 95% analysis: 90 items checked against more than 1,100 files, with the remaining rule gaps called out in the summary.</figcaption>
</figure>
<p class="mt-4">The 65 remaining open points became 65 tasks with 53 sub-tasks, without running an agent or using credits. The tasks are handed to Claude Code to fix, the code comes back, and Gap Analysis checks it again.</p>
<figure class="my-8">
<div class="w-full md:max-w-md mx-auto overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-3.jpg" alt="The Create tasks from the findings dialog, turning 65 open points into 65 tasks with 53 sub-tasks." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Create tasks from the findings: every gap becomes a task for the team or the coding agent.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">The takeaway</h2>
<p>Do not ask a coding agent to judge whether it built what you intended. Give it a design, then measure the code against that design, every time.</p>
<p class="mt-4">Coding agents are fast and capable, and a design over MCP makes them far better. But even with full context, they do not reliably produce the intended application. Design defines what "done" means. Gap Analysis measures it, turns the gaps into tasks, and closes the loop until the code conforms to the design.</p>
<p class="mt-4">Try think4ever Gap Analysis on your own project: <a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">think4ever.com/docs/gap_analysis/</a></p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Learn more</h2>
<ul class="list-disc pl-6 space-y-2">
<li><a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Gap Analysis documentation</a>: how to run an analysis, read the results and close the gaps</li>
<li><a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Tutorial: Design in Think, Code in Claude</a>: connect Claude Code to your think4ever design over MCP</li>
<li><a href="https://think4ever.com/docs/mcp_claude_code/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Think MCP with Claude Code</a>: setup and tools</li>
<li><a href="/blog/white-paper-think-design-redefining-the-ai-coding-harness-for-enterprise-software-development/" class="text-[#1b30a7] hover:underline font-medium">White paper: Think Design, Redefining the AI Coding Harness</a>: why design is the harness</li>
<li><a href="/blog/architecture-first-agentic-development-with-think4ever/" class="text-[#1b30a7] hover:underline font-medium">Architecture-first agentic development with think4ever</a></li>
<li><a href="/tutorials/design-artifacts-guide/" class="text-[#1b30a7] hover:underline font-medium">Put the Blueprint to Work</a>: using think4ever design artifacts across the SDLC</li>
</ul>
</section>
</div>
