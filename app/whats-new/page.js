import WhatsNewPage from "@/components/sections/whats-new/WhatsNewPage";
import { getLocalizedMetadata } from "@/lib/metadata";

export default function Page() {
  return <WhatsNewPage lang="en" />;
}

export const fallbackMetadata = {
  title: "What's new in think4ever | Think4Ever",
  description:
    "Everything think4ever has learned since September 2025, month by month: 177 new features for planning, designing, building and sharing software with AI.",
};

export async function generateMetadata() {
  return getLocalizedMetadata("en", "whats-new", fallbackMetadata);
}
