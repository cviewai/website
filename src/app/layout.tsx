import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrystalView",
  description: "AI-Powered Solutions for Your Business",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const Header = () => (
  <header className="py-4 px-6 border-b">
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold text-lg">
        CrystalView
      </Link>
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray-500 hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

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
