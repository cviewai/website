import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { inter, poppins } from "./fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crystalview.ai"),
  title: {
    template: "%s | CrystalView",
    default: "CrystalView - AI-Powered Financial Solutions",
  },
  description: "AI-Powered Solutions for Your Business",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "CrystalView",
    description: "AI-Powered Solutions for Your Business",
    siteName: "CrystalView",
    images: [
      {
        url: "/og-image.png", // Must be an absolute URL in production
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Footer = () => (
  <footer className="py-6 px-6 border-t">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} CrystalView. All rights reserved.
      </p>
      <nav className="flex gap-6">
        <Link
          href="/privacy"
          className="text-sm text-gray-500 hover:text-foreground"
        >
          Privacy Policy
        </Link>
        <Link
          href="/eula"
          className="text-sm text-gray-500 hover:text-foreground"
        >
          EULA
        </Link>
      </nav>
    </div>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-8K7SCN89HR" />
    </html>
  );
}
