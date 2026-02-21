'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 aspect-video max-w-4xl mx-auto">
            {/* Play Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
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
