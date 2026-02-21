'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const logos = [
  'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma', 'Framer'
];

export default function LogoCloud() {
  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by over 1,500 companies worldwide
        </p>
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          {logos.map((logo) => (
            <div key={logo} className="text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors">
              {logo}
            </div>
          ))}
        </div>
        
        {/* Rating Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <Card className="w-auto">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="text-3xl font-bold">4.9</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Capterra</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="w-auto">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="text-3xl font-bold">4.8</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Trustpilot</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
