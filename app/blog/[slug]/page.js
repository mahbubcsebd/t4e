import { getPostBySlug, getAllPosts, SLUG_ALIASES } from "@/lib/markdown";
import { notFound } from "next/navigation";
import { BlogDetailNav } from "@/components/sections/blog/BlogDetailNav";
import { BlogArticle } from "@/components/sections/blog/BlogArticle";
import { BlogRecommendations } from "@/components/sections/blog/BlogRecommendations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/JsonLd";
import { contentAlternates, seoText } from "@/lib/contentSeo";
import { buildArticleLd, toIsoDate } from "@/lib/jsonLd";

export const dynamicParams = false;

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const post = getPostBySlug(slug, "en");

  if (!post) return {};

  const { title, description } = seoText(post.title, "Think4Ever Blog", post.desc || post.description, post.seoTitle);
  const relativeImageUrl = post.image || `/images/opengraph-image.jpg`;
  const imageUrl = relativeImageUrl.startsWith('http') 
    ? relativeImageUrl 
    : `https://think4ever.com${relativeImageUrl}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.canonicalSlug || slug}/`,
      languages: contentAlternates("blog", post.canonicalSlug || slug),
    },
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("en");
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  for (const alias of Object.keys(SLUG_ALIASES)) {
    params.push({ slug: alias });
  }
  return params;
}

export default async function BlogDetailPage(props) {
  const params = await props.params;
  const { slug } = params;
  const post = getPostBySlug(slug, "en");
  const allPosts = getAllPosts("en");

  if (!post) {
    notFound();
  }

  const canonicalUrl = `https://think4ever.com/blog/${post.canonicalSlug || slug}/`;
  const imageUrl = post.image
    ? post.image.startsWith("http") ? post.image : `https://think4ever.com${post.image}`
    : undefined;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd
        data={buildArticleLd({
          post,
          url: canonicalUrl,
          datePublished: toIsoDate(post.date),
          image: imageUrl,
        })}
      />
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
