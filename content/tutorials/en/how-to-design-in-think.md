---
title: 'How to: Design in Think, Code in Claude'
date: '2026-10-07'
description: 'Learn how to connect Claude Code to Think4Ever and build your project.'
author: 'Sunil'
category: 'Development'
readTime: '5 min read'
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
<p>Think4Ever holds your project's design: concepts, requirements, flows, UI screens and tasks. Claude Code writes the code. The Think MCP server connects the two, so Claude Code reads your Think design and builds against it.</p>

<p class="mt-4">This guide shows you how to:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Connect a Claude Code project to Think4Ever in about two minutes</li>
<li>Pick how and where the code gets built</li>
<li>Build, test and run the app on a public Think4Ever URL</li>
<li>Keep Think4Ever and your code in sync</li>
</ul>

<p class="mt-4">The same steps work with any coding agent that supports MCP, such as Cursor or OpenAI Codex.</p>

<p class="mt-4"><strong>Who it's for.</strong> If you work alone on a small project, Claude Code on its own may be enough. Use Think4Ever with Claude Code when several developers share a project, or when you need to see and control the business flows behind it. Think4Ever keeps the shared "brain" of the project, so team members can work in parallel from their own Claude Code sessions.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-1.jpg" alt="How the parts connect" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-400 mt-3 italic">How the parts connect</figcaption>
</figure>

<p>Claude Code reads the design from your Think4Ever project and writes code into the Think4Ever workspace, where the app runs.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Before you start</h2>
<p>You need:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>A Think4Ever account and a project with its concept in place (requirements, flows and, ideally, UI screens)</li>
<li>Claude Code installed on Windows or macOS</li>
<li>An empty folder on your computer for this project</li>
<li>Optional: Git or another version control system, if you want the code in your own repository</li>
</ul>

<p class="mt-4"><strong>Tip:</strong> design the UI screens in Think4Ever before you start coding. The demo app skipped this step, so Claude Code designed the screens itself. When the screens are planned in Think4Ever first, the app is built screen by screen against them and the result looks much better.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 1: Connect Claude Code to Think4Ever</h2>
<p>You connect once per project. It takes about two minutes.</p>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li>Create a folder for the project on your computer, open a terminal, <code>cd</code> into it and start Claude Code.</li>
<li>In Think4Ever, open your project and choose <strong>MCP & Tools → Claude Code</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-2.jpg" alt="MCP and Tools menu" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li>Click <strong>Create token</strong> and copy the token right away. It is shown only once. You can manage or revoke tokens later under <strong>API → Access Tokens</strong>.</li>
<li>Copy the <strong>Add the server</strong> command from the same page. It looks like this:</li>
</ol>

<div class="my-6">
<pre class="bg-gray-50 rounded-xl p-4 overflow-x-auto text-sm border border-gray-200"><code>claude mcp add think4ever \
  --transport http https://&lt;your-think4ever-cell&gt;/mcp \
  --header "Authorization: Bearer &lt;your-token&gt;"</code></pre>
</div>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-3.jpg" alt="MCP Claude Code page" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="5">
<li>Paste the command into your terminal, or into Claude Code and let it run it. Claude Code confirms that the think4ever MCP server is added and connected.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-4.jpg" alt="Claude Code terminal setup" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li>Restart Claude Code in the same folder. Tools from a new MCP server load only in a new session. You can also run <code>/mcp</code> to confirm they are loaded.</li>
<li>Check the connection. Ask Claude Code something like <em>"Do you see my Think4Ever project?"</em> It should name your project.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-5.jpg" alt="Checking connection with Claude Code" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">To share the setup with your team, the same page also offers <code>--scope user</code> (available in every project) and a <code>.mcp.json</code> file you can commit to the repo.</p>

<p class="mt-4">Once connected, Claude Code can use the Think MCP tools to read and change your project:</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Area</th><th class="px-6 py-3 border border-gray-200">What the agent can do</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">Projects</td><td class="px-6 py-4 border border-gray-200">List, get, create and update projects</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">Concept</td><td class="px-6 py-4 border border-gray-200">Get the active concept, list technology options</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">Tasks</td><td class="px-6 py-4 border border-gray-200">List tasks, get a task</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">Files</td><td class="px-6 py-4 border border-gray-200">Get the file tree, search files, search inside files, find and replace, delete files</td></tr>
</tbody>
</table>
</div>

<p>To see every tool, open <strong>MCP & Tools → Tools & Test</strong> in your Think4Ever project and click <strong>List MCP tools</strong>.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-6.jpg" alt="MCP Tools list" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 2: Choose how to build</h2>
<p>Ask Claude Code how you can develop this project, for example: <em>"Which development options do we have?"</em> You don't need to say local or cloud. The Think MCP server already tells Claude Code about the options, and it lists them for you.</p>

<p class="mt-4">In every scenario you design in Think4Ever. What changes is who builds the code and where it runs.</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Scenario</th>
<th class="px-6 py-3 border border-gray-200">Who builds</th>
<th class="px-6 py-3 border border-gray-200">Where it runs</th>
<th class="px-6 py-3 border border-gray-200">AI usage</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">1. Design in Think4Ever, build in Think4Ever</td>
<td class="px-6 py-4 border border-gray-200">Think4Ever agents (Developer, Database, Security, Test Cases and others) write the code from your design</td>
<td class="px-6 py-4 border border-gray-200">Think4Ever cloud</td>
<td class="px-6 py-4 border border-gray-200">Think4Ever AI credits</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-medium">2. Design in Think4Ever, build locally with Claude Code</td>
<td class="px-6 py-4 border border-gray-200">Claude Code reads the design through MCP and builds the app in your local folder</td>
<td class="px-6 py-4 border border-gray-200">Your machine. You run the app server, database and services locally (for example Node and MySQL)</td>
<td class="px-6 py-4 border border-gray-200">Your Claude Code plan</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">3. Design in Think4Ever, build in Think4Ever cloud through Claude Code (recommended)</td>
<td class="px-6 py-4 border border-gray-200">Claude Code reads the design and writes the code straight into your Think4Ever workspace</td>
<td class="px-6 py-4 border border-gray-200">Think4Ever cloud tools: app server, database, services and a public URL</td>
<td class="px-6 py-4 border border-gray-200">Your Claude Code plan</td>
</tr>
</tbody>
</table>
</div>

<p class="mt-4">Claude Code may use its own names for these. In the demo it called them "Develop inside think4ever" (scenario 1), "Develop locally with me" (scenario 2) and "Hybrid" (scenario 3).</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-7.jpg" alt="Claude Code development options" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4"><strong>Recommended: scenario 3.</strong> Claude Code does the coding on your own plan, and Think4Ever keeps the design, the hosted app and its database in one place your team shares.</p>

<p class="mt-4">For scenario 3, Claude Code then asks <strong>how the code should get built inside Think4Ever</strong>. Choose <strong>I write it into think4ever</strong>. Claude Code then writes every file straight into your Think4Ever workspace. The other choices hand the coding to Think4Ever agents, which is scenario 1 and uses Think4Ever AI credits.</p>

<p class="mt-4">If Claude Code starts writing files locally anyway, tell it <em>"not locally"</em>. It asks whether to delete the local scaffold and switches to writing into Think4Ever.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-8.jpg" alt="Choosing how code gets built" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Step 3: Build, test and run the app</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Start development.</strong> Tell Claude Code to start building. It writes files into your Think4Ever project, and you can watch them appear in the project's file explorer as they are written.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-9.jpg" alt="Watching files appear in Think4Ever" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Start the service.</strong> Tell Claude Code to start the service. Think4Ever hosts the app and gives you a public URL that anyone can open. Share that URL with Claude Code.</li>
<li><strong>Let Claude Code test it.</strong> Claude Code opens the public URL in a browser, checks the pages and fixes the bugs it finds. All debugging happens in Claude Code.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-10.jpg" alt="Claude Code testing the app" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Add demo data.</strong> A new app is empty. Ask Claude Code to <em>"also add demo data"</em>. In the demo, it added a seed script with demo artists and tracks with cover art.</li>
<li><strong>Let Think4Ever fix issues too.</strong> The Think4Ever agent can spot issues in the code Claude Code submitted. Submit them for fixing from Think4Ever. Here, two agents work on the same project.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-11.jpg" alt="Think4Ever and Claude Code working together" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li><strong>Review and iterate.</strong> Open the public URL, check the app, and ask Claude Code for any design or feature changes.</li>
</ol>

<p class="mt-4"><strong>Control how hard Claude Code thinks.</strong> In Claude Code you can set the effort level (for example high, medium or max). Higher effort means longer reasoning on each step and more token use.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Tips and troubleshooting</h2>

<p class="mt-4"><strong>Claude Code builds locally even though I said to build in Think4Ever.</strong> Claude Code doesn't always follow instructions. It may build and test on your machine first, then push to Think4Ever. If you don't want that, say clearly at the start: <em>"Do not run anything locally. Build and run only inside Think4Ever."</em> Remind it if it drifts.</p>

<p class="mt-4"><strong>Two agents are overwriting each other's code.</strong> Don't let Claude Code and the Think4Ever agent change the same files at the same time. Wait for one to finish, or stop one, before the other starts.</p>

<p class="mt-4"><strong>The app in Think4Ever doesn't show my latest changes.</strong> Claude Code may still be deploying, or it may have built locally and not pushed yet. Wait for the deploy to finish, then run the app again in Think4Ever.</p>

<p class="mt-4"><strong>Links point to a local database after moving the code.</strong> Code first written for your machine (database links, connection strings) has to be updated before it runs in Think4Ever. Ask Claude Code to fix them for the Think4Ever environment.</p>

<p class="mt-4"><strong>Think4Ever's concept is out of date after coding.</strong> Ask Think4Ever to start a fresh scan of the code. It updates the project structure and concepts to match.</p>

<p class="mt-4"><strong>Version control.</strong> You have two choices: keep the code locally and connect Git or SVN from your machine, or use Think4Ever's version control. Pick the one that fits your team.</p>

<p class="mt-4"><strong>Working as a team.</strong> Give teammates access to the Think4Ever project. Each one connects their own Claude Code session (Step 1) and works in parallel without breaking each other's work.</p>

<p class="mt-4"><strong>Other coding agents.</strong> Cursor, OpenAI Codex and other agents that support MCP connect the same way and get the same Think MCP tools.</p>
</section>

</div>