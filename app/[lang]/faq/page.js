import Page, { metadata as fallbackMetadata } from '../../faq/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'faq', fallbackMetadata);
}

export default Page;
