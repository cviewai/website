import { type Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { ProductShowcase } from "@/components/ProductShowcase";

export const metadata: Metadata = {
  title: "AI Financial Insights & Services | CrystalView",
  description:
    "CrystalView offers AI-powered financial services, including a natural language chatbot for your QuickBooks data. Get expert guidance and unlock powerful insights.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <ProductShowcase />
    </>
  );
}
