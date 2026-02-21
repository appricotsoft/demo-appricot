"use client";

export default function LogoCloud() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.17] text-foreground mb-6">
              More than 13,000 teams<br />use Aoi Platform
            </h2>
            <p className="text-body text-lg max-w-md">
              Customer service software enables you to build better customer relationships.
            </p>
          </div>

          {/* Right - Ratings */}
          <div className="flex flex-col sm:flex-row gap-8 lg:justify-end">
            {/* Capterra */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
              <div className="text-[48px] font-semibold text-foreground mb-2">4.9</div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body text-sm mb-1">Rated 5 out of 5</p>
              <p className="text-foreground font-semibold">Capterra</p>
            </div>

            {/* Trustpilot */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
              <div className="text-[48px] font-semibold text-foreground mb-2">4.8</div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body text-sm mb-1">Rated 5 out of 5</p>
              <p className="text-foreground font-semibold">Trustpilot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
