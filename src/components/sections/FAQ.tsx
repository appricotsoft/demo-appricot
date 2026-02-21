'use client';

import { useState } from 'react';

const faqsLeft = [
  { id: 1, question: 'What is Aoi and how does it work?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 2, question: 'How do I get started with Aoi?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 3, question: 'Is there a free trial available?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 4, question: 'What are the system requirements for using Aoi?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
];

const faqsRight = [
  { id: 5, question: 'How is my data secured?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 6, question: 'Can I cancel my subscription at any time?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 7, question: 'What kind of support is available?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { id: 8, question: 'Are updates included in the subscription?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
];

function FAQItem({ item, isOpen, onToggle }: { item: { id: number; question: string; answer: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-medium text-foreground pr-4">{item.question}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
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
      {isOpen && (
        <div className="pb-5 text-body">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-background animate-slideUp">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[42px] leading-[1.2] font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br />
            varius enim in eros elementum tristique.
          </p>
        </div>

        {/* Two Column FAQs */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            {faqsLeft.map((faq) => (
              <FAQItem
                key={faq.id}
                item={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
          <div>
            {faqsRight.map((faq) => (
              <FAQItem
                key={faq.id}
                item={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Still have a question?
          </h3>
          <p className="text-body mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
