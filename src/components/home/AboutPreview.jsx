"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { aboutPreviewData } from "@/data/home/aboutPreview";
import { skills } from "@/data/skills";
import { siteConfig } from "@/config/siteConfig";

export default function AboutPreview() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`py-20 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <span
              className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${
                theme
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {aboutPreviewData.badge}
            </span>

            {/* Heading */}
            <h2
              id="about-heading"
              className={`mt-6 text-3xl font-bold leading-tight sm:text-4xl ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              {aboutPreviewData.title}
            </h2>

            {/* Description */}
            <p
              className={`mt-6 text-lg leading-8 ${
                theme ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {aboutPreviewData.description1}
            </p>

            <p
              className={`mt-5 text-lg leading-8 ${
                theme ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {aboutPreviewData.description2}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="button inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Read More
                <ArrowRight size={18} />
              </Link>

              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition ${
                  theme
                    ? "border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                    : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {/* Highlights */}
            {aboutPreviewData.highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl ${
                    theme
                      ? "border-slate-800 bg-slate-900"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-xl p-3 ${
                        theme ? "bg-blue-500/20" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          theme ? "text-blue-400" : "text-blue-600"
                        }`}
                      />
                    </div>

                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          theme ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`mt-2 ${
                          theme ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-5">
              {aboutPreviewData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index === 0
                      ? "rounded-2xl button p-6 text-center text-white"
                      : `rounded-2xl p-6 text-center ${
                          theme
                            ? "bg-slate-800 text-blue-400"
                            : "bg-slate-200 text-primary"
                        }`
                  }
                >
                  <h3 className="text-3xl font-bold">{stat.number}</h3>

                  <p className="mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Core Skills */}
            <div
              className={`rounded-2xl border p-6 ${
                theme
                  ? "border-slate-800 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3
                className={`mb-4 text-lg font-semibold ${
                  theme ? "text-white" : "text-slate-900"
                }`}
              >
                Core Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      theme
                        ? "bg-slate-800 text-slate-300 hover:bg-blue-500/20 hover:text-blue-400"
                        : "bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
