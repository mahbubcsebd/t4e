import { getLocalizedMetadata } from '@/lib/metadata';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CoherenceSection from '@/components/sections/home/CoherenceSection';
import CtaSection from '@/components/sections/home/CtaSection';
import HeroSection from '@/components/sections/home/HeroSection';
import HowItWorksSection from '@/components/sections/home/HowItWorksSection';
import PersistentContextSection from '@/components/sections/home/PersistentContextSection';
import PortalStartSection from '@/components/sections/home/PortalStartSection';
import ProblemSection from '@/components/sections/home/ProblemSection';
import ProductDemoSection from '@/components/sections/home/ProductDemoSection';
import ProductModelSection from '@/components/sections/home/ProductModelSection';
import ReviewedHandoffSection from '@/components/sections/home/ReviewedHandoffSection';
import ValueSection from '@/components/sections/home/ValueSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <PortalStartSection />
        <HeroSection />
        <ProblemSection />
        <ProductModelSection />
        <ValueSection />
        <CoherenceSection />
        <PersistentContextSection />
        <HowItWorksSection />
        <ReviewedHandoffSection />
        <ProductDemoSection />
        {/* <CustomersQuoteBand /> */}
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export const fallbackMetadata = { alternates: { canonical: '/' } };

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'home', fallbackMetadata);
}
