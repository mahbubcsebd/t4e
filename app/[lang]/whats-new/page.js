import WhatsNewPage from "@/components/sections/whats-new/WhatsNewPage";
import { getLocalizedMetadata } from "@/lib/metadata";
import { fallbackMetadata } from "../../whats-new/page";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return getLocalizedMetadata(lang, "whats-new", fallbackMetadata);
}

export default async function Page({ params }) {
  const { lang } = await params;
  return <WhatsNewPage lang={lang} />;
}
