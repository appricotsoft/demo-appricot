'use client';

export default function LogoCloud() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-3xl p-10 shadow-sm animate-slideUp">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left - Heading */}
            <div className="lg:w-1/2">
              <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground">
                More than 13,000 teams<br />
                use Aoi Platfrom
              </h2>
              <p className="text-body mt-4">
                Customer service software enables you to build better<br />
                customer relationships.
              </p>
            </div>
            
            {/* Right - Rating Cards */}
            <div className="lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-6">
              {/* Capterra */}
              <div className="text-center">
                <h3 className="text-[42px] font-semibold text-foreground">4.9</h3>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-body">Capterra</span>
              </div>
              
              {/* Trustpilot */}
              <div className="text-center">
                <h3 className="text-[42px] font-semibold text-foreground">4.8</h3>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-body">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
