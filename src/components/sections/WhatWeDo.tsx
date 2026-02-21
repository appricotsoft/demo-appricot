"use client";

const items = [
  { title: "Organize your data", icon: "📊" },
  { title: "Work with any team", icon: "👥" },
  { title: "Business analytics", icon: "📈" },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-body text-sm uppercase tracking-[2px] font-medium mb-4">
              our features
            </p>
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-6">
              Collaborate with.<br />your team anytime,<br />anywhere.
            </h2>
            <p className="text-body text-lg mb-8 max-w-md">
              Suspendisse elementum, justo at pharetra malesuada, sem ante lacinia justo, vel interdum tortor lacus et mauris.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
              {items.map((item, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-foreground font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-surface rounded-3xl flex items-center justify-center">
              <svg className="w-32 h-32 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
