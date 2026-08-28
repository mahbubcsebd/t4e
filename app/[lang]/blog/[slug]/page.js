import { getPostBySlug, getAllPosts } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { BlogDetailNav } from "@/components/sections/blog/BlogDetailNav";
import { BlogArticle } from "@/components/sections/blog/BlogArticle";
import { BlogRecommendations } from "@/components/sections/blog/BlogRecommendations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang, slug } = params;
  
  if (lang !== 'es' && lang !== 'nl') return {};
  
  const post = getPostBySlug(slug, lang);
  if (!post) return {};

  return {
    title: `${post.title} | Think4Ever Blog`,
    description: post.desc || post.description,
    alternates: { canonical: `/${lang}/blog/${slug}/` },
  };
}

export async function generateStaticParams() {
  const langs = ['es', 'nl'];
  const params = [];
  
  for (const lang of langs) {
    const posts = getAllPosts(lang);
    for (const post of posts) {
      params.push({
        lang,
        slug: post.slug,
      });
    }
  }
  
  return params;
}

export default async function TranslatedBlogDetailPage(props) {
  const params = await props.params;
  const { lang, slug } = params;

  if (lang !== 'es' && lang !== 'nl') {
    notFound();
  }

  const post = getPostBySlug(slug, lang);
  const allPosts = getAllPosts(lang);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow bg-background py-12 md:py-24 relative z-10">
        <SectionCard>
          <Container className="mx-auto">
            <BlogDetailNav />
            <BlogArticle post={post} currentLang={lang} />
            <BlogRecommendations posts={allPosts} currentPostId={post.id} />
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
