---
title: "Hoe we ons groeimetrics-dashboard bouwden met think4ever en Cursor"
description: "Ontwerp het systeem in think4ever, geef een bouwbrief aan Cursor en controleer het resultaat aan de hand van het ontwerp. Zo bouwden we ons interne groeimetrics-dashboard in twee dagen."
date: "17 november 2026"
readTime: "8 min leestijd"
category: "Product"
author: "Think4Ever"
image: "/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Elke interne tool bij think4ever begint als ontwerp in think4ever en eindigt als code die door een AI-codeeragent is geschreven. We ontwerpen het systeem in think4ever en geven daarna een bouwbrief aan de agent die het best bij de klus past: Codex, Claude of, in dit bericht, Cursor.</p>
<p class="mt-4">Hier is een echt voorbeeld: het dashboard dat ons leiderschapsteam gebruikt om te zien hoe think4ever groeit. Het volgt hetzelfde patroon als onze tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>, met Cursor als schrijver van de code.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg" alt="Het voltooide dashboard: alle gegevensbronnen op één plek." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Het voltooide dashboard: alle gegevensbronnen op één plek.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Het probleem: onze cijfers stonden op acht plekken</h2>
<p>Onze groeigegevens waren verspreid over acht tools, die elk een ander deel van de funnel meten, met overlappende cijfers en geen eenvoudige manier om ze te ontdubbelen. Het leiderschapsteam wilde één overzicht van hoe acquisitie en conversie ervoor stonden en waar de grootste wrijving zat, van het moment dat iemand een advertentie ziet tot het moment dat die een project aanmaakt.</p>
<p class="mt-4">Dus gingen we één dashboard bouwen dat:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Nieuwe accounts per maand en de volledige funnel volgt, van advertentievertoning tot het aanmaken van een project</li>
<li>Advertentie-uitgaven per platform en bezoeken aan landingspagina's per kanaal toont</li>
<li>Gegevens ophaalt uit HubSpot, Google Analytics 4, Google Tag Manager, PostHog, Microsoft Clarity, Meta, LinkedIn en Google Ads</li>
<li>Alleen ons team laat inloggen, met single sign-on van het bedrijf</li>
</ul>
<p class="mt-4">Binnen het dashboard heeft iedereen een van drie rollen:</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Rol</th><th class="py-3 px-4 font-bold border-b border-gray-200">Wie</th><th class="py-3 px-4 font-bold border-b border-gray-200">Wat ze kunnen doen</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Admin</td><td class="py-3 px-4">Het team dat het dashboard bouwt</td><td class="py-3 px-4">Alles: gegevensbronnen koppelen en synchroniseren, gegevens bewerken en de metrics voorbereiden voor het leiderschapsteam</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Read</td><td class="py-3 px-4">Het leiderschapsteam en iedereen die de cijfers nodig heeft</td><td class="py-3 px-4">Elke metric bekijken</td></tr>
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Ads</td><td class="py-3 px-4">Het marketingteam</td><td class="py-3 px-4">Alles wat een lezer kan, plus de advertentielader: upload een advertentie één keer en publiceer hem op Meta, LinkedIn en Google Ads</td></tr>
</tbody>
</table>
</div>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Stap 1: Ontwerp het in think4ever</h2>
<p>We begonnen niet in een code-editor. We begonnen in think4ever, met Design from intent.</p>
<ol class="list-decimal pl-6 mt-4 space-y-3">
<li><strong>Beschrijf het doel.</strong> We schreven op welke metrics we wilden, hoe we ze in secties verdeelden, wie het dashboard zou gebruiken en hoe "klaar" eruitziet.</li>
<li><strong>Los eerst de grote beslissingen op.</strong> think4ever bracht de openstaande vragen meteen naar boven: hoe vaak gegevens worden vernieuwd, welke database we gebruiken, hoe we een actieve gebruiker definiëren en hoe we elke gegevensbron koppelen.</li>
<li><strong>Beantwoord de vragen over de vereisten.</strong> In drie rondes legden we metricdefinities, datumbereiken en toegangsregels vast. We lieten de AI alleen beslissen waar een keuze er niet toe deed.</li>
<li><strong>Keur de blauwdruk goed.</strong> We beoordeelden de doelen, rollen, regels, workflows en technische beslissingen en klikten daarna op Approve &amp; Build.</li>
<li><strong>Beoordeel de schermen.</strong> think4ever genereerde alle negen schermen, van inloggen tot tijdlijnnotities. We controleerden ze in Preview Designs en verhielpen hiaten voordat er code bestond.</li>
</ol>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-2.jpg" alt="Vereisten: doelen, rollen en functies, afgesproken voordat er code was." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Vereisten: doelen, rollen en functies, afgesproken voordat er code was.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-3.jpg" alt="De blauwdruk in think4ever: elk scherm en elk blok van het dashboard." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">De blauwdruk in think4ever: elk scherm en elk blok van het dashboard.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-4.jpg" alt="De negen gegenereerde schermen, klaar om te beoordelen." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">De negen gegenereerde schermen, klaar om te beoordelen.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-5.jpg" alt="Het scherm Data Sources zoals ontworpen in think4ever." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Het scherm Data Sources zoals ontworpen in think4ever.</figcaption>
</figure>
<p class="mt-4">Het resultaat was één bron van waarheid: elke metric gedefinieerd en elk scherm afgesproken. Daardoor ging de volgende stap snel.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Stap 2: Geef het ontwerp aan Cursor</h2>
<p>Met het goedgekeurde ontwerp lieten we Cursor de code schrijven. Cursor leest het ontwerp rechtstreeks uit think4ever via MCP, zodat er niets verloren gaat in een gekopieerde specificatie. Onze <a href="https://think4ever.com/docs/think_mcp" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Think MCP-documentatie</a> legt uit hoe u Claude, Codex en Cursor verbindt.</p>
<p class="mt-4"><strong>Verbind Cursor één keer.</strong> Open in het project MCP &amp; Tools en maak een toegangstoken aan. Voeg de think4ever-server toe aan de MCP-instellingen van Cursor, herstart Cursor en controleer of de think4ever-tools laden. De stappen zijn dezelfde als in onze tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-6.jpg" alt="think4ever geeft u het installatiefragment voor Cursor. Uw token wordt maar één keer getoond." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever geeft u het installatiefragment voor Cursor. Uw token wordt maar één keer getoond.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-7.jpg" alt="think4ever verbonden in Cursor." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever verbonden in Cursor.</figcaption>
</figure>
<p class="mt-4"><strong>Kopieer de bouwbrief.</strong> Klik in UI Designs op Build UI en kopieer de brief. Die vertelt de agent om het concept, de technische vereisten en de schermontwerpen te laden voordat hij code schrijft.</p>
<p class="mt-4"><strong>Begin in een lege map.</strong> We openden een nieuwe map in Cursor, plakten de brief en lieten Cursor het ontwerp ophalen.</p>
<p class="mt-4">Vanaf daar bouwde Cursor een Node.js- en Express-app met een MySQL-database en een gewone JavaScript-frontend. Het koppelde de gegevensbronnen en bouwde elk scherm volgens de goedgekeurde ontwerpen. De build draait in Cursor en gebruikt dus geen think4ever-credits.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-8.jpg" alt="Cursor bouwt het dashboard op basis van het think4ever-ontwerp." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Cursor bouwt het dashboard op basis van het think4ever-ontwerp.</figcaption>
</figure>
<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">De code terugbrengen</h3>
<p>Om ontwerp en code gelijk te houden, koppelden we het project aan GitHub via de versiebeheerfunctie van think4ever. Eén push vanuit Cursor en één pull in think4ever, en think4ever las de code en bracht in kaart wat Cursor had gebouwd.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-9.jpg" alt="De code van het dashboard op GitHub." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">De code van het dashboard op GitHub.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-10.jpg" alt="think4ever leest de code terug en koppelt die aan het ontwerp." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever leest de code terug en koppelt die aan het ontwerp.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-11.jpg" alt="Hoe de onderdelen samenwerken: elke bron komt in één database terecht voordat het dashboard hem leest." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Hoe de onderdelen samenwerken: elke bron komt in één database terecht voordat het dashboard hem leest.</figcaption>
</figure>
<p class="mt-4">think4ever controleerde de code ook aan de hand van onze eigen bouwregels. Het merkte op dat alle API-routes in één serverbestand staan in plaats van in aparte mappen. Dat is voor nu prima voor een interne tool, en onze productie-hardeningsreview vertelt ons of we het moeten opsplitsen voordat het groeit.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Stap 3: Controleer het aan de hand van het ontwerp</h2>
<p>Omdat het ontwerp in think4ever leeft, heeft "is het klaar?" een duidelijk antwoord. We vroegen Cursor zijn werk te controleren aan de hand van de blauwdruk:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Elk scherm in de ontwerpen heeft een pagina</li>
<li>De metricdefinities in de code komen overeen met wat we hadden afgesproken</li>
<li>Rollen worden afgedwongen: lezers kunnen geen gegevens bewerken of bronnen synchroniseren</li>
<li>Elke grafiek heeft lege, laad- en foutstatussen</li>
<li>De tests en de build slagen vanuit een schone checkout</li>
</ul>
<p class="mt-4">Wanneer de code afweek, discussieerden we niet met de agent. We zeiden hem de relevante schermen en regels opnieuw uit think4ever te laden en het verschil te herstellen. Als we een wijziging wilden, deden we die eerst in het ontwerp en liet Cursor daarna opnieuw bouwen vanuit de bijgewerkte brief.</p>
<p class="mt-4">Van de eerste prompt tot een dashboard dat het team dagelijks gebruikt duurde twee dagen, inclusief de wijzigingen die teamleden parallel aanbrachten.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Eén ontwerp, veel codeeragents</h2>
<p>Het dashboard is geen eenmalig geval. Elke interne tool die we bouwen volgt dezelfde lus: ontwerpen in think4ever, bouwen met de AI-codeeragent die bij de klus past en het resultaat controleren aan de hand van het ontwerp.</p>
<p class="mt-4">Zo kiezen we per project de agent zonder onze manier van werken te veranderen: Cursor als we in de editor willen blijven, Codex voor lange autonome runs en Claude om een tool te beoordelen en hiaten in de logica te vinden. Wilt u Claude Code als bouwer gebruiken, zie dan onze tutorial <a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Claude</a>. Het ontwerp, de regels en de checklist blijven hetzelfde.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-12.jpg" alt="Eén ontwerp in think4ever voedt elke codeeragent." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Eén ontwerp in think4ever voedt elke codeeragent.</figcaption>
</figure>
<p class="mt-4">Andere tools die we zo hebben gebouwd zijn onder meer een tool voor ons early builders-programma en Research Hub, dat bijhoudt wat we hebben gedaan en wat er nog ontbreekt.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Wat we hebben geleerd</h2>
<p><strong>Definieer metrics vóór de code.</strong> De meeste dashboardbugs zijn definitiebugs. Tijdens de vereisten vastleggen wat als actieve gebruiker telt, bespaarde ons herwerk.</p>
<p class="mt-4"><strong>Wijzig het ontwerp, niet de prompt.</strong> Als iets moet veranderen, pas het dan aan in think4ever en bouw opnieuw. Het ontwerp blijft de bron van waarheid.</p>
<p class="mt-4"><strong>Houd de brief actueel.</strong> Kopieer hem opnieuw wanneer u het ontwerp wijzigt of van project wisselt, anders werkt de agent met een oude versie.</p>
<p class="mt-4"><strong>Behandel tokens als wachtwoorden.</strong> Houd ze uit code en schermafbeeldingen en trek tokens in die lekken.</p>
<p class="mt-4"><strong>Gebruik elke tool waar die het best in is.</strong> Er zijn meer AI-agents dan ooit. Het werk is weten welke bij welke klus past en ze met elkaar verbinden. think4ever maakt die verbinding eenvoudig en voorkomt dat context verloren gaat.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Probeer het zelf</h2>
<p>Kies een interne tool die u hebt uitgesteld. Ontwerp hem in think4ever, verbind uw favoriete codeeragent en laat hem bouwen vanuit de brief. U kunt <a href="https://portal.think4ever.com/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">gratis beginnen</a>, met 500 credits.</p>
<p class="mt-4">Wilt u de stapsgewijze installatie? Zie onze tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>. Dezelfde stappen werken voor Cursor.</p>
</section>
</div>
