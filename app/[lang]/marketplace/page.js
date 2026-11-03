import Page, { fallbackMetadata } from '../../marketplace/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'marketplace', fallbackMetadata);
}

export default Page;
