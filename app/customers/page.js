import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomersIndexContent from "@/components/sections/customers/CustomersIndexContent";

export const metadata = {
  title: "Customer stories | Think4Ever",
  description:
    "How consulting firms, founders, enterprises and security teams use Think4Ever to design before they build: EY, YogiFi, Insignian Homes and security analyst Jake Williams.",
  alternates: { canonical: "/customers/" },
  openGraph: {
    title: "Customer stories | Think4Ever",
    description:
      "How consulting firms, founders, enterprises and security teams use Think4Ever to design before they build: EY, YogiFi, Insignian Homes and security analyst Jake Williams.",
    url: "https://think4ever.com/customers/",
    type: "website",
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

