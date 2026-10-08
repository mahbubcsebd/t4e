---
title: 'Cómo hacerlo: Diseñar en Think, Programar en Claude'
date: '2026-10-07'
description: 'Aprende a conectar Claude Code a Think4Ever y construir tu proyecto.'
author: 'Sunil'
category: 'Development'
readTime: '5 min de lectura'
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Descripción general</h2>
<p>Think4Ever guarda el diseño de tu proyecto: conceptos, requisitos, flujos, pantallas de interfaz de usuario y tareas. Claude Code escribe el código. El servidor Think MCP conecta ambos, por lo que Claude Code lee tu diseño de Think y construye basándose en él.</p>

<p class="mt-4">Esta guía te muestra cómo:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Conectar un proyecto de Claude Code a Think4Ever en unos dos minutos</li>
<li>Elegir cómo y dónde se compila el código</li>
<li>Construir, probar y ejecutar la aplicación en una URL pública de Think4Ever</li>
<li>Mantener Think4Ever y tu código sincronizados</li>
</ul>

<p class="mt-4">Los mismos pasos funcionan con cualquier agente de programación que admita MCP, como Cursor o OpenAI Codex.</p>

<p class="mt-4"><strong>Para quién es.</strong> Si trabajas solo en un proyecto pequeño, Claude Code por sí solo puede ser suficiente. Usa Think4Ever con Claude Code cuando varios desarrolladores compartan un proyecto, o cuando necesites ver y controlar los flujos de negocio detrás de él. Think4Ever mantiene el "cerebro" compartido del proyecto, para que los miembros del equipo puedan trabajar en paralelo desde sus propias sesiones de Claude Code.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-1.jpg" alt="Cómo se conectan las partes" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-400 mt-3 italic">Cómo se conectan las partes</figcaption>
</figure>

<p>Claude Code lee el diseño de tu proyecto Think4Ever y escribe el código en el espacio de trabajo de Think4Ever, donde se ejecuta la aplicación.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Antes de empezar</h2>
<p>Necesitas:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Una cuenta de Think4Ever y un proyecto con su concepto establecido (requisitos, flujos e, idealmente, pantallas de interfaz de usuario)</li>
<li>Claude Code instalado en Windows o macOS</li>
<li>Una carpeta vacía en tu computadora para este proyecto</li>
<li>Opcional: Git u otro sistema de control de versiones, si deseas el código en tu propio repositorio</li>
</ul>

<p class="mt-4"><strong>Consejo:</strong> diseña las pantallas de la interfaz de usuario en Think4Ever antes de comenzar a programar. La aplicación de demostración omitió este paso, por lo que Claude Code diseñó las pantallas por sí mismo. Cuando las pantallas se planifican primero en Think4Ever, la aplicación se construye pantalla por pantalla en función de ellas y el resultado se ve mucho mejor.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 1: Conectar Claude Code a Think4Ever</h2>
<p>Te conectas una vez por proyecto. Toma alrededor de dos minutos.</p>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li>Crea una carpeta para el proyecto en tu computadora, abre una terminal, usa <code>cd</code> para entrar en ella e inicia Claude Code.</li>
<li>En Think4Ever, abre tu proyecto y selecciona <strong>MCP & Tools → Claude Code</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-2.jpg" alt="Menú MCP y Herramientas" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li>Haz clic en <strong>Crear token (Create token)</strong> y copia el token de inmediato. Se muestra solo una vez. Puedes administrar o revocar tokens más tarde en <strong>API → Access Tokens</strong>.</li>
<li>Copia el comando <strong>Agregar el servidor (Add the server)</strong> de la misma página. Se ve así:</li>
</ol>

<div class="my-6">
<pre class="bg-gray-50 rounded-xl p-4 overflow-x-auto text-sm border border-gray-200"><code>claude mcp add think4ever \
  --transport http https://&lt;your-think4ever-cell&gt;/mcp \
  --header "Authorization: Bearer &lt;your-token&gt;"</code></pre>
</div>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-3.jpg" alt="Página de MCP de Claude Code" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="5">
<li>Pega el comando en tu terminal, o en Claude Code y déjalo ejecutar. Claude Code confirmará que el servidor MCP think4ever ha sido agregado y conectado.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-4.jpg" alt="Configuración en la terminal de Claude Code" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li>Reinicia Claude Code en la misma carpeta. Las herramientas de un nuevo servidor MCP se cargan solo en una nueva sesión. También puedes ejecutar <code>/mcp</code> para confirmar que están cargadas.</li>
<li>Verifica la conexión. Pregúntale a Claude Code algo como <em>"¿Ves mi proyecto de Think4Ever?"</em> Debería nombrar tu proyecto.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-5.jpg" alt="Verificando la conexión con Claude Code" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Para compartir la configuración con tu equipo, la misma página también ofrece <code>--scope user</code> (disponible en todos los proyectos) y un archivo <code>.mcp.json</code> que puedes confirmar (commit) en el repositorio.</p>

<p class="mt-4">Una vez conectado, Claude Code puede usar las herramientas de Think MCP para leer y modificar tu proyecto:</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr><th class="px-6 py-3 border border-gray-200">Área</th><th class="px-6 py-3 border border-gray-200">Qué puede hacer el agente</th></tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">Proyectos</td><td class="px-6 py-4 border border-gray-200">Listar, obtener, crear y actualizar proyectos</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">Concepto</td><td class="px-6 py-4 border border-gray-200">Obtener el concepto activo, listar opciones de tecnología</td></tr>
<tr class="bg-white border-b hover:bg-gray-50"><td class="px-6 py-4 border border-gray-200 font-medium">Tareas</td><td class="px-6 py-4 border border-gray-200">Listar tareas, obtener una tarea</td></tr>
<tr class="bg-gray-50 border-b hover:bg-white"><td class="px-6 py-4 border border-gray-200 font-medium">Archivos</td><td class="px-6 py-4 border border-gray-200">Obtener el árbol de archivos, buscar archivos, buscar dentro de archivos, buscar y reemplazar, eliminar archivos</td></tr>
</tbody>
</table>
</div>

<p>Para ver cada herramienta, abre <strong>MCP & Tools → Tools & Test</strong> en tu proyecto de Think4Ever y haz clic en <strong>List MCP tools</strong>.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-6.jpg" alt="Lista de herramientas MCP" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 2: Elegir cómo construir</h2>
<p>Pregúntale a Claude Code cómo puedes desarrollar este proyecto, por ejemplo: <em>"¿Qué opciones de desarrollo tenemos?"</em> No necesitas decir local o en la nube. El servidor Think MCP ya le dice a Claude Code cuáles son las opciones, y las enumera por ti.</p>

<p class="mt-4">En todos los escenarios, diseñas en Think4Ever. Lo que cambia es quién construye el código y dónde se ejecuta.</p>

<div class="overflow-x-auto mt-6 mb-6">
<table class="w-full text-sm text-left text-gray-600 border-collapse border border-gray-200">
<thead class="text-xs text-white uppercase bg-[#314865]">
<tr>
<th class="px-6 py-3 border border-gray-200">Escenario</th>
<th class="px-6 py-3 border border-gray-200">Quién construye</th>
<th class="px-6 py-3 border border-gray-200">Dónde se ejecuta</th>
<th class="px-6 py-3 border border-gray-200">Uso de IA</th>
</tr>
</thead>
<tbody>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">1. Diseñar en Think4Ever, construir en Think4Ever</td>
<td class="px-6 py-4 border border-gray-200">Los agentes de Think4Ever (Desarrollador, Base de datos, Seguridad, Casos de prueba y otros) escriben el código a partir de tu diseño</td>
<td class="px-6 py-4 border border-gray-200">Nube de Think4Ever</td>
<td class="px-6 py-4 border border-gray-200">Créditos de IA de Think4Ever</td>
</tr>
<tr class="bg-gray-50 border-b hover:bg-white">
<td class="px-6 py-4 border border-gray-200 font-medium">2. Diseñar en Think4Ever, construir localmente con Claude Code</td>
<td class="px-6 py-4 border border-gray-200">Claude Code lee el diseño a través de MCP y construye la aplicación en tu carpeta local</td>
<td class="px-6 py-4 border border-gray-200">Tu máquina. Ejecutas el servidor de la aplicación, la base de datos y los servicios localmente (por ejemplo, Node y MySQL)</td>
<td class="px-6 py-4 border border-gray-200">Tu plan de Claude Code</td>
</tr>
<tr class="bg-white border-b hover:bg-gray-50">
<td class="px-6 py-4 border border-gray-200 font-medium">3. Diseñar en Think4Ever, construir en la nube de Think4Ever a través de Claude Code (recomendado)</td>
<td class="px-6 py-4 border border-gray-200">Claude Code lee el diseño y escribe el código directamente en tu espacio de trabajo de Think4Ever</td>
<td class="px-6 py-4 border border-gray-200">Herramientas en la nube de Think4Ever: servidor de aplicaciones, base de datos, servicios y una URL pública</td>
<td class="px-6 py-4 border border-gray-200">Tu plan de Claude Code</td>
</tr>
</tbody>
</table>
</div>

<p class="mt-4">Claude Code puede usar sus propios nombres para estos. En la demostración los llamó "Develop inside think4ever" (escenario 1), "Develop locally with me" (escenario 2) y "Hybrid" (escenario 3).</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-7.jpg" alt="Opciones de desarrollo de Claude Code" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4"><strong>Recomendado: escenario 3.</strong> Claude Code realiza la codificación en tu propio plan, y Think4Ever mantiene el diseño, la aplicación alojada y su base de datos en un solo lugar que tu equipo comparte.</p>

<p class="mt-4">Para el escenario 3, Claude Code luego pregunta <strong>cómo debería construirse el código dentro de Think4Ever</strong>. Elige <strong>I write it into think4ever</strong> (Yo lo escribo en think4ever). Claude Code entonces escribe cada archivo directamente en tu espacio de trabajo de Think4Ever. Las otras opciones le entregan la codificación a los agentes de Think4Ever, lo cual es el escenario 1 y usa créditos de IA de Think4Ever.</p>

<p class="mt-4">Si Claude Code comienza a escribir archivos localmente de todos modos, dile <em>"not locally"</em> (no localmente). Te preguntará si deseas eliminar la estructura local y cambiará a escribir en Think4Ever.</p>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-8.jpg" alt="Elegir cómo se construye el código" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 3: Construir, probar y ejecutar la aplicación</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Iniciar el desarrollo.</strong> Dile a Claude Code que comience a construir. Escribirá los archivos en tu proyecto de Think4Ever, y podrás verlos aparecer en el explorador de archivos del proyecto a medida que se escriben.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-9.jpg" alt="Viendo los archivos aparecer en Think4Ever" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Iniciar el servicio.</strong> Dile a Claude Code que inicie el servicio. Think4Ever aloja la aplicación y te da una URL pública que cualquiera puede abrir. Comparte esa URL con Claude Code.</li>
<li><strong>Dejar que Claude Code lo pruebe.</strong> Claude Code abre la URL pública en un navegador, verifica las páginas y corrige los errores que encuentra. Toda la depuración ocurre en Claude Code.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-10.jpg" alt="Claude Code probando la aplicación" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Agregar datos de demostración.</strong> Una aplicación nueva está vacía. Pídele a Claude Code que <em>"también agregue datos de demostración"</em> (also add demo data). En la demostración, agregó un script de inicialización con artistas y pistas de demostración con carátulas.</li>
<li><strong>Dejar que Think4Ever también solucione problemas.</strong> El agente de Think4Ever puede detectar problemas en el código que Claude Code envió. Envíalos para su corrección desde Think4Ever. Aquí, dos agentes trabajan en el mismo proyecto.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/how-to-design-in-think/how-to-design-in-think-11.jpg" alt="Think4Ever y Claude Code trabajando juntos" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li><strong>Revisar e iterar.</strong> Abre la URL pública, revisa la aplicación y pídele a Claude Code cualquier cambio de diseño o de características.</li>
</ol>

<p class="mt-4"><strong>Controlar qué tan duro piensa Claude Code.</strong> En Claude Code puedes establecer el nivel de esfuerzo (por ejemplo, alto, medio o máximo). Un mayor esfuerzo significa un razonamiento más largo en cada paso y más uso de tokens.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Consejos y solución de problemas</h2>

<p class="mt-4"><strong>Claude Code construye localmente a pesar de que le dije que construyera en Think4Ever.</strong> Claude Code no siempre sigue las instrucciones. Puede que construya y pruebe en tu máquina primero, y luego suba a Think4Ever. Si no quieres eso, dilo claramente al principio: <em>"Do not run anything locally. Build and run only inside Think4Ever."</em> (No ejecutes nada localmente. Construye y ejecuta solo dentro de Think4Ever). Recuérdaselo si se desvía.</p>

<p class="mt-4"><strong>Dos agentes están sobrescribiendo el código del otro.</strong> No dejes que Claude Code y el agente de Think4Ever cambien los mismos archivos al mismo tiempo. Espera a que uno termine, o detén a uno, antes de que el otro comience.</p>

<p class="mt-4"><strong>La aplicación en Think4Ever no muestra mis últimos cambios.</strong> Puede que Claude Code todavía se esté desplegando, o puede que haya construido localmente y no haya subido (pushed) todavía. Espera a que termine el despliegue y luego ejecuta la aplicación nuevamente en Think4Ever.</p>

<p class="mt-4"><strong>Los enlaces apuntan a una base de datos local después de mover el código.</strong> El código escrito primero para tu máquina (enlaces de bases de datos, cadenas de conexión) debe actualizarse antes de que se ejecute en Think4Ever. Pídele a Claude Code que los arregle para el entorno de Think4Ever.</p>

<p class="mt-4"><strong>El concepto de Think4Ever está desactualizado después de programar.</strong> Pídele a Think4Ever que inicie un nuevo escaneo del código. Actualizará la estructura del proyecto y los conceptos para que coincidan.</p>

<p class="mt-4"><strong>Control de versiones.</strong> Tienes dos opciones: mantener el código localmente y conectar Git o SVN desde tu máquina, o usar el control de versiones de Think4Ever. Elige el que mejor se adapte a tu equipo.</p>

<p class="mt-4"><strong>Trabajar en equipo.</strong> Dales a tus compañeros de equipo acceso al proyecto Think4Ever. Cada uno conecta su propia sesión de Claude Code (Paso 1) y trabaja en paralelo sin romper el trabajo de los demás.</p>

<p class="mt-4"><strong>Otros agentes de codificación.</strong> Cursor, OpenAI Codex y otros agentes que admiten MCP se conectan de la misma manera y obtienen las mismas herramientas de Think MCP.</p>
</section>

</div>
