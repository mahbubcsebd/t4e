---
title: "Poner el Blueprint en Marcha"
description: "Cómo utilizar los artefactos de diseño que genera Think4Ever, por fase del SDLC y por rol: requisitos, flujos, reglas, datos, arquitectura, diseños de UI e informes de preparación, con ejemplos reales."
category: "Design & Build"
readTime: "8 min de lectura"
hideThumbnail: true
image: "/images/tutorials/design-artifacts-guide/concept-ready.jpg"
date: "2026-03-20"
---

<div class="space-y-8 text-gray-600">

<section>
<h2 class="text-2xl font-bold text-gray-900 mb-4">Visión general</h2>
<p>Cada proyecto de Think4Ever produce un Living Blueprint: requisitos, flujos, reglas, datos, arquitectura y pantallas, todos interconectados y auditables. <strong>Esta guía explica qué hacer con esos artefactos una vez que los tienes</strong>: cuáles importan en cada fase de entrega, quién debe consultar cada uno y cuánto tiempo ahorran al equipo.</p>

<div class="my-6 p-4 rounded-xl bg-[#1D63E0]/5 border border-[#1D63E0]/15 flex flex-wrap gap-2 items-center text-sm text-gray-700">
<span class="font-semibold text-gray-900">Ruta de entrega:</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Intención de negocio</span>
<span class="text-gray-400">o</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Código existente</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-[#FF7A1A] text-white font-semibold text-xs shadow-sm">Living Blueprint</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Construye con cualquier agente</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Verifica y asegura</span>
<span class="text-[#1D63E0] font-bold">&rarr;</span>
<span class="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-xs font-medium text-gray-800">Modifica con seguridad</span>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="why">
<h2 class="text-2xl font-bold text-gray-900 mb-4">La IA abarató el código. El blueprint lo mantiene correcto.</h2>

<p>Los agentes de programación trabajan a partir de lo que está en el contexto de su sesión actual. Las personas solo ven su parte del sistema. Los artefactos de diseño de Think4Ever actúan como el registro común que ambos consultan, de modo que la decisión aprobada en una revisión de requisitos es exactamente la misma con la que un agente construye semanas después.</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Claridad</h3>
<p class="text-sm text-gray-600">Todos ven el mismo sistema en la vista adaptada a su función: un flujo para el analista, un diagrama entidad-relación para el ingeniero, una puntuación de preparación para el líder.</p>
</div>
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Coherencia</h3>
<p class="text-sm text-gray-600">Cada agente y desarrollador construye a partir de la misma especificación aprobada, obtenida mediante MCP en Claude Code, Cursor, Codex o los propios agentes de Think4Ever.</p>
</div>
<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm">
<h3 class="font-bold text-gray-900 text-base mb-2">Control</h3>
<p class="text-sm text-gray-600">Los cambios se validan primero con las reglas y flujos aprobados, detectando cualquier conflicto en la etapa de revisión antes de llegar a producción.</p>
</div>
</div>

<p class="mt-4">Se generan los mismos artefactos tanto si comienzas desde una frase de intención de negocio (<a href="/es/docs/create_project/" class="text-blue-600 hover:underline">Diseñar desde la intención</a>) como desde un repositorio existente (<a href="/es/docs/analyze_code/" class="text-blue-600 hover:underline">Analizar código existente</a>). Esto los hace indispensables a lo largo de todo el ciclo de vida: tanto las aplicaciones nuevas como los sistemas existentes quedan estructurados de la misma manera.</p>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="catalog">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Qué contiene el blueprint y qué pregunta responde cada artefacto</h2>

<p>Trece artefactos agrupados en cinco familias. Cada tarjeta detalla la pregunta que resuelve, cómo utilizarlo y quién obtiene el mayor beneficio de él.</p>

<div class="space-y-8 mt-6">

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">1. Intención <span class="text-sm font-normal text-gray-500 ml-2">¿Qué estamos construyendo y para quién?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Requisitos</h4>
<span class="text-xs text-gray-500">pestaña &middot; Requisitos</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Estuvimos de acuerdo en el objetivo antes de que alguien escribiera código?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Objetivos, roles de usuario, epics, funciones e historias de usuario, generadas por ThinkBrain y aprobadas por ti.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Desmarcar lo que no forme parte del MVP y dar a cada artefacto posterior una única fuente de verdad.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Líder</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Mapa conceptual</h4>
<span class="text-xs text-gray-500">pestaña &middot; Concepto</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Cuáles son las piezas principales y cómo se conectan?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Bloques de concepto para cada pantalla y componente, agrupados por módulo con resumen, campos, acciones y conexiones.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Verificar la integridad funcional del diseño, mapear dependencias e incorporar miembros sin leer código.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Desarrollador</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Gerente de negocio</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Arquitectura funcional</h4>
<span class="text-xs text-gray-500">pestaña &middot; Arquitectura Funcional</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Qué hace esta aplicación en realidad, de principio a fin?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Todas las pantallas y flujos representados de extremo a extremo como un único concepto funcional.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Guiar a los involucrados a través del producto completo o entender una aplicación heredada sin inspeccionar el código.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Socio</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">2. Comportamiento <span class="text-sm font-normal text-gray-500 ml-2">¿Cómo debe funcionar y qué reglas deben cumplirse siempre?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Flujos de negocio</h4>
<span class="text-xs text-gray-500">pestaña &middot; Flujos de Negocio</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Qué ocurre, paso a paso, cuando un usuario realiza esta acción?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Cada proceso desde el disparador hasta el resultado: actores, pasos numerados, decisiones, rutas de éxito y error, y datos.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Descubrir vacíos de experiencia antes de construir y derivar casos de prueba directamente de las rutas de éxito y fallo.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Desarrollador</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Reglas de negocio</h4>
<span class="text-xs text-gray-500">pestaña &middot; Reglas de Negocio</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Qué lógica rige el negocio, independientemente del código?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Expresiones claras de cada regla, severidad, objetos/flujos vinculados y comportamiento en caso de violación.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Revisar con el responsable del negocio, registrar lógica tácita y validar cambios frente a la intención aprobada.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Seguridad</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Desarrollador</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Roles y permisos</h4>
<span class="text-xs text-gray-500">pestaña &middot; Roles y Permisos</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Quién puede ver y hacer qué?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Tipos de usuario y acciones permitidas, formando la lista de control de acceso para la interfaz y las APIs.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Definir el acceso antes de escribir código, y auditar las implementaciones frente a él.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Seguridad</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">QA</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">3. Estructura <span class="text-sm font-normal text-gray-500 ml-2">¿De qué está compuesto y hacia dónde van los datos?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Objetos de datos</h4>
<span class="text-xs text-gray-500">pestaña &middot; Objetos de Datos</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Cuáles son las entidades principales de este sistema?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Entidades con campos, tipos y claves, y sus relaciones (por ejemplo: una mascota pertenece a una categoría; órdenes por mascota).</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Proveer a cada agente el esquema real de datos y evitar que inventen estructuras.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Desarrollador</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Arquitecto</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Mapas de integración y APIs</h4>
<span class="text-xs text-gray-500">pestaña &middot; Integraciones</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Con qué sistemas externos nos comunicamos?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Sistemas externos (pagos, modelos de IA, identidad), puntos de intercambio de datos, endpoints de API y configuración.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Identificar riesgos de terceros de forma temprana y planificar entornos de despliegue.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Seguridad</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Desarrollador</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Arquitectura técnica y diagramas</h4>
<span class="text-xs text-gray-500">Diagramas Técnicos</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Cómo está construido y cómo viajan los datos?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Componentes por capa vinculados al código fuente, más diagramas técnicos (ERD, DFD, seguridad, infraestructura, secuencia).</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Revisar decisiones de diseño, informar a auditores y mantener los diagramas siempre al día con el código.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Seguridad</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Líder</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">4. Experiencia <span class="text-sm font-normal text-gray-500 ml-2">¿Qué verán los usuarios?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Diseños de UI</h4>
<span class="text-xs text-gray-500">pestaña &middot; Diseños de UI</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Es este el producto que aprobamos antes de pagar por desarrollarlo?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Una pantalla por bloque de concepto, vista previa interactiva, vistas para móvil/tablet/escritorio y ajustes asistidos.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Obtener aprobación temprana de la apariencia y flujo; los agentes construyen pantalla a pantalla según el diseño previsto.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Desarrollador</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Líder</span>
</div>
</div>

</div>
</div>

<div>
<h3 class="text-xl font-bold text-gray-900 pb-2 border-b border-gray-200">5. Entrega y aseguramiento <span class="text-sm font-normal text-gray-500 ml-2">¿Qué desplegamos, en qué orden y está listo?</span></h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Documentos de requisitos</h4>
<span class="text-xs text-gray-500">Documentos de Requisitos</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Qué documentación formal entrego a los involucrados?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Resumen conceptual, especificación funcional, especificación técnica y diseño de base de datos, siempre regenerables.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Entregar especificaciones formales a directivos, clientes y auditores que reflejen fielmente lo construido.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Líder</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Socio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Gerente de negocio</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Fases y plan de desarrollo</h4>
<span class="text-xs text-gray-500">Desarrollar la app</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Qué construimos primero y quién lo desarrolla?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> Fases derivadas del diseño y un plan auditable donde cada paso especifica páginas, APIs, agente asignado y pantalla objetivo.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Lanzar por entregas graduales, aprobar el plan antes de ejecutar y supervisar el avance paso a paso.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Gerente de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Arquitecto</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Líder</span>
</div>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="flex justify-between items-baseline mb-2">
<h4 class="font-bold text-gray-900 text-base">Informe de preparación (Hardening)</h4>
<span class="text-xs text-gray-500">Production Hardening</span>
</div>
<p class="italic text-sm text-gray-600 mb-3">&ldquo;¿Es seguro poner esto en manos de usuarios reales?&rdquo;</p>
<div class="text-xs space-y-2 text-gray-600">
<div><strong class="text-gray-900 block font-semibold">Contiene</strong> 39 comprobaciones en 9 pilares con hallazgos, puntuación de preparación y calificación A&ndash;E, con resolución asistida por MCP.</div>
<div><strong class="text-gray-900 block font-semibold">Úsalo para</strong> Condicionar lanzamientos, priorizar correcciones por gravedad y mantener constancia verificable de lo auditado.</div>
</div>
</div>
<div class="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 items-center">
<span class="text-xs text-gray-500 font-medium mr-1">Audiencia:</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Seguridad</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Líder</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Arquitecto</span>
</div>
</div>

</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="map">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Qué artefacto aporta valor en cada fase</h2>

<p>El blueprint no es un entregable de diseño que se archiva. La gran mayoría de los artefactos continúan utilizándose durante el desarrollo, pruebas y mantenimiento.</p>

<div class="flex flex-wrap items-center gap-6 my-4 p-3.5 bg-gray-50/80 rounded-xl border border-gray-200/80 text-sm">
<span class="text-xs font-bold uppercase tracking-wider text-gray-500">Leyenda:</span>
<span class="inline-flex items-center gap-2 text-gray-700">
<span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span>
<strong class="text-gray-900 font-semibold">Primario:</strong> impulsa las decisiones en esta fase
</span>
<span class="inline-flex items-center gap-2 text-gray-700">
<span class="inline-flex items-center justify-center w-5 h-5 rounded-full"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span>
<strong class="text-gray-900 font-semibold">Secundario:</strong> se consulta o se verifica frente a él
</span>
</div>

<div class="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm bg-white">
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="bg-gray-50/90 border-b border-gray-200">
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-900 text-left border-r border-gray-200">Artefacto</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">1 &middot; Descubrir y definir</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">2 &middot; Diseñar</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">3 &middot; Construir</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">4 &middot; Probar y verificar</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center border-r border-gray-200">5 &middot; Lanzar y asegurar</th>
<th scope="col" class="py-3.5 px-3 font-semibold text-xs tracking-wider uppercase text-gray-700 text-center">6 &middot; Operar y cambiar</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Requisitos</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Mapa conceptual</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Arquitectura funcional</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Flujos de negocio</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Reglas de negocio</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Roles y permisos</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="text-gray-300 font-light">&mdash;</span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Objetos de datos</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Mapas de integración y APIs</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Arquitectura técnica y diagramas</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Diseños de UI</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Documentos de requisitos</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Fases y plan de desarrollo</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.03] transition-colors border-b border-gray-100 last:border-b-0">
<th scope="row" class="py-3 px-4 font-medium text-gray-900 text-left border-r border-gray-200 whitespace-nowrap bg-gray-50/40">Informe de preparación (Hardening)</th>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="text-gray-300 font-light">&mdash;</span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full" title="Secundario"><span class="w-2.5 h-2.5 rounded-full border-2 border-[#1D63E0] bg-transparent"></span></span></td>
<td class="py-3 px-3 text-center border-r border-gray-200"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
<td class="py-3 px-3 text-center"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1D63E0]/15" title="Primario"><span class="w-2.5 h-2.5 rounded-full bg-[#1D63E0]"></span></span></td>
</tr>
</tbody>
</table>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="phases">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Seis momentos donde el blueprint rinde frutos</h2>

<p>Para cada fase: la situación en la que te encuentras, los artefactos a consultar, qué hacer con ellos y qué obtiene el equipo a cambio. Las capturas corresponden a proyectos reales de Think4Ever; haz clic en cualquiera para ampliarla.</p>

<div class="space-y-12 mt-8">

<!-- Phase 1 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 1 &middot; Descubrir y Definir</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Transforma un objetivo de negocio en un alcance validado por todos</h3>
<p class="text-sm italic text-gray-600 mb-4">Tienes una idea, un resumen o un backlog de Jira, y una sala de personas donde cada una imagina algo distinto.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Expresa el objetivo como un resultado.</strong> &ldquo;Los clientes pueden solicitar reembolsos, los gerentes revisan excepciones y cada decisión queda visible para el cliente.&rdquo; Adjunta especificaciones o importa desde Jira si dispones de ellos.</li>
<li><strong>Responde a las preguntas de ThinkBrain</strong> en el Análisis de Requisitos. Utiliza <em>Dejar que la IA decida</em> donde tengas dudas y valida su propuesta más adelante.</li>
<li><strong>Revisa los Requisitos generados</strong> en equipo: objetivos, roles, epics, historias de usuario. Desmarca lo que esté fuera de alcance y haz clic en Aprobar y Construir.</li>
<li><strong>Lee las reglas de negocio en voz alta</strong> con el responsable del negocio. Son las decisiones que más a menudo se dejan implícitas.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Una definición aprobada y clara del producto a partir de la cual se deriva cada artefacto posterior y cada agente. Las discrepancias se detectan en la revisión, no en la demo de un sprint.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/intent-objective.jpg" alt="Pantalla de inicio preguntando qué debe lograr la aplicación, con un cuadro de objetivo y diseños predefinidos" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Comienza por el resultado.</strong> El cuadro de objetivos, más 299 diseños de soluciones preconfiguradas para iniciar.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/requirements-review.jpg" alt="Revisión de requisitos listando historias de usuario con casillas de verificación y botón de Aprobar y Construir" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Aprueba antes de construir nada.</strong> Roles, epics e historias de usuario, cada uno seleccionable.</figcaption>
</figure>
</div>

<!-- Phase 2 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 2 &middot; Diseñar</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Visualiza el sistema completo antes de invertir en programarlo</h3>
<p class="text-sm italic text-gray-600 mb-4">Los requisitos están aprobados. Ahora la duda es si el diseño es completo, coherente y viable.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Abre el resumen Concepto Listo.</strong> Contabiliza los elementos generados: bloques de concepto, objetos de datos, flujos, reglas, integraciones y roles.</li>
<li><strong>Recorre los flujos de negocio</strong> para los trayectos clave. Comprueba que cada bifurcación cuente con ruta de éxito y de error, y que cada paso manipule los datos correctos.</li>
<li><strong>Genera pantallas de UI</strong>, una por cada bloque conceptual, y pulsa Vista previa de diseños para navegar por la maqueta interactiva.</li>
<li><strong>Revisa la arquitectura y los objetos de datos</strong> con el líder técnico. Ajusta cualquier detalle directamente o mediante chat, mientras los cambios no tienen costo de desarrollo.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Una perspectiva de 360 grados de la aplicación antes del desarrollo: intención del negocio, especificación técnica, apariencia visual y flujos operativos, todo interconectado.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/concept-ready.jpg" alt="Diálogo de Concepto Listo sobre el mapa conceptual mostrando recuentos de bloques, objetos de datos, flujos, reglas e integraciones" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Concepto Listo.</strong> Para el ejemplo de planificación de jubilación: 75 elementos del blueprint a partir de un solo párrafo de intención.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/business-flows.jpg" alt="Lienzo de flujos de negocio mostrando pasos del proceso y ramificaciones" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Flujos de negocio</strong> con decisiones y datos asociados a cada paso.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/ui-designs.jpg" alt="Pestaña de Diseños de UI con una cuadrícula de pantallas generadas" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Diseños de UI,</strong> una pantalla por cada bloque conceptual.</figcaption>
</figure>
</div>
</div>

<!-- Phase 3 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 3 &middot; Construir</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Proporciona a cada agente de código la misma especificación validada</h3>
<p class="text-sm italic text-gray-600 mb-4">El código está a punto de escribirse, posiblemente por varias personas y múltiples agentes al mismo tiempo.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Elige quién desarrolla.</strong> Agentes de Think4Ever en la plataforma, o Claude Code, Cursor, Codex y otras herramientas MCP con tu propia suscripción. En ambos casos, el blueprint es una especificación legible por máquina.</li>
<li><strong>Conecta tu agente una sola vez</strong> a través de MCP &amp; Tools. Leerá conceptos, flujos, reglas, objetos de datos y pantallas sin tener que asumir nada.</li>
<li><strong>Planifica por fases de la hoja de ruta.</strong> Marca únicamente las fases a construir ahora, genera el borrador del plan y revisa páginas, APIs, agentes y pantallas antes de confirmar y ejecutar.</li>
<li><strong>Construye pantalla a pantalla</strong> sobre la base del diseño previsto. Los equipos que omiten el diseño de UI dejan que el agente invente la interfaz, lo que suele derivar en inconsistencias.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Los agentes implementan un sistema debidamente especificado en lugar de improvisarlo. En una sesión de Claude Code, el agente cargó un esquema de 23 entidades y reglas de negocio desde Think4Ever y programó directamente sin necesidad de reexplicaciones.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/build-plan.jpg" alt="Diálogo de revisión del plan detallando pasos de compilación con páginas, APIs y agentes asignados" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Revisa el plan.</strong> Cada paso indica qué se construye y qué agente lo ejecuta. Nada corre hasta que lo confirmes.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/build-choice.jpg" alt="Diálogo para elegir la herramienta de desarrollo: Claude Code, Cursor, Codex o Agentes Think4Ever" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Tu agente, nuestro blueprint.</strong> Las herramientas externas no consumen créditos de Think4Ever.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/think-mcp.jpg" alt="Servidor Think MCP conectando con Claude Code, Codex, Cursor, VS Code, Gemini CLI y Devin" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Think MCP</strong> sirve el blueprint a cualquier cliente compatible con MCP.</figcaption>
</figure>
</div>
</div>

<!-- Phase 4 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 4 &middot; Probar y Verificar</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Prueba frente a lo aprobado, no frente a lo que se codificó</h3>
<p class="text-sm italic text-gray-600 mb-4">La aplicación corre. Que una app se ejecute es el resultado de la compilación, no una prueba de que cumple los requisitos.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Convierte los flujos en casos de prueba.</strong> Los disparadores, actores, pasos y bifurcaciones de error son un guion de prueba listo para usar.</li>
<li><strong>Verifica la ruta de fallo de cada regla.</strong> Las reglas describen exactamente lo que debe suceder ante un incumplimiento (responder con un 400, reautenticar, reformatear), por lo que el resultado esperado ya está definido.</li>
<li><strong>Comprueba el acceso contra Roles y permisos,</strong> rol por rol.</li>
<li><strong>Compara las pantallas construidas con los diseños de UI</strong> y registra las diferencias como tareas con el contexto del blueprint vinculado.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Una trazabilidad directa desde la regla aprobada hasta el resultado del test. Ejemplo de Think4Ever: un plazo de reembolso aprobado en 24 horas pero codificado en 48 se identifica antes de publicar, no tras la queja de un usuario.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/business-rules.jpg" alt="Lista de reglas de negocio mostrando tipo de regla, severidad, fase, expresión, objetos vinculados y comportamiento ante violación" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Reglas de negocio, Petstore.</strong> &ldquo;El nombre de usuario es la clave de negocio única&rdquo;: expresión <code>!exists(user, user.username)</code>, rechaza con un 400 en caso de conflicto.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/flow-detail.jpg" alt="Panel de detalle de flujo de negocio con disparador, actores y pasos secuenciales" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Detalle de flujo.</strong> Búsqueda de mascotas: validar estado, consultar y devolver lista o un 400. Ese es un caso de prueba directo.</figcaption>
</figure>
</div>

<!-- Phase 5 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 5 &middot; Lanzar y Asegurar</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Toma la decisión de pase a producción basada en evidencia</h3>
<p class="text-sm italic text-gray-600 mb-4">Alguien debe dar el visto bueno. Hoy en día suele ser un acto de fe sobre código que nadie revisó por completo.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Ejecuta Production Hardening.</strong> Un agente auditor por cada pilar examina el concepto, el árbol de archivos y el código, puntuando 39 comprobaciones.</li>
<li><strong>Lee primero el resumen ejecutivo.</strong> Señala la corrección más urgente en lenguaje claro, antes de la lista detallada.</li>
<li><strong>Haz clic en Reparar hallazgos</strong> para transferir las advertencias a los agentes de Think4Ever o a tu propio agente mediante MCP, y vuelve a evaluar.</li>
<li><strong>Regenera los documentos de requisitos</strong> para que los documentos entregados al cliente o auditor coincidan con la versión publicada.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Una puntuación de preparación, una calificación y una lista de hallazgos verificable para conservar o auditar, en lugar de una simple promesa verbal.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/readiness-report.jpg" alt="Informe de preparación de producción para Natter con puntuación 57, Grado D, 2 fallos, 15 advertencias y lista de seguridad" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Informe de preparación de Natter.</strong> 86 archivos auditados en menos de seis minutos: puntuación 57, Grado D. El fallo crítico SEC-03 era la ausencia de autorización en servidor: cualquiera podía suplantar a otro usuario.</figcaption>
</figure>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/requirements-docs.jpg" alt="Página de documentos de requisitos con tarjetas de Resumen de Concepto, Especificación Funcional, Técnica y Diseño de Base de Datos" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Documentos de requisitos,</strong> cada uno con botones de Abrir y Reconstruir a partir del blueprint actualizado.</figcaption>
</figure>
</div>

<!-- Phase 6 -->
<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm">
<div class="text-xs font-bold text-[#FF7A1A] uppercase tracking-wider mb-1">Fase 6 &middot; Operar y Cambiar</div>
<h3 class="text-xl font-bold text-gray-900 mb-2">Modifica un sistema existente sin temor a romperlo</h3>
<p class="text-sm italic text-gray-600 mb-4">La aplicación está en producción o es heredada, y quienes la programaron ya no están. Cualquier modificación representa un riesgo.</p>

<ol class="list-decimal pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Mapea el código.</strong> Selecciona Analizar código existente indicando repositorio y rama. El repositorio de origen no sufre modificaciones.</li>
<li><strong>Acelera la incorporación de miembros.</strong> Los nuevos integrantes leen los resúmenes de pantalla y flujos de negocio antes que la arquitectura. Es infinitamente más rápido que inspeccionar código en bruto.</li>
<li><strong>Planifica los cambios en el blueprint.</strong> Modifica el bloque, sus elementos, conexiones o fase, verificando de inmediato qué flujos, reglas y entidades se ven afectados.</li>
<li><strong>Vuelve a escanear tras cambios externos.</strong> Si el código se modifica fuera de Think4Ever, un nuevo análisis sincroniza el blueprint automáticamente.</li>
</ol>

<div class="mt-4 p-4 rounded-xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/20 text-sm text-gray-700">
<span class="font-bold text-[#FF7A1A] block mb-1">Lo que obtienes</span>
Documentación viva recuperada para aplicaciones que carecían de ella, incorporación veloz y verificación previa del impacto de cada cambio.
</div>

<figure class="my-8">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/concept-map.jpg" alt="Arquitectura de pantallas y bloques de OpenAPI Petstore agrupados en módulos con el recorrido del cliente" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Petstore, mapeado a partir del código.</strong> Cuatro módulos y el recorrido del cliente: autenticación, catálogo, visualización de mascota y gestión de órdenes.</figcaption>
</figure>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/tech-architecture.jpg" alt="Arquitectura técnica de la aplicación con componentes agrupados por capas" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Arquitectura técnica</strong> por capas, con cada bloque enlazado a sus archivos correspondientes.</figcaption>
</figure>

<figure class="my-4">
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/edit-block.jpg" alt="Diálogo para editar un bloque: fase, elementos y conexiones" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Editar un bloque</strong>: fase, elementos y conexiones.</figcaption>
</figure>
</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="personas">
<h2 class="text-2xl font-bold text-gray-900 mb-4">El mismo blueprint, diferente punto de partida</h2>

<p>Los perfiles están basados en la propuesta de valor del proyecto. Cada ficha detalla lo que realmente le preocupa a cada persona, qué artefactos abrir primero, una rutina básica y qué beneficio obtiene.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Líder empresarial &middot; CEO, CIO, CTO, CFO</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Estamos obteniendo control y rentabilidad de lo que invertimos en desarrollo con IA?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Informe de preparación</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Documentos de requisitos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Fases del roadmap</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Verifica la puntuación de preparación y calificación en cada versión candidata.</li>
<li>Lee el Resumen Conceptual de los programas que patrocinas.</li>
<li>Exige ver las fases del roadmap antes de comprometer presupuesto.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Un único registro de gobierno común entre equipos, proveedores y agentes; el conocimiento técnico permanece en la empresa y está listo ante cualquier auditoría.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Escala el desarrollo con IA sin perder el control sobre lo que se construye.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Responsable de negocio &middot; Product owner, BA, delivery manager</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Lo que se despliegue coincidirá con lo que aprobamos?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Requisitos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Flujos de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Reglas de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Diseños de UI</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Aprueba los requisitos y desmarca lo que quede fuera de alcance.</li>
<li>Recorre los flujos clave y navega por la vista previa de UI con los interesados.</li>
<li>Revisa la severidad de cada regla y su acción ante fallos, y aprueba el plan por fases.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Lo que sale a producción coincide con lo validado, con menos sorpresas de última hora y trazabilidad total.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Aprueba la intención. Ten la certeza de que fue construida.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Arquitecto &middot; Líder técnico</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Cómo mantengo intacto el diseño cuando diez agentes escriben código simultáneamente?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Arquitectura técnica</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Objetos de datos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Mapas de integración</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Mapa conceptual</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Revisa la arquitectura por capas y el ERD antes de iniciar el código.</li>
<li>Conecta los agentes del equipo mediante MCP para que operen con los mismos contratos.</li>
<li>Verifica el impacto en el blueprint antes de aprobar un cambio; ejecuta hardening antes del lanzamiento.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Arquitectura que se aplica de verdad en lugar de ser solo un documento decorativo, facilitando refactorizaciones seguras.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Tu arquitectura, aplicada rigurosamente en cada agente.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Desarrollador</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Por qué tengo que explicarle este producto de nuevo a cada agente?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Mapa conceptual y resúmenes</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Objetos de datos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Reglas de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Diseños de UI</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Conecta Claude Code, Cursor o Codex a tu proyecto una sola vez.</li>
<li>Pide al agente que cargue el concepto, esquemas y reglas antes de codificar.</li>
<li>En un proyecto heredado, consulta primero los resúmenes de bloques y los flujos.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Menos retrabajo y reexplicaciones, agentes que dejan de inventar bases de datos, y comprensión rápida de código ajeno desde su editor habitual.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Deja de reexplicar tu producto a cada agente de código.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">QA &middot; Seguridad &middot; Riesgo y Cumplimiento</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Qué se suponía que debía hacer esto y cómo compruebo que realmente lo hace?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Flujos de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Reglas de negocio</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Roles y permisos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Informe de preparación</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Deriva casos de prueba a partir de las ramas de error y las violaciones de reglas.</li>
<li>Evalúa los accesos rol por rol contra la matriz de permisos.</li>
<li>Utiliza los diagramas DFD, de seguridad y el informe de hardening como evidencia formal.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Documentación precisa, flujos de datos y reglas asociadas para código que ellos no crearon, con hallazgos organizados por gravedad.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Revisa el sistema en su totalidad, no solo el diff de código.&rdquo;</p>
</div>
</div>

<div class="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Socio Consultor y de Entrega</div>
<p class="italic text-sm text-gray-600 mb-4">&ldquo;¿Cómo entrego un resultado con gobierno técnico impecable y una transición limpia?&rdquo;</p>
<div class="mb-4">
<span class="text-xs font-semibold text-gray-900 block mb-1.5">Abrir primero:</span>
<div class="flex flex-wrap gap-1.5">
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold border border-[#FF7A1A]/20">Arquitectura funcional</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Documentos de requisitos</span>
<span class="inline-block px-2.5 py-0.5 rounded-full bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-medium border border-[#1D63E0]/20">Plan de desarrollo</span>
</div>
</div>
<ol class="list-decimal pl-5 space-y-1.5 text-xs text-gray-600 mb-4">
<li>Mapea el sistema existente del cliente durante la primera semana.</li>
<li>Acuerda alcance y fases sobre el blueprint, no en diapositivas estáticas.</li>
<li>Entrega el blueprint junto con las especificaciones actualizadas al cliente.</li>
</ol>
</div>
<div class="pt-4 border-t border-gray-100">
<p class="text-xs text-gray-600"><strong>Resultado:</strong> Una metodología de entrega repetible que pueden vender como resultado de alto valor, transfiriendo el conocimiento íntegro al cliente.</p>
<p class="text-xs italic text-gray-500 mt-2">&ldquo;Comprender, estructurar, construir y gobernar.&rdquo;</p>
</div>
</div>

</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="examples">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Tres proyectos, de inicio a fin</h2>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-[#1D63E0]/10 text-[#1D63E0] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#1D63E0]/20">A partir de la intención</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">Planificador de jubilación con IA</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">Un solo párrafo: una aplicación de planificación de jubilación que aconseja como un banquero de inversión profesional. Tras el análisis guiado y una aprobación, ThinkBrain generó el siguiente blueprint.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">23</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">bloques</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">20</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">datos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">11</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">flujos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">9</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">reglas</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">8</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">integraciones</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">roles</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">23 pantallas, desde inicio de sesión hasta modelado de escenarios y consola administrativa. Los agentes completaron un plan de 22 pasos para el lanzamiento.</p>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-[#FF7A1A]/10 text-[#C84E05] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#FF7A1A]/20">A partir de código existente</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">OpenAPI Petstore</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">Una API pública en Spring Boot para mascotas, pedidos y usuarios, importada desde GitHub (26 archivos). Nadie había escrito documentación de diseño; Think4Ever la recuperó íntegramente.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">10</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">pantallas</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">10</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">flujos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">11</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">reglas</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">6</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">objetos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">roles</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">4</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">módulos</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">Reglas como &ldquo;El usuario es único&rdquo; y &ldquo;El token expira tras 1h&rdquo; fueron extraídas en lenguaje natural para su confirmación.</p>
</div>

<div class="p-5 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
<div>
<span class="inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-2">Production hardening</span>
<h3 class="text-lg font-bold text-gray-900 mb-2">App de mensajería Natter</h3>
<p class="text-xs text-gray-600 leading-relaxed mb-4">Un cliente de mensajería en React creado con Lovable. Parecía listo para producción. La auditoría demostró lo contrario.</p>

<div class="grid grid-cols-3 gap-2 my-4 text-center">
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">57</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">preparación</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">D</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">grado</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">86</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">archivos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">2</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">fallos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">15</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">avisos</div>
</div>
<div class="p-2.5 bg-gray-50 rounded-lg border border-gray-200">
<div class="text-lg font-bold text-gray-900">5</div>
<div class="text-[10px] text-gray-500 uppercase font-medium">aprobados</div>
</div>
</div>
</div>
<p class="text-xs text-gray-600 mt-2">La identidad se confiaba ciegamente al cliente, permitiendo suplantaciones. El hallazgo se delegó a un agente con Reparar hallazgos antes de desplegar.</p>
</div>

</div>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/structure-map.jpg" alt="Mapa de estructura del proyecto completándose por dominio durante el análisis de código" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Mapa de estructura</strong> completándose por dominio mientras se analiza Petstore.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/block-summary.jpg" alt="Resumen de una pantalla: dónde encaja y quién la utiliza" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Resumen de bloque</strong>: qué se puede hacer aquí, quién lo utiliza y datos clave.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/data-objects.jpg" alt="Objetos de datos Pet, User, Order, Category y Tag con sus relaciones" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Objetos de datos</strong>: Pet, User, Order, Category, Tag.</figcaption>
</figure>

<figure>
<div class="w-full overflow-hidden rounded-xl border border-gray-100 shadow-sm">
<img src="/images/tutorials/design-artifacts-guide/technical-diagrams.jpg" alt="Galería de diagramas técnicos con tarjetas de stack, seguridad, infraestructura, ERD y DFD" class="w-full h-auto" />
</div>
<figcaption class="text-center text-sm text-gray-500 mt-2"><strong>Galería de diagramas técnicos</strong> (Modo Desarrollador).</figcaption>
</figure>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="value">
<h2 class="text-2xl font-bold text-gray-900 mb-4">Qué cambia cuando los artefactos de diseño están vivos</h2>

<div class="overflow-x-auto my-6 rounded-xl border border-gray-200/90 shadow-sm bg-white">
<table class="w-full text-left text-sm border-collapse">
<thead>
<tr class="border-b border-gray-200 bg-gray-50/90">
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-900 border-r border-gray-200 w-1/5">Momento</th>
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-gray-700 border-r border-gray-200 w-2/5">
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 rounded-full bg-gray-400"></span>
<span>Sin un Living Blueprint</span>
</div>
</th>
<th scope="col" class="py-3.5 px-4 font-bold text-xs tracking-wider uppercase text-[#1D63E0] w-2/5 bg-[#1D63E0]/5">
<div class="flex items-center gap-2">
<span class="inline-block w-2 h-2 rounded-full bg-[#1D63E0]"></span>
<span>Con los artefactos de Think4Ever</span>
</div>
</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200">
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Lanzamiento inicial</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Requisitos dispersos en diapositivas y tickets, interpretados de forma distinta por cada equipo</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Objetivos, roles, epics e historias aprobados de los que se deriva cada artefacto posterior</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Revisión de diseño</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Un diagrama dibujado una sola vez que queda obsoleto al siguiente sprint</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Concepto, flujos, datos y pantallas generados en conjunto y permanentemente conectados</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Sesión con agente de código</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">La primera parte de cada sesión se pierde en volver a explicar el modelo de datos y las reglas</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">El agente consulta esquemas, reglas y pantallas a través de MCP y construye directamente sobre ellos</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Pruebas (QA)</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Casos de prueba deducidos mediante ingeniería inversa sobre el código que ya se escribió</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Casos de prueba extraídos directamente de los flujos aprobados y de las rutas de error de las reglas</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Pase a producción</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Decisión de lanzamiento basada únicamente en corazonadas o presiones de calendario</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Puntuación de preparación, calificación y hallazgos priorizados, listos para resolver con agentes</td>
</tr>
<tr class="hover:bg-[#1D63E0]/[0.02] transition-colors">
<td class="p-4 font-semibold text-gray-900 border-r border-gray-200 bg-gray-50/40 whitespace-nowrap">Cambios e incorporación</td>
<td class="p-4 border-r border-gray-200 text-gray-600 leading-relaxed text-sm">Leer código en crudo y consultar a los pocos miembros que aún permanecen en el equipo</td>
<td class="p-4 text-gray-900 font-medium bg-[#1D63E0]/[0.02] leading-relaxed text-sm">Leer resúmenes y flujos, evaluar el impacto en el blueprint y reescanear para estar siempre sincronizados</td>
</tr>
</tbody>
</table>
</div>
</section>

<div class="h-px bg-gray-100 my-8"></div>

<section id="sources">
<h2 class="text-xl font-bold text-gray-900 mb-4">Fuentes y notas</h2>

<ul class="list-disc pl-5 space-y-2 text-sm text-gray-600">
<li><strong>Descripciones de artefactos:</strong> Documentación de think4ever.com (<a href="/es/docs/create_project/" class="text-blue-600 hover:underline">Crear un Nuevo Proyecto</a>, <a href="/es/docs/designer_introduction.html" class="text-blue-600 hover:underline">Introducción al Diseñador</a>), el Manual de Usuario de Think4Ever v1.1, y las guías prácticas <a href="/es/tutorials/build-an-application-from-intent-in-think4ever" class="text-blue-600 hover:underline">Construir una Aplicación a partir de la Intención</a>, <a href="/es/tutorials/turn-existing-code-into-a-living-blueprint" class="text-blue-600 hover:underline">Convertir Código Existente en un Living Blueprint</a> y <a href="/es/tutorials/how-to-design-in-think" class="text-blue-600 hover:underline">Diseñar en Think, Codificar en Claude</a>.</li>
<li><strong>Ejemplos y recuentos:</strong> Obtenidos de dichas guías, del informe técnico de Production Hardening (Natter) y del documento <em>One Spec, Every Agent</em> (sesión de Claude Code). El ejemplo del plazo de reembolso de 24 frente a 48 horas proviene de la página Cómo funciona de think4ever.com.</li>
<li><strong>Perfiles, resultados y mensajes:</strong> Proceden del borrador de Valor y Diferenciación del proyecto. Las rutinas y el mapa de fases son recomendaciones redactadas para esta guía, no comportamientos automáticos del producto.</li>
<li><strong>Capturas de pantalla:</strong> Los diagramas técnicos y los documentos de requisitos corresponden al manual de usuario y reflejan la interfaz previa en Modo Desarrollador.</li>
</ul>
</section>

</div>
