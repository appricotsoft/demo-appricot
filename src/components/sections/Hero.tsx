"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.11] text-foreground mb-6">
              Start your digital<br />marketing career
            </h1>
            
            <p className="text-body text-lg leading-relaxed mb-8 max-w-md">
              Gain the work experience, mentorship, and support you need to start your career in digital marketing.
            </p>

            {/* Email Input + CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg border border-border bg-transparent text-foreground placeholder:text-body focus:outline-none focus:border-foreground transition-colors"
              />
              <button className="px-8 py-4 bg-foreground text-white rounded-lg font-medium hover:bg-primary hover:text-foreground transition-colors">
                Get Started
              </button>
            </div>

            <p className="text-body text-sm">
              No credit card required
            </p>
          </div>

          {/* Right - 3D Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Placeholder for 3D illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Simple placeholder illustration */}
                <circle cx="200" cy="180" r="60" fill="#272d31" />
                <ellipse cx="200" cy="320" rx="80" ry="30" fill="#F5D547" />
                <rect x="140" y="220" width="120" height="100" rx="10" fill="#e8e6e2" />
                <rect x="155" y="240" width="90" height="60" rx="5" fill="#f8f7f4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-body text-sm">
            Trusted by over 1500 companies across the world
          </p>
        </div>
      </div>
    </section>
  );
}
