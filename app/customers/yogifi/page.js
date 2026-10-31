import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YogiFiStoryContent from "@/components/sections/customers/YogiFiStoryContent";

export const metadata = {
  title:
    "How YogiFi designed and built its teacher portal with Think4Ever | Customer story",
  description:
    "With a new idea and limited resources, YogiFi's founder used Think4Ever to design the Smart Yoga teacher portal end to end, then carry it from requirements through code, testing and deployment.",
  alternates: { canonical: "/customers/yogifi/" },
  openGraph: {
    title:
      "How YogiFi designed and built its teacher portal with Think4Ever | Customer story",
    description:
      "With a new idea and limited resources, YogiFi's founder used Think4Ever to design the Smart Yoga teacher portal end to end, then carry it from requirements through code, testing and deployment.",
    url: "https://think4ever.com/customers/yogifi/",
    type: "article",
  },
};

export default function YogiFiCustomerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <YogiFiStoryContent />
      </main>
      <Footer />
    </div>
  );
}

