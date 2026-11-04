import Page, { fallbackMetadata } from '../../marketplaces/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'marketplaces', fallbackMetadata);
}

export default Page;
