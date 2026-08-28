import Page, { metadata as fallbackMetadata } from '../../design-to-code/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'design-to-code', fallbackMetadata);
}

export default Page;
