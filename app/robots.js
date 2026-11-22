import { SITE_URL } from "@/lib/authors";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/register/", "/onboarding/"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
