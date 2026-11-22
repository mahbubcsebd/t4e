---
title: "Cómo creamos nuestro panel de métricas de crecimiento con think4ever y Cursor"
description: "Diseñe el sistema en think4ever, entregue un brief de construcción a Cursor y compruebe el resultado frente al diseño. Así creamos en dos días nuestro panel interno de métricas de crecimiento."
date: "17 de noviembre de 2026"
readTime: "8 min de lectura"
category: "Producto"
author: "Sunil Kishen"
image: "/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Cada herramienta interna de think4ever empieza como un diseño en think4ever y termina como código escrito por un agente de programación con IA. Diseñamos el sistema en think4ever y luego entregamos un brief de construcción al agente que mejor encaje con el trabajo: Codex, Claude o, en esta publicación, Cursor.</p>
<p class="mt-4">Este es un ejemplo real: el panel que usa nuestro equipo directivo para ver cómo crece think4ever. Sigue el mismo patrón que nuestro tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>, con Cursor escribiendo el código.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-1.jpg" alt="El panel terminado: todas las fuentes de datos en un solo lugar." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">El panel terminado: todas las fuentes de datos en un solo lugar.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">El problema: nuestras cifras vivían en ocho lugares</h2>
<p>Nuestros datos de crecimiento estaban repartidos en ocho herramientas, cada una midiendo una parte distinta del embudo, con cifras superpuestas y sin una forma sencilla de deduplicarlas. La dirección quería una sola vista de cómo iban la captación y la conversión, y dónde estaba la mayor fricción, desde el momento en que alguien ve un anuncio hasta que crea un proyecto.</p>
<p class="mt-4">Así que nos propusimos crear un único panel que:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Siga las cuentas nuevas de cada mes y el embudo completo, desde la impresión del anuncio hasta la creación del proyecto</li>
<li>Muestre el gasto publicitario por plataforma y las visitas a las páginas de destino por canal</li>
<li>Obtenga datos de HubSpot, Google Analytics 4, Google Tag Manager, PostHog, Microsoft Clarity, Meta, LinkedIn y Google Ads</li>
<li>Permita iniciar sesión solo a nuestro equipo, con el inicio de sesión único de la empresa</li>
</ul>
<p class="mt-4">Dentro del panel, cada persona tiene uno de tres roles:</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Rol</th><th class="py-3 px-4 font-bold border-b border-gray-200">Quién</th><th class="py-3 px-4 font-bold border-b border-gray-200">Qué puede hacer</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Admin</td><td class="py-3 px-4">El equipo que construye el panel</td><td class="py-3 px-4">Todo: conectar y sincronizar fuentes de datos, editar datos y preparar las métricas para la dirección</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Read</td><td class="py-3 px-4">La dirección y cualquiera que necesite las cifras</td><td class="py-3 px-4">Ver todas las métricas</td></tr>
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Ads</td><td class="py-3 px-4">El equipo de marketing</td><td class="py-3 px-4">Todo lo que puede hacer un lector, más el cargador de anuncios: suba un anuncio una vez y publíquelo en Meta, LinkedIn y Google Ads</td></tr>
</tbody>
</table>
</div>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 1: Diséñelo en think4ever</h2>
<p>No empezamos en un editor de código. Empezamos en think4ever, con Design from intent.</p>
<ol class="list-decimal pl-6 mt-4 space-y-3">
<li><strong>Describa el objetivo.</strong> Anotamos las métricas que queríamos, cómo dividirlas en secciones, quién usaría el panel y qué significa «terminado».</li>
<li><strong>Resuelva primero las decisiones importantes.</strong> think4ever planteó desde el principio las preguntas abiertas: con qué frecuencia se actualizan los datos, qué base de datos usar, cómo definir un usuario activo y cómo conectar cada fuente de datos.</li>
<li><strong>Responda las preguntas de requisitos.</strong> En tres rondas fijamos las definiciones de las métricas, los rangos de fechas y las reglas de acceso. Dejamos que la IA decidiera solo donde la elección no importaba.</li>
<li><strong>Apruebe el blueprint.</strong> Revisamos los objetivos, roles, reglas, flujos de trabajo y decisiones técnicas, y luego hicimos clic en Approve &amp; Build.</li>
<li><strong>Revise las pantallas.</strong> think4ever generó las nueve pantallas, desde el inicio de sesión hasta las notas de la línea de tiempo. Las revisamos en Preview Designs y corregimos las lagunas antes de que existiera código.</li>
</ol>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-2.jpg" alt="Requisitos: objetivos, roles y funciones, acordados antes de escribir código." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Requisitos: objetivos, roles y funciones, acordados antes de escribir código.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-3.jpg" alt="El blueprint en think4ever: cada pantalla y bloque del panel." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">El blueprint en think4ever: cada pantalla y bloque del panel.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-4.jpg" alt="Las nueve pantallas generadas, listas para revisar." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Las nueve pantallas generadas, listas para revisar.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-5.jpg" alt="La pantalla Data Sources tal como se diseñó en think4ever." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">La pantalla Data Sources tal como se diseñó en think4ever.</figcaption>
</figure>
<p class="mt-4">El resultado fue una única fuente de verdad: cada métrica definida y cada pantalla acordada. Eso es lo que hizo rápido el siguiente paso.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 2: Entregue el diseño a Cursor</h2>
<p>Con el diseño aprobado, dejamos que Cursor escribiera el código. Cursor lee el diseño directamente desde think4ever mediante MCP, así que no se pierde nada en una especificación copiada y pegada. Nuestra <a href="https://think4ever.com/docs/think_mcp" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">documentación de Think MCP</a> explica cómo conectar Claude, Codex y Cursor.</p>
<p class="mt-4"><strong>Conecte Cursor una sola vez.</strong> En el proyecto, abra MCP &amp; Tools y cree un token de acceso. Añada el servidor de think4ever a la configuración MCP de Cursor, reinicie Cursor y compruebe que se cargan las herramientas de think4ever. Los pasos son los mismos que en nuestro tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-6.jpg" alt="think4ever le da el fragmento de configuración de Cursor. Su token se muestra una sola vez." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever le da el fragmento de configuración de Cursor. Su token se muestra una sola vez.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-7.jpg" alt="think4ever conectado en Cursor." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever conectado en Cursor.</figcaption>
</figure>
<p class="mt-4"><strong>Copie el brief de construcción.</strong> En UI Designs, haga clic en Build UI y copie el brief. Le indica al agente que cargue el concepto, los requisitos técnicos y los diseños de pantalla antes de escribir código.</p>
<p class="mt-4"><strong>Empiece en una carpeta vacía.</strong> Abrimos una carpeta nueva en Cursor, pegamos el brief y dejamos que Cursor obtuviera el diseño.</p>
<p class="mt-4">A partir de ahí, Cursor construyó una aplicación Node.js y Express con una base de datos MySQL y un frontend en JavaScript puro. Conectó las fuentes de datos y construyó cada pantalla según los diseños aprobados. La construcción se ejecuta en Cursor, por lo que no consume créditos de think4ever.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-8.jpg" alt="Cursor construyendo el panel a partir del diseño de think4ever." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Cursor construyendo el panel a partir del diseño de think4ever.</figcaption>
</figure>
<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">Traer el código de vuelta</h3>
<p>Para mantener sincronizados el diseño y el código, conectamos el proyecto a GitHub mediante el control de versiones de think4ever. Un push desde Cursor y un pull en think4ever, y think4ever leyó el código y mapeó lo que Cursor había construido.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-9.jpg" alt="El código del panel en GitHub." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">El código del panel en GitHub.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-10.jpg" alt="think4ever lee el código de vuelta y lo asocia con el diseño." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">think4ever lee el código de vuelta y lo asocia con el diseño.</figcaption>
</figure>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-11.jpg" alt="Cómo encajan las piezas: cada fuente llega a una base de datos antes de que el panel la lea." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Cómo encajan las piezas: cada fuente llega a una base de datos antes de que el panel la lea.</figcaption>
</figure>
<p class="mt-4">think4ever también comprobó el código frente a nuestras propias reglas de construcción. Señaló que todas las rutas de la API están en un único archivo de servidor en lugar de en carpetas separadas. Por ahora eso está bien para una herramienta interna, y nuestra revisión de endurecimiento para producción nos dirá si conviene dividirlo antes de que crezca.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 3: Compruébelo frente al diseño</h2>
<p>Como el diseño vive en think4ever, «¿está terminado?» tiene una respuesta clara. Le pedimos a Cursor que comprobara su trabajo frente al blueprint:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Cada pantalla de los diseños tiene una página</li>
<li>Las definiciones de las métricas en el código coinciden con las que acordamos</li>
<li>Los roles se aplican: los lectores no pueden editar datos ni sincronizar fuentes</li>
<li>Cada gráfico tiene estados vacío, de carga y de error</li>
<li>Las pruebas y la compilación pasan desde un checkout limpio</li>
</ul>
<p class="mt-4">Cuando el código se desviaba, no discutíamos con el agente. Le indicábamos que recargara las pantallas y reglas pertinentes desde think4ever y corrigiera la diferencia. Cuando queríamos un cambio, lo hacíamos primero en el diseño y luego Cursor reconstruía a partir del brief actualizado.</p>
<p class="mt-4">Desde el primer prompt hasta un panel que el equipo usa cada día pasaron dos días, incluidos los cambios que los miembros del equipo hicieron en paralelo.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Un diseño, muchos agentes de programación</h2>
<p>El panel no es un caso aislado. Cada herramienta interna que construimos sigue el mismo ciclo: diseñar en think4ever, construir con el agente de programación con IA que mejor encaje con el trabajo y comprobar el resultado frente al diseño.</p>
<p class="mt-4">Eso nos permite elegir el agente por proyecto sin cambiar nuestra forma de trabajar: Cursor cuando queremos quedarnos en el editor, Codex para ejecuciones largas y autónomas, y Claude para revisar una herramienta y encontrar lagunas en su lógica. Para usar Claude Code como constructor, consulte nuestro tutorial <a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Claude</a>. El diseño, las reglas y la lista de comprobación siguen siendo los mismos.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor/how-we-built-our-growth-metrics-dashboard-with-think4ever-and-cursor-12.jpg" alt="Un solo diseño en think4ever alimenta a todos los agentes de programación." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Un solo diseño en think4ever alimenta a todos los agentes de programación.</figcaption>
</figure>
<p class="mt-4">Otras herramientas que hemos construido de esta forma incluyen una herramienta para nuestro programa de early builders y Research Hub, que registra lo que hemos hecho y lo que aún falta.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Lo que aprendimos</h2>
<p><strong>Defina las métricas antes del código.</strong> La mayoría de los errores de un panel son errores de definición. Acordar qué cuenta como usuario activo durante los requisitos nos ahorró retrabajo.</p>
<p class="mt-4"><strong>Cambie el diseño, no el prompt.</strong> Cuando algo deba cambiar, actualícelo en think4ever y reconstruya. El diseño sigue siendo la fuente de verdad.</p>
<p class="mt-4"><strong>Mantenga el brief actualizado.</strong> Cópielo de nuevo cada vez que cambie el diseño o de proyecto; de lo contrario, el agente trabajará con una versión antigua.</p>
<p class="mt-4"><strong>Trate los tokens como contraseñas.</strong> Manténgalos fuera del código y de las capturas de pantalla, y revoque los que se filtren.</p>
<p class="mt-4"><strong>Use cada herramienta para lo que mejor hace.</strong> Hay más agentes de IA que nunca. El trabajo consiste en saber cuál encaja con cada tarea y conectarlos. think4ever hace fácil esa conexión y evita que se pierda el contexto.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Pruébelo usted mismo</h2>
<p>Elija una herramienta interna que haya estado posponiendo. Diséñela en think4ever, conecte su agente de programación favorito y deje que construya a partir del brief. Puede <a href="https://portal.think4ever.com/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">empezar gratis</a>, con 500 créditos.</p>
<p class="mt-4">¿Quiere la configuración paso a paso? Consulte nuestro tutorial <a href="/tutorials/design-in-think-code-in-codex/" class="text-[#1b30a7] hover:underline font-medium">Design in Think, Code in Codex</a>. Los mismos pasos funcionan para Cursor.</p>
</section>
</div>
