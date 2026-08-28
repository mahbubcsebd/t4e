import Page, { fallbackMetadata } from '../../terms-and-conditions/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'terms-and-conditions', fallbackMetadata);
}

export default Page;
