'use client';

const features = [
  '• Guarenteed quality control',
  '• Top quality service',
  '• Best experts at your lease',
];

export default function Pricing() {
  return (
    <section className="py-20 bg-background animate-slideUp">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Content */}
          <div className="lg:w-1/2">
            <span className="text-sm uppercase tracking-wider text-body">over 100,00+ Clients</span>
            <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mt-4 mb-6">
              Choose plan that<br />
              suits your business
            </h2>
            
            <div className="w-full h-px bg-border my-6" />
            
            <p className="text-body mb-6">
              Things go wrong have questions. We&apos;ve undertand.<br />
              So we have people.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="text-foreground">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Right - Pricing Cards */}
          <div className="lg:w-1/2 flex flex-col md:flex-row gap-6">
            {/* Advanced Plan */}
            <div className="flex-1 bg-white rounded-2xl p-8 border border-border">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">Advanced</h3>
                <p className="text-sm text-body">7 days free</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-body">{feature}</li>
                ))}
              </ul>
              
              <div className="flex items-end justify-between">
                <div className="text-[42px] font-semibold text-foreground">$29</div>
                <a href="#" className="btn-secondary text-sm">Sign Up</a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex-1 bg-foreground rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Enterprise</h3>
                <p className="text-sm text-white/70">7 days free</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-white/70">{feature}</li>
                ))}
              </ul>
              
              <div className="flex items-end justify-between">
                <div className="text-[42px] font-semibold text-white">$59</div>
                <a href="#" className="bg-white text-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
