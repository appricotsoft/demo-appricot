"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const testimonials = [
  {
    name: "Matt Cannon",
    role: "Head of Marketing",
    avatar: "/avatars/matt.jpg",
  },
  {
    name: "Sophie Moore",
    role: "Web Designer",
    avatar: "/avatars/sophie.jpg",
  },
  {
    name: "John Carter",
    role: "Lead Developer",
    avatar: "/avatars/john.jpg",
  },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-heading-1 font-semibold text-center mb-16">
          {t("heading")}
        </h2>

        {/* Testimonial Avatars - Horizontal scroll */}
        <div className="flex justify-center gap-8 overflow-x-auto pb-4">
          {[...testimonials, ...testimonials].map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[120px]"
            >
              <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary-hover" />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">{person.name}</p>
                <p className="text-xs text-muted">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
