"use client";

const features = [
  "Guaranteed quality control",
  "Top quality service",
  "Best experts at your service",
];

const plans = [
  {
    name: "Advanced",
    price: 29,
    trial: "7 days free",
    features: features,
  },
  {
    name: "Enterprise",
    price: 59,
    trial: "7 days free",
    features: features,
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="text-body text-sm mb-4">over 100,000+ Clients</p>
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-6">
              Choose plan that<br />suits your business
            </h2>
            <p className="text-body text-lg mb-8">
              Things go wrong have questions. We understand. So we have people.
            </p>

            {/* Feature list */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-body">
                  <span className="text-foreground">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Pricing Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex-1 rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-foreground text-white"
                    : "bg-background border border-border"
                }`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/70" : "text-body"}`}>
                  {plan.trial}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${plan.highlighted ? "text-white/80" : "text-body"}`}>
                      <span>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className={`text-[48px] font-semibold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    ${plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-white/70" : "text-body"}>/mo</span>
                </div>

                <button
                  className={`w-full py-4 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-foreground hover:bg-primary-hover"
                      : "bg-foreground text-white hover:bg-primary hover:text-foreground"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
