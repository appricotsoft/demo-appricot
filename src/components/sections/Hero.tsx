"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-display-1 font-semibold mb-6 leading-tight">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#"
              className="bg-primary hover:bg-primary-hover text-foreground px-8 py-3.5 rounded-full font-medium transition-colors"
            >
              {t("cta")}
            </a>
            <a
              href="#video"
              className="flex items-center gap-2 text-foreground hover:text-muted transition-colors group"
            >
              <span className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center group-hover:border-muted transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </span>
              {t("watchDemo")}
            </a>
          </div>

          {/* No credit card note */}
          <p className="text-sm text-muted mb-12">{t("noCreditCard")}</p>

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-primary-light">
            <Image
              src="/hero-image.jpg"
              alt="Digital marketing"
              fill
              className="object-cover"
              priority
            />
            {/* Play button overlay for video */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <span className="w-20 h-20 md:w-24 md:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trusted by text */}
          <p className="text-sm text-muted mt-8">{t("trustedBy")}</p>
        </div>
      </div>
    </section>
  );
}
