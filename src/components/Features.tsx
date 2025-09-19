import { BrainCircuit, Compass, Target } from "lucide-react";

const features = [
  {
    title: "Data-Driven Insights",
    description:
      "Leverage the power of AI to gain actionable intelligence from your data, enabling smarter, more informed business decisions.",
    icon: <BrainCircuit className="w-12 h-12 mx-auto text-primary" />,
  },
  {
    title: "Expert Guidance",
    description:
      "Benefit from strategic financial leadership and planning without the overhead of a full-time executive.",
    icon: <Compass className="w-12 h-12 mx-auto text-primary" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We customize our solutions to meet the unique needs of your business, ensuring maximum impact and efficiency.",
    icon: <Target className="w-12 h-12 mx-auto text-primary" />,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose CrystalView?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We are dedicated to helping you achieve your goals with our
            innovative solutions and expert support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
