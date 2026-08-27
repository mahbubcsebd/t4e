import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata = {
  title: "Contact Us - Think4Ever",
  description:
    "Contact Think4Ever to discuss code understanding, living blueprints, change-impact analysis and shared context for people and coding agents.",
};

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
