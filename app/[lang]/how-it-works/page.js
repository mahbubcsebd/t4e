import Page, { fallbackMetadata } from '../../how-it-works/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'how-it-works', fallbackMetadata);
}

export default Page;
