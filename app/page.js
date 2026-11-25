import { getLocalizedMetadata } from '@/lib/metadata';

import JsonLd from '@/components/JsonLd';
import { buildHomeLd } from '@/lib/jsonLd';
import en from '@/dictionaries/en.json';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import CoherenceSection from '@/components/sections/home/CoherenceSection';
import ContextGapSection from '@/components/sections/home/ContextGapSection';
import CtaSection from '@/components/sections/home/CtaSection';
import DiscoverRoleSection from '@/components/sections/home/DiscoverRoleSection';
import HeroSection from '@/components/sections/home/HeroSection';
import HowItWorksSection from '@/components/sections/home/HowItWorksSection';
import PersistentContextSection from '@/components/sections/home/PersistentContextSection';
import PortalStartSection from '@/components/sections/home/PortalStartSection';
import ProblemSection from '@/components/sections/home/ProblemSection';
import ProductDemoSection from '@/components/sections/home/ProductDemoSection';
import ProductModelSection from '@/components/sections/home/ProductModelSection';
import StickyStartBar from '@/components/sections/home/StickyStartBar';
import ReviewedHandoffSection from '@/components/sections/home/ReviewedHandoffSection';
import ValueSection from '@/components/sections/home/ValueSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <JsonLd data={buildHomeLd({ description: en.layout?.metaDesc })} />
      <Header />
      <main className="home-clean flex-grow">
        <PortalStartSection />
        <ContextGapSection />
        <DiscoverRoleSection />
        <HeroSection />
        {/* Same message as the comparison table above; phones skip the repeat */}
        <div className="max-md:hidden">
          <ProblemSection />
        </div>
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
      <StickyStartBar />
    </div>
  );
}

export const fallbackMetadata = { alternates: { canonical: '/' } };

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'home', fallbackMetadata);
}
