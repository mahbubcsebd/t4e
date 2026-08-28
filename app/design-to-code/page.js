import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DesignToCodeHero from "@/components/sections/design-to-code/DesignToCodeHero";
import CoherencePrompt from "@/components/sections/design-to-code/CoherencePrompt";
import ReviewedHandoff from "@/components/sections/design-to-code/ReviewedHandoff";
import PersistentContextSection from "@/components/sections/home/PersistentContextSection";
import CtaSection from "@/components/sections/home/CtaSection";



export default function DesignToCodePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <DesignToCodeHero />
        <CoherencePrompt />
        <ReviewedHandoff />
        <PersistentContextSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Design to Code — Build Software Faithful to Business Intent | Think4Ever",
  description: "Turn approved business objectives, architecture, workflows and rules into shared implementation context for Think4Ever or your coding agent.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'design-to-code', fallbackMetadata);
}
