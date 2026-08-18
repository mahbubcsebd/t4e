import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqAccordion from "@/components/sections/faq/FaqAccordion";
import CtaSection from "@/components/sections/home/CtaSection";

export const metadata = {
  title: "Think4Ever FAQ — Living Blueprints, Code Understanding and MCP",
  description: "Answers about Think4Ever living blueprints, Code to Design, Design to Code, change-impact analysis, coding agents, MCP and getting started.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <FaqAccordion />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
