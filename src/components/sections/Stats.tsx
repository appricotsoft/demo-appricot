"use client";

import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          {/* Projects */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold">90</span>
              <span className="text-4xl md:text-5xl font-bold text-primary">
                +
              </span>
            </div>
            <p className="text-muted max-w-[180px]">{t("projects")}</p>
          </div>

          {/* Team */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-bold">20</span>
              <span className="text-4xl md:text-5xl font-bold text-primary">
                +
              </span>
            </div>
            <p className="text-muted max-w-[180px]">{t("team")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
