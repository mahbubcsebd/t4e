import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SecurityHero from "@/components/sections/security/SecurityHero";
import OperatingPrinciples from "@/components/sections/security/OperatingPrinciples";
import EnterpriseEvaluation from "@/components/sections/security/EnterpriseEvaluation";
import CtaSection from "@/components/sections/home/CtaSection";



export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <SecurityHero />
        <OperatingPrinciples />
        <EnterpriseEvaluation />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Think4Ever Trust & Security — Controlled Context for Agentic Development",
  description: "Review repository access, keep humans in the decision loop, choose your coding tools and discuss private deployment for enterprise environments.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'security', fallbackMetadata);
}
