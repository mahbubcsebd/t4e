import { DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthModalProvider } from "@/context/AuthModalContext";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import ChunkErrorHandler from "@/components/chunk-error-handler";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  // Fixed on purpose: preview deploys must never leak their address into canonicals.
  metadataBase: new URL("https://think4ever.com"),
  title: "Turn Your Idea or Code Into a Living Blueprint | Think4Ever",
  description: "Turn your idea or existing code into a living blueprint: architecture, workflows and rules your AI coding agents follow. Works with Claude Code, Codex and Cursor. Start free.",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Turn Your Idea or Code Into a Living Blueprint | Think4Ever",
    description: "Turn your idea or existing code into a living blueprint: architecture, workflows and rules your AI coding agents follow. Works with Claude Code, Codex and Cursor. Start free.",
    type: "website",
    url: "https://think4ever.com",
    siteName: "Think4Ever",
    images: [
      {
        url: "https://think4ever.com/images/opengraph-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Think4Ever",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turn Your Idea or Code Into a Living Blueprint | Think4Ever",
    description: "Turn your idea or existing code into a living blueprint: architecture, workflows and rules your AI coding agents follow. Works with Claude Code, Codex and Cursor. Start free.",
    images: ["https://think4ever.com/images/opengraph-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        {/* Static export has one root <html>; set lang for /es/ and /nl/ before paint. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "var m=location.pathname.match(/^\\/(es|nl)(\\/|$)/);if(m)document.documentElement.lang=m[1];",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <Script src="/t4e-analytics.js" strategy="lazyOnload" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <ChunkErrorHandler />
          <LanguageProvider>
            <AuthModalProvider>
              {children}
            </AuthModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
