import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import { getAllPosts } from "@/lib/markdown";
import { buildLanguageAlternates } from "@/lib/seo";

const TITLE = "Think4Ever Blog — AI Engineering Insights";
const DESCRIPTION = "Read white papers, architectural frameworks, and engineering insights on AI-driven software development with shared context.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "https://think4ever.com/blog/" },
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
