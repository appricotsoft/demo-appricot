"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all features for 7 days. No credit card required to start.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees. You only pay for your subscription plan.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption and security practices to protect your data.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, we offer custom solutions for enterprise clients. Contact our sales team for more information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-semibold leading-[1.16] text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-body text-lg max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-surface flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 text-foreground transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-body">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-16 p-12 bg-primary/10 rounded-3xl max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Still have a question?
          </h3>
          <p className="text-body mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="px-8 py-4 bg-foreground text-white rounded-lg font-medium hover:bg-primary hover:text-foreground transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
