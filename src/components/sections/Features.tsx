"use client";

import { useTranslations } from "next-intl";

const features = [
  { key: "powerfulDashboard", icon: "📊" },
  { key: "alwaysInSync", icon: "🔄" },
  { key: "embeddedAnalytics", icon: "📈" },
  { key: "aiPredictions", icon: "🤖" },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Section Label */}
        <p className="text-sm text-muted uppercase tracking-wider text-center mb-4">
          {t("sectionTitle")}
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-heading-1 font-semibold text-center max-w-2xl mx-auto mb-16">
          {t("heading")}
        </h2>

        {/* Features Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee">
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border whitespace-nowrap"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium">{t(feature.key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reverse Marquee */}
        <div className="overflow-hidden mt-4">
          <div className="flex gap-6 animate-marquee-reverse">
            {[...features, ...features].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border whitespace-nowrap"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium">{t(feature.key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
