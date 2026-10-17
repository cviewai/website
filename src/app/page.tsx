import { type Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AI Financial Insights & Services | CrystalView",
  description:
    "CrystalView offers AI-powered financial operations, fractional CFO stewardship, and accounting systems optimization for modern businesses.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <CTASection />
    </>
  );
}
