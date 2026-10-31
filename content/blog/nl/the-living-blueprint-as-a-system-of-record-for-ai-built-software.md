---
title: "Context is geen intentie: De Living Blueprint als System of Record voor met AI gebouwde software"
description: "Hoe een levende, goedgekeurde blauwdruk AI-coderingsagenten aanvult, en waarom het een andere categorie is dan code search en automatisch gegenereerde repository-wiki's."
date: "20 oktober 2026"
readTime: "8 min leestijd"
category: "Architectuur"
author: "Sunil Kishen"
image: "/images/blog/the-living-blueprint-as-a-system-of-record-for-ai-built-software/the-living-blueprint-as-a-system-of-record-for-ai-built-software-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Context is geen intentie: De Living Blueprint als System of Record voor met AI gebouwde software</h2>
<p class="text-lg font-medium text-gray-700 mb-6">Hoe een levende, goedgekeurde blauwdruk AI-coderingsagenten aanvult, en waarom het een andere categorie is dan code search en automatisch gegenereerde repository-wiki's</p>

<p>AI maakte code goedkoop. Het maakte code niet correct.</p>

<p class="mt-4">Een ontwikkelaar kan nu aan Claude Code of Cursor vragen om een kortingsfunctionaliteit op het bestelscherm toe te voegen en binnen één sessie een werkend eindpunt, een gebruikersinterface en tests gereed hebben. Het moeilijke gedeelte is verschoven. De vraag is niet langer &ldquo;kunnen we dit schrijven?&rdquo; maar &ldquo;is dit wat we hebben afgesproken te bouwen, past het in de rest van het systeem, en kunnen we aantonen dat het veilig is om uit te rollen?&rdquo; Coderingsagenten werken vanuit wat er op dat moment in hun sessie staat. Mensen zien ieder hun eigen deel van het systeem. Geen van beiden beschikt over een gedeeld, goedgekeurd overzicht van wat het systeem hoort te zijn.</p>

<p class="mt-4">Dat centrale overzicht noemt Think4Ever de <strong>Living Blueprint</strong>. Dit artikel licht toe wat erin staat, wat elke rol binnen een opleveringsteam ermee doet, hoe het aansluit op de coderingsagenten die teams al gebruiken, en waarom het een andere categorie betreft dan code intelligence-tools zoals Sourcegraph en DeepWiki, hoewel alle drie vragen over een codebase kunnen beantwoorden.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Wat de Living Blueprint is</h2>
<p>Elk Think4Ever-project genereert dezelfde set verbonden, toetsbare artefacten, ongeacht of het begint vanuit een intentieverklaring (<strong>Ontwerpen vanuit intentie</strong>) of vanuit een bestaande repository (<strong>Bestaande code analyseren</strong>). Er zijn dertien artefacten verdeeld over vijf categorieën:</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Categorie</th>
<th class="px-6 py-3 border border-gray-200">Artefacten</th>
<th class="px-6 py-3 border border-gray-200">De vraag die het beantwoordt</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Intentie</td>
<td class="px-6 py-4 border border-gray-200">Vereisten, Conceptkaart, Functionele architectuur</td>
<td class="px-6 py-4 border border-gray-200">Wat bouwen we en voor wie?</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Gedrag</td>
<td class="px-6 py-4 border border-gray-200">Bedrijfsstromen, Bedrijfsregels, Rollen en rechten</td>
<td class="px-6 py-4 border border-gray-200">Hoe moet het werken en wat moet altijd waar zijn?</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Structuur</td>
<td class="px-6 py-4 border border-gray-200">Gegevensobjecten, Integratiekaarten en API's, Technische architectuur en diagrammen</td>
<td class="px-6 py-4 border border-gray-200">Waaruit bestaat het en waar gaan gegevens heen?</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Ervaring</td>
<td class="px-6 py-4 border border-gray-200">UI-ontwerpen</td>
<td class="px-6 py-4 border border-gray-200">Wat krijgen mensen te zien?</td>
</tr>
<tr class="bg-white hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Oplevering en borging</td>
<td class="px-6 py-4 border border-gray-200">Vereistendocumenten, Roadmap en bouwplan, Productiegereedheidsrapport</td>
<td class="px-6 py-4 border border-gray-200">Wat leveren we op, in welke volgorde en is het klaar?</td>
</tr>
</tbody>
</table>
</div>

<p class="font-medium text-gray-800 mb-4">Drie eigenschappen maken het méér dan alleen documentatie:</p>

<ul class="list-disc pl-5 space-y-3">
<li><strong>Het is goedgekeurd, niet alleen gegenereerd.</strong> Vereisten worden opgesteld door ThinkBrain op basis van uw doelstelling en antwoorden, en vervolgens beoordeeld, verfijnd en goedgekeurd door mensen. Bedrijfsregels worden vastgelegd in duidelijke taal en als een beknopte expressie, inclusief type, urgentieniveau en gedrag bij overtreding. Een regel zoals &ldquo;Gebruikersnaam is de unieke bedrijfssleutel&rdquo; bevat de expressie <code>!exists(user, user.username)</code>, koppelt aan de registratie- en profielstromen, en specificeert een 400-foutmelding wanneer deze wordt geschonden. Dat is iets dat een producteigenaar kan ondertekenen en een tester kan valideren.</li>
<li><strong>Het is onderling verbonden.</strong> Conceptblokken linken direct naar schermen, stromen, gegevensobjecten en regels. Wijzigt u een blok, dan ziet u direct welke stromen, regels en objecten worden geraakt voordat er ook maar één regel code is geschreven.</li>
<li><strong>Het is actief in beide richtingen.</strong> Starten vanuit code herstelt de blauwdruk voor systemen die er nooit een hadden. Starten vanuit intentie creëert de blauwdruk vóór de code. In beide gevallen brengt een herscan na externe codeaanpassingen de blauwdruk weer in lijn, en worden vereistendocumenten met één Rebuild direct opnieuw gegenereerd uit de actuele staat.</li>
</ul>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-living-blueprint-as-a-system-of-record-for-ai-built-software/the-living-blueprint-as-a-system-of-record-for-ai-built-software-1.jpg" alt="Overzicht Concept Ready: één alinea intentie produceerde 75 blauwdruk-items voor een AI-pensioenplanner" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-400 mt-3 italic">Overzicht Concept Ready: één alinea intentie produceerde 75 blauwdruk-items voor een AI-pensioenplanner.</figcaption>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Eén blauwdruk, zes persona's</h2>
<p>Dezelfde artefacten bedienen sterk uiteenlopende gebruikers. Wat verschilt, is de eerste interactie.</p>

<div class="space-y-6 mt-6">
<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Ontwikkelaars: &ldquo;Stop met het opnieuw uitleggen van uw product aan elke agent.&rdquo;</h3>
<p>Het grootste pijnpunt van ontwikkelaars zijn de eerste twintig minuten van elke agentsessie: opnieuw het datamodel, de regels en de schermen omschrijven, om vervolgens de agent te corrigeren zodra deze een schema verzint of een koppeling breekt. Wanneer de blauwdruk is aangesloten via MCP, haalt de agent het concept, de gegevensobjecten, de regels en de geplande interface rechtstreeks op in plaats van ernaar te gissen. Bij een overgenomen repository leest de ontwikkelaar eerst samenvattingen van blokken en bedrijfsstromen alvorens code in te duiken.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Conceptkaart en samenvattingen, Gegevensobjecten, Bedrijfsregels, UI-ontwerpen. <strong>Resultaat:</strong> minder herhaalde prompts en herstelwerkzaamheden, agenten die geen schema's verzinnen, en snellere onboarding in de vertrouwde editor.</p>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Architecten en tech leads: &ldquo;Uw architectuur, gehandhaafd over elke agent.&rdquo;</h3>
<p>Wanneer tien agenten parallel code schrijven, verschuift de architectuur per sessie, en zijn eerder opgestelde diagrammen verouderd tegen de volgende sprint. De blauwdruk maakt het ERD, de API-contracten, de integratiekaart en de vastgelegde regels de centrale bron van waarheid die elke agent raadpleegt. De impact wordt gecontroleerd in de blauwdruk voordat een wijziging wordt goedgekeurd, en production hardening wordt uitgevoerd vóór elke release.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Technische architectuur, Gegevensobjecten, Integratiekaarten, Conceptkaart. <strong>Resultaat:</strong> een architectuur die actief wordt afgedwongen in plaats van louter gedocumenteerd, met veiligere refactoring en modernisering van legacysystemen.</p>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Product- en businessmanagers: &ldquo;Keur de intentie goed. Weet dat het gebouwd is.&rdquo;</h3>
<p>Vereisten raken gemakkelijk versplinterd tussen presentaties, tickets en code, en er is zelden een methode om te controleren of wat er is opgeleverd daadwerkelijk overeenkomt met wat is goedgekeurd. Managers werken in duidelijke taal: doelen, stromen met slagings- en fouttrajecten, regels met urgentieniveaus en een doorklikbare UI-preview. Zij keuren het bouwplan fase voor fase goed, en elke regel is herleidbaar naar de onderliggende code.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Vereisten, Bedrijfsstromen, Bedrijfsregels, UI-ontwerpen. <strong>Resultaat:</strong> opleveringen sluiten naadloos aan op goedkeuringen, met minder verrassingen achteraf.</p>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">QA, beveiliging, risico en compliance: &ldquo;Beoordeel het systeem, niet alleen het verschil.&rdquo;</h3>
<p>Van reviewers wordt steeds vaker verlangd dat zij door AI geschreven code aftekenen die niemand heeft gedocumenteerd. De blauwdruk voorziet hen van bedrijfsstromen waarvan de foutpaden kant-en-klare testplannen vormen, regels waarvan het overtredingsgedrag het verwachte resultaat is, een matrix van rollen en rechten om één rol tegelijk te testen, dataflow- en beveiligingsdiagrammen, en een gereedheidsrapport met bevindingen gerangschikt op urgentie.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Bedrijfsstromen, Bedrijfsregels, Rollen en rechten, Gereedheidsrapport. <strong>Resultaat:</strong> hard bewijs voor audits en beoordelingen, en helder inzicht in code die zij zelf niet hebben geschreven.</p>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Zakelijk leiders: &ldquo;Schaal AI-ontwikkeling zonder de controle te verliezen.&rdquo;</h3>
<p>CIO's, CTO's en CFO's financieren AI-tools en externe leveringen zonder duidelijk zicht op de samenhang of veiligheid van de output, terwijl systeemkennis opgesloten blijft in medewerkers, externe partijen en chathistories. De blauwdruk vormt één beheerd verslag over teams, leveranciers en agenten heen. Leiders controleren de score en beoordeling van elke releasekandidaat, lezen de conceptoverzichten en stemmen roadmapfasen vooraf af op het budget.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Productiegereedheidsrapport, Vereistendocumenten, Roadmapfasen. <strong>Resultaat:</strong> maximaal rendement op AI-investeringen met behoud van regie en borging van bedrijfskennis.</p>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Consultancy- en leveringspartners: &ldquo;Begrijpen, encoderen, bouwen, besturen.&rdquo;</h3>
<p>Partners moeten bij ieder traject opnieuw beginnen met discovery en verliezen context tussen advies- en engineeringteams. Met de blauwdruk brengen ze het bestaande systeem van een klant al in de eerste week in kaart, bepalen de scope rechtstreeks op de blauwdruk in plaats van in slides, en dragen de blauwdruk samen met de herbouwde specificaties en code over.</p>
<p class="mt-2 text-sm text-gray-500"><strong>Opent eerst:</strong> Functionele architectuur, Vereistendocumenten, Bouwplan. <strong>Resultaat:</strong> een herhaalbare methodiek verkocht als resultaat, waarbij kennis structureel wordt overgedragen naar de klant.</p>
</div>
</div>

<div class="mt-8 p-6 rounded-xl bg-blue-50/50 border border-blue-100">
<h3 class="text-lg font-bold text-gray-900 mb-2">Eén wijziging, elke persona in de lus</h3>
<p class="text-sm leading-relaxed text-gray-700">De verschillende rollen ontmoeten elkaar rondom één enkele wijziging. Een sales operations manager keurt een regel goed: elke bestelling met meer dan 15% korting vereist goedkeuring van een sales manager, en deze goedkeuring wordt vastgelegd bij de order. Weken later vraagt een ontwikkelaar aan Claude Code om bulkkortingen toe te voegen voor partnerorders via de API; de agent leest de regel via Think MCP. Het voorstel kent automatisch kortingen tot 25% toe via het API-pad, waarop Think4Ever het conflict signaleert en de impact toont op de prijs-API, het bestelscherm, de goedkeuringsmeldingen en de tests. De architect beoordeelt de impact, past deze aan en keurt hem goed. Directie en security zien de beslissing vastgelegd, en hardening wordt opnieuw uitgevoerd vóór de release. Niets hoeft opnieuw te worden uitgelegd en niets gaat ongecontroleerd live.</p>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Hoe de blauwdruk Claude Code en Cursor aanvult</h2>
<p>Think4Ever probeert de coderingsagent niet te vervangen. Claude Code beantwoordt de vraag: &ldquo;hoe schrijf ik deze code?&rdquo; Think4Ever beantwoordt: &ldquo;hoe hoort dit systeem in elkaar te zitten?&rdquo; De twee koppelen via het Model Context Protocol (MCP), de open standaard die zowel <a href="https://code.claude.com/docs/en/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Claude Code</a> als <a href="https://cursor.com/docs/context/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cursor</a> gebruiken om verbinding te maken met externe tools en databronnen [<a href="#source-1" class="text-blue-600 hover:underline">1</a>, <a href="#source-2" class="text-blue-600 hover:underline">2</a>].</p>

<p class="mt-4"><strong>De werking.</strong> U verbindt uw agent eenmalig met een project via <em>MCP &amp; Tools</em>. Think MCP levert vervolgens de blauwdruk aan elke gewenste MCP-client: Claude Code, Cursor, Codex, Windsurf en andere. De agent leest concepten, stromen, regels, gegevensobjecten en schermen uit als gestructureerde data. Externe agenten draaien op uw eigen abonnement en verbruiken geen Think4Ever-tegoed.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white p-4">
<img src="/images/blog/the-living-blueprint-as-a-system-of-record-for-ai-built-software/the-living-blueprint-as-a-system-of-record-for-ai-built-software-2.jpg" alt="Think MCP levert de blauwdruk aan elke MCP-client" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-400 mt-3 italic">Think MCP levert de blauwdruk aan elke MCP-client.</figcaption>
</figure>

<p><strong>Wat er in de praktijk verandert.</strong> In een gedocumenteerde sessie met Claude Code vroeg de ontwikkelaar de agent om de UI lokaal te bouwen. De agent hoefde niets te ontwerpen: hij haalde 21 complete schermen op als gestructureerde data, inclusief paginamarkup, een globale stylesheet en een uitgewerkt designcontract, en had binnen no-time een werkende applicatie op localhost. Toen vervolgens om de servermethoden werd gevraagd, haalde de agent een ERD met 23 entiteiten en de bijbehorende bedrijfsregels op en bouwde daar direct tegenaan, zonder dat er ook maar iets herhaald hoefde te worden.</p>

<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Waar elk hulpmiddel in uitblinkt</h3>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Aandachtspunt</th>
<th class="px-6 py-3 border border-gray-200">Claude Code / Cursor</th>
<th class="px-6 py-3 border border-gray-200">Think4Ever Living Blueprint</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Schrijven, refactoren en testen van code</td>
<td class="px-6 py-4 border border-gray-200">Primair</td>
<td class="px-6 py-4 border border-gray-200">Levert de specificatie om tegenaan te bouwen</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Productgeheugen</td>
<td class="px-6 py-4 border border-gray-200">Een nieuwe context per sessie, plus instructiebestanden van de ontwikkelaar: <a href="https://code.claude.com/docs/en/memory" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">CLAUDE.md</a> voor Claude Code, <a href="https://cursor.com/docs/context/rules" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">.cursor/rules</a> voor Cursor [<a href="#source-3" class="text-blue-600 hover:underline">3</a>, <a href="#source-4" class="text-blue-600 hover:underline">4</a>]</td>
<td class="px-6 py-4 border border-gray-200">Een permanent, geverifieerd model gedeeld door elke agent en persoon</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Wie kan het inzien en wijzigen</td>
<td class="px-6 py-4 border border-gray-200">Ontwikkelaars</td>
<td class="px-6 py-4 border border-gray-200">Ontwikkelaars, architecten, managers, QA, security, leidinggevenden, partners</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Bedrijfsregels en acceptatiecriteria</td>
<td class="px-6 py-4 border border-gray-200">Wat er op dat moment in de prompt of de code staat</td>
<td class="px-6 py-4 border border-gray-200">Vastgelegde, goedgekeurde regels met urgentieniveau en overtredingsgedrag</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Werkplanning</td>
<td class="px-6 py-4 border border-gray-200">De agent plant per taak</td>
<td class="px-6 py-4 border border-gray-200">Een bouwplan per roadmapfase, waarbij elke stap pagina's, API's, data, agent en doelscherm benoemt; niets draait zonder bevestiging</td>
</tr>
<tr class="bg-gray-50 hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Productiegereedheid</td>
<td class="px-6 py-4 border border-gray-200">Tests die de agent zelf schrijft</td>
<td class="px-6 py-4 border border-gray-200">39 controles over 9 pijlers, gewaardeerd van A tot E, met Fix-bevindingen direct doorgestuurd naar uw agent via MCP</td>
</tr>
</tbody>
</table>
</div>

<p>De wisselwerking verloopt in beide richtingen. Hardening-bevindingen worden direct teruggekoppeld naar Claude Code of Cursor via <em>Fix findings</em>. Code die buiten Think4Ever om wordt gewijzigd, wordt opnieuw gescand zodat de blauwdruk synchroon blijft. Teams behouden de editor, de agent en het model van hun keuze; de blauwdruk is wat constant blijft wanneer die veranderen.</p>

<p class="mt-4"><strong>Een praktische tip uit de gids:</strong> bouw scherm voor scherm op basis van de geplande gebruikersinterface. Teams die het UI-ontwerp overslaan laten de codeertool de schermen improviseren, en dat is te zien.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Hoe het verschilt van code search en repository-wiki's</h2>
<p>Sourcegraph en DeepWiki zijn uitstekende producten en lossen echte problemen op. Het is zinvol nauwkeurig te kijken naar wélke vragen ze beantwoorden.</p>

<p class="mt-4"><strong>Sourcegraph</strong> is een enterprise platform voor code search en code intelligence. Het <a href="https://sourcegraph.com/pricing" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Enterprise-abonnement</a> omvat &ldquo;zoeken en navigeren door uw complete codebase&rdquo;, <a href="https://sourcegraph.com/docs/deep-search" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Deep Search</a> (&ldquo;een agentische code-zoektool die vragen in natuurlijke taal over uw codebase begrijpt&rdquo;), <a href="https://sourcegraph.com/docs/batch-changes" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Batch Changes</a> voor &ldquo;grootschalige codeaanpassingen over meerdere repositories en codehosts&rdquo;, en een <a href="https://sourcegraph.com/docs/api/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MCP-server</a> die agenten zoals <a href="https://code.claude.com/docs/en/mcp" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Claude Code</a>, Codex en <a href="https://cursor.com/docs/context/mcp" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Cursor</a> verbindt met de zoekfunctionaliteit van het platform, beschikbaar in single-tenant cloud of on-premise, vanaf $16.000 per jaar [<a href="#source-5" class="text-blue-600 hover:underline">5</a>&ndash;<a href="#source-8" class="text-blue-600 hover:underline">8</a>]. Als de vraag luidt: &ldquo;waar wordt deze functie aangeroepen in 4.000 repositories?&rdquo; of &ldquo;pas deze API-aanroep overal aan&rdquo;, dan is Sourcegraph daarvoor gebouwd.</p>

<p class="mt-4"><strong>DeepWiki</strong>, van Cognition (het team achter Devin), <a href="https://cognition.com/blog/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">werd in mei 2025 gelanceerd</a> om &ldquo;elke openbare GitHub-repo gratis om te zetten in actuele documentatie waarmee je kunt communiceren&rdquo; [<a href="#source-9" class="text-blue-600 hover:underline">9</a>]. Volgens <a href="https://docs.devin.ai/work-with-devin/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Devins documentatie</a> &ldquo;genereert het automatisch architectuurdiagrammen, documentatie en koppelingen naar broncode&rdquo; [<a href="#source-10" class="text-blue-600 hover:underline">10</a>]. De <a href="https://docs.devin.ai/work-with-devin/deepwiki-mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MCP-server</a> biedt agenten drie tools (<code>read_wiki_structure</code>, <code>read_wiki_contents</code> en <code>ask_question</code>) en is gratis voor openbare repositories; privé-repositories lopen via een Devin-account [<a href="#source-11" class="text-blue-600 hover:underline">11</a>]. Als de vraag luidt: &ldquo;help me deze repository snel te doorgronden&rdquo;, is DeepWiki lastig te evenaren.</p>

<p class="mt-6">Beide zijn <strong>context-engines</strong>. Ze lezen de bestaande code en halen deze op of vatten deze samen. De Living Blueprint is een <strong>system of record voor intentie</strong>. Het verschil openbaart zich op vijf vlakken.</p>

<ol class="list-decimal pl-5 space-y-4 mt-6">
<li><strong>Descriptief versus normatief.</strong> Een context-engine vertelt u wat de code doet. De blauwdruk legt daarnaast vast wat het systeem hoort te doen, zoals goedgekeurd door de verantwoordelijken. Wanneer code automatisch partnerkortingen tot 25% toekent terwijl de goedgekeurde regel dit beperkt tot 15% zonder fiat van een manager, rapporteert een context-engine trouw 25%. De blauwdruk signaleert direct het conflict.</li>
<li><strong>Afgeleid versus eigendom.</strong> Een wiki die uit code wordt gegenereerd, wordt steeds opnieuw uit code herbouwd; deze kan geen besluit bevatten dat nog niet in de code tot uiting komt. Blauwdrukartefacten worden beoordeeld, bewerkt en goedgekeurd door producteigenaren, architecten en security, en blijven behouden wanneer code wijzigt.</li>
<li><strong>Alleen brownfield versus beide richtingen.</strong> Code intelligence heeft code nodig. De blauwdruk kan starten vanuit één alinea met intentie, voordat er ook maar één regel bestaat (zoals in het pensioenplanner-voorbeeld: 23 conceptblokken, 20 gegevensobjecten, 11 bedrijfsstromen, 9 bedrijfsregels, 8 integraties en 4 rollen), of vanuit een bestaande repository. Beide komen samen in hetzelfde model.</li>
<li><strong>Ontwikkelaarspubliek versus elke rol.</strong> Zoekresultaten en aan code gekoppelde wiki's zijn geschreven voor engineers. De blauwdruk presenteert hetzelfde systeem als een processtroom voor de analist, regels voor de bedrijfseigenaar, een rechtenmatrix voor security, een ERD voor de engineer en een gereedheidsscore voor de leidinggevende.</li>
<li><strong>Antwoorden versus governance.</strong> Context-engines helpen u een vraag te beantwoorden of een wijziging door te voeren. De blauwdruk voegt de regie rondom de wijziging toe: inzicht in de impact vóór uitvoering, een bouwplan goedgekeurd vóór agenten starten, en een productiegereedheidspoort met exporteerbaar bewijsmateriaal vóór oplevering.</li>
</ol>

<p class="text-xs italic text-gray-500 mt-6">De kolommen voor Sourcegraph en DeepWiki vatten de hieronder geciteerde leverancierspagina's samen [<a href="#sources" class="text-blue-600 hover:underline">5&ndash;11</a>], gecontroleerd op 19 oktober 2026. &ldquo;Nee&rdquo; betekent dat die pagina's een dergelijke functionaliteit niet vermelden.</p>

<div class="overflow-x-auto mt-4 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Dimensie</th>
<th class="px-6 py-3 border border-gray-200">Sourcegraph</th>
<th class="px-6 py-3 border border-gray-200">DeepWiki</th>
<th class="px-6 py-3 border border-gray-200">Think4Ever Living Blueprint</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Vertrekpunt</td>
<td class="px-6 py-4 border border-gray-200">Bestaande code, op enterpriseschaal</td>
<td class="px-6 py-4 border border-gray-200">Een bestaande repository</td>
<td class="px-6 py-4 border border-gray-200">Zakelijke intentie of bestaande code</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Kernoutput</td>
<td class="px-6 py-4 border border-gray-200">Zoekresultaten, codegraaf, grootschalige aanpassingen</td>
<td class="px-6 py-4 border border-gray-200">Gegenereerde wiki, diagrammen, aan code gekoppelde Q&amp;A</td>
<td class="px-6 py-4 border border-gray-200">13 verbonden artefacten: vereisten, stromen, regels, rollen, data, architectuur, UI, plannen, gereedheid</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Bron van waarheid</td>
<td class="px-6 py-4 border border-gray-200">De code</td>
<td class="px-6 py-4 border border-gray-200">De code</td>
<td class="px-6 py-4 border border-gray-200">Goedgekeurde intentie, synchroon gehouden met de code</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Bedrijfsregels</td>
<td class="px-6 py-4 border border-gray-200">Te vinden in de code als je ernaar zoekt</td>
<td class="px-6 py-4 border border-gray-200">Toegelicht mits aanwezig in code</td>
<td class="px-6 py-4 border border-gray-200">Eersteklas, goedgekeurd, met urgentie en overtredingsgedrag</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Primaire gebruikers</td>
<td class="px-6 py-4 border border-gray-200">Ontwikkelaars, platformteams</td>
<td class="px-6 py-4 border border-gray-200">Ontwikkelaars</td>
<td class="px-6 py-4 border border-gray-200">Elke rol binnen het opleveringsteam</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Bedient agenten via MCP</td>
<td class="px-6 py-4 border border-gray-200">Ja</td>
<td class="px-6 py-4 border border-gray-200">Ja</td>
<td class="px-6 py-4 border border-gray-200">Ja</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Goedkeuring en impact vóór wijziging</td>
<td class="px-6 py-4 border border-gray-200">Nee</td>
<td class="px-6 py-4 border border-gray-200">Nee</td>
<td class="px-6 py-4 border border-gray-200">Ja</td>
</tr>
<tr class="bg-gray-50 hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Productiegereedheidscontrole</td>
<td class="px-6 py-4 border border-gray-200">Nee</td>
<td class="px-6 py-4 border border-gray-200">Nee</td>
<td class="px-6 py-4 border border-gray-200">39 controles, 9 pijlers, score A tot E</td>
</tr>
</tbody>
</table>
</div>

<p>Context leveren aan agenten via MCP is tegenwoordig gangbaar, en de blauwdruk claimt dit niet als uniek. Wat het toevoegt, is dat de context die de agent ontvangt exact de context is die de organisatie heeft goedgekeurd.</p>

<p class="mt-4">Deze instrumenten vullen elkaar bovendien uitstekend aan. Een onderneming kan Sourcegraph gebruiken om een omvangrijk codelandschap te doorzoeken, DeepWiki om zich te oriënteren in een open-source dependency, en de Living Blueprint als de gereguleerde specificatie voor de producten die het bouwt en aanpast. Zoeken vertelt u wat er is. De blauwdruk vertelt u wat er zou moeten zijn, en controleert het verschil voordat het wordt uitgeleverd.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Wat het betekent over de levenscyclus</h2>
<p>De blauwdruk is geen tussenproduct uit de ontwerpfase dat in de la belandt. De meeste artefacten blijven gedurende de hele cyclus van bouwen, testen en aanpassen actief functioneren.</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Moment</th>
<th class="px-6 py-3 border border-gray-200">Zonder een living blueprint</th>
<th class="px-6 py-3 border border-gray-200">Met Think4Ever-artefacten</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Kick-off</td>
<td class="px-6 py-4 border border-gray-200">Vereisten in slides en tickets, verschillend geïnterpreteerd door elk team</td>
<td class="px-6 py-4 border border-gray-200">Goedgekeurde doelen, rollen, epics en verhalen waar elk later artefact uit voortvloeit</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Ontwerpreview</td>
<td class="px-6 py-4 border border-gray-200">Eenmalig getekend diagram, verouderd bij de volgende sprint</td>
<td class="px-6 py-4 border border-gray-200">Concept, stromen, data en schermen samen gegenereerd en verbonden gehouden</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Agentsessie</td>
<td class="px-6 py-4 border border-gray-200">Het eerste deel van elke sessie kwijt aan het herhalen van het datamodel en de regels</td>
<td class="px-6 py-4 border border-gray-200">De agent haalt schema's, regels en schermen op via MCP en bouwt daartegenaan</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Testen</td>
<td class="px-6 py-4 border border-gray-200">Testgevallen achteraf gereconstrueerd uit de geschreven code</td>
<td class="px-6 py-4 border border-gray-200">Testgevallen direct ontleend aan goedgekeurde stromen en regelovertredingspaden</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Release</td>
<td class="px-6 py-4 border border-gray-200">Go/no-go gebaseerd op onderbuikgevoel</td>
<td class="px-6 py-4 border border-gray-200">Gereedheidsscore, classificatie en geprioriteerde bevindingen, met herstelopdrachten voor agenten</td>
</tr>
<tr class="bg-gray-50 hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-semibold text-gray-900">Aanpassingen en onboarding</td>
<td class="px-6 py-4 border border-gray-200">De code induiken en hopen dat er nog iemand is om het uit te leggen</td>
<td class="px-6 py-4 border border-gray-200">Samenvattingen en stromen inzien, impact controleren in de blauwdruk, herscannen om in lijn te blijven</td>
</tr>
</tbody>
</table>
</div>

<p class="font-medium text-gray-800 mb-4">Twee praktijkvoorbeelden uit de handleiding maken dit concreet:</p>

<div class="space-y-4">
<p><strong>Een blauwdruk herstellen vanuit code.</strong> De openbare OpenAPI Petstore, een Spring Boot API zonder enig ontwerpdocument, werd geïmporteerd vanaf GitHub (26 bestanden). Think4Ever herleidde hieruit 10 schermen, 10 bedrijfsstromen, 11 bedrijfsregels, 6 gegevensobjecten, 4 rollen en 4 modules. Regels als &ldquo;Sessietoken vervalt één uur na uitgifte&rdquo; werden geformuleerd in heldere taal, klaar voor bevestiging of correctie door een producteigenaar. De bronrepository bleef onaangetast.</p>

<p><strong>Een release borgen op basis van bewijs.</strong> Natter, een met Lovable gebouwde React-berichtenapp, leek voltooid. De gereedheidsanalyse inspecteerde 86 bestanden in minder dan zes minuten en kende een score toe van 57, Grade D. De belangrijkste bevinding was ontbrekende autorisatie aan de serverzijde: identiteit werd door de client aangeleverd, waardoor elke gebruiker zich als een ander kon voordoen. Deze bevinding werd via Fix findings doorgestuurd naar een agent in plaats van in productie te belanden.</p>
</div>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-living-blueprint-as-a-system-of-record-for-ai-built-software/the-living-blueprint-as-a-system-of-record-for-ai-built-software-3.jpg" alt="Productiegereedheidsrapport voor Natter: 86 bestanden, score 57, Grade D" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-400 mt-3 italic">Productiegereedheidsrapport voor Natter: 86 bestanden, score 57, Grade D.</figcaption>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Aan de slag</h2>
<ol class="list-decimal pl-5 space-y-3 mt-4">
<li><strong>Kies uw startpunt.</strong> Begin vanuit intentie voor een nieuw product, of richt <em>Bestaande code analyseren</em> op een repository en branch voor een bestaand systeem.</li>
<li><strong>Beoordeel en keur goed.</strong> Loop de vereisten, stromen en regels door met de verantwoordelijken. Lees de regels hardop voor met de bedrijfseigenaar; dit zijn de keuzes die meestal impliciet blijven.</li>
<li><strong>Verbind uw agent.</strong> Voeg Think MCP eenmalig toe aan Claude Code, Cursor of Codex, en vraag de agent om het concept, het schema en de regels op te halen alvorens code te schrijven.</li>
<li><strong>Borg de release.</strong> Voer Production Hardening uit, stuur afgekeurde controles terug naar uw agent en herbouw de vereistendocumenten zodat de specificaties exact overeenkomen met wat er live gaat.</li>
</ol>

<p class="mt-6">De volledige handleiding, inclusief screenshots voor elke fase en persona, vindt u in de <a href="/tutorials/design-artifacts-guide/" class="text-blue-600 hover:underline">handleiding voor ontwerpartefacten</a>.</p>

<p class="mt-4 font-semibold text-gray-800">AI-agenten schrijven de code. De Living Blueprint houdt het coherent en beheersbaar.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="sources">
<h2 class="text-xl font-bold text-gray-900 mb-4">Bronnen</h2>
<p class="text-xs text-gray-400 mb-4">Leverancierspagina's zijn gecontroleerd op 19 oktober 2026.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-500">
<li id="source-1">Anthropic, &ldquo;<a href="https://code.claude.com/docs/en/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Connect Claude Code to tools via MCP</a>&rdquo; &mdash; <a href="https://code.claude.com/docs/en/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://code.claude.com/docs/en/mcp</a></li>
<li id="source-2">Cursor, &ldquo;<a href="https://cursor.com/docs/context/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a>&rdquo; &mdash; <a href="https://cursor.com/docs/context/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://cursor.com/docs/context/mcp</a></li>
<li id="source-3">Anthropic, &ldquo;<a href="https://code.claude.com/docs/en/memory" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">How Claude remembers your project (CLAUDE.md and auto memory)</a>&rdquo; &mdash; <a href="https://code.claude.com/docs/en/memory" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://code.claude.com/docs/en/memory</a></li>
<li id="source-4">Cursor, &ldquo;<a href="https://cursor.com/docs/context/rules" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Rules</a>&rdquo; &mdash; <a href="https://cursor.com/docs/context/rules" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://cursor.com/docs/context/rules</a></li>
<li id="source-5">Sourcegraph, &ldquo;<a href="https://sourcegraph.com/pricing" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pricing (Enterprise plan)</a>&rdquo; &mdash; <a href="https://sourcegraph.com/pricing" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://sourcegraph.com/pricing</a></li>
<li id="source-6">Sourcegraph, &ldquo;<a href="https://sourcegraph.com/docs/deep-search" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Deep Search</a>&rdquo; &mdash; <a href="https://sourcegraph.com/docs/deep-search" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://sourcegraph.com/docs/deep-search</a></li>
<li id="source-7">Sourcegraph, &ldquo;<a href="https://sourcegraph.com/docs/batch-changes" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Batch Changes</a>&rdquo; &mdash; <a href="https://sourcegraph.com/docs/batch-changes" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://sourcegraph.com/docs/batch-changes</a></li>
<li id="source-8">Sourcegraph, &ldquo;<a href="https://sourcegraph.com/docs/api/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Sourcegraph MCP Server</a>&rdquo; &mdash; <a href="https://sourcegraph.com/docs/api/mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://sourcegraph.com/docs/api/mcp</a></li>
<li id="source-9">Cognition, &ldquo;<a href="https://cognition.com/blog/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DeepWiki (announcement, May 2025)</a>&rdquo; &mdash; <a href="https://cognition.com/blog/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://cognition.com/blog/deepwiki</a></li>
<li id="source-10">Devin Docs, &ldquo;<a href="https://docs.devin.ai/work-with-devin/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DeepWiki</a>&rdquo; &mdash; <a href="https://docs.devin.ai/work-with-devin/deepwiki" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://docs.devin.ai/work-with-devin/deepwiki</a></li>
<li id="source-11">Devin Docs, &ldquo;<a href="https://docs.devin.ai/work-with-devin/deepwiki-mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">DeepWiki MCP</a>&rdquo; &mdash; <a href="https://docs.devin.ai/work-with-devin/deepwiki-mcp" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://docs.devin.ai/work-with-devin/deepwiki-mcp</a></li>
<li id="source-12">Think4Ever, &ldquo;<a href="/tutorials/design-artifacts-guide/" class="text-blue-600 hover:underline">Putting the blueprint to work (handleiding voor ontwerpartefacten)</a>&rdquo; &mdash; <a href="/tutorials/design-artifacts-guide/" class="text-blue-600 hover:underline">https://think4ever.com/tutorials/design-artifacts-guide/</a></li>
</ol>
</section>

</div>
