import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://think4ever.com"),
  title: "Turn Code Into a Living System Map | Think4Ever",
  description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Turn Code Into a Living System Map | Think4Ever",
    description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
    type: "website",
    url: "https://think4ever.com",
    siteName: "Think4Ever",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 1200,
        alt: "Think4Ever",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Code Into a Living System Map | Think4Ever",
    description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Script src="/t4e-analytics.js" strategy="afterInteractive" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>

            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
