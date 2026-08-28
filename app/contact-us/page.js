import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/contact/ContactSection";



export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


export const fallbackMetadata = {
  title: "Contact Us - Think4Ever",
  description:
    "Contact Think4Ever to discuss code understanding, living blueprints, change-impact analysis and shared context for people and coding agents.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'contact-us', fallbackMetadata);
}
