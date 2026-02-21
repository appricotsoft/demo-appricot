"use client";

import { useTranslations } from "next-intl";

const integrations = [
  "Slack",
  "Notion",
  "Figma",
  "Linear",
  "Asana",
  "Jira",
  "GitHub",
  "GitLab",
];

export default function Integrations() {
  const t = useTranslations("integrations");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <p className="text-sm uppercase tracking-wider text-muted mb-4">
          {t("sectionTitle")}
        </p>
        <h2 className="text-2xl md:text-heading-1 font-semibold max-w-2xl mx-auto mb-4">
          {t("heading")}
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-12">{t("subtitle")}</p>

        {/* Integration logos grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-3xl mx-auto">
          {integrations.map((name) => (
            <div
              key={name}
              className="aspect-square bg-card border border-border rounded-2xl flex items-center justify-center p-4"
            >
              <span className="text-xs text-muted">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
