import Page, { metadata as fallbackMetadata } from '../../../customers/ey/page';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang === 'es') {
    return {
      title: "Cómo EY Caribbean crea aplicaciones coherentes más rápido con Think4Ever | Historia de cliente",
      description: "EY Caribbean utiliza Think4Ever para entregar proyectos de software para clientes, con intención comercial, políticas y criterios de aceptación desde la primera conversación hasta el código publicado.",
    };
  }
  return fallbackMetadata;
}

export default Page;
