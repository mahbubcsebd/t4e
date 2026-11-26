import { contentAlternates, seoText } from "@/lib/contentSeo";
import { getTutorialBySlug, getAllTutorials } from "@/lib/tutorials";
import { notFound } from "next/navigation";
import { TutorialDetailNav } from "@/components/sections/tutorials/TutorialDetailNav";
import { TutorialArticle } from "@/components/sections/tutorials/TutorialArticle";
import TutorialMarkdown from "@/components/sections/tutorials/TutorialMarkdown";
import { TutorialRecommendations } from "@/components/sections/tutorials/TutorialRecommendations";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";

export async function generateMetadata(props) {
  const params = await props.params;
  const { lang, slug } = params;

  if (lang !== "es") return {};

  const tutorial = getTutorialBySlug(slug, lang);
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
      canonical: `/${lang}/tutorials/${slug}/`,
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
  const langs = ["es"];
  const params = [];

  for (const lang of langs) {
    const tutorials = getAllTutorials(lang);
    for (const tut of tutorials) {
      params.push({
        lang,
        slug: tut.slug,
      });
    }
  }

  return params;
}

export default async function TranslatedTutorialDetailPage(props) {
  const params = await props.params;
  const { lang, slug } = params;

  if (lang !== "es") {
    notFound();
  }

  const tutorial = getTutorialBySlug(slug, lang);
  const allTutorials = getAllTutorials(lang);

  if (!tutorial) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow bg-background py-8 md:py-12 relative z-10">
        <SectionCard>
          <Container className="mx-auto">
            <TutorialDetailNav />
            <TutorialArticle tutorial={{ ...tutorial, content: undefined }}>
              <TutorialMarkdown content={tutorial.content} currentLang={lang} />
            </TutorialArticle>
            <TutorialRecommendations tutorials={allTutorials} currentTutorialId={tutorial.id} />
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
