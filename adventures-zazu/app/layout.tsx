import type { Metadata } from "next";
import Script from "next/script";
import StructuredData from "@/components/seo/StructuredData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zazu Adventures",
    template: "%s | Zazu Adventures",
  },
  description:
    "Explore travel experiences, destinations and travel services with Zazu Adventures.",
  applicationName: "Zazu Adventures",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Zazu Adventures",
    title: "Zazu Adventures",
    description:
      "Explore travel experiences, destinations and travel services with Zazu Adventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zazu Adventures",
    description:
      "Explore travel experiences, destinations and travel services with Zazu Adventures.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2LTD9P8DS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X2LTD9P8DS');`}
        </Script>
        <Script
          id="elfsight-platform"
          src="https://elfsightcdn.com/platform.js"
          strategy="afterInteractive"
        />
        <div
          className="elfsight-app-ee8c887a-1599-4921-a466-087cb9ca8299"
          data-elfsight-app-lazy
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        <StructuredData siteUrl={siteUrl} />
        <div className="flex min-h-screen flex-col">
          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
