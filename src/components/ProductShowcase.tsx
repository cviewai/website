import Link from "next/link";

const PlaceholderChatUI = () => (
  <div className="relative aspect-[4/3] w-full rounded-xl bg-gray-100 p-2 shadow-lg">
    <div className="h-full w-full rounded-md bg-white p-4 flex flex-col">
      {/* User Message */}
      <div className="flex justify-end mb-4">
        <div className="bg-primary text-primary-foreground text-sm rounded-lg px-4 py-2 max-w-[80%]">
          What was our profit last quarter?
        </div>
      </div>
      {/* AI Response */}
      <div className="flex justify-start">
        <div className="bg-secondary text-secondary-foreground text-sm rounded-lg px-4 py-2 max-w-[80%]">
          <div className="font-bold">Profit for Q3 2025</div>
          <div className="text-2xl font-mono mt-1">$42,783.55</div>
        </div>
      </div>
    </div>
  </div>
);

export const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Chat with Your QuickBooks Data
            </h2>
            <p className="mt-4 max-w-md mx-auto md:mx-0 text-lg text-gray-500">
              Connect your QuickBooks account and get instant insights by asking questions in natural language. Stop clicking through reports and start a conversation with your finances.
            </p>
            <div className="mt-8">
              <Link
                href="https://vision.crystalview.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Login to Vision
              </Link>
            </div>
          </div>
          <div>
            <PlaceholderChatUI />
          </div>
        </div>
      </div>
    </section>
  );
};
