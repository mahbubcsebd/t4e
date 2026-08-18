import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import ProblemSection from "@/components/sections/home/ProblemSection";
import ProductModelSection from "@/components/sections/home/ProductModelSection";
import ValueSection from "@/components/sections/home/ValueSection";
import CoherenceSection from "@/components/sections/home/CoherenceSection";
import PersistentContextSection from "@/components/sections/home/PersistentContextSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import ProductDemoSection from "@/components/sections/home/ProductDemoSection";
import CtaSection from "@/components/sections/home/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <ProductModelSection />
        <ValueSection />
        <CoherenceSection />
        <PersistentContextSection />
        <HowItWorksSection />
        <ProductDemoSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
