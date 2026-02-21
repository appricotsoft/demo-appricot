"use client";

import { useTranslations } from "next-intl";

const posts = [
  {
    title: "How to build a successful startup",
    date: "Nov 15, 2024",
    category: "Business",
  },
  {
    title: "The future of AI in software development",
    date: "Nov 12, 2024",
    category: "Technology",
  },
  {
    title: "Best practices for remote teams",
    date: "Nov 10, 2024",
    category: "Productivity",
  },
];

export default function Blog() {
  const t = useTranslations("blog");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-heading-1 font-semibold text-center mb-12">
          {t("heading")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-muted">
                {/* Post image placeholder */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted mb-3">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
