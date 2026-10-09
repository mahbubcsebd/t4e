export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }, { lang: 'nl' }];
}

export default function LangLayout({ children }) {
  return children;
}
