import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";

export const metadata = {
  title: "Contact Us - Think4Ever",
  description: "Get in touch with the Think4Ever team. We're here to help you revolutionize your software development life cycle with multi-agent SDLC.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
