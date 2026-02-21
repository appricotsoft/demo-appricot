'use client';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-[72px] leading-[1.1] font-semibold text-foreground mb-6 animate-slideUp">
          Start your digital<br />
          marketing career
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl text-body mb-10 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Gain the work experience, mentorship, and support<br />
          your need to start your career in digital marketing,
        </p>
        
        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <a 
            href="#" 
            className="btn-primary"
          >
            Get Started
          </a>
          <a 
            href="#video" 
            className="btn-secondary"
          >
            Watch a demo
          </a>
        </div>
        
        {/* No credit card text */}
        <p className="text-sm text-body animate-slideUp" style={{ animationDelay: '0.3s' }}>
          No credit card required
        </p>
      </div>
    </section>
  );
}
