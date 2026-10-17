import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Strategic fractional CFO guidance",
  "Audit readiness & robust internal controls",
  "Tailored AI finance automations",
  "Streamlined month-end close",
];

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-8 py-16 md:p-20 shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Modernize Your Financial Operations?
            </h2>
            <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Partner with experienced finance leaders and leverage AI-driven automation tailored to your company&apos;s growth stage.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:gap-3"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:contact@crystalview.ai"
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-gray-700 px-6 text-sm font-medium text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
              >
                contact@crystalview.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
