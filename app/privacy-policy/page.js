import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "@/components/sections/legal/PrivacyContent";

export const metadata = {
  title: "Privacy Policy - Think4Ever",
  description: "Learn how Think4Ever collects, uses, discloses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
