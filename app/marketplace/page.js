import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MarketplaceHero from '@/components/marketplace/Hero';
import MarketplaceTrustedBy from '@/components/marketplace/TrustedBy';
import MarketplaceExpertise from '@/components/marketplace/Expertise';
import MarketplaceHowItWorks from '@/components/marketplace/HowItWorks';
import MarketplaceTestimonials from '@/components/marketplace/Testimonials';
import MarketplaceFaq from '@/components/marketplace/Faq';
import MarketplaceCta from '@/components/marketplace/Cta';

export const metadata = {
  title: 'Marketplace | Think4Ever — Hire Top-Tier Independent Talent',
  description:
    'Think4Ever Marketplace is a premium talent network for teams that need high-quality execution, structured workflows, and vetted professionals. Find AI developers, designers, engineers and more.',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <MarketplaceHero />
        <MarketplaceTrustedBy />
        <MarketplaceExpertise />
        <MarketplaceHowItWorks />
        <MarketplaceTestimonials />
        <MarketplaceFaq />
        <MarketplaceCta />
      </main>
      <Footer />
    </div>
  );
}
