import { type Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "AI-Powered Financial Solutions for Small Businesses",
  description:
    "CrystalView provides cutting-edge data analytics and AI-driven automation to help you unlock new opportunities and drive growth.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
    </>
  );
}
