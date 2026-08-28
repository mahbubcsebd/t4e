import { getLocalizedMetadata } from '@/lib/metadata';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "@/components/sections/legal/PrivacyContent";



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


export const fallbackMetadata = {
  title: "Privacy Policy - Think4Ever",
  description: "Learn how Think4Ever collects, uses, discloses, and protects your personal information.",
};

export async function generateMetadata() {
  return getLocalizedMetadata('en', 'privacy-policy', fallbackMetadata);
}
