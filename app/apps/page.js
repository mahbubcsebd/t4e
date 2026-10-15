import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppsHero from "@/components/sections/apps/AppsHero";
import AppsBenefits from "@/components/sections/apps/AppsBenefits";
import AppsPlatforms from "@/components/sections/apps/AppsPlatforms";
import AppsScreenshots from "@/components/sections/apps/AppsScreenshots";
import AppsSteps from "@/components/sections/apps/AppsSteps";
import AppsFaq from "@/components/sections/apps/AppsFaq";
import AppsCta from "@/components/sections/apps/AppsCta";
import { getLocalizedMetadata } from "@/lib/metadata";

export default function AppsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <AppsHero />
        <AppsBenefits />
        <AppsPlatforms />
        <AppsScreenshots />
        <AppsSteps />
        <AppsFaq />
        <AppsCta />
      </main>
      <Footer />
    </div>
  );
}

export const fallbackMetadata = {
  title: "Think4Ever Apps for Windows and Android",
  description:
    "Download Think4Ever for Windows and Android. Run Think4Ever locally, with the same capabilities as the Think4Ever web platform.",
};

export async function generateMetadata() {
  return getLocalizedMetadata("en", "apps", fallbackMetadata);
}
