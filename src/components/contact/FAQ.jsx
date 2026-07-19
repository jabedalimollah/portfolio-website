"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

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
  const theme = useSelector((state) => state.theme.darkMode);

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-900/40 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Frequently Asked Questions
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Have Questions?
          </h2>

          <p
            className={`mt-5 text-lg ${
              theme ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Here are answers to some common questions about working with me.
          </p>
        </div>

        {/* FAQ Items */}

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp
                    className={theme ? "text-blue-400" : "text-slate-700"}
                  />
                ) : (
                  <FaChevronDown
                    className={theme ? "text-slate-400" : "text-slate-700"}
                  />
                )}
              </button>

              {openIndex === index && (
                <div
                  className={`border-t px-6 py-5 transition-colors duration-300 ${
                    theme
                      ? "border-slate-700 text-slate-400"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
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
