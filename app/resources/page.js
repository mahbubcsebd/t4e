import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResourceGrid from "@/components/sections/resources/ResourceGrid";
import CtaSection from "@/components/sections/home/CtaSection";

export const metadata = {
  title: "Think4Ever Resources — Product Videos, White Papers and Guides",
  description: "Product demonstrations, white papers and practical guidance for understanding software, designing systems and building with shared context.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <ResourceGrid />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
