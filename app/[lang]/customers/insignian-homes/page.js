import Page, { metadata as fallbackMetadata } from '../../../customers/insignian-homes/page';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (lang === 'es') {
    return {
      title: "Cómo Insignian Homes está reemplazando SaaS con su propio CRM, creado con Think4Ever | Historia de cliente",
      description: "Un exportador global de textiles para el hogar reemplaza herramientas SaaS costosas con aplicaciones que diseña y posee, comenzando con el CRM.",
    };
  }
  return fallbackMetadata;
}

export default Page;
