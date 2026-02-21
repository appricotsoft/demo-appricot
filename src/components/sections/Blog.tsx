"use client";

const posts = [
  {
    title: "How to boost your digital marketing strategy",
    category: "Marketing",
    date: "Jan 15, 2024",
  },
  {
    title: "The future of AI in business analytics",
    category: "Technology",
    date: "Jan 12, 2024",
  },
  {
    title: "Building effective team collaboration",
    category: "Business",
    date: "Jan 10, 2024",
  },
];

export default function Blog() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section Header */}
        <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-16">
          News & Updates
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-surface rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-16 h-16 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm font-medium text-foreground bg-surface px-3 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-sm text-body">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
