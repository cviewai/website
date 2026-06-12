import { BarChartBig, Cog, Check } from "lucide-react";

const services = [
  {
    title: "Fractional Financial Stewardship Services",
    description: "Expert financial leadership tailored to your growth.",
    features: [
      "Audit Readiness",
      "Financial Reporting & KPIs",
      "Month-end close",
      "Budgeting & Forecasting",
      "Cap Table & Equity Management",
    ],
    icon: <BarChartBig className="w-12 h-12 text-primary" />,
  },
  {
    title: "System & Process Optimization Services",
    description: "Streamline operations with cutting-edge technology.",
    features: [
      "Finance Automation",
      "Accounting Systems Implementation",
      "Access to Proprietary AI-Assistant and Financial Tool \"Vision\"",
    ],
    icon: <Cog className="w-12 h-12 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Comprehensive Suite of Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/5 w-fit">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-8 font-medium min-h-[3rem]">
                {service.description}
              </p>
              <ul className="space-y-4">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-700">
                    <div className="mr-3 mt-1 p-0.5 rounded-full bg-primary/10 text-primary">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
