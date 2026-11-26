export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function LangLayout({ children }) {
  return children;
}
