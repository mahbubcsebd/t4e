import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MarketplaceHero from '@/components/marketplace/Hero';
import MarketplaceTwoWays from '@/components/marketplace/TwoWaysToWork';
import MarketplaceExpertise from '@/components/marketplace/Expertise';
import MarketplaceHowItWorks from '@/components/marketplace/HowItWorks';
import MarketplaceComparison from '@/components/marketplace/Comparison';
import MarketplaceFaq from '@/components/marketplace/Faq';
import MarketplaceCta from '@/components/marketplace/Cta';

export const metadata = {
  title: 'Think4Ever Marketplace: the outsourcing marketplace for the AI era',
  description:
    'Where AI-enabled freelancers and enterprises get work done. Outsource a task or a whole project, get AI-scored proposals, and give your hire exactly the projects and tools they need.',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <MarketplaceHero />
        <MarketplaceTwoWays />
        <MarketplaceExpertise />
        <MarketplaceHowItWorks />
        <MarketplaceComparison />
        <MarketplaceFaq />
        <MarketplaceCta />
      </main>
      <Footer />
    </div>
  );
}
