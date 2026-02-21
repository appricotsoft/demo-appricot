"use client";

const features = [
  {
    title: "Powerful dashboard",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Always in Sync",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Embedded analytics",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "AI data predictions",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-body text-sm uppercase tracking-[2px] font-medium mb-4">
            our features
          </p>
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground">
            See what our amazing features<br />can do for you.
          </h2>
        </div>

        {/* Features Grid - Horizontal Scroll on Mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-auto bg-background rounded-2xl p-8 border border-border/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-foreground mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Duplicate row for marquee effect - desktop only */}
        <div className="hidden md:flex gap-6 mt-6 md:grid md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={`dup-${index}`}
              className="bg-background rounded-2xl p-8 border border-border/30"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-foreground mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
