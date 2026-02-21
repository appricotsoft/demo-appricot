'use client';

import { useState } from 'react';

const avatars = [
  { name: 'Rosa Glenn', company: 'Gleason, Senger and Brekke' },
  { name: 'Nicole Bussell', company: 'VonRueden - Rohan' },
  { name: 'George Morrell', company: 'Kiehn Group' },
];

const accordionItems = [
  { id: 1, title: 'Powerful dashboard', content: 'When our team provides design and digital marketing.' },
  { id: 2, title: 'Powerful dashboard', content: 'When our team provides design and digital marketing.' },
  { id: 3, title: 'Powerful dashboard', content: 'When our team provides design and digital marketing.' },
];

export default function Collaboration() {
  const [openItem, setOpenItem] = useState(1);

  return (
    <section className="py-20 bg-white animate-slideUp">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Avatar Cards */}
          <div className="lg:w-1/3 space-y-4">
            {avatars.map((avatar, index) => (
              <div 
                key={index}
                className="bg-background rounded-2xl p-6 flex items-center gap-4"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-600">
                  {avatar.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{avatar.name}</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-body">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M6 10.669C6 11.7735 5.10457 12.669 4 12.669C2.89543 12.669 2 11.7735 2 10.669C2 9.56438 2.89543 8.66895 4 8.66895C5.10457 8.66895 6 9.56438 6 10.669Z" fill="#222222"/>
                    <path d="M12 10.669C12 11.7735 11.1046 12.669 10 12.669C8.89543 12.669 8 11.7735 8 10.669C8 9.56438 8.89543 8.66895 10 8.66895C11.1046 8.66895 12 9.56438 12 10.669Z" fill="#222222"/>
                    <path d="M16 12.669C17.1046 12.669 18 11.7735 18 10.669C18 9.56438 17.1046 8.66895 16 8.66895C14.8954 8.66895 14 9.56438 14 10.669C14 11.7735 14.8954 12.669 16 12.669Z" fill="#222222"/>
                  </svg>
                  <span className="hidden sm:inline">{avatar.company}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Content + Accordion */}
          <div className="lg:w-2/3">
            <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mb-4">
              Collaborate with your<br />
              team anytime, anywhere.
            </h2>
            <p className="text-body mb-8">
              User-friendly experience, whether you&apos;re shopping online,<br />
              making in-store purchases, or traveling abroad.
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <div key={item.id} className="border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenItem(openItem === item.id ? 0 : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground">{item.title}</span>
                    <span className="flex-shrink-0 ml-4">
                      {openItem === item.id ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H16" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 8V16" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8 12H16" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                  </button>
                  {openItem === item.id && (
                    <div className="px-5 pb-5 text-body">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
