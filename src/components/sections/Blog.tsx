'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Tech Visionaries: Exploring Cutting-Edge Innovations',
    excerpt: 'Discover how technology is reshaping industries and creating new opportunities.',
    date: 'Oct 24, 2023',
    category: 'Technology',
  },
  {
    title: 'Precision in Pixels: The Future of Quality Control',
    excerpt: 'Learn about the latest advances in automated quality assurance systems.',
    date: 'Oct 20, 2023',
    category: 'Innovation',
  },
  {
    title: 'Insights from the Tech Frontier',
    excerpt: 'Expert perspectives on emerging trends and digital transformation.',
    date: 'Oct 18, 2023',
    category: 'Insights',
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <Badge variant="outline" className="mb-4">Blog</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              News & Updates
            </h2>
          </div>
          <Button variant="outline" className="gap-2 shrink-0">
            View all posts <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 transition-colors" />
              </CardHeader>
              <CardContent className="pt-6">
                <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
