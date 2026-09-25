---
title: "From Prototype to Production"
description: "Think4Ever Production Hardening: a production-readiness and governance layer for AI-generated applications"
date: "September 25, 2026"
readTime: "7 min read"
category: "Production"
author: "Sunil Kishen"
image: "/images/blog/blog-5-img-1.jpg"
---

<div class="space-y-8 text-gray-600">
<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
<p>AI builders have changed how software gets started. Platforms such as Lovable, Bolt, v0 and Replit, and coding agents such as Claude Code, Codex and Cursor, can take an idea to a working application in hours. What they optimize for is the happy path: a convincing interface and a flow that works in a demo.</p>

<p class="mt-4">Production is a different question. An application that real users depend on has to withstand the wrong user, malformed input, a failed dependency, a traffic spike, an incident at 2 a.m., and the engineer who inherits the code six months later. Security is one part of that, and the leading builders have begun to address it directly with built-in scanning. The rest of the gap, covering configuration, reliability, observability, operations, testing and compliance evidence, remains largely unaddressed, and it widens the moment an application leaves the platform it was built on.</p>

<p class="mt-4">Think4Ever Production Hardening closes that gap for any AI-generated codebase, regardless of which tool produced it. It first builds a structured understanding of the system (its business flows, roles and data), then has one reviewer agent per pillar audit it against a production-readiness checklist spanning nine pillars. Every finding cites the files and lines it is based on. When fixes are handed to Think4Ever's own developer agent, the planned file changes are listed first and nothing is written until the user confirms; alternatively, the findings can be handed, as a ready-to-use fix request over MCP, to the coding agent the team already uses. The result is a Production Readiness Score, a PDF report, and a review that can be re-run at any time from the app, the REST API or MCP so that later changes are checked again.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">The Production Gap Is Wider Than Security</h2>
<p>AI-generated applications tend to fail production standards in predictable ways. Across the codebases we review, the gaps fall into nine pillars:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Security:</strong> permissive Row Level Security policies, missing server-side authorization, weak session handling, secrets committed to source or shipped in client bundles, and missing rate limiting, security headers, input validation and dependency hygiene.</li>
<li><strong>Configuration & Environment:</strong> hardcoded parameters, unvalidated environment variables, and no protection against configuration drift between environments.</li>
<li><strong>Reliability & Error Handling:</strong> no standard error boundaries, unhandled exceptions, raw stack traces returned to users, and no fallback behavior when dependencies fail.</li>
<li><strong>Data & Database:</strong> no versioned schema migrations, unbounded or per-request database connections, missing constraints and indexes, and no backup or restore strategy.</li>
<li><strong>Observability:</strong> no structured logging, no request logging or correlation IDs, and no error tracking or metrics, so problems are discovered by users first.</li>
<li><strong>Performance & Scalability:</strong> per-process in-memory state that breaks with more than one instance, no compression or caching, unpaginated lists and N+1 queries, and long-running work done inside the request cycle.</li>
<li><strong>Build, Deploy & Operations:</strong> unpinned runtimes and missing lockfiles, no CI pipeline that runs tests and lint, containers running as root or with secrets baked into the image, and no runbook documenting environment variables, deployment and rollback.</li>
<li><strong>Testing & Quality:</strong> little or no automated unit, integration or end-to-end coverage, leaving the application fragile to the next round of AI-generated changes.</li>
<li><strong>Privacy & Compliance:</strong> personal data stored without minimization, encryption or a deletion path, and no audit trail for admin, payment and permission-changing actions, which enterprise review, SOC 2 and GDPR programs expect.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What the market already covers</h2>
<p>The security pillar is no longer unaddressed, and that is good news. Lovable, for example, now runs an automatic security scan before an app is published, covering RLS policies, database configuration and dependency vulnerabilities, with opt-in auto-fix, deeper on-demand scans and third-party penetration testing. Standalone scanners and manual audit services cover similar ground for other builders.</p>

<p class="mt-4">Think4Ever is designed to complement these tools, not replace them. Platform scanners see the application as it runs on that platform, and they concentrate on the security configuration of that platform's stack. They do not cover code written with general-purpose coding agents, applications that have been exported and extended, or the eight pillars beyond security. And a scan that runs at publish time cannot tell a team whether its application can be deployed, monitored and operated without the platform at all.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">How Think4Ever Production Hardening Works</h2>
<p>Production Hardening is one of three entry points in Think4Ever, alongside analyzing an existing codebase and designing a system from intent. All three share the same foundation: a structured model of the system that the agents reason over, rather than a file-by-file scan.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/blog-5-img-1.jpg" alt="Production hardening is selected from the Think4Ever onboarding screen." class="w-full h-auto" />

<figcaption class="mt-4 text-center text-sm italic text-gray-500">Figure 1. Production hardening is selected from the Think4Ever onboarding screen.</figcaption>
</figure>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 1: Import and system understanding</h3>
<p>The user selects Production hardening on the Think4Ever onboarding screen and imports the codebase, either from a public GitHub repository URL (optionally a specific branch) or by uploading a ZIP file; private repositories are imported as a ZIP. The code can come from a vibe coding platform such as Lovable, from a coding agent, or from a conventional team; Think4Ever detects the technology stack rather than assuming one. The platform then runs its code analysis to build the concept structure of the system: business flows with the role, screen and data objects of every step, roles and permissions, and data objects. The review waits for this concept build to finish before grading, because the reviewers grade every check against those flows.</p>

<p class="mt-4">This step is what separates Think4Ever from pattern-based scanners. Because reviewers know which flows handle which data and which roles are meant to reach them, they can judge whether authorization is actually enforced where it matters, not merely whether an auth library is present.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 2: Multi-pillar assessment by reviewer agents</h3>
<p>Once the concept structure is available, one reviewer agent per pillar walks that pillar's checks. Each reviewer receives the concept summary, the detected technology profile, the workspace file tree, the key files (dependency manifests, Dockerfile, CI configuration, README and entry points; values in .env files are redacted so only variable names are visible) and the checks with their grading instructions, and it can request further source files in up to three rounds of eight files each. The review is a static reading of the source: it does not build, run or execute the tests of the reviewed application. The current checklist contains 39 checks across the nine pillars, each with a stable identifier (for example SEC-03, Server-side authorization on every endpoint). Progress is shown live as each pillar completes, and the review continues if the user closes the window.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/blog-5-img-2.jpg" alt="Reviewer agents working through the checklist, with live status for each pillar." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Figure 2. Reviewer agents working through the checklist, with live status for each pillar.</figcaption>
</figure>

<p class="mt-4">Each check resolves to Passed, Warning, Failed or Not applicable, and warnings and failures carry a severity. Checks that structurally cannot apply to the detected stack (for example Row Level Security for a project with no client-exposed database) are marked Not applicable before any agent call; if a reviewer returns no verdict for a check, the check is recorded as an error and shown under Not applicable. Crucially, every result explains its reasoning and cites the evidence behind it. In Figure 3, for instance, the reviewer notes that data access is safe from SQL injection because every query uses SQLAlchemy's bound parameters, citing the exact line ranges, yet still grades the input-validation check as a Warning for the remaining gaps, while failing the application on security headers because neither service sets a CSP, HSTS or related headers.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/blog-5-img-3.jpg" alt="Findings cite the specific files and lines they are based on." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Figure 3. Findings cite the specific files and lines they are based on.</figcaption>
</figure>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 3: The Production Readiness Score</h3>
<p>Findings are synthesized into an overall Production Readiness Score from 0 to 100 and a letter grade, alongside counts of failed, warning, passed and not-applicable checks and a plain-language summary of the most urgent issues. Each report records when it was run and how long it took, the detected stack, the number of files scanned, the model used and the number of model calls, so successive runs can be compared in the review history. The report can be exported as a PDF.</p>

<div class="bg-blue-50/50 p-6 rounded-lg border border-blue-100 mt-6">
<p class="text-sm"><strong>Scoring method.</strong> The score is the share of applicable checks that pass, with a warning counting as half a pass: score = 100 &times; (passed + 0.5 &times; warnings) &divide; (passed + warnings + failed), rounded to a whole number. Not applicable checks, and checks for which no verdict was returned, are excluded from both sides of the fraction, so they neither raise nor lower the score. Severity does not change the score; it orders the fixes. Grades: A for 90 and above, B for 75 to 89, C for 60 to 74, D for 40 to 59 and E below 40. The number of checks can differ between runs because the checklist is versioned (36 checks until 22 September 2026, 39 since three security checks on Row Level Security, secret injection and zero-trust authentication were added) and because a run stopped by the user or by a server restart records its remaining checks as not reviewed. Verdicts are model judgements, so two runs on unchanged code can differ by a few points.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 4: Reviewed remediation</h3>
<p>Selecting Fix findings (or Fix this check on a single finding) first asks where to fix: with Think4Ever's agents in DEV mode, or with the team's own coding tool over MCP. A bulk hand-off covers every failed check plus the critical- and high-severity warnings, up to 12 findings at a time. In DEV mode the developer agent reads the cited evidence files and, before its first change, presents a plan listing every file it will create, update or delete, what each change does and which checks it addresses. Nothing is modified until the user selects Confirm & Apply; Reject discards the plan.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/blog-5-img-4.jpg" alt="The developer agent's plan in DEV mode for a Rust service" class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Figure 4. The developer agent's plan in DEV mode for a Rust service, listing each file to be created or updated and the checks it resolves; nothing changes until Confirm & Apply.</figcaption>
</figure>

<p class="mt-4">Fixes can be carried out in two ways. Think4Ever's own developer agent can apply them in DEV mode, using platform credits. Or the user copies a fix request, which contains the findings with their evidence and recommendations plus the thinkMCP calls that fetch the full results and grading rules, into Claude Code, Cursor or Codex; the external tool edits the team's local checkout under its own subscription, and no platform credits are used. Teams that have standardized on an agent keep their existing workflow and review process; Think4Ever supplies the diagnosis and the fix request. Because the review audits the copy of the code in the Think4Ever workspace, code fixed locally must be imported again (or written back through the files API) before a re-run can verify it.</p>

<div class="bg-blue-50/50 p-6 rounded-lg border border-blue-100 mt-6 mb-6">
<p class="text-sm"><strong>Change verification.</strong> Changes made in DEV mode are written directly to the project's workspace files, not as a pull request or an automatic commit; committing and pushing to GitHub, GitLab or Bitbucket is done by the user from the Version Control window. The developer agent has a terminal and is instructed to run the project's existing tests or lint after a change when they exist, but the build and test suite are not run before changes are proposed, and tests are not generated before refactoring code that has none. The verification of a fix is the next review run.</p>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 5: Operations and lifecycle governance</h3>
<p>Hardening does not end with the first set of fixes. Every run is stored with its score, verdicts and detected stack, and the review history shows how readiness moves between runs. The review can be started and read from the app, from the REST API (POST /v1/projects/{id}/hardening/run with a scoped access token) and from MCP, so a team can trigger it from its own tooling. The checklist also grades whether the project itself has a CI pipeline that runs tests and lint (OPS-02), a hardened container (OPS-03) and a runbook covering deployment and rollback (OPS-04), and the fix request covers those gaps like any other.</p>

<p class="mt-4">This matters because AI-assisted development continues after hardening. The next generated feature can reintroduce a hardcoded secret or remove an authorization check. Re-running the review after each round of changes, before release, means a readiness regression is caught before production rather than by users.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Worked Examples</h2>
<p>The following runs are drawn from Think4Ever reviews conducted in September 2026 and show the kinds of issues the product surfaces on real codebases.</p>

<h3 class="text-xl font-bold text-gray-900 mt-6 mb-4">A Lovable-built messaging frontend</h3>
<p>Natter is a TypeScript React/Vite frontend built with Lovable. The review covered 86 files and completed in under six minutes. It scored 57 (Grade D): 2 failed checks, 15 warnings, 5 passed and 17 not applicable.</p>

<p class="mt-4">The most urgent finding was SEC-03. User identity in the application is entirely client-supplied, and the app connects to a public demo NATS message broker with no authorization, so any connected user can impersonate any other. Because the application has no database, a scan focused on database configuration and RLS policies would have nothing to flag here; the problem only becomes visible when a reviewer understands how messages flow and who is supposed to send them.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/blog-5-img-5.jpg" alt="The Natter readiness report" class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Figure 5. The Natter readiness report, with the most urgent findings summarized in plain language.</figcaption>
</figure>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">A Flask and Astro service outside any vibe coding platform</h3>
<p>The second example is a Python (Flask, SQLAlchemy) API with an Astro frontend and a Dockerfile for the frontend. It was not built on a vibe coding platform. The review, run on 22 September 2026 with the 36-check version of the checklist, covered 91 files in six minutes and scored 39 (Grade E): 9 failed, 16 warnings, 3 passed, 5 not applicable, and 3 checks in the Configuration pillar for which the reviewer returned no verdict (shown under not applicable). Findings included missing security headers (High), no rate limiting anywhere in the stack (Medium), and an unmonitored Python dependency tree alongside a well-maintained Node one (Medium).</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">A Rust key-management service</h3>
<p>Figure 4 shows the plan that the Think4Ever developer agent presented in DEV mode after receiving the fix request for a Rust key-management crate (checks SEC-02 to REL-01). The plan adds a bearer-token authentication interceptor with per-tenant authorization, strict validation of resource names, and environment-driven configuration with safe secret injection. It also removes a command-line flag that accepted the master key directly, and makes the service refuse to run without TLS or authentication unless that is explicitly opted out, with each change mapped to the checks it resolves.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What Teams Get</h2>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>A production-readiness assessment with evidence.</strong> A consistent review across nine pillars, where every finding cites the code it is based on and can be traced by an engineer or a reviewer.</li>
<li><strong>Fixes they control.</strong> A concrete fix request per finding with file:line evidence and a recommendation, applied by Think4Ever's developer agent only after the user confirms its plan, or by the team's own coding agent under that agent's own review flow.</li>
<li><strong>Independence from the platform.</strong> The review reads the code whichever tool produced it and grades what the application needs to run outside a builder's sandbox: environment-driven configuration, health endpoints, hardened containers, a CI pipeline, backups and a runbook, with fix requests the team can apply in any environment.</li>
<li><strong>Readiness that holds.</strong> Repeatable reviews with a stored history, available from the app, the REST API and MCP, so new AI-generated changes are checked before they undo earlier work.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">What the readiness report is, and is not</h2>
<p>The Think4Ever report is evidence. It documents what was checked, what was found and when, with the evidence behind each verdict, and successive reports show what changed. Several checks cover controls that security reviews, SOC 2 programs and GDPR assessments care about, such as the audit trail (PRIV-02), server-side access control (SEC-03, SEC-09) and personal-data handling (PRIV-01). That makes it useful to hand to a security team, an auditor or an investor performing due diligence.</p>

<p class="mt-4">It is not a certification. SOC 2 is an attestation issued by an independent auditor about an organization's controls, not a property of a codebase, and no tool can confer it. Think4Ever helps teams build the controls and assemble the evidence those processes require.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Where Think4Ever Fits</h2>
<p>Think4Ever is intended to sit alongside the tools teams already use. The table below summarizes how the main approaches compare.</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th scope="col" class="px-6 py-3 border border-gray-200">Approach</th>
<th scope="col" class="px-6 py-3 border border-gray-200">What it does well</th>
<th scope="col" class="px-6 py-3 border border-gray-200">Where it stops</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">Built-in platform scanners</td>
<td class="px-6 py-4 border border-gray-200">Fast, automatic security checks at publish time for apps on that platform, often with auto-fix.</td>
<td class="px-6 py-4 border border-gray-200">Limited to that platform's stack and to security configuration; nothing for apps built elsewhere or exported.</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-medium">Standalone security scanners</td>
<td class="px-6 py-4 border border-gray-200">Broad vulnerability detection, dependency and secret scanning, CI integration.</td>
<td class="px-6 py-4 border border-gray-200">Mostly pattern-based; little understanding of business flows, and no coverage of operations, observability or reliability.</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">General coding agents</td>
<td class="px-6 py-4 border border-gray-200">Capable of making almost any fix when told what to do.</td>
<td class="px-6 py-4 border border-gray-200">No standard checklist, no consistent evidence trail, and results depend on how the request is phrased.</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-medium">Manual audits</td>
<td class="px-6 py-4 border border-gray-200">Expert judgment and architectural review.</td>
<td class="px-6 py-4 border border-gray-200">Slow, costly and point-in-time; findings go stale as development continues.</td>
</tr>
<tr class="bg-white hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">Think4Ever Production Hardening</td>
<td class="px-6 py-4 border border-gray-200">System-aware review across nine pillars with cited evidence, fixes approved before they are applied in DEV mode, MCP hand-off to existing agents, and re-runs from the app, REST API or MCP.</td>
<td class="px-6 py-4 border border-gray-200">Complements, rather than replaces, penetration testing and formal compliance audits.</td>
</tr>
</tbody>
</table>
</div>

<p class="mt-4">A practical sequence for most teams is to run the builder's own security scan, harden the codebase with Think4Ever across all nine pillars, re-run the readiness review before each release, and then validate with a penetration test before a major release.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Who It Is For</h2>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Founders and small teams</strong> taking an AI-built product to real users, paying customers or investor due diligence, who need to know what must be fixed first and to have it fixed quickly.</li>
<li><strong>Engineering and platform teams in larger organizations</strong> who are receiving AI-built applications from across the business and need a consistent, evidenced standard before those applications reach production infrastructure.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Data Handling and Trust</h2>
<p>Think4Ever reviews customer source code, so it is held to the same standard it applies to the applications it audits.</p>

<div class="bg-blue-50/50 p-6 rounded-lg border border-blue-100 mt-6 mb-6">
<p class="text-sm"><strong>Data handling.</strong> What follows describes the current implementation.</p>
</div>

<ul class="space-y-4">
<li><strong>What is ingested.</strong> The imported repository archive or uploaded ZIP is extracted into the project's workspace folder on the Think4Ever cell that hosts the customer's account, where it stays with the project. The review reads that workspace copy only; it never connects to the team's local machine or to the original repository.</li>
<li><strong>What the model sees.</strong> For each pillar the reviewer receives the concept summary, the file tree (at most 700 entries, six levels deep), the key files (up to 6,000 characters each, with .env values redacted to variable names) and at most 24 further files it requests (eight per round, three rounds); files larger than 400 KB are never read. The whole repository is not sent to the model.</li>
<li><strong>What is stored.</strong> The run headline (score, grade, counts, stack, model, call count, duration) and every verdict with its finding, evidence snippets and recommendation are stored in the platform database alongside the project's other data, so the history can be compared and exported.</li>
<li><strong>Which models.</strong> The model is selected per work type from the platform defaults or the user's own per-work-type preference, and it is recorded on every run. The platform default is an Anthropic Claude model for cells in the Americas and Europe and GLM-5.2 for cells in Asia-Pacific; customers on a personal-key plan run the review with their own provider key. The September 2026 examples in this paper ran on Anthropic Claude models.</li>
<li><strong>Access.</strong> Every read and write goes through the platform's company-aware ownership check. Over the REST API and MCP, reading a review needs a token with the projects:read scope and starting or stopping one needs agents:submit; tokens can be limited to specific projects.</li>
</ul>
</section>
</div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
<p>AI builders have made the first version of an application dramatically faster to produce, and the leading platforms are rightly investing in securing what they generate. Production readiness, however, spans more than security, and it has to hold across every tool a team uses and every change it makes after launch.</p>

<p class="mt-4">Think4Ever Production Hardening gives teams a system-aware review across nine pillars, findings they can verify line by line, fixes they approve before anything changes when Think4Ever's agents apply them, and reviews they can re-run from the app, the API or their own coding agent so that readiness does not erode. It lets teams keep the speed of AI-assisted development while shipping software they can stand behind.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Appendix: The Production Hardening Checklist</h2>
<p>The 39 checks below are the checklist as implemented on 24 September 2026, grouped by pillar. The default severity is the severity applied to a failure unless the reviewer raises or lowers it for the specific finding. Each check also carries detailed grading instructions for the reviewer, available through the API and MCP (get_hardening_checklist with include_instructions).</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Security (11 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-01</td><td class="px-6 py-4 border border-gray-200">No secrets in the codebase</td><td class="px-6 py-4 border border-gray-200">API keys, passwords, tokens and private keys must never be committed; secrets come from the environment.</td><td class="px-6 py-4 border border-gray-200">Critical</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-02</td><td class="px-6 py-4 border border-gray-200">Authentication & session hardening</td><td class="px-6 py-4 border border-gray-200">Passwords hashed with a strong algorithm, sessions/tokens expire, cookies carry HttpOnly/Secure/SameSite.</td><td class="px-6 py-4 border border-gray-200">Critical</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-03</td><td class="px-6 py-4 border border-gray-200">Server-side authorization on every endpoint</td><td class="px-6 py-4 border border-gray-200">Every route that reads or changes protected data checks the caller's role and ownership on the server.</td><td class="px-6 py-4 border border-gray-200">Critical</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-04</td><td class="px-6 py-4 border border-gray-200">Input validation & injection safety</td><td class="px-6 py-4 border border-gray-200">Untrusted input is validated; SQL/NoSQL/command injection and XSS are prevented.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-05</td><td class="px-6 py-4 border border-gray-200">Security headers & CORS policy</td><td class="px-6 py-4 border border-gray-200">Security headers (helmet/CSP/HSTS) are set and CORS is restricted to known origins.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-06</td><td class="px-6 py-4 border border-gray-200">Rate limiting & brute-force protection</td><td class="px-6 py-4 border border-gray-200">Login and expensive endpoints are rate limited; there is protection against credential stuffing.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-07</td><td class="px-6 py-4 border border-gray-200">Dependency hygiene & known vulnerabilities</td><td class="px-6 py-4 border border-gray-200">Dependencies are pinned via a lockfile and free of well-known vulnerable or abandoned packages.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-08</td><td class="px-6 py-4 border border-gray-200">File upload & path traversal safety</td><td class="px-6 py-4 border border-gray-200">Uploaded files are size/type limited and stored safely; user-supplied paths cannot escape their directory.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-09</td><td class="px-6 py-4 border border-gray-200">Row Level Security & tenant isolation</td><td class="px-6 py-4 border border-gray-200">Database tables exposed to clients (Supabase/PostgREST/Firebase rules/Hasura) enforce row-level policies that match the roles and ownership in the concept; no permissive "allow all" policies.</td><td class="px-6 py-4 border border-gray-200">Critical</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-10</td><td class="px-6 py-4 border border-gray-200">Secret abstraction & runtime injection</td><td class="px-6 py-4 border border-gray-200">Credentials are never embedded in source or client bundles; server-side secrets come from a vault/secret manager or runtime environment, and only publishable keys reach the browser.</td><td class="px-6 py-4 border border-gray-200">Critical</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">SEC-11</td><td class="px-6 py-4 border border-gray-200">Zero-trust auth: token rotation, session lifespan, MFA/SSO hooks</td><td class="px-6 py-4 border border-gray-200">Access tokens are short-lived and refreshed/rotated, sessions expire and can be revoked, and the auth layer has a place to enforce MFA/SSO for enterprise users.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Configuration & Environment (3 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">CFG-01</td><td class="px-6 py-4 border border-gray-200">Environment-driven configuration</td><td class="px-6 py-4 border border-gray-200">All environment-specific values (DB, URLs, keys, feature flags) are read from the environment, not hardcoded.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">CFG-02</td><td class="px-6 py-4 border border-gray-200">Production mode & debug switches</td><td class="px-6 py-4 border border-gray-200">Debug mode, verbose errors and development-only endpoints are off in production.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">CFG-03</td><td class="px-6 py-4 border border-gray-200">Separate settings per environment</td><td class="px-6 py-4 border border-gray-200">Dev, test and production settings are separable (profiles, env files, config layering).</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Reliability & Error Handling (4 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">REL-01</td><td class="px-6 py-4 border border-gray-200">Global error handling</td><td class="px-6 py-4 border border-gray-200">Uncaught errors are caught, logged and turned into safe responses without leaking stack traces.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">REL-02</td><td class="px-6 py-4 border border-gray-200">Graceful shutdown</td><td class="px-6 py-4 border border-gray-200">The process handles SIGTERM/SIGINT: stops accepting requests, finishes in-flight work and closes DB connections.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">REL-03</td><td class="px-6 py-4 border border-gray-200">Timeouts & retries for external calls</td><td class="px-6 py-4 border border-gray-200">HTTP/DB/queue calls have timeouts; transient failures are retried with backoff where appropriate.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">REL-04</td><td class="px-6 py-4 border border-gray-200">Health & readiness endpoints</td><td class="px-6 py-4 border border-gray-200">The service exposes health/readiness endpoints the platform can probe.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Data & Database (5 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">DB-01</td><td class="px-6 py-4 border border-gray-200">Schema migrations & versioning</td><td class="px-6 py-4 border border-gray-200">Database changes are applied through versioned migrations, not ad-hoc scripts.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">DB-02</td><td class="px-6 py-4 border border-gray-200">Connection pooling & limits</td><td class="px-6 py-4 border border-gray-200">Database access uses a bounded connection pool with sane limits and timeouts.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">DB-03</td><td class="px-6 py-4 border border-gray-200">Constraints & data integrity</td><td class="px-6 py-4 border border-gray-200">Tables carry primary keys, foreign keys, NOT NULL and unique constraints where the concept requires them.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">DB-04</td><td class="px-6 py-4 border border-gray-200">Indexes on query paths</td><td class="px-6 py-4 border border-gray-200">Columns used in filters, joins and sorts are indexed.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">DB-05</td><td class="px-6 py-4 border border-gray-200">Backup & restore strategy</td><td class="px-6 py-4 border border-gray-200">There is a documented backup/restore approach for persistent data.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Observability (3 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">OBS-01</td><td class="px-6 py-4 border border-gray-200">Structured logging with levels</td><td class="px-6 py-4 border border-gray-200">Logs are structured (JSON or a logging library), use levels, and never contain secrets or PII.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">OBS-02</td><td class="px-6 py-4 border border-gray-200">Request logging & correlation IDs</td><td class="px-6 py-4 border border-gray-200">Each request is logged with method, path, status, latency and a correlation/request id.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">OBS-03</td><td class="px-6 py-4 border border-gray-200">Error tracking & metrics hooks</td><td class="px-6 py-4 border border-gray-200">Runtime errors and key metrics reach a monitoring tool (Sentry, OpenTelemetry, Prometheus, CloudWatch...).</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Performance & Scalability (4 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">PERF-01</td><td class="px-6 py-4 border border-gray-200">Stateless, horizontally scalable services</td><td class="px-6 py-4 border border-gray-200">No per-process in-memory state (sessions, caches, uploads on local disk) that breaks with more than one instance.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">PERF-02</td><td class="px-6 py-4 border border-gray-200">Compression, caching & static assets</td><td class="px-6 py-4 border border-gray-200">Responses are compressed, static assets have cache headers / hashed names, and expensive reads are cached.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">PERF-03</td><td class="px-6 py-4 border border-gray-200">Pagination & N+1 queries</td><td class="px-6 py-4 border border-gray-200">List endpoints are paginated and loops do not issue one query per row.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">PERF-04</td><td class="px-6 py-4 border border-gray-200">Background work for long tasks</td><td class="px-6 py-4 border border-gray-200">Slow operations (emails, exports, AI calls, reports) run outside the request cycle.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Build, Deploy & Operations (4 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">OPS-01</td><td class="px-6 py-4 border border-gray-200">Reproducible builds & runtime pinning</td><td class="px-6 py-4 border border-gray-200">Lockfiles are committed, the runtime version is pinned (engines/.nvmrc/.python-version/Dockerfile FROM tag) and the container image is lean.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">OPS-02</td><td class="px-6 py-4 border border-gray-200">CI pipeline runs tests & lint</td><td class="px-6 py-4 border border-gray-200">Every push runs the test suite and linters automatically.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">OPS-03</td><td class="px-6 py-4 border border-gray-200">Hardened container / process runtime</td><td class="px-6 py-4 border border-gray-200">Containers run as a non-root user, define a HEALTHCHECK and do not bake secrets into the image.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">OPS-04</td><td class="px-6 py-4 border border-gray-200">Runbook & environment documentation</td><td class="px-6 py-4 border border-gray-200">README documents setup, every required env var, how to run migrations and how to deploy/rollback.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Testing & Quality (3 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">QA-01</td><td class="px-6 py-4 border border-gray-200">Automated tests cover critical paths</td><td class="px-6 py-4 border border-gray-200">Unit/integration tests exist for the core business flows in the concept and can run headlessly.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">QA-02</td><td class="px-6 py-4 border border-gray-200">Linting & formatting configured</td><td class="px-6 py-4 border border-gray-200">A linter and formatter are configured and wired into scripts/CI.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">QA-03</td><td class="px-6 py-4 border border-gray-200">Type safety / static analysis</td><td class="px-6 py-4 border border-gray-200">Typed languages use strict settings; dynamic languages use type hints and a checker where practical.</td><td class="px-6 py-4 border border-gray-200">Low</td></tr>
</tbody>
</table>
</div>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Privacy & Compliance (2 checks)</h3>
<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Check</th><th class="px-6 py-3 border border-gray-200">Title</th><th class="px-6 py-3 border border-gray-200">What the check requires</th><th class="px-6 py-3 border border-gray-200">Default severity</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">PRIV-01</td><td class="px-6 py-4 border border-gray-200">PII handling & data minimization</td><td class="px-6 py-4 border border-gray-200">Personal data is identified, stored only when needed, encrypted where sensitive and deletable on request.</td><td class="px-6 py-4 border border-gray-200">High</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">PRIV-02</td><td class="px-6 py-4 border border-gray-200">Audit trail for sensitive actions</td><td class="px-6 py-4 border border-gray-200">Admin and money/permission-changing actions are recorded with who/when.</td><td class="px-6 py-4 border border-gray-200">Medium</td></tr>
</tbody>
</table>
</div>
</section>
</div>
