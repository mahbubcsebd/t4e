import { getTutorialBySlug, getAllTutorials } from "@/lib/tutorials";
import { notFound } from "next/navigation";
import { TutorialDetailNav } from "@/components/sections/tutorials/TutorialDetailNav";
import { TutorialArticle } from "@/components/sections/tutorials/TutorialArticle";
import { TutorialRecommendations } from "@/components/sections/tutorials/TutorialRecommendations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/JsonLd";
import { contentAlternates, seoText } from "@/lib/contentSeo";
import { buildArticleLd, toIsoDate } from "@/lib/jsonLd";

export async function generateMetadata(props) {
  const params = await props.params;
  const { slug } = params;
  const tutorial = getTutorialBySlug(slug, "en");

  if (!tutorial) return {};

  const { title, description } = seoText(tutorial.title, "Think4Ever Tutorials", tutorial.desc || tutorial.description, tutorial.seoTitle);
  const relativeImageUrl = tutorial.image || `/images/opengraph-image.jpg`;
  const imageUrl = relativeImageUrl.startsWith('http') 
    ? relativeImageUrl 
    : `https://think4ever.com${relativeImageUrl}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/tutorials/${slug}/`,
      languages: contentAlternates("tutorials", slug),
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

export const dynamicParams = false;

export async function generateStaticParams() {
  const tutorials = getAllTutorials("en");
  return tutorials.map((tut) => ({
    slug: tut.slug,
  }));
}

export default async function TutorialDetailPage(props) {
  const params = await props.params;
  const { slug } = params;
  const tutorial = getTutorialBySlug(slug, "en");
  const allTutorials = getAllTutorials("en");

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd
        data={buildArticleLd({
          post: { ...tutorial, lang: "en" },
          url: `https://think4ever.com/tutorials/${slug}/`,
          datePublished: toIsoDate(tutorial.date),
          type: "TechArticle",
        })}
      />
      <Header />
      <main className="flex-grow bg-background py-8 md:py-12 relative z-10">
        <SectionCard>
          <Container className="mx-auto">
            <TutorialDetailNav />
            <TutorialArticle tutorial={tutorial} currentLang="en" />
            <TutorialRecommendations tutorials={allTutorials} currentTutorialId={tutorial.id} />
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
