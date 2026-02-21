"use client";

const features = [
  "User-friendly experience, whether you're shopping online, making in-store purchases, or traveling abroad.",
  "When our team provides design and digital marketing.",
  "When our team provides design and digital marketing.",
];

export default function Collaboration() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-surface rounded-3xl flex items-center justify-center">
              <svg className="w-32 h-32 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-8">
              Collaborate with your<br />team anytime, anywhere.
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-body text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
