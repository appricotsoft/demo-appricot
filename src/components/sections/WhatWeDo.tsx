'use client';

import { useState } from 'react';

const features = [
  'Organize your data',
  'Organize your data',
  'Work with any team',
  'Work with any team',
  'Business analytics',
  'Business analytics',
];

const posts = [
  { id: 1, title: 'Tech Visionaries: Exploring Cutting-Edge Inspection Innovations' },
  { id: 2, title: 'Precision in Pixels: Unraveling the Future of Quality Control' },
  { id: 3, title: 'Insights from the Tech Frontier: Revolutionizing Inspection Methods' },
  { id: 4, title: 'Beyond the Blueprint: Navigating the Tech Inspection Landscape' },
  { id: 5, title: "Coding Perfection: Tech's Impact on Flawless Production" },
  { id: 6, title: 'The Visionary Lens: Redefining Quality Assurance Standards' },
];

export default function WhatWeDo() {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background animate-slideUp">
      <div className="container mx-auto px-6">
        {/* Features List with Image */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Left - Content */}
          <div className="lg:w-1/2">
            <span className="text-sm uppercase tracking-wider text-body">our features</span>
            <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mt-4 mb-6">
              Collaborate with.<br />
              your team anytime,<br />
              anywhere.
            </h2>
            <p className="text-body mb-8">
              Suspendisse elementum, justo at pharetra malesuada, sem ante
              lacinia justo, vel interdum tortor lacus et mauris. Fusce felis lectus,
              pretium id eros vel, lacinia malesuada quam.
            </p>
            
            <ul className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#25282B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Image Placeholder */}
          <div className="lg:w-1/2">
            <div className="bg-gray-200 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-gray-500">Feature Image</span>
            </div>
          </div>
        </div>

        {/* Interactive Posts Section */}
        <div className="mt-20">
          <span className="text-sm uppercase tracking-wider text-body">what we do?</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 mb-12">
            <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground">
              We want to bring business<br />
              & the digital world together.
            </h2>
            <a href="#" className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M8.15685 4.96448L13.8137 10.6213L8.15685 16.2782" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              See all services
            </a>
          </div>

          {/* Posts Grid */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Post Titles */}
            <div className="lg:w-1/2 space-y-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href="#"
                  className={`block text-2xl font-medium transition-colors py-2 border-b border-border ${
                    hoveredPost === post.id ? 'text-foreground' : 'text-body'
                  }`}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  {post.title}
                </a>
              ))}
            </div>

            {/* Image Preview */}
            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center sticky top-32">
                <span className="text-gray-500">
                  {hoveredPost ? `Post ${hoveredPost} Image` : 'Hover a post'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
