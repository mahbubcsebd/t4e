---
title: 'Cómo hacerlo: Diseñar en Think, Programar en Codex'
description: 'Aprende a conectar OpenAI Codex a Think4Ever a través de MCP y construir tu proyecto.'
category: 'Development'
readTime: '5 min de lectura'
hideThumbnail: true
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Descripción general</h2>
<p>Diseñas la aplicación en Think4Ever, desde la intención de negocio hasta el blueprint aprobado y las pantallas de interfaz de usuario. Luego OpenAI Codex la construye en tu computadora, leyendo el diseño de Think4Ever a través de MCP. Think4Ever permanece como la fuente de verdad del diseño mientras Codex escribe y prueba el código, con tu propia suscripción de OpenAI.</p>

<p class="mt-4">Esta guía sigue un ejemplo real, <strong>AppointFlow</strong>: un sistema de reserva de citas que conecta clientes con proveedores de servicios, con paneles separados para clientes, proveedores y administradores. Cubre:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Diseñar la aplicación desde la intención y aprobar el blueprint</li>
<li>Elegir un tema y generar las pantallas de interfaz de usuario</li>
<li>Conectar Codex a Think4Ever</li>
<li>Entregar a Codex un resumen de construcción y verificar lo que construye</li>
</ul>

<p class="mt-4">El mismo enfoque funciona con Claude Code. Ver <a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">Cómo hacerlo: Diseñar en Think, Programar en Claude</a>.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Antes de empezar</h2>
<p>Necesitas:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>Una cuenta de Think4Ever</li>
<li>Codex instalado e iniciado sesión con tu cuenta de OpenAI</li>
<li>Node.js, para que Codex pueda ejecutar el puente npx que lo conecta a Think4Ever</li>
<li>Una carpeta vacía en tu computadora para la aplicación</li>
</ul>

<p class="mt-4">Mantén los tokens de acceso fuera de las capturas de pantalla y del control de versiones.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 1: Diseñar la aplicación en Think4Ever</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Elige Diseñar desde la intención (Design from intent).</strong> Crea un proyecto y selecciona <strong>Design from intent &rarr; Design a system</strong>. Esta ruta convierte un resultado empresarial en un diseño de sistema revisable antes de que se escriba cualquier código.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-1.jpg" alt="Elegir Design from intent en Think4Ever" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Describe el objetivo de negocio.</strong> Di qué debe lograr la aplicación: los usuarios, los flujos principales, las restricciones de negocio, el stack tecnológico preferido, las integraciones y cómo se ve el éxito. Adjunta especificaciones o maquetas si son relevantes. Luego haz clic en <strong>Continue</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-2.jpg" alt="Describir el objetivo de negocio" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li><strong>Resuelve las primeras decisiones.</strong> Think4Ever marca conflictos y opciones abiertas en tu descripción, como un desajuste de stack, el ORM, el modelo de pago y los canales de notificación. Elige la opción adecuada para cada uno para que el diseño no dependa de supuestos ocultos, luego haz clic en <strong>Submit</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-3.jpg" alt="Resolver las primeras decisiones" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Trabaja en las rondas de Análisis de Requisitos.</strong> Cada ronda hace preguntas más específicas, por ejemplo cómo se generan los turnos de reserva, cómo funcionan los depósitos o si los clientes pueden reservar como invitados. Elige la opción correspondiente, agrega tu propia respuesta con <strong>Add new item</strong>, o marca <strong>Let AI decide</strong> solo cuando la elección realmente no importe. Haz clic en <strong>Submit Answers</strong> después de cada ronda.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-4.jpg" alt="Ronda 1 de Análisis de Requisitos" class="w-full h-auto" />
</div>
</figure>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-5.jpg" alt="Ronda 2 de Análisis de Requisitos" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="5">
<li><strong>Aprueba el blueprint.</strong> Revisa los objetivos, roles, reglas, flujos de trabajo y decisiones técnicas ensamblados. Corrige cualquier cosa incompleta o contradictoria, luego haz clic en <strong>Approve &amp; Build</strong>. Este es el traspaso de la definición del producto al diseño generado.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-6.jpg" alt="Aprobar el blueprint" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="6">
<li><strong>Elige un tema.</strong> Selecciona el tema visual que mejor se adapte al producto. Haz clic en <strong>Full Demo</strong> para explorar un tema, luego en <strong>Select Theme</strong>.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-7.jpg" alt="Elegir un tema" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="7">
<li><strong>Genera la interfaz de usuario.</strong> Inicia la construcción de la interfaz y espera a que termine. Las pantallas aparecen a medida que se completan. AppointFlow obtuvo 21 pantallas que cubren los flujos de cliente, proveedor y administrador.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-8.jpg" alt="Generar las pantallas de UI" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="8">
<li><strong>Revisa las pantallas.</strong> Abre <strong>UI Designs</strong> y verifica la galería y la maqueta interactiva <strong>Preview Designs</strong> en todos los flujos principales. Corrige las pantallas faltantes o las decisiones de producto en Think4Ever antes de empezar a programar.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-9.jpg" alt="Revisar las pantallas de UI" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 2: Conectar Codex a Think4Ever</h2>

<p>Te conectas una vez. Después de eso, cada sesión de Codex en tu computadora puede leer tus diseños de Think4Ever.</p>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li>En tu proyecto de Think4Ever, abre <strong>MCP &amp; Tools &rarr; Codex</strong>.</li>
<li>Haz clic en <strong>Create token</strong> y cópialo de inmediato. Se muestra solo una vez. Administra o revoca tokens más tarde en <strong>API &rarr; Access Tokens</strong>.</li>
<li>Copia el bloque de configuración generado en tu archivo de configuración de Codex, <code>~/.codex/config.toml</code>. Codex llega al servidor HTTP de Think4Ever a través del puente mcp-remote. El bloque se ve así, con tu propia dirección de servidor y token:</li>
</ol>

<div class="my-6">
<pre class="bg-gray-50 rounded-xl p-4 overflow-x-auto text-sm border border-gray-200"><code>[mcp_servers.think4ever]
command = "npx"
args = [
  "-y", "mcp-remote",
  "https://YOUR_THINK_CELL/mcp",
  "--header", "Authorization: Bearer tf_YOUR_TOKEN"
]</code></pre>
</div>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li>Guarda el archivo y reinicia Codex. Las herramientas de think4ever se cargan en la nueva sesión.</li>
<li>Verifica la conexión: pídele a Codex que liste sus herramientas de think4ever, o que nombre tu proyecto activo.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-10.jpg" alt="Panel MCP y Herramientas — Codex en Think4Ever" class="w-full h-auto" />
</div>
</figure>

<p class="mt-4">Nunca guardes el token en tu repositorio.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 3: Dar a Codex el resumen de construcción</h2>

<ol class="list-decimal pl-6 mt-4 space-y-4">
<li><strong>Elige Build with Codex.</strong> En UI Designs, haz clic en <strong>Build UI</strong>. En <strong>How do you want to build it?</strong>, elige <strong>Codex</strong>. Codex construye en tu computadora con tu suscripción de OpenAI, por lo que no se usan créditos de Think4Ever.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-11.jpg" alt="Elegir Build with Codex en UI Designs" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="2">
<li><strong>Copia el resumen.</strong> El panel de Codex recapitula la conexión única (con un enlace a <strong>Open the connection guide</strong>) y muestra un resumen de construcción específico del proyecto. Haz clic en <strong>Copy the brief</strong>. El resumen nombra tu proyecto y concepto, y le dice a Codex que cargue el concepto activo, los requisitos técnicos, cada bloque de concepto y cada diseño de UI antes de escribir código. Cópialo de nuevo cada vez que cambies de proyecto o reconstruyas el concepto.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-12.jpg" alt="Copiar el resumen de construcción del panel de Codex" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="3">
<li><strong>Abre una carpeta de proyecto vacía.</strong> En Codex, crea o selecciona una carpeta vacía y ábrela como raíz del proyecto. Codex escribe la aplicación y sus instrucciones de proyecto allí.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-13.jpg" alt="Abrir una carpeta de proyecto vacía en Codex" class="w-full h-auto" />
</div>
</figure>

<ol class="list-decimal pl-6 mt-4 space-y-4" start="4">
<li><strong>Pega el resumen y envíalo.</strong> Inicia una nueva tarea, pega todo el resumen y envíalo. Deja que Codex cargue el diseño de Think4Ever antes de crear cualquier archivo. El resumen también le dice a Codex que pregunte en lugar de adivinar cuando la especificación no sea clara, y que verifique su código con la lista de verificación de hardening de Think4Ever antes de dar el build por terminado.</li>
</ol>

<figure class="my-10">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-in-think-code-in-codex/design-in-think-code-in-codex-14.jpg" alt="Pegar el resumen y enviarlo a Codex" class="w-full h-auto" />
</div>
</figure>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Paso 4: Construir y verificar la aplicación</h2>

<p>Codex estructura la aplicación, instala dependencias, ejecuta sus comprobaciones y compara el resultado con el diseño de Think4Ever. Aprueba cada comando solo cuando se ajuste a tu proyecto y entorno.</p>

<p class="mt-4">Cuando termine, verifica que:</p>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li>El stack tecnológico coincida con los requisitos técnicos de Think4Ever</li>
<li>Cada pantalla importante de Think4Ever tenga una ruta o estado de aplicación</li>
<li>Los roles, permisos, validaciones, estados de error y reglas de negocio estén aplicados en el código</li>
<li>El diseño, formularios, navegación y comportamiento responsivo coincidan con los diseños de UI</li>
<li>Las pruebas y el build de producción pasen exitosamente, y la aplicación inicie desde una instalación limpia</li>
</ul>

<h3 class="text-lg font-bold text-gray-900 mt-6 mb-3">Prompts de seguimiento útiles</h3>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li><em>"Compara la aplicación actual con cada diseño de interfaz de Think y enumera las diferencias restantes antes de modificar el código."</em></li>
<li><em>"Ejecuta las pruebas y el build de producción, corrige los fallos y luego resume los comandos y resultados."</em></li>
<li><em>"Recarga las definiciones de roles de Think y verifica cada ruta para detectar la falta de aplicación de permisos."</em></li>
</ul>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Solución de problemas</h2>

<p class="mt-4"><strong>Codex no ve las herramientas de think4ever.</strong> Reinicia Codex después de modificar <code>config.toml</code>. Si el puente no se inicia, verifica que Node.js y npx estén instalados.</p>

<p class="mt-4"><strong>Errores de autenticación.</strong> Crea un nuevo token en Think4Ever, reemplaza el anterior en <code>config.toml</code> y reinicia Codex. Revoca cualquier token que haya sido expuesto.</p>

<p class="mt-4"><strong>Codex abre el diseño equivocado.</strong> Copia un nuevo resumen de construcción y verifica los IDs de proyecto y de concepto.</p>

<p class="mt-4"><strong>La aplicación se desvía del diseño.</strong> Pídele a Codex que recargue las pantallas de Think4Ever relevantes y las reglas de negocio antes de editar más código.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Referencias</h2>
<ul class="list-disc pl-5 space-y-2 mt-4">
<li><a href="/tutorials/how-to-design-in-think/" class="text-blue-600 hover:underline">Cómo hacerlo: Diseñar en Think, Programar en Claude</a>, el mismo flujo de trabajo con Claude Code</li>
<li><a href="https://learn.chatgpt.com/docs/extend/mcp" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Documentación de OpenAI Codex MCP</a></li>
</ul>
</section>

</div>
