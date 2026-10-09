import Page from '../page';
import { getLocalizedMetadata } from '@/lib/metadata';
import { metadata as layoutMetadata } from '../layout';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, 'home', layoutMetadata);
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'nl' }];
}

export default Page;
