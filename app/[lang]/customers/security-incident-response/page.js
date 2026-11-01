import Page, { metadata as fallbackMetadata } from '../../../customers/security-incident-response/page';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang === 'es') {
    return {
      title: "Cómo un analista de seguridad utiliza Think4Ever para la respuesta a incidentes | Historia de cliente",
      description: "El experto en gestión de riesgos Jake Williams explica cómo Think4Ever reconstruye arquitectura, flujos de usuario y diagramas de flujo de datos a partir de código no documentado.",
    };
  }
  return fallbackMetadata;
}

export default Page;
