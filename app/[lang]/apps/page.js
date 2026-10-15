import Page, { fallbackMetadata } from '../../apps/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'apps', fallbackMetadata);
}

export default Page;
