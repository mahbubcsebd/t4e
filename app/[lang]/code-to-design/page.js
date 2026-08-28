import Page, { fallbackMetadata } from '../../code-to-design/page';
import { getLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'code-to-design', fallbackMetadata);
}

export default Page;
