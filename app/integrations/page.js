import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntegrationsHero from "@/components/sections/integrations/IntegrationsHero";
import ChooseConnection from "@/components/sections/integrations/ChooseConnection";
import ModelChoice from "@/components/sections/integrations/ModelChoice";
import CtaSection from "@/components/sections/home/CtaSection";



export default function IntegrationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <IntegrationsHero />
        <ChooseConnection />
        <ModelChoice />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Integrations — Think4Ever MCP, Coding Agents and Developer Tools",
  description: "Carry reviewed Think4Ever system context into Claude Code, Codex, Cursor, Windsurf and other MCP-compatible tools.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'integrations', fallbackMetadata);
}
