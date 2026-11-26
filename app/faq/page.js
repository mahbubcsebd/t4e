import { getLocalizedMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import { buildPageLd } from '@/lib/pageLd';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import CtaSection from "@/components/sections/home/CtaSection";



export default async function FaqPage({ params }) {
  const lang = params ? (await params).lang : 'en';
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd data={buildPageLd({ lang, dictKey: 'faqPage', path: '/faq/', faqPath: 'faqPage.items' })} />
      <Header />
      <main className="flex-grow">
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Think4Ever FAQ — Living Blueprints, Code Understanding and MCP",
  description: "Answers about Think4Ever living blueprints, Code to Design, Design to Code, change-impact analysis, coding agents, MCP and getting started.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'faq', fallbackMetadata);
}
