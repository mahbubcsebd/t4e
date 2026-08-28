export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'nl' }];
}

export default function LangLayout({ children }) {
  return children;
}
