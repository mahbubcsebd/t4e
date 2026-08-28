import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingTiers from "@/components/sections/pricing/PricingTiers";
import CostControl from "@/components/sections/pricing/CostControl";
import CtaSection from "@/components/sections/home/CtaSection";



export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PricingHero />
        <PricingTiers />
        <CostControl />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Think4Ever Pricing — Start Free, Scale with Your Team",
  description: "Start Think4Ever free with one project. Add projects, orchestration credits, team controls and private deployment as you scale.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'pricing', fallbackMetadata);
}
