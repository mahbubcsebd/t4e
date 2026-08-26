import { Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Legacy code and AI-generated code turned your product into a black box. think4Ever turns it into a living map of your system - in minutes",
  description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Legacy code and AI-generated code turned your product into a black box. think4Ever turns it into a living map of your system - in minutes",
    description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
    type: "website",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Think4Ever Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy code and AI-generated code turned your product into a black box. think4Ever turns it into a living map of your system - in minutes",
    description: "Turn existing code into a living system blueprint. Review business intent, see change impact and give every coding agent the system context it needs.",
    images: ["/images/og-card.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
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
