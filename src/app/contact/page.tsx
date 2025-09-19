import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the CrystalView team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We'd love to hear from you. Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
