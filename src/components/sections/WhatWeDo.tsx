'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Palette, TrendingUp, Megaphone, Shield, Headphones } from 'lucide-react';

const services = [
  { icon: Code, title: 'Web Development', description: 'Build modern, responsive websites and applications.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Create beautiful and intuitive user experiences.' },
  { icon: TrendingUp, title: 'Digital Marketing', description: 'Grow your audience with data-driven strategies.' },
  { icon: Megaphone, title: 'Brand Strategy', description: 'Develop a strong, recognizable brand identity.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protect your business with enterprise security.' },
  { icon: Headphones, title: '24/7 Support', description: 'Get help whenever you need it from our team.' },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <Badge variant="outline" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We bring business & the digital world together
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Comprehensive solutions to help your business thrive in the digital age.
            </p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0">
            See all services <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
