import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InsignianStoryContent from "@/components/sections/customers/InsignianStoryContent";

export const metadata = {
  title:
    "How Insignian Homes is replacing SaaS with its own CRM, built with Think4Ever | Customer story",
  description:
    "Home textiles exporter Insignian Homes uses Think4Ever to design and build in-house versions of its SaaS applications, starting with CRM, to cut subscription costs and reduce SaaS sprawl.",
  alternates: { canonical: "/customers/insignian-homes/" },
  openGraph: {
    title:
      "How Insignian Homes is replacing SaaS with its own CRM, built with Think4Ever | Customer story",
    description:
      "Home textiles exporter Insignian Homes uses Think4Ever to design and build in-house versions of its SaaS applications, starting with CRM, to cut subscription costs and reduce SaaS sprawl.",
    url: "https://think4ever.com/customers/insignian-homes/",
    type: "article",
  },
};

export default function InsignianCustomerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <InsignianStoryContent />
      </main>
      <Footer />
    </div>
  );
}

