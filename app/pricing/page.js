import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/sections/pricing/PricingHero";
import PricingTiers from "@/components/sections/pricing/PricingTiers";
import PricingHowItWorks from "@/components/sections/pricing/PricingHowItWorks";
import PricingTeams from "@/components/sections/pricing/PricingTeams";
import PricingComparison from "@/components/sections/pricing/PricingComparison";
import PricingProjectLimits from "@/components/sections/pricing/PricingProjectLimits";
import CostControl from "@/components/sections/pricing/CostControl";
import PricingFaq from "@/components/sections/pricing/PricingFaq";
import PricingCta from "@/components/sections/pricing/PricingCta";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PricingHero />
        <PricingTiers />
        <PricingHowItWorks />
        <PricingTeams />
        <PricingComparison />
        <PricingProjectLimits />
        <CostControl />
        <PricingFaq />
        <PricingCta />
      </main>
      <Footer />
    </div>
  );
}

export const fallbackMetadata = {
  title: "Think4Ever Pricing — Start Free, Scale with Your Team",
  description: "Think4Ever plans: start free, build solo with Think New, or bring your whole team into one workspace with Think Big. One company workspace, shared credits, and admin control.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'pricing', fallbackMetadata);
}
