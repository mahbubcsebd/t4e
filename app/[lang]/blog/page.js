import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import { getAllPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'nl' }];
}

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang } = params;
  
  if (lang === 'es') {
    return {
      title: "Blog de Think4Ever — Artículos, Marcos e Información sobre Ingeniería de IA",
      description: "Lea documentos técnicos, marcos arquitectónicos y perspectivas sobre el desarrollo de software impulsado por IA.",
    };
  }
  if (lang === 'nl') {
    return {
      title: "Think4Ever Blog — Artikelen, Frameworks en AI Engineering Inzichten",
      description: "Lees whitepapers, architectonische frameworks en technische inzichten over AI-gedreven softwareontwikkeling.",
    };
  }
  
  return { title: "Think4Ever Blog" };
}

export default async function TranslatedBlogPage(props) {
  const params = await props.params;
  const { lang } = params;

  if (lang !== 'es' && lang !== 'nl') {
    notFound();
  }

  const posts = getAllPosts(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <BlogGridSection posts={posts} currentLang={lang} />
      </main>
      <Footer />
    </div>
  );
}
