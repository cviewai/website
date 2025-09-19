import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-secondary" />
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground">
          Transform Your Business with AI-Powered Solutions
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 md:text-xl">
          We provide cutting-edge data analytics and AI-driven automation to help
          you harness the power of data, unlock new opportunities, and drive
          sustainable growth.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
