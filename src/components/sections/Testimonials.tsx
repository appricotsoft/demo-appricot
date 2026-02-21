'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Matt Cannon',
    role: 'Head of Marketing',
    quote: '" When applied to building block a website or similar work product, a Visual Guide can be an intermediate step toward the end goal of a complete website. By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. "',
  },
  {
    id: 2,
    name: 'Sophie Moore',
    role: 'Web Designer',
    quote: '"Implementing Visual Guides in our website development has significantly enhanced our workflow. These guides act as a pivotal intermediary, fostering collaboration among our team, clients, and managers. The visual representation not only aids in efficient communication but also facilitates valuable input from all stakeholders."',
  },
  {
    id: 3,
    name: 'John Carter',
    role: 'Lead Developer',
    quote: '"In our experience, leveraging Visual Guides during the creation of websites has proven to be a key strategy. These guides serve as an intermediary checkpoint, allowing our designers and developers to gather input from clients, managers, and team members."',
  },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(1);
  const activeTestimonial = testimonials.find(t => t.id === activeTab);

  return (
    <section className="py-20 bg-background animate-slideUp">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground text-center mb-12">
          What our clients say
        </h2>

        {/* Testimonial Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveTab(testimonial.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full transition-colors ${
                activeTab === testimonial.id
                  ? 'bg-foreground text-white'
                  : 'bg-white text-foreground hover:bg-gray-100'
              }`}
            >
              {/* Avatar placeholder */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                activeTab === testimonial.id ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="font-medium">{testimonial.name}</div>
                <div className={`text-sm ${activeTab === testimonial.id ? 'text-white/70' : 'text-body'}`}>
                  {testimonial.role}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-body leading-relaxed">
            {activeTestimonial?.quote}
          </p>
        </div>
      </div>
    </section>
  );
}
