import Page, { fallbackMetadata } from '../../price/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'pricing', fallbackMetadata);
}

export default Page;
