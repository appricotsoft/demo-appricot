'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="video" className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Video Play Button */}
            <div className="animate-slideUp">
              <button
                onClick={() => setIsOpen(true)}
                className="w-[180px] h-[180px] rounded-full bg-[#F4E5AB] flex items-center justify-center hover:scale-105 transition-transform duration-300"
                aria-label="Play video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M15.6001 10.938V39.738L38.229 25.338L15.6001 10.938Z" fill="#222222"/>
                </svg>
              </button>
            </div>
            
            {/* Trusted Companies */}
            <div className="flex-1 animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <p className="text-sm text-body mb-8">
                Trusted by over 1500 companies across the world
              </p>
              
              {/* Logo Grid */}
              <div className="flex flex-wrap items-center gap-8">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="h-8 w-24 bg-gray-300/50 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">Logo {num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
