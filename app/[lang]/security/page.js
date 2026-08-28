import Page, { metadata as fallbackMetadata } from '../../security/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'security', fallbackMetadata);
}

export default Page;
