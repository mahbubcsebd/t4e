---
title: "Deriva de especificación: el fallo silencioso de la programación agéntica"
description: "El contexto no es cumplimiento: por qué los agentes de programación necesitan el diseño como su arnés, y cómo Gap Analysis devuelve el código a lo que usted pretendía."
date: "23 de noviembre de 2026"
readTime: "6 min de lectura"
category: "Producto"
author: "Sunil Kishen"
image: "/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg"
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">
<section>
<p>Dar a un agente de programación un contexto detallado, incluso un diseño completo, no significa que vaya a construir la aplicación que usted pretendía. Construirá algo que funciona, pero que se aparta en silencio de la especificación. Lo llamamos deriva de especificación (spec drift), y el agente no será quien se lo diga.</p>
<p class="mt-4">Creamos think4ever Gap Analysis, nuestra función más reciente, para detectarla. Esto es lo que encontró en un proyecto real.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Lo que encontramos</h2>
<p>Conectamos un proyecto real de un cliente a Claude Code a través del servidor Think MCP. El diseño completo estaba a disposición del agente: más de 100 pantallas, 34 flujos de negocio, 92 reglas de negocio, 26 roles y 126 objetos de datos. Claude Code lo leyó y construyó la aplicación, fase por fase.</p>
<p class="mt-4">Después medimos el código frente al diseño. El primer análisis de una fase encontró el 72% del diseño en el código. El primer análisis de la fase siguiente encontró el 8%.</p>
<p class="mt-4">No fue un prompt débil ni una especificación incompleta. El agente tenía todo. Las brechas son de las que parecen terminadas y no lo están:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Pantallas y campos que faltan, mientras las pantallas principales funcionaban.</li>
<li>Flujos que se detenían en el camino feliz, sin construir nunca las excepciones, las aprobaciones ni los pasos posteriores.</li>
<li>Reglas de negocio que no se aplican, aunque estaban en el diseño que leyó el agente.</li>
<li>Funciones con los nombres correctos y el cuerpo vacío, que parecen terminadas en un resumen.</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Por qué ocurre</h2>
<p>No es un defecto de una herramienta concreta. Es cómo funcionan hoy los agentes de programación:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Optimizan para que "funcione".</strong> Los compiladores, las pruebas y el navegador le dicen al agente que el código funciona. Nada le dice que el código está completo.</li>
<li><strong>El contexto deriva, y el código deriva de la especificación.</strong> Un diseño real es grande. En una sesión larga, partes de él salen de la memoria de trabajo del agente y suposiciones plausibles llenan los huecos. La deriva del contexto es la causa; la deriva de especificación es el resultado.</li>
<li><strong>"Terminado" lo declara el propio agente.</strong> El agente decide cuándo parar y califica su propio trabajo.</li>
</ul>
<p class="mt-4">Velocidad y contexto no son conformidad. La deriva de especificación es silenciosa: sin una comprobación independiente frente al diseño, la distancia entre "funciona" y "es lo que pretendíamos" permanece invisible hasta que la encuentran los usuarios.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">El diseño es el arnés</h2>
<p>Es el argumento más sólido para diseñar primero. Sin un diseño, la programación agéntica es improvisada: el agente inventa pantallas, datos y flujos sobre la marcha, y nadie puede decir qué falta, porque nada define qué debería haber.</p>
<p class="mt-4">Con un diseño en think4ever, "terminado" tiene una definición. Pero entregar el diseño al agente solo le da contexto. Un arnés también necesita un bucle de retroalimentación que mida el código frente al diseño y devuelva las brechas. Eso es lo que añade Gap Analysis.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Presentamos think4ever Gap Analysis</h2>
<p>Gap Analysis es nuestra función más reciente de think4ever. Muestra lo que está construido y lo que aún falta: compara su diseño de think4ever con el código de su proyecto y asigna un porcentaje a cada parte.</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li><strong>Cada parte del diseño recibe una puntuación:</strong> pantallas hasta cada campo y botón, flujos de negocio paso a paso, objetos de datos, reglas de negocio, endpoints de API, roles y más. Rojo es casi ausente, naranja es parcialmente construido, verde es construido.</li>
<li><strong>Cada puntuación tiene una razón:</strong> lo que se encontró, lo que falta y el propio código, con la brecha marcada.</li>
<li><strong>Los hallazgos se convierten en tareas:</strong> "Create tasks from the findings" (Crear tareas a partir de los hallazgos) pone cada brecha en el tablero de tareas, con una subtarea por cada punto que falta.</li>
<li><strong>Funciona desde su agente de programación:</strong> Claude Code, Cursor o Codex pueden iniciar un análisis, leer las brechas y corregirlas por MCP, por ejemplo "Cierra las brechas de esta tarea y vuelve a comprobarlo."</li>
</ul>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">El bucle cerrado</h2>
<p class="rounded-xl bg-[#eaf1ff] px-5 py-4 text-center text-sm font-bold text-[#1b30a7] md:text-base">Diseñar &rarr; Construir &rarr; Traer el código de vuelta &rarr; Gap Analysis &rarr; Tareas &rarr; Corregir &rarr; Comprobar de nuevo</p>
<ol class="list-decimal pl-6 mt-6 space-y-3">
<li><strong>Diseñe en think4ever:</strong> concepto, flujos, datos, reglas y pantallas de interfaz.</li>
<li><strong>Construya</strong> con Claude Code por MCP, o con Cursor, Codex o los agentes de think4ever.</li>
<li><strong>Traiga el código de vuelta</strong> a think4ever y ejecute Gap Analysis frente al diseño.</li>
<li><strong>Cree la lista de tareas</strong> a partir de los hallazgos.</li>
<li><strong>Entregue las tareas a Claude Code</strong> para que las corrija, y traiga de vuelta el código corregido.</li>
<li><strong>Compruebe de nuevo</strong> y repita hasta que las partes importantes estén en verde.</li>
</ol>
<p class="mt-4">El agente de programación hace el trabajo. El diseño decide cuándo está terminado.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">En la práctica: un proyecto real a lo largo del ciclo</h2>
<p>Las pantallas siguientes proceden de un proyecto real de un cliente, un ERP de fabricación diseñado en think4ever y programado por Claude Code por MCP, que pasa por este ciclo. Los detalles identificativos están difuminados.</p>
<div class="overflow-x-auto my-8">
<table class="w-full text-sm text-left border border-gray-200 rounded-lg shadow-sm">
<thead class="bg-[#eaf1ff] text-[#1b30a7]"><tr><th class="py-3 px-4 font-bold border-b border-gray-200">Fase</th><th class="py-3 px-4 font-bold border-b border-gray-200">Primer análisis</th><th class="py-3 px-4 font-bold border-b border-gray-200">Tras cerrar las brechas</th></tr></thead>
<tbody class="text-gray-900 text-[13px] md:text-sm">
<tr class="border-b border-gray-200 bg-white"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Fase 2</td><td class="py-3 px-4">72%</td><td class="py-3 px-4">94% un día después</td></tr>
<tr class="border-b border-gray-200 bg-gray-50/50"><td class="py-3 px-4 font-bold text-[#1b30a7] whitespace-nowrap md:whitespace-normal">Fase 3</td><td class="py-3 px-4">8%</td><td class="py-3 px-4">87%, y luego 95% dos días después</td></tr>
</tbody>
</table>
</div>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-1.jpg" alt="Gap Analysis en think4ever: cada análisis se conserva por fecha y fase, con la puntuación de cada parte del diseño." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Cada análisis se conserva por fecha y fase: la Fase 3 pasó del 8% al 87% y al 95%, y la Fase 2 del 72% al 94%.</figcaption>
</figure>
<p class="mt-4">Con el 95%, cada uno de los 90 elementos de la fase estaba construido. Aun así, el análisis encontró lo que más importa: las reglas de negocio. Confirmar un plan de corte no lo bloqueaba como estaba diseñado, y la regla "no mezclar colores en una tendida" no tenía ninguna ruta de rechazo en el código. Son las brechas que pasan una demo y fallan en producción, y la propia sensación de "terminado" del agente no las señaló.</p>
<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-2.jpg" alt="El resultado de Gap Analysis al 95%: 90 elementos comprobados, con las brechas de reglas restantes señaladas en el resumen." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">El análisis al 95%: 90 elementos comprobados frente a más de 1.100 archivos, con las brechas de reglas restantes señaladas en el resumen.</figcaption>
</figure>
<p class="mt-4">Los 65 puntos abiertos restantes se convirtieron en 65 tareas con 53 subtareas, sin ejecutar un agente ni usar créditos. Las tareas se entregan a Claude Code para que las corrija, el código vuelve y Gap Analysis lo comprueba de nuevo.</p>
<figure class="my-8">
<div class="w-full md:max-w-md mx-auto overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/blog/the-silent-failure-of-agentic-coding/the-silent-failure-of-agentic-coding-3.jpg" alt="El cuadro Create tasks from the findings, que convierte 65 puntos abiertos en 65 tareas con 53 subtareas." class="w-full h-auto" />
</div>
<figcaption class="mt-4 text-center text-sm italic text-gray-500">Crear tareas a partir de los hallazgos: cada brecha se convierte en una tarea para el equipo o para el agente de programación.</figcaption>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">La conclusión</h2>
<p>No le pida a un agente de programación que juzgue si construyó lo que usted pretendía. Dele un diseño y mida después el código frente a ese diseño, siempre.</p>
<p class="mt-4">Los agentes de programación son rápidos y capaces, y un diseño por MCP los mejora mucho. Pero incluso con todo el contexto, no producen de forma fiable la aplicación pretendida. El diseño define qué significa "terminado". Gap Analysis lo mide, convierte las brechas en tareas y cierra el bucle hasta que el código se ajusta al diseño.</p>
<p class="mt-4">Pruebe think4ever Gap Analysis en su propio proyecto: <a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">think4ever.com/docs/gap_analysis/</a></p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Más información</h2>
<ul class="list-disc pl-6 space-y-2">
<li><a href="https://think4ever.com/docs/gap_analysis/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Documentación de Gap Analysis</a>: cómo ejecutar un análisis, leer los resultados y cerrar las brechas</li>
<li><a href="/tutorials/how-to-design-in-think/" class="text-[#1b30a7] hover:underline font-medium">Tutorial: Design in Think, Code in Claude</a>: conecte Claude Code a su diseño de think4ever por MCP</li>
<li><a href="https://think4ever.com/docs/mcp_claude_code/" target="_blank" rel="noopener noreferrer" class="text-[#1b30a7] hover:underline font-medium">Think MCP con Claude Code</a>: configuración y herramientas</li>
<li><a href="/blog/white-paper-think-design-redefining-the-ai-coding-harness-for-enterprise-software-development/" class="text-[#1b30a7] hover:underline font-medium">White paper: Think Design, Redefining the AI Coding Harness</a>: por qué el diseño es el arnés</li>
<li><a href="/blog/architecture-first-agentic-development-with-think4ever/" class="text-[#1b30a7] hover:underline font-medium">Desarrollo agéntico con la arquitectura primero con think4ever</a></li>
<li><a href="/tutorials/design-artifacts-guide/" class="text-[#1b30a7] hover:underline font-medium">Ponga el Blueprint a trabajar</a>: uso de los artefactos de diseño de think4ever a lo largo del SDLC</li>
</ul>
</section>
</div>
