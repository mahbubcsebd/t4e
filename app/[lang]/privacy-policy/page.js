import Page, { fallbackMetadata } from '../../privacy-policy/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'privacy-policy', fallbackMetadata);
}

export default Page;
