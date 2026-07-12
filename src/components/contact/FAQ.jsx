"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Are you available for full-time opportunities?",
    answer:
      "Yes. I am actively looking for Full-Time Software Developer opportunities and am also open to internships and freelance projects.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I am comfortable working remotely, on-site, or in a hybrid work environment.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I primarily work with HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Redux Toolkit, Git, and GitHub.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "I usually reply within 24 hours. For urgent inquiries, please contact me via email or LinkedIn.",
  },
  {
    question: "Can you build custom websites?",
    answer:
      "Yes. I build responsive, SEO-friendly, fast, and modern websites tailored to business and personal requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Have Questions?
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Here are answers to some common questions about working with me.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-200 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
