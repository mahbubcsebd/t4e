import { BLOG_POSTS } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import { BlogDetailNav } from '@/components/sections/blog/BlogDetailNav';
import { BlogArticle } from '@/components/sections/blog/BlogArticle';
import { BlogRecommendations } from '@/components/sections/blog/BlogRecommendations';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} | Think4Ever Blog`,
    description: post.desc || post.description,
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
      <main className="flex-grow bg-[#fcfdfe] pt-28 md:pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogDetailNav />
          <BlogArticle post={post} />
          <BlogRecommendations posts={BLOG_POSTS} currentPostId={post.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
