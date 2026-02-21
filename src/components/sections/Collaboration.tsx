'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const team = [
  { name: 'Rosa Glenn', company: 'Acme Inc', initials: 'RG' },
  { name: 'Nicole Bussell', company: 'Tech Corp', initials: 'NB' },
  { name: 'George Morrell', company: 'Design Co', initials: 'GM' },
];

const faqItems = [
  { title: 'Powerful dashboard', content: 'Monitor all your key metrics and performance indicators in one centralized location.' },
  { title: 'Real-time collaboration', content: 'Work together with your team in real-time with instant updates and notifications.' },
  { title: 'Advanced analytics', content: 'Get deep insights into your data with our advanced analytics and reporting tools.' },
];

export default function Collaboration() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Team Cards */}
          <div className="space-y-4">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.company}</div>
                  </div>
                  <Badge variant="secondary">Online</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right - Content + Accordion */}
          <div>
            <Badge variant="outline" className="mb-4">Collaboration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Collaborate with your team anytime, anywhere
            </h2>
            <p className="text-muted-foreground mb-8">
              User-friendly experience, whether you&apos;re shopping online, making in-store purchases, or traveling abroad.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
