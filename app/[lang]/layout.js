import EsLanguageProvider from '@/context/EsLanguageProvider';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function LangLayout({ children }) {
  return <EsLanguageProvider>{children}</EsLanguageProvider>;
}
