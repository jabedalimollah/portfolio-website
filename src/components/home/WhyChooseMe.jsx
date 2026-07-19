"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Zap, SearchCheck } from "lucide-react";
import { useSelector } from "react-redux";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable, reusable and scalable code following modern React, Next.js and JavaScript best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Every website is built with a mobile-first approach and optimized for desktops, tablets and smartphones.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "I focus on fast loading, optimized images, lazy loading, code splitting and excellent Core Web Vitals.",
  },
  {
    icon: SearchCheck,
    title: "SEO Friendly Development",
    description:
      "Semantic HTML, structured metadata, accessibility and technical SEO help websites rank better in search engines.",
  },
];

export default function WhyChooseMe() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      id="why-choose-me"
      className={`${theme ? "bg-slate-950" : "bg-slate-50"} py-20`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Why Choose Me
          </span>

          <h2
            className={`mt-6 text-3xl font-bold sm:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Building High-Quality Digital Experiences
          </h2>

          <p
            className={`mt-6 text-lg leading-8 ${
              theme ? "text-slate-400" : "text-slate-600"
            }`}
          >
            I focus on creating modern, responsive, accessible and
            high-performance web applications that provide a great user
            experience and are easy to maintain.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`group rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl ${
                  theme
                    ? "border-slate-800 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 transition-colors group-hover:bg-blue-600 ${
                    theme ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`h-8 w-8 transition-colors group-hover:text-white ${
                      theme ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>

                <h3
                  className={`text-xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    theme ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-center text-white"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">
            Ready to Build Something Amazing?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            I'm always excited to work on modern web applications, business
            websites and full-stack projects that make a real impact.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
