'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const integrations = [
  { name: 'Slack', color: 'bg-purple-500' },
  { name: 'Notion', color: 'bg-gray-900' },
  { name: 'Figma', color: 'bg-pink-500' },
  { name: 'Zoom', color: 'bg-blue-500' },
  { name: 'Trello', color: 'bg-sky-500' },
  { name: 'Asana', color: 'bg-red-500' },
  { name: 'Linear', color: 'bg-indigo-500' },
  { name: 'GitHub', color: 'bg-gray-800' },
];

export default function Integrations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge variant="outline" className="mb-4">Integrations</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Works with your favorite tools
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Seamlessly integrate with the tools you already use and love.
        </p>

        {/* Integration logos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full hover:bg-muted/80 transition-colors"
            >
              <div className={`h-6 w-6 rounded ${integration.color}`} />
              <span className="font-medium">{integration.name}</span>
            </div>
          ))}
        </div>

        <Button variant="outline" className="gap-2">
          View all integrations <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
