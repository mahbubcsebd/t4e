import Page, { metadata as fallbackMetadata } from '../../resources/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'resources', fallbackMetadata);
}

export default Page;
