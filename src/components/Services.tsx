import { BarChartBig, Cog } from "lucide-react";

const services = [
  {
    title: "Fractional Financial Stewardship Services",
    description:
      "Get strategic financial leadership and planning without the cost of a full-time executive. Ideal for growing non-profits.",
    icon: <BarChartBig className="w-12 h-12 mx-auto text-primary" />,
  },
  {
    title: "System & Process Optimization",
    description:
      "Streamline your non profit operations with optimized systems and processes for greater efficiency and accuracy.",
    icon: <Cog className="w-12 h-12 mx-auto text-primary" />,
  },
];

export const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Comprehensive Suite of Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
