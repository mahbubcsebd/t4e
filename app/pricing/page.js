import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CtaSection from '@/components/sections/home/CtaSection';
import CostControl from '@/components/sections/pricing/CostControl';
import PricingComparison from '@/components/sections/pricing/PricingComparison';
import PricingFaq from '@/components/sections/pricing/PricingFaq';
import PricingCustomerQuote from '@/components/sections/pricing/PricingCustomerQuote';
import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingHowItWorks from '@/components/sections/pricing/PricingHowItWorks';
import PricingProjectLimits from '@/components/sections/pricing/PricingProjectLimits';
import PricingTeams from '@/components/sections/pricing/PricingTeams';
import PricingTiers from '@/components/sections/pricing/PricingTiers';
import { getLocalizedMetadata } from '@/lib/metadata';

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
        <PricingCustomerQuote />
        <PricingFaq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export const fallbackMetadata = {
  title: 'Think4Ever Pricing — Start Free, Scale with Your Team',
  description:
    'Think4Ever plans: start free, build solo with Think New, or bring your whole team into one workspace with Think Big. One company workspace, shared credits, and admin control.',
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'pricing', fallbackMetadata);
}
