import Page, { metadata as fallbackMetadata } from '../../onboarding/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'onboarding', fallbackMetadata);
}

export default Page;
