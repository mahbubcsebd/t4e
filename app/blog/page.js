import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import { getAllPosts } from "@/lib/markdown";
import { buildLanguageAlternates } from "@/lib/seo";

export const metadata = {
  title: "Think4Ever Blog — AI Engineering Insights",
  description: "Read white papers, architectural frameworks, and engineering insights on AI-driven software development with shared context.",
  alternates: {
    canonical: "/blog/",
    languages: buildLanguageAlternates("/blog/", ["en", "es"]),
  },
};

export default function BlogPage() {
  const posts = getAllPosts('en');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <BlogGridSection posts={posts} currentLang="en" />
      </main>
      <Footer />
    </div>
  );
}
