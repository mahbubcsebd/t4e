---
title: "Cómo: Construir una Aplicación a Partir de la Intención en Think4Ever"
description: "Aprenda cómo comenzar desde un resultado comercial y deje que Think4Ever lo convierta en un Living Blueprint para diseñar pantallas, planificar la compilación y ejecutar la aplicación."
---

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Visión general</h2>
<p>Una aplicación en funcionamiento aún puede pasar por alto la necesidad comercial. Por eso vale la pena acordar los usuarios, las reglas de negocio y el alcance de lanzamiento antes de compilar. En Think4Ever, usted comienza a partir del resultado comercial, no con un mensaje de codificación en blanco. Lo describe en un lenguaje sencillo y Think4Ever lo convierte en un <strong>Blueprint Vivo</strong>: un diseño conectado de su aplicación que se usa para diseñar las pantallas, planificar la compilación y ejecutar la aplicación.</p>

<p class="mt-4">Hay dos puntos de partida: la intención comercial o el código existente. Ambos conducen al mismo Blueprint Vivo. Esta guía comienza a partir de la intención.</p>

<p class="mt-4">El blueprint contiene todo lo que un equipo debe acordar antes de codificar:</p>
<ul class="list-disc pl-6 mt-4 space-y-2">
<li>Especificaciones de requisitos, roles de usuario, épicas e historias de usuario</li>
<li>Flujos de negocio y reglas de negocio</li>
<li>Mapa conceptual y objetos de datos</li>
<li>Arquitectura funcional, endpoints de API y mapas de integración</li>
<li>Diseño de la interfaz de usuario</li>
</ul>

<p class="mt-4">Debido a que el código se compila a partir del blueprint, el diseño se mantiene como la única fuente de verdad a medida que la aplicación crece.</p>

<p class="mt-4">Esta guía sigue un ejemplo real de principio a fin: una aplicación de planificación de jubilación de inteligencia artificial que funciona como un banquero de inversión profesional.</p>

<p class="mt-4"><strong>Véalo primero:</strong> vea el flujo completo en el video de dos minutos <a href="https://www.youtube.com/watch?v=FY68DuwOf4Q" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Design &rarr; Code video</a>, también en la página de inicio de <a href="/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">think4ever.com</a>.</p>

<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">El viaje de un vistazo</h2>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-1.jpg" alt="El viaje de un vistazo" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">De la intención a la aplicación en ejecución &middot; 6 etapas</p>

<p class="mt-4">Aclara la intención hasta que se convierta en un Blueprint Vivo. Las pantallas, el plan de compilación y la aplicación en ejecución provienen de ese blueprint.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Paso 1: Describa su intención</h2>
<ol class="list-decimal pl-6 space-y-4">
<li><strong>Elija Diseñar a partir de la intención (Design from intent).</strong> Al comenzar, Think4Ever pregunta <em>"¿Qué necesita entender o cambiar?"</em> Seleccione <strong>Design from intent &rarr; Design a system</strong>. Elija <strong>Analyze existing code</strong> si ya tiene una base de código.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-2.jpg" alt="¿Qué necesita entender o cambiar?" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="2">
<li><strong>Indique el objetivo comercial.</strong> Describa lo que la aplicación debe lograr, en términos comerciales. Por ejemplo: <em>"Los clientes pueden solicitar reembolsos, los gerentes pueden revisar excepciones y cada decisión permanece visible para el cliente".</em> También puede:
<ul class="list-disc pl-6 mt-2 space-y-1">
<li><strong>Adjuntar archivos</strong> como especificaciones o maquetas (mockups)</li>
<li><strong>Importar de Jira y otras herramientas</strong></li>
<li>Comenzar con uno de los 299 diseños de soluciones listos para usar, como Teletherapy Session Hub o Class Scheduling System</li>
</ul>
</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-3.jpg" alt="¿Qué debería lograr esta aplicación?" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="3">
<li><strong>Haga clic en Continuar.</strong> Su intención va a ThinkBrain, el asistente de inteligencia artificial de Think4Ever. En el ejemplo: <em>"Este proyecto es una aplicación de planificación de jubilación personal que imita el consejo de un banquero de inversión profesional, impulsada por inteligencia artificial".</em></li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-4.jpg" alt="Chat con ThinkBrain" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="4">
<li><strong>Responda las preguntas de ThinkBrain.</strong> ThinkBrain hace algunas preguntas en el chat, como si es una herramienta personal o si cada usuario obtiene su propia cuenta, si tiene especificaciones o código existente, y qué tan profundo ir antes de codificar. Para un proyecto importante, elija descubrimiento detallado completo.</li>
<li><strong>Complete el Análisis de Requisitos.</strong> Luego, ThinkBrain hace preguntas específicas sobre su aplicación. Marque las opciones que correspondan, agregue las suyas con <strong>Add new item (Agregar nuevo elemento)</strong> o marque <strong>Let AI decide (Dejar que la IA decida)</strong>. Luego haga clic en <strong>Submit Answers (Enviar respuestas)</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-5.jpg" alt="Preguntas de Análisis de Requisitos" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="6">
<li><strong>Revise y apruebe los requisitos.</strong> ThinkBrain produce objetivos, roles de usuario, épicas, características e historias de usuario. Revise el resumen, desmarque lo que no desee y confirme la dirección haciendo clic en <strong>Approve &amp; Build (Aprobar y compilar)</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-6.jpg" alt="Resumen de Análisis de Requisitos" class="w-full h-auto" />
</div>
</figure>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Paso 2: Revisar el Application Blueprint</h2>
<p>ThinkBrain crea el concepto a partir de sus requisitos aprobados. Cuando termina, un resumen de <strong>Concept Ready (Concepto listo)</strong> muestra lo que se creó. Para la aplicación de jubilación, fueron 75 elementos:</p>

<div class="overflow-x-auto mt-6 mb-8 border border-gray-200 rounded-lg">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 border-b border-gray-200">
<th class="py-3 px-4 font-semibold text-gray-900 border-r border-gray-200 w-1/2">Parte del blueprint</th>
<th class="py-3 px-4 font-semibold text-gray-900 w-1/2">Elementos</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Bloques de concepto</td>
<td class="py-3 px-4 text-gray-800">23</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Objetos de datos</td>
<td class="py-3 px-4 text-gray-800">20</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Flujos de negocio</td>
<td class="py-3 px-4 text-gray-800">11</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Reglas de negocio</td>
<td class="py-3 px-4 text-gray-800">9</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Mapeo de integraciones</td>
<td class="py-3 px-4 text-gray-800">8</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Roles y permisos</td>
<td class="py-3 px-4 text-gray-800">4</td>
</tr>
</tbody>
</table>
</div>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-7.jpg" alt="Concepto listo" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Revise cada parte en las pestañas en la parte superior del proyecto: <strong>Requirements (Requisitos)</strong>, <strong>Functional Architecture (Arquitectura funcional)</strong>, <strong>Concept (Concepto)</strong>, <strong>Business Flows (Flujos de negocio)</strong>, <strong>Roles &amp; Permissions (Roles y permisos)</strong>, <strong>Business Rules (Reglas de negocio)</strong> y <strong>UI Designs (Diseños de interfaz de usuario)</strong>. Los flujos de negocio, por ejemplo, muestran cada proceso paso a paso, incluidas decisiones, rutas de éxito y error, y los datos que toca cada paso.</p>
</section>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-8.jpg" alt="Mapa de flujos de negocio" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Juntos, estos artefactos brindan a su equipo una vista de 360 ​​grados de la aplicación antes del desarrollo: intención comercial, especificaciones técnicas, apariencia y flujos de trabajo operativos. Cambie todo lo que no esté bien antes de seguir adelante, ya sea preguntando a ThinkBrain en el chat o editándolo directamente. Arreglar el diseño ahora ahorra tener que rehacer trabajo más adelante.</p>

<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Paso 3: Diseñar las pantallas de la interfaz de usuario</h2>
<ol class="list-decimal pl-6 space-y-4">
<li>En el resumen de <strong>Concept Ready (Concepto listo)</strong>, haga clic en <strong>Start UI screens creation (Iniciar la creación de pantallas de UI)</strong>. También puede seguir la lista de verificación <strong>What's next? (¿Qué sigue?)</strong>, que rastrea su progreso: Cree el concepto &rarr; Cree las pantallas de UI &rarr; Desarrolle la aplicación &rarr; Ejecute la aplicación &rarr; Mejore y mantenga.</li>
<li>ThinkBrain diseña una pantalla para cada bloque conceptual e informa de cada pantalla en el chat a medida que se crea. La aplicación de jubilación obtuvo 23 pantallas, desde el Inicio de sesión y el Asistente de incorporación (Onboarding Wizard) hasta la Asignación de cartera, el Modelado de escenarios y la Consola de administración.</li>
<li>Abra la pestaña <strong>UI Designs (Diseños de UI)</strong> para ver cada pantalla. Haga clic en <strong>Preview Designs (Vista previa de diseños)</strong> para obtener una maqueta interactiva de todas las pantallas, o <strong>Open (Abrir)</strong> en cualquier pantalla para verla en detalle.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-9.jpg" alt="Pestaña de Diseños de UI" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Pídale a ThinkBrain cualquier cambio de diseño. Cuando esté listo, elija <strong>Develop the app (Desarrollar la aplicación)</strong> en <strong>What's next? (¿Qué sigue?)</strong>. El Blueprint Vivo lleva el diseño del sistema y el comportamiento detrás de cada pantalla al desarrollo.</p>

<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Paso 4: Compile y ejecute la aplicación</h2>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Elija cómo compilar</h3>
<p>Su diseño es una especificación completa, legible por máquina, por lo que puede compilarla en Think4Ever o entregarla a la herramienta de codificación que ya usa:</p>

<div class="overflow-x-auto mt-6 mb-8 border border-gray-200 rounded-lg">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 border-b border-gray-200">
<th class="py-3 px-4 font-semibold text-gray-900 border-r border-gray-200 w-1/3">Opción</th>
<th class="py-3 px-4 font-semibold text-gray-900 border-r border-gray-200 w-1/3">Cómo funciona</th>
<th class="py-3 px-4 font-semibold text-gray-900 w-1/3">Usos</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">think4ever Agents</td>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Los agentes de Think4Ever construyen la aplicación completa en la plataforma (base de datos, servicios y UI), luego la ejecutan y prueban por usted</td>
<td class="py-3 px-4 text-gray-800">Créditos de Think4Ever</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Claude Code</td>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Lee el diseño sobre MCP y lo construye en su máquina</td>
<td class="py-3 px-4 text-gray-800">Su plan de Claude</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Cursor</td>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Conéctese una vez a través de MCP y Cursor construye desde el diseño dentro de su IDE</td>
<td class="py-3 px-4 text-gray-800">Su suscripción de Cursor</td>
</tr>
<tr>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Codex</td>
<td class="py-3 px-4 text-gray-800 border-r border-gray-200">Extrae el diseño de MCP y lo construye localmente</td>
<td class="py-3 px-4 text-gray-800">Su suscripción a OpenAI</td>
</tr>
</tbody>
</table>
</div>

<p class="mt-4">También funcionan otras plataformas MCP, incluidas Claude Desktop, VS Code, Windsurf, Gemini CLI, Amazon Q y Kiro. Las herramientas externas no usan créditos de Think4Ever.</p>

<p class="mt-4"><strong>¿Compilar con Claude Code u otra herramienta MCP?</strong> El diseño se queda en Think4Ever. Conecta su herramienta una vez por proyecto: abra <strong>MCP &amp; Tools &rarr; Claude Code</strong>, haga clic en <strong>Create token (Crear token)</strong>, ejecute el comando <strong>Add the server (Agregar el servidor)</strong> y reinicie Claude Code. Claude Code luego puede compilar la aplicación en su máquina o escribir el código directamente en su espacio de trabajo de Think4Ever, donde se ejecuta en el servidor de aplicaciones y la base de datos de Think4Ever con una URL pública. Para ver el tutorial completo, consulte <a href="/tutorials/how-to-design-in-think/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a>.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-10.jpg" alt="¿Cómo quiere construirlo?" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">El resto de este paso utiliza <strong>think4ever Agents</strong>.</p>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Planifique la compilación</h3>
<ol class="list-decimal pl-6 space-y-4">
<li>En <strong>From Design &mdash; audit and plan</strong>, marque las fases a compilar ahora. Las fases de la hoja de ruta provienen de su diseño. La aplicación de jubilación tenía tres: MVP; Asesoramiento de IA, Portal de asesores y Monitoreo; y Monetización, Documentos y Profundidad de cumplimiento.</li>
<li>Opcionalmente, indíquele a Think4Ever en qué centrarse, por ejemplo, las opciones de la pila tecnológica, las características imprescindibles o lo que debe omitirse.</li>
<li>Haga clic en <strong>Draft plan (Borrador del plan)</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-11.jpg" alt="Borrador y plan de diseño" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 space-y-4 mt-4" start="4">
<li><strong>Revise el plan.</strong> Cada paso enumera las páginas, las API y los datos que compilará, qué agente lo hace (por ejemplo, Desarrollador o Base de datos) y la pantalla de UI que implementa. Desmarque cualquier paso que no desee y luego haga clic en <strong>Confirm and run (Confirmar y ejecutar)</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-12.jpg" alt="Revisar el plan" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Véalo compilarse</h3>
<p>Los agentes trabajan en el plan paso a paso. El progreso se muestra en el chat, con un recuento como <strong>22/22</strong>, y los archivos aparecen en el <strong>Explorer (Explorador)</strong> a medida que se escriben. La lista de verificación <strong>What's next? (¿Qué sigue?)</strong> marca <strong>Develop the app (Desarrollar la aplicación)</strong> y <strong>Run the app (Ejecutar la aplicación)</strong> como completados una vez que finaliza la compilación y la aplicación se está ejecutando.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-13.jpg" alt="IDE de generación de código" class="w-full h-auto" />
</div>
</figure>

<h3 class="text-xl font-bold text-gray-900 mb-3 mt-8">Ejecutar y mejorar</h3>
<p>Haga clic en <strong>Open App (Abrir aplicación)</strong> para utilizar la aplicación en ejecución. La aplicación de jubilación se abrió con una incorporación guiada de cuatro pasos: Acerca de usted, Activos y deudas, Importar y vincular, y Sus objetivos.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/build-an-application-from-intent-in-think4ever/build-an-application-from-intent-in-think4ever-14.jpg" alt="Aplicación en ejecución" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Una aplicación en ejecución es el resultado de la compilación, no una prueba de que se cumplen todos los requisitos. Inspeccione los archivos generados, pruebe los flujos principales y ejecute pruebas funcionales y de calidad antes de implementar en producción.</p>

<p class="mt-4">Desde aquí, use <strong>Improve &amp; maintain (Mejorar y mantener)</strong> para informar problemas y agregar características. Cambie el diseño primero, y Think4Ever mantiene el código alineado con él.</p>
</section>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">Consejos y preguntas frecuentes (FAQ)</h2>
<div class="space-y-4 mt-6">
<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Escriba el objetivo como un resultado.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Indique lo que los usuarios deberían poder hacer y lo que debe permanecer cierto, no qué framework utilizar. ThinkBrain convierte los resultados en roles, flujos de trabajo, reglas y criterios de aceptación.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Use Let AI decide cuando no esté seguro.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>En el Análisis de Requisitos, puede dejar que ThinkBrain elija en cualquier pregunta y revisar su elección después.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Revise antes de compilar.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Cada etapa lo espera: usted aprueba los requisitos, revisa el concepto, verifica las pantallas y confirma el plan de compilación. Nada se ejecuta hasta que usted lo indica.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>Diseñe las pantallas antes de codificar.</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Construir pantalla por pantalla contra una interfaz de usuario planificada da mejores resultados que dejar que la herramienta de codificación invente las pantallas. Esto es válido ya sea que los agentes de Think4Ever o una herramienta externa escriban el código.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>¿Necesito código o especificaciones existentes?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>No. Puede comenzar a partir de una sola oración. Adjunte especificaciones, maquetas o elementos de Jira si los tiene, y ThinkBrain los usará para fundamentar el diseño.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>¿Puedo compilar solo una parte de la aplicación primero?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Sí. Cuando planifique la compilación, marque solo las fases de la hoja de ruta que desea ahora y agregue el resto más tarde.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>¿Puedo usar mi propia herramienta de codificación?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Sí. Claude Code, Cursor, Codex y otras herramientas MCP se compilan a partir del mismo blueprint en su propia suscripción, sin utilizar créditos de Think4Ever. Consulte <a href="/tutorials/how-to-design-in-think/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">How to: Design in Think, Code in Claude</a>.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>¿El código cambió fuera de Think4Ever?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Pídale a Think4Ever un nuevo escaneo del código. Actualiza la estructura del proyecto y los conceptos para que el blueprint coincida con el código nuevamente.</p>
</div>
</details>

<details class="group border border-gray-200 rounded-lg bg-white overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-gray-900 hover:bg-gray-50 transition-colors">
<span>¿Ya tiene una base de código?</span>
<span class="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div class="p-4 text-gray-600 border-t border-gray-100">
<p>Elija <strong>Analyze existing code (Analizar código existente)</strong> al principio. Think4Ever convierte su proyecto en un mapa visual y revisable del sistema.</p>
</div>
</details>
</div>

<p class="mt-8 text-gray-600">¿Listo para probarlo? Comience gratis en <a href="/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">think4ever.com</a> y elija <strong>Design from intent (Diseñar desde la intención)</strong>.</p>
</section>
