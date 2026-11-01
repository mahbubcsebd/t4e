import Page, { metadata as fallbackMetadata } from '../../customers/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'customers', fallbackMetadata);
}

export default Page;
