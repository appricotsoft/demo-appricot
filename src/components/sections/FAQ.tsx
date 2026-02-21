'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const faqs = [
  { question: 'What is Aoi and how does it work?', answer: 'Aoi is a comprehensive SaaS platform that helps businesses manage their digital marketing efforts. It provides tools for analytics, collaboration, and automation all in one place.' },
  { question: 'How do I get started?', answer: 'Getting started is easy! Simply sign up for a free trial, no credit card required. Our onboarding wizard will guide you through the setup process in minutes.' },
  { question: 'Is there a free trial available?', answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.' },
  { question: 'What are the system requirements?', answer: 'Aoi is a cloud-based solution that works in any modern web browser. No installation required.' },
  { question: 'How is my data secured?', answer: 'We use industry-standard encryption and security practices. Your data is stored in SOC 2 compliant data centers with regular backups.' },
  { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.' },
  { question: 'What kind of support is available?', answer: 'We offer email support for all plans, with priority support and dedicated account managers for Pro and Enterprise plans.' },
  { question: 'Are updates included?', answer: 'Yes! All updates and new features are included in your subscription at no additional cost.' },
];

export default function FAQ() {
  const leftFaqs = faqs.slice(0, 4);
  const rightFaqs = faqs.slice(4);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our product and services.
          </p>
        </div>

        {/* Two Column FAQs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible>
            {leftFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`left-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Accordion type="single" collapsible>
            {rightFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`right-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find the answer you&apos;re looking for? Contact our support team.
          </p>
          <Button className="gap-2">
            <Mail className="h-4 w-4" /> Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
