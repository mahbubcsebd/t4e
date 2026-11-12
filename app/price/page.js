import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CtaSection from '@/components/sections/home/CtaSection';
import CostControl from '@/components/sections/pricing/CostControl';
import PricingComparison from '@/components/sections/pricing/PricingComparison';
import PricingFaq from '@/components/sections/pricing/PricingFaq';
import PricingCustomerQuote from '@/components/sections/pricing/PricingCustomerQuote';
import PricingHero from '@/components/sections/pricing/PricingHero';
import PricingHowItWorks from '@/components/sections/pricing/PricingHowItWorks';
import PricingEstimate from '@/components/sections/pricing/PricingEstimate';
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
        <PricingEstimate />
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
  title: 'Think4Ever Pricing — No Subscription, Pay for What You Use',
  description:
    'Think4Ever pricing: start free, with no subscription. Pay 90 credits a month for each project you keep and for the AI you use. Build solo with Think New, or bring up to 25 people into one workspace with Think Big.',
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'pricing', fallbackMetadata);
}
