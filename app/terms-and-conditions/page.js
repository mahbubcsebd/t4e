import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TermsContent from "@/components/sections/legal/TermsContent";

export const metadata = {
  title: "Terms and Conditions - Think4Ever Global Inc.",
  description: "Terms and Conditions governing the use of Think4Ever platforms and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
