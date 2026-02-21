"use client";

export default function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-20">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-[72px] md:text-[96px] font-semibold text-foreground leading-none">90</span>
              <span className="text-[48px] md:text-[64px] font-semibold text-primary">+</span>
            </div>
            <p className="text-body text-lg">
              Successfully completed<br />projects
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-[72px] md:text-[96px] font-semibold text-foreground leading-none">20</span>
              <span className="text-[48px] md:text-[64px] font-semibold text-primary">+</span>
            </div>
            <p className="text-body text-lg">
              Designers and<br />developers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
