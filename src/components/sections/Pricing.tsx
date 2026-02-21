"use client";

import { useTranslations } from "next-intl";

export default function Pricing() {
  const t = useTranslations("pricing");

  const plans = [
    { name: "advanced", price: "$29" },
    { name: "enterprise", price: "$59" },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <p className="text-sm uppercase tracking-wider text-muted text-center mb-4">
          {t("sectionTitle")}
        </p>
        <h2 className="text-2xl md:text-heading-1 font-semibold text-center mb-4">
          {t("heading")}
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-12">
          {t("subtitle")}
        </p>

        {/* Features list */}
        <ul className="flex flex-wrap justify-center gap-4 mb-12">
          <li className="flex items-center gap-2 text-sm">
            <span className="text-primary">•</span> {t("qualityControl")}
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="text-primary">•</span> {t("topQuality")}
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="text-primary">•</span> {t("bestExperts")}
          </li>
        </ul>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-background p-8 rounded-3xl border border-border"
            >
              <p className="text-xs text-muted mb-2">{t("freeTrial")}</p>
              <h3 className="text-lg font-semibold mb-4">{t(plan.name)}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">•</span> {t("qualityControl")}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">•</span> {t("topQuality")}
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-primary">•</span> {t("bestExperts")}
                </li>
              </ul>
              <div className="text-3xl font-bold">{plan.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
