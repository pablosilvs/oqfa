import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { siteConfig, absoluteUrl } from "@/lib/site";

const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} — ${siteConfig.tagline}`, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  ...(verification ? { verification: { google: verification } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="overflow-x-clip">
        <ThemeProvider>
          <Header />
          <main id="conteudo" className="mx-auto min-h-[70vh] w-full max-w-5xl min-w-0 px-3 pt-5 pb-24 sm:px-4 md:pt-6 md:pb-10">
            {children}
          </main>
          <Footer />
          <MobileNavigation />
          <CookieBanner />
          <GoogleAnalytics />
          <AdSenseScript />
        </ThemeProvider>
      </body>
    </html>
  );
}
