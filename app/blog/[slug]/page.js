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
  const { slug } = params;
  const post = getPostBySlug(slug, "en");

  if (!post) return {};

  return {
    title: `${post.title} | Think4Ever Blog`,
    description: post.desc || post.description,
    alternates: { canonical: `/blog/${slug}/` },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("en");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage(props) {
  const params = await props.params;
  const { slug } = params;
  const post = getPostBySlug(slug, "en");
  const allPosts = getAllPosts("en");

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow bg-background py-8 md:py-12 relative z-10">
        <SectionCard>
          <Container className="mx-auto">
            <BlogDetailNav />
            <BlogArticle post={post} currentLang="en" />
            <BlogRecommendations posts={allPosts} currentPostId={post.id} />
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
