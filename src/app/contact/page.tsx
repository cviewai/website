"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  }

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
          {status === "success" ? (
            <div className="text-center p-8 bg-secondary rounded-md">
              <h3 className="text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 text-gray-500">
                Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">{errorMessage}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
