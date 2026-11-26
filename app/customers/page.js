import { buildLanguageAlternates } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomersIndexContent from "@/components/sections/customers/CustomersIndexContent";

export const metadata = {
  title: "Customer stories | Think4Ever",
  description:
    "How EY, YogiFi, Insignian Homes and security analyst Jake Williams use Think4Ever to design before they build.",
  alternates: {
    canonical: "/customers/",
    languages: buildLanguageAlternates("/customers/", ["en", "es"]),
  },
  openGraph: {
    title: "Customer stories | Think4Ever",
    description:
      "How EY, YogiFi, Insignian Homes and security analyst Jake Williams use Think4Ever to design before they build.",
    url: "https://think4ever.com/customers/",
    type: "website",
    images: [
      {
        url: "https://think4ever.com/images/opengraph-image.jpg",
        width: 1080,
        height: 1081,
        alt: "Think4Ever customer stories",
      },
    ],
  },
};

export default function CustomersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <CustomersIndexContent />
      </main>
      <Footer />
    </div>
  );
}

