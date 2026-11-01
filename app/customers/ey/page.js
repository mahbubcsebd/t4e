import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EyStoryContent from "@/components/sections/customers/EyStoryContent";

export const metadata = {
  title:
    "How EY Caribbean builds coherent applications faster for its clients | Customer story",
  description:
    "An early Think4Ever customer, EY Caribbean (EYC) uses the Think4Ever multi-agent design and development platform to deliver client software projects, with business intent, policies and acceptance criteria carried from first conversation to released code.",
  alternates: { canonical: "/customers/ey/" },
  openGraph: {
    title:
      "How EY Caribbean builds coherent applications faster for its clients | Customer story",
    description:
      "An early Think4Ever customer, EY Caribbean (EYC) uses the Think4Ever multi-agent design and development platform to deliver client software projects, with business intent, policies and acceptance criteria carried from first conversation to released code.",
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

