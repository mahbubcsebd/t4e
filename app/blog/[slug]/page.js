import { BLOG_POSTS } from "@/lib/blogData";
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
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Think4Ever Blog`,
    description: post.desc || post.description,
    alternates: { canonical: `/blog/${slug}/` },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage(props) {
  const params = await props.params;
  const { slug } = params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

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
            <BlogArticle post={post} />
            <BlogRecommendations posts={BLOG_POSTS} currentPostId={post.id} />
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
