"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const faqs = [
  {
    question: "What services does Appricotsoft provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "How do I get started with your platform?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "Do you offer custom development?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-heading-1 font-semibold text-center mb-4">
          {t("heading")}
        </h2>
        <p className="text-muted text-center mb-12">{t("subtitle")}</p>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span
                  className={`transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 p-8 bg-background rounded-3xl border border-border">
          <h3 className="text-lg font-semibold mb-2">{t("stillQuestion")}</h3>
          <p className="text-muted text-sm mb-4">{t("stillQuestionSubtitle")}</p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-hover text-foreground px-6 py-2.5 rounded-full font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
