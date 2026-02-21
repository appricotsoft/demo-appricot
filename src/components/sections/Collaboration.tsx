"use client";

import { useTranslations } from "next-intl";

export default function Collaboration() {
  const t = useTranslations("collaboration");

  const features = [
    { key: "organizeData", icon: "✓" },
    { key: "workWithTeam", icon: "✓" },
    { key: "businessAnalytics", icon: "✓" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Mockup */}
          <div className="order-2 md:order-1">
            <div className="aspect-[4/3] bg-card rounded-3xl border border-border flex items-center justify-center">
              <div className="text-muted">Dashboard Preview</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl md:text-heading-1 font-semibold mb-6">
              {t("heading")}
            </h2>
            <p className="text-muted mb-8">{t("subtitle")}</p>

            {/* Feature list */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-sm">
                    {feature.icon}
                  </span>
                  <span>{t(feature.key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
