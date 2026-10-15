---
title: 'How to: Make Vibe-Coded Applications Production Ready'
description: 'Learn how to use Think4Ever Production Hardening to audit, secure, and harden vibe-coded or AI-generated applications for enterprise readiness.'
category: 'Development'
readTime: '6 min read'
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<p class="mb-6"><a href="#step-by-step" class="text-blue-600 hover:underline font-medium">Already know why? Skip to the step-by-step instructions &rarr;</a></p>

<h2 class="text-2xl font-bold text-gray-900 mb-4">Why vibe-coded apps aren't ready for enterprise</h2>

<p>AI app builders such as Lovable and Emergent can turn an idea into a working app in hours. That speed comes from building the <strong>happy path</strong>: the flow where every user behaves, every service answers and traffic stays low. Enterprise applications have to survive misuse, failed dependencies and traffic spikes, and stay maintainable by the engineers who inherit them.</p>

<p class="mt-4">To get a demo working fast, vibe-coded apps often take shortcuts that don't belong in an enterprise system:</p>

<ul class="list-disc pl-5 space-y-2 mt-4">
<li><strong>The front end talks straight to the database.</strong> The browser reads and writes data directly, protected only by database row-level rules. There's no server layer to enforce business logic, check permissions or validate input.</li>
<li><strong>Trust lives in the browser.</strong> Identity, roles or prices are supplied by the client, so a user can change them.</li>
<li><strong>Secrets and settings are hardcoded.</strong> API keys sit in the code, and configuration isn't separated by environment.</li>
<li><strong>Failures are unhandled.</strong> No retries, fallbacks or friendly errors, and stack traces leak to users.</li>
<li><strong>Nobody can see what's happening.</strong> No structured logs, error tracking or metrics.</li>
<li><strong>It's built for one user.</strong> In-memory state breaks when the app runs on more than one server, and lists aren't paginated.</li>
<li><strong>There's no path to production.</strong> No versioned database migrations, CI pipeline, backups, tests or runbook.</li>
</ul>

<p class="mt-4">The builders' own pre-publish scans help, but they check one platform's security settings. They don't cover the wider enterprise requirements: configuration, reliability, data, observability, performance, deployment, testing and privacy.</p>

<p class="mt-4"><strong>Think4Ever Production Hardening</strong> closes that gap. It audits any codebase, whether from Lovable, Emergent, a coding agent or a traditional team, against a production-readiness checklist. You get a score, cited evidence for every finding, and fixes you approve before anything changes.</p>

<p class="mt-4">Further reading: <a href="/blog/from-prototype-to-production-think4ever-hardening/" class="text-blue-600 hover:underline">From prototype to production</a> and the <a href="/docs/production_hardening.html" class="text-blue-600 hover:underline">Production Hardening documentation</a>.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What Production Hardening checks</h2>

<p>The review covers nine pillars. Each has its own reviewer agent and a set of checks.</p>

<div class="overflow-x-auto my-6">
<table class="w-full text-left text-sm border-collapse border border-gray-200">
<thead>
<tr class="bg-gray-50 border-b border-gray-200">
<th class="p-3 font-semibold text-gray-900 border border-gray-200">Pillar</th>
<th class="p-3 font-semibold text-gray-900 border border-gray-200">Checks</th>
<th class="p-3 font-semibold text-gray-900 border border-gray-200">Typical gaps in vibe-coded apps</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Security</td>
<td class="p-3 border border-gray-200">11</td>
<td class="p-3 border border-gray-200">Permissive row-level security, no server-side authorization, weak sessions, exposed secrets, no rate limiting or security headers</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Data &amp; Database</td>
<td class="p-3 border border-gray-200">5</td>
<td class="p-3 border border-gray-200">No versioned migrations, unbounded connections, missing constraints and indexes, no backups</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Observability</td>
<td class="p-3 border border-gray-200">5</td>
<td class="p-3 border border-gray-200">No structured logging, correlation IDs, error tracking or metrics</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Reliability &amp; Error Handling</td>
<td class="p-3 border border-gray-200">4</td>
<td class="p-3 border border-gray-200">Unhandled exceptions, leaked stack traces, no fallback when a dependency fails</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Performance &amp; Scalability</td>
<td class="p-3 border border-gray-200">4</td>
<td class="p-3 border border-gray-200">In-memory state that breaks across instances, unpaginated lists, N+1 queries, slow work in the request</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Build, Deploy &amp; Operations</td>
<td class="p-3 border border-gray-200">4</td>
<td class="p-3 border border-gray-200">Unpinned runtimes, no CI pipeline, containers running as root with baked-in secrets, no runbook</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Configuration &amp; Environment</td>
<td class="p-3 border border-gray-200">3</td>
<td class="p-3 border border-gray-200">Hardcoded parameters, unvalidated environment variables, configuration drift</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Testing &amp; Quality</td>
<td class="p-3 border border-gray-200">3</td>
<td class="p-3 border border-gray-200">Little or no automated test coverage</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Privacy &amp; Compliance</td>
<td class="p-3 border border-gray-200">2</td>
<td class="p-3 border border-gray-200">Personal data not minimized or encrypted, no deletion path, no audit trail for sensitive actions</td>
</tr>
</tbody>
</table>
</div>

<p class="mt-4">Each pillar has its own checklist with an ID, what the check requires and a default severity. The Security pillar is the largest:</p>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-1.jpg" alt="Security pillar checklist (SEC-01 to SEC-11)" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">The checklists for all nine pillars are on the <strong>Full checklist</strong> tab.</p>

<p class="mt-4">Each check gets one of four results, with its reasoning and the files and line ranges it's based on:</p>

<ul class="list-disc pl-5 space-y-2 mt-4">
<li><strong>Passed:</strong> the check is met.</li>
<li><strong>Warning:</strong> a partial gap, with a severity.</li>
<li><strong>Failed:</strong> a clear gap, with a severity.</li>
<li><strong>Not applicable:</strong> the check doesn't apply to your stack, for example row-level security when there's no client-exposed database.</li>
</ul>

<p class="mt-6">The <strong>Production Readiness Score</strong> is the share of applicable checks that pass, with warnings counting as half, graded A to E:</p>

<div class="my-6 p-4 bg-gray-50 rounded-xl border border-gray-200 font-mono text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
\text{score} = 100 \times \frac{\text{passed} + 0.5 \times
\text{warnings}}{\text{passed} + \text{warnings} + \text{failed}}
</div>

<p class="mt-4">Severity doesn't change the score. It sets the order in which to fix things.</p>

<figure class="my-8 max-w-md mx-auto">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-2.jpg" alt="Production readiness grading scale (A to E)" class="w-full h-auto" />
</div>
</figure>

<p class="mt-6"><strong>Example from the blog:</strong> a Lovable-built React messaging app, <strong>Natter</strong> (86 files), was reviewed in under six minutes and scored <strong>57, grade D</strong>. The most urgent finding was that user identity was supplied entirely by the browser, so any user could impersonate another. Because the app had no database, a scan focused on row-level security would have found nothing.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-3.jpg" alt="Production Hardening review of Natter" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8" id="step-by-step"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-6">Step by step</h2>

<h3 class="text-xl font-bold text-gray-900 mb-4">Step 1: Start a hardening project</h3>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li>On the Think4Ever onboarding screen (<em>"What do you need to understand or change?"</em>), choose <strong>Production hardening &rarr; Harden a project</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-4.jpg" alt="Choose Production hardening on onboarding screen" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li>
<strong>Bring in the codebase in one of three ways:</strong>
<ul class="list-disc pl-5 space-y-2 mt-2">
<li><strong>Upload a ZIP:</strong> use a local project without connecting a source-control account</li>
<li><strong>Public GitHub URL:</strong> paste a public repository link and pick the branch</li>
<li><strong>Connect a repository:</strong> authorize a GitHub, GitLab, Bitbucket, Git or SVN repository with credentials</li>
</ul>
<p class="mt-2">For a Lovable or Emergent app, connect the GitHub repository it syncs to, or export the code as a ZIP.</p>
</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-5.jpg" alt="Bring in the codebase to harden" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h3 class="text-xl font-bold text-gray-900 mb-4">Step 2: Let Think4Ever map the system</h3>

<p>Think4Ever detects the tech stack and builds the project's concept: business flows (with the role, screen and data for each step), roles and permissions, and data objects. The checks are graded against this map, so the review understands what the app is meant to do, not just how the code looks. The review waits until the map is finished.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-6.jpg" alt="Building your concept from your codebase" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h3 class="text-xl font-bold text-gray-900 mb-4">Step 3: Run the review</h3>

<p>One reviewer agent per pillar works through its checks. Each agent reads the concept summary, the file tree and key files such as dependency manifests, the Dockerfile, CI configuration, the README and entry points, and can ask for more source files. Progress updates live, and you can close the window while it runs.</p>

<p class="mt-4">The review is a <strong>static reading of the source code</strong>. It doesn't build, run or test your app. Values in <code>.env</code> files are hidden from the reviewers, which see only the variable names.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-7.jpg" alt="Reviewing your codebase for production" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h3 class="text-xl font-bold text-gray-900 mb-4">Step 4: Read the report</h3>

<p>The report header shows the score and grade, the number of checks in each status, a plain-language summary of the most urgent issues, the detected stack, the number of files scanned and the model used. Use <strong>Report Filters</strong> to show failed, warning, passed or not-applicable checks. Every result cites the files and lines it's based on.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-8.jpg" alt="Production readiness score and findings summary" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Use <strong>PDF</strong> to export the report for your team or auditors. Past runs stay in the review history.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-9.jpg" alt="Full review report and Run again" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h3 class="text-xl font-bold text-gray-900 mb-4">Step 5: Fix the findings</h3>

<p>Click <strong>Fix findings</strong> to fix every failed check plus critical and high-severity warnings, up to 12 at a time, or <strong>Fix this check</strong> for a single finding. Then choose who does the work:</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-10.jpg" alt="Click Fix findings" class="w-full h-auto" />
</div>
</figure>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-11.jpg" alt="Choose how you want to fix findings" class="w-full h-auto" />
</div>
</figure>

<div class="overflow-x-auto my-6">
<table class="w-full text-left text-sm border-collapse border border-gray-200">
<thead>
<tr class="bg-gray-50 border-b border-gray-200">
<th class="p-3 font-semibold text-gray-900 border border-gray-200"></th>
<th class="p-3 font-semibold text-gray-900 border border-gray-200">Think4Ever developer agent</th>
<th class="p-3 font-semibold text-gray-900 border border-gray-200">Your own coding agent</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">How</td>
<td class="p-3 border border-gray-200">Runs in DEV mode inside Think4Ever</td>
<td class="p-3 border border-gray-200">Copy the fix request into Claude Code, Cursor or Codex</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Control</td>
<td class="p-3 border border-gray-200">Shows a plan listing every file it will create, change or delete and which checks each change fixes. Nothing changes until you click <strong>Confirm &amp; Apply</strong></td>
<td class="p-3 border border-gray-200">Your tool edits your local copy under its own approval rules</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Cost</td>
<td class="p-3 border border-gray-200">Uses Think4Ever credits</td>
<td class="p-3 border border-gray-200">Uses your own subscription, no Think4Ever credits</td>
</tr>
<tr>
<td class="p-3 font-medium text-gray-900 border border-gray-200">Saving the result</td>
<td class="p-3 border border-gray-200">Writes to the workspace files. Commit and push from <strong>Version Control</strong></td>
<td class="p-3 border border-gray-200">Re-import the fixed code into Think4Ever before re-running the review</td>
</tr>
</tbody>
</table>
</div>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/make-vibe-coded-applications-production-ready/make-vibe-coded-applications-production-ready-12.jpg" alt="Review planned changes and Confirm &amp; Apply" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">The fix request for external tools includes the findings, evidence, recommendations and the Think MCP calls that fetch the full results and grading rules.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h3 class="text-xl font-bold text-gray-900 mb-4">Step 6: Re-run before every release</h3>

<p>Click <strong>Run again</strong> after each round of fixes and before each release. The new run checks your fixes and catches regressions, such as a secret that crept back in or an authorization check that was removed. You can also start runs from the REST API (<code>POST /v1/projects/{id}/hardening/run</code>) or over MCP, for example from a CI pipeline.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Recommended path to production</h2>

<ol class="list-decimal pl-6 space-y-2 mt-4">
<li>Run your builder's own security scan, for example Lovable's pre-publish checks.</li>
<li>Harden the app with Think4Ever across all nine pillars.</li>
<li>Re-run the Think4Ever review before every release.</li>
<li>Run a penetration test before major releases.</li>
</ol>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">FAQ</h2>

<div class="space-y-4 mt-6">
<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Does this replace my builder's built-in scan?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>No. Keep using it. Production Hardening covers all nine pillars, not just security, and works on code from any source.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Is the report a SOC 2 certification?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>No. It's evidence of what was checked and found, which helps with SOC 2 and GDPR reviews, but it isn't an independent auditor's attestation.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Does it replace a penetration test?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>No. It reads the source code without running the app. Run a penetration test before major releases.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>What happens to my code?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>The review reads only the copy imported into your Think4Ever workspace. It never connects to your computer or your original repository. Reviewers see a summary, the file tree and a limited set of files, with <code>.env</code> values hidden. Files over 400 KB are never read.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Do I have to fix everything inside Think4Ever?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>No. You can send the findings to Claude Code, Cursor or Codex and fix them in your own environment without using Think4Ever credits. See <a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a> to connect your tool.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Will the score go up after I fix things?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Run the review again. Each run is stored with its own score and verdicts, so you can track progress and spot regressions.</p>
</div>
</details>
</div>
</section>

</div>
