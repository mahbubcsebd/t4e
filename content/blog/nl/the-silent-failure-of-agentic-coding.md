---
title: "Specificatiedrift: het stille falen van agentisch programmeren"
description: "Context is geen naleving: waarom coderingsagents ontwerp als hun harnas nodig hebben, en hoe Gap Analysis de code terugbrengt naar wat u bedoelde."
date: "23 november 2026"
readTime: "6 min leestijd"
category: "Product"
author: "Sunil Kishen"
image: "/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Een coderingsagent gedetailleerde context geven, zelfs een compleet ontwerp, betekent niet dat hij de applicatie bouwt die u bedoelde. Hij bouwt iets dat draait, terwijl het ongemerkt van de specificatie afdrijft. Wij noemen dit spec drift, en de agent zal u dat niet vertellen.</p>
<p class="mt-4">We bouwden think4ever Gap Analysis, onze nieuwste functie, om dit op te sporen. Dit is wat het vond in een echt project.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Wat we vonden</h2>
<p>We koppelden een echt klantproject via de Think MCP-server aan Claude Code. Het volledige ontwerp stond ter beschikking van de agent: meer dan 100 schermen, 34 bedrijfsprocessen, 92 bedrijfsregels, 26 rollen en 126 data-objecten. Claude Code las het en bouwde de app, fase voor fase.</p>
<p class="mt-4">Daarna maten we de code af aan het ontwerp. De eerste analyse van één fase vond 72% van het ontwerp terug in de code. De eerste analyse van de volgende fase vond 8%.</p>
<p class="mt-4">Dit was geen zwakke prompt of ontbrekende specificatie. De agent had alles. De hiaten zijn van het soort dat af lijkt en het niet is:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Schermen en velden die ontbreken, terwijl de hoofdschermen werkten.</li>
<li>Processen die bij het ideale pad stopten, zonder uitzonderingen, goedkeuringen en latere stappen.</li>
<li>Bedrijfsregels die niet worden afgedwongen, ook al stonden ze in het ontwerp dat de agent las.</li>
<li>Functies met de juiste namen en lege inhoud, die in een samenvatting af lijken.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Waarom het gebeurt</h2>
<p>Dit is geen fout van één tool. Zo werken de coderingsagents van vandaag:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Ze optimaliseren voor "het draait".</strong> Compilers, tests en de browser vertellen de agent dat de code werkt. Niets vertelt hem dat de code compleet is.</li>
<li><strong>Context drijft af, dus de code drijft af van de specificatie.</strong> Een echt ontwerp is groot. Tijdens een lange sessie vallen delen ervan uit het werkgeheugen van de agent, en aannemelijke aannames vullen de gaten. Contextdrift is de oorzaak; spec drift is het gevolg.</li>
<li><strong>"Klaar" wordt door de agent zelf gemeld.</strong> De agent bepaalt wanneer hij stopt en beoordeelt zijn eigen werk.</li>
</ul>
<p class="mt-4">Snelheid en context zijn geen conformiteit. Spec drift is stil: zonder onafhankelijke controle tegen het ontwerp blijft de kloof tussen "het draait" en "het is wat we bedoelden" onzichtbaar tot gebruikers hem vinden.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Ontwerp is het harnas</h2>
<p>Dit is het sterkste argument om eerst te ontwerpen. Zonder ontwerp is agentisch programmeren ad hoc: de agent verzint schermen, data en processen onderweg, en niemand kan zeggen wat er ontbreekt, omdat niets bepaalt wat er zou moeten zijn.</p>
<p class="mt-4">Met een ontwerp in think4ever heeft "klaar" een definitie. Maar het ontwerp aan de agent geven levert alleen context op. Een harnas heeft ook een terugkoppelingslus nodig die de code afmeet aan het ontwerp en de hiaten terugstuurt. Dat is wat Gap Analysis toevoegt.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Kennismaken met think4ever Gap Analysis</h2>
<p>Gap Analysis is onze nieuwste think4ever-functie. Het toont wat er gebouwd is en wat nog ontbreekt: het vergelijkt uw think4ever-ontwerp met de code in uw project en geeft elk onderdeel een percentage.</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Elk onderdeel van het ontwerp krijgt een score:</strong> schermen tot op elk veld en elke knop, bedrijfsprocessen stap voor stap, data-objecten, bedrijfsregels, API-endpoints, rollen en meer. Rood is grotendeels afwezig, oranje is deels gebouwd, groen is gebouwd.</li>
<li><strong>Elke score heeft een reden:</strong> wat er gevonden is, wat ontbreekt en de code zelf, met het hiaat gemarkeerd.</li>
<li><strong>Bevindingen worden taken:</strong> "Create tasks from the findings" (Taken maken van de bevindingen) zet elk hiaat op het takenbord, met een subtaak voor elk ontbrekend punt.</li>
<li><strong>Het werkt vanuit uw coderingsagent:</strong> Claude Code, Cursor of Codex kan via MCP een analyse starten, de hiaten lezen en verhelpen, bijvoorbeeld "Dicht de hiaten van deze taak en controleer opnieuw."</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">De gesloten lus</h2>
<p class="rounded-xl bg-[#eaf1ff] px-5 py-4 text-center text-sm font-bold text-[#1b30a7] md:text-base">Ontwerpen &rarr; Bouwen &rarr; Code terugbrengen &rarr; Gap Analysis &rarr; Taken &rarr; Herstellen &rarr; Opnieuw controleren</p>
<ol class="list-decimal pl-6 mt-6 space-y-3">
<li><strong>Ontwerp in think4ever:</strong> concept, processen, data, regels en UI-schermen.</li>
<li><strong>Bouw</strong> met Claude Code via MCP, of met Cursor, Codex of de think4ever-agents.</li>
<li><strong>Breng de code terug</strong> naar think4ever en voer Gap Analysis uit tegen het ontwerp.</li>
<li><strong>Maak de takenlijst</strong> van de bevindingen.</li>
<li><strong>Geef de taken aan Claude Code</strong> om te herstellen en breng de herstelde code terug.</li>
<li><strong>Controleer opnieuw</strong> en herhaal tot de onderdelen die ertoe doen groen zijn.</li>
</ol>
<p class="mt-4">De coderingsagent doet het werk. Het ontwerp bepaalt wanneer het klaar is.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">In de praktijk: een echt project door de cyclus</h2>
<p>De onderstaande schermen komen uit een echt klantproject, een productie-ERP dat in think4ever is ontworpen en door Claude Code via MCP is geprogrammeerd, terwijl het deze cyclus doorloopt. Identificerende details zijn vervaagd.</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Fase</th><th class="py-3 px-4 font-bold border-b border-gray-200">Eerste analyse</th><th class="py-3 px-4 font-bold border-b border-gray-200">Na het dichten van hiaten</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Fase 2</td><td class="py-3 px-4">72%</td><td class="py-3 px-4">94% een dag later</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Fase 3</td><td class="py-3 px-4">8%</td><td class="py-3 px-4">87%, daarna 95% twee dagen later</td></tr>
</tbody>
</table>
</div>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg" alt="Gap Analysis in think4ever: elke analyse bewaard per datum en fase, met de score voor elk onderdeel van het ontwerp." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Elke analyse wordt bewaard per datum en fase: Fase 3 ging van 8% naar 87% naar 95%, en Fase 2 van 72% naar 94%.</figcaption>
</figure>
<p class="mt-4">Bij 95% was elk van de 90 items in de fase gebouwd. Toch vond de analyse nog wat het belangrijkst is: bedrijfsregels. Het bevestigen van een snijplan vergrendelde het niet zoals ontworpen, en de regel "geen kleurmenging in een leg" had geen afwijspad in de code. Dit zijn de hiaten die een demo doorstaan en in productie falen, en het eigen gevoel van "klaar" van de agent signaleerde ze niet.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-2.jpg" alt="Het Gap Analysis-resultaat van 95%: 90 items gecontroleerd, met de resterende regelhiaten uitgelicht in de samenvatting." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">De analyse van 95%: 90 items gecontroleerd tegen meer dan 1.100 bestanden, met de resterende regelhiaten uitgelicht in de samenvatting.</figcaption>
</figure>
<p class="mt-4">De 65 resterende open punten werden 65 taken met 53 subtaken, zonder een agent te draaien of credits te gebruiken. De taken gaan naar Claude Code om te herstellen, de code komt terug en Gap Analysis controleert opnieuw.</p>
<figure class="my-8">
<div class="w-full md:max-w-md mx-auto overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-3.jpg" alt="Het venster Create tasks from the findings, dat 65 open punten omzet in 65 taken met 53 subtaken." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Taken maken van de bevindingen: elk hiaat wordt een taak voor het team of de coderingsagent.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">De conclusie</h2>
<p>Vraag een coderingsagent niet te beoordelen of hij gebouwd heeft wat u bedoelde. Geef hem een ontwerp en meet de code daarna elke keer af aan dat ontwerp.</p>
<p class="mt-4">Coderingsagents zijn snel en capabel, en een ontwerp via MCP maakt ze veel beter. Maar zelfs met volledige context leveren ze niet betrouwbaar de bedoelde applicatie. Ontwerp bepaalt wat "klaar" betekent. Gap Analysis meet het, zet de hiaten om in taken en sluit de lus tot de code aan het ontwerp voldoet.</p>
<p class="mt-4">Probeer think4ever Gap Analysis op uw eigen project: <a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">think4ever.com/docs/gap_analysis/</a></p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Meer informatie</h2>
<ul class="list-disc pl-6 space-y-2">
<li><a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Gap Analysis-documentatie</a>: een analyse uitvoeren, de resultaten lezen en de hiaten dichten</li>
<li><a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Tutorial: Design in Think, Code in Claude</a>: koppel Claude Code via MCP aan uw think4ever-ontwerp</li>
<li><a href="https://think4ever.com/docs/mcp_claude_code/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Think MCP met Claude Code</a>: installatie en tools</li>
<li><a href="/blog/white-paper-think-design-redefining-the-ai-coding-harness-for-enterprise-software-development/" class="text-[#1b30a7] hover:underline font-medium">White paper: Think Design, Redefining the AI Coding Harness</a>: waarom ontwerp het harnas is</li>
<li><a href="/blog/architecture-first-agentic-development-with-think4ever/" class="text-[#1b30a7] hover:underline font-medium">Architectuur-eerst agentische ontwikkeling met think4ever</a></li>
<li><a href="/tutorials/design-artifacts-guide/" class="text-[#1b30a7] hover:underline font-medium">Zet de Blueprint aan het werk</a>: think4ever-ontwerpartefacten gebruiken in de hele SDLC</li>
</ul>
</section>
</div>
