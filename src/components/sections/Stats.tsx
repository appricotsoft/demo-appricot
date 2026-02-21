'use client';

export default function Stats() {
  return (
    <section className="py-16 bg-white animate-slideUp">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-16 lg:gap-32">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-body text-sm mb-2">
              Successfully completed<br />projects
            </div>
            <div className="text-[72px] font-semibold text-foreground leading-none">
              100<span className="text-primary">+</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-body text-sm mb-2">
              Designers and<br />developers
            </div>
            <div className="text-[72px] font-semibold text-foreground leading-none">
              28<span className="text-primary">+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
