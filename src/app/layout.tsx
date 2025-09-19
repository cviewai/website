import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrystalView",
  description: "AI-Powered Solutions for Your Business",
};

const Header = () => (
  <header className="py-4 px-6 border-b">
    <nav>
      <p className="font-bold text-lg">CrystalView</p>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="py-4 px-6 border-t mt-auto">
    <p className="text-center text-sm text-gray-500">
      © {new Date().getFullYear()} CrystalView. All rights reserved.
    </p>
  </footer>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
