"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

import { aboutPreviewData } from "@/data/home/aboutPreview";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/siteConfig";

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-20"
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

            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {aboutPreviewData.badge}
            </span>

            {/* Heading */}

            <h2
              id="about-heading"
              className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              {aboutPreviewData.title}
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutPreviewData.description1}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
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
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-100 p-3">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">{item.description}</p>
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
                      : "rounded-2xl bg-slate-200 p-6 text-center text-primary"
                  }
                >
                  <h3 className="text-3xl font-bold">{stat.number}</h3>

                  <p className="mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Core Skills */}

            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Core Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700"
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
