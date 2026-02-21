'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, BarChart3, Users, Zap, Brain } from 'lucide-react';

const features = [
  { id: 'dashboard', icon: BarChart3, title: 'Powerful Dashboard', description: 'Monitor all your metrics in one place with real-time updates.' },
  { id: 'sync', icon: Users, title: 'Always in Sync', description: 'Keep your team aligned with automatic synchronization.' },
  { id: 'analytics', icon: Zap, title: 'Embedded Analytics', description: 'Deep insights built right into your workflow.' },
  { id: 'ai', icon: Brain, title: 'AI Predictions', description: 'Smart predictions powered by machine learning.' },
];

const checklist = ['Organize your data', 'Work with any team', 'Business analytics'];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful features to help you manage, track, and grow your business.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="gap-2">
                <feature.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">Feature</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Collaborate with your team anytime, anywhere
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.
                  </p>
                  
                  <ul className="space-y-3">
                    {checklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <feature.icon className="h-24 w-24 text-primary/40" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
