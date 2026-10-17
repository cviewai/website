import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/50 via-background to-background" />
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tech-Enabled Financial Advisory</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground max-w-4xl mx-auto">
          Transform Your Business with AI-Powered Finance Operations
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 md:text-xl">
          Expert fractional CFO, finance operations, and audit readiness services
          — powered by modern AI-enabled workflows.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#services"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-gray-200 bg-background px-8 text-sm font-medium text-foreground shadow-sm hover:bg-gray-50 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};
