"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 py-4 px-6 border-b bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-poppins font-bold text-lg tracking-wide">
          CrystalView
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Request Consultation
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 rounded-md text-foreground hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b shadow-lg z-50">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-600 hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
