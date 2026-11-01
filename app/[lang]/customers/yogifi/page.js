import Page, { metadata as fallbackMetadata } from '../../../customers/yogifi/page';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang === 'es') {
    return {
      title: "Cómo YogiFi diseñó y construyó su portal para profesores con Think4Ever | Historia de cliente",
      description: "Un fundador con recursos limitados utiliza Think4Ever para diseñar la arquitectura, los flujos de usuario, el esquema de base de datos y la interfaz antes de escribir código.",
    };
  }
  return fallbackMetadata;
}

export default Page;
