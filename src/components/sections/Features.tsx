'use client';

import { useState } from 'react';

const tabs = [
  { id: 1, title: 'Powerful dashboard' },
  { id: 2, title: 'Always in Sync' },
  { id: 3, title: 'Embedded analytics' },
  { id: 4, title: 'Ai data predictions' },
];

const tabContent = {
  1: {
    tagline: 'Tagline',
    heading: 'Collaborate with your\nteam anytime, anywhere.',
    description: 'See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.',
    features: ['Organize your data', 'Work with any team', 'Business analytics'],
  },
  2: {
    tagline: 'Tagline',
    heading: 'Collaborate with your\nteam anytime, anywhere.',
    description: 'See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.',
    features: ['Organize your data', 'Work with any team', 'Business analytics'],
  },
  3: {
    tagline: 'Tagline',
    heading: 'We want to bring business\n& the digital world together.',
    description: 'See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.',
    features: ['Organize your data', 'Work with any team', 'Business analytics'],
  },
  4: {
    tagline: 'Tagline',
    heading: 'We want to bring business\n& the digital world together.',
    description: 'See which work apps your team is working in, and join them with a click. Shared cursors equals better than screen-sharing.',
    features: ['Organize your data', 'Work with any team', 'Business analytics'],
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState(1);
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-background animate-slideUp">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-body">our features</span>
          <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mt-4">
            See what our amazing features<br />
            can do for you.
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-base font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-foreground text-white'
                  : 'bg-white text-foreground hover:bg-gray-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Text */}
          <div className="lg:w-1/2">
            <span className="text-sm uppercase tracking-wider text-body">{content.tagline}</span>
            <h3 className="text-[36px] leading-[1.2] font-semibold text-foreground mt-4 whitespace-pre-line">
              {content.heading}
            </h3>
            <p className="text-body mt-6">
              {content.description}
            </p>
            
            <div className="w-full h-px bg-border my-8" />
            
            <ul className="space-y-4">
              {content.features.map((feature, index) => (
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
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/30 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="12" width="48" height="36" rx="4" stroke="#222" strokeWidth="2"/>
                    <path d="M8 20h48" stroke="#222" strokeWidth="2"/>
                    <circle cx="14" cy="16" r="2" fill="#222"/>
                    <circle cx="20" cy="16" r="2" fill="#222"/>
                    <circle cx="26" cy="16" r="2" fill="#222"/>
                  </svg>
                </div>
                <p className="text-sm text-body">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
