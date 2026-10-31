import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EyStoryContent from "@/components/sections/customers/EyStoryContent";

export const metadata = {
  title:
    "How EY builds coherent applications faster with Think4Ever | Customer story",
  description:
    "EY Caribbean's Technology Consulting practice uses Think4Ever to build internal applications and deliver client software, with business intent carried from first conversation to released code.",
  alternates: { canonical: "/customers/ey/" },
  openGraph: {
    title:
      "How EY builds coherent applications faster with Think4Ever | Customer story",
    description:
      "EY Caribbean's Technology Consulting practice uses Think4Ever to build internal applications and deliver client software, with business intent carried from first conversation to released code.",
    url: "https://think4ever.com/customers/ey/",
    type: "article",
  },
};

export default function EyCustomerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <EyStoryContent />
      </main>
      <Footer />
    </div>
  );
}

