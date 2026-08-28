import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HowItWorksHero from "@/components/sections/how-it-works/HowItWorksHero";
import TwoWaysIn from "@/components/sections/how-it-works/TwoWaysIn";
import ControlPoint from "@/components/sections/how-it-works/ControlPoint";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import CtaSection from "@/components/sections/home/CtaSection";



export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HowItWorksHero />
        <TwoWaysIn />
        <HowItWorksSection />
        <ControlPoint />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "How Think4Ever Works — From Code or Intent to a Living Blueprint",
  description: "Start with existing code or a business objective. Review a living blueprint, then build with shared system context in Think4Ever or your coding agent.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'how-it-works', fallbackMetadata);
}
