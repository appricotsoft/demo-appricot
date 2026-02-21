"use client";

import { useTranslations } from "next-intl";

export default function WhatWeDo() {
  const t = useTranslations("whatWeDo");

  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              {t("sectionTitle")}
            </p>
            <h2 className="text-2xl md:text-heading-1 font-semibold">
              {t("heading")}
            </h2>
          </div>

          {/* Image/Visual */}
          <div>
            <div className="aspect-square bg-secondary-light rounded-3xl flex items-center justify-center">
              <div className="text-muted-foreground">Visual Element</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
