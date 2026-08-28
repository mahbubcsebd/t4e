import Page, { metadata as fallbackMetadata } from '../../integrations/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'integrations', fallbackMetadata);
}

export default Page;
