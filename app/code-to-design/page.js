import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CodeToDesignHero from "@/components/sections/code-to-design/CodeToDesignHero";
import SeeSystem from "@/components/sections/code-to-design/SeeSystem";
import WhereItHelps from "@/components/sections/code-to-design/WhereItHelps";
import CtaSection from "@/components/sections/home/CtaSection";

export const metadata = {
  title: "Code to Design — Understand and Visualize Your Software | Think4Ever",
  description: "Turn an existing software project into a living, reviewable blueprint of architecture, dependencies, workflows and business rules.",
};

export default function CodeToDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <CodeToDesignHero />
        <SeeSystem />
        <WhereItHelps />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
