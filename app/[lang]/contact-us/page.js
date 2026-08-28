import Page, { metadata as fallbackMetadata } from '../../contact-us/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'contact-us', fallbackMetadata);
}

export default Page;
