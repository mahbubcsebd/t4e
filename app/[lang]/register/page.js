import Page, { metadata as fallbackMetadata } from '../../register/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'register', fallbackMetadata);
}

export default Page;
