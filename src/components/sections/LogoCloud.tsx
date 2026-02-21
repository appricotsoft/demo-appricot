"use client";

const logos = [
  { name: "Capterra", rating: "4.9" },
  { name: "Trustpilot", rating: "4.8" },
];

export default function LogoCloud() {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-heading-1 font-semibold mb-4">
            More than 13,000 teams
            <br />
            use Aoi Platform
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Customer service software enables you to build better customer
            relationships.
          </p>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="text-3xl font-bold">{logo.rating}</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#F5D547"
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-muted">Rated 5 out of 5</p>
              <p className="font-medium">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
