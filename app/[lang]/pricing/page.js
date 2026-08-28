import Page, { metadata as fallbackMetadata } from '../../pricing/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'pricing', fallbackMetadata);
}

export default Page;
