import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SecurityStoryContent from "@/components/sections/customers/SecurityStoryContent";

export const metadata = {
  title:
    "From zero documentation to incident-ready: how a security analyst uses Think4Ever | Customer story",
  description:
    "Jake Williams is a developer and security analyst who uses Think4Ever to generate the architecture, user flows and data flow diagrams security teams need, straight from the codebase.",
  alternates: { canonical: "/customers/security-incident-response/" },
  openGraph: {
    title:
      "From zero documentation to incident-ready: how a security analyst uses Think4Ever | Customer story",
    description:
      "Jake Williams is a developer and security analyst who uses Think4Ever to generate the architecture, user flows and data flow diagrams security teams need, straight from the codebase.",
    url: "https://think4ever.com/customers/security-incident-response/",
    type: "article",
  },
};

export default function SecurityCustomerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <SecurityStoryContent />
      </main>
      <Footer />
    </div>
  );
}

