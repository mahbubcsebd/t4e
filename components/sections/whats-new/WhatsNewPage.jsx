import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/home/CtaSection";
import { getWhatsNew } from "@/lib/whatsNew";
import WhatsNewHero from "./WhatsNewHero";
import WhatsNewExplorer from "./WhatsNewExplorer";

export default function WhatsNewPage({ lang }) {
  const { months, total } = getWhatsNew(lang);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow bg-background">
        <WhatsNewHero months={months} total={total} />
        <WhatsNewExplorer months={months} total={total} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
