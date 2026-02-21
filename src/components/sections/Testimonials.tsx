"use client";

const testimonials = [
  {
    name: "Matt Cannon",
    role: "Head of Marketing",
    avatar: "MC",
  },
  {
    name: "Sophie Moore",
    role: "Web Designer",
    avatar: "SM",
  },
  {
    name: "John Carter",
    role: "Lead Developer",
    avatar: "JC",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section Header */}
        <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-16">
          What our clients say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border/30"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-foreground font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-body text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Duplicate row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={`dup-${index}`}
              className="bg-background rounded-2xl p-8 border border-border/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-foreground font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-body text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
