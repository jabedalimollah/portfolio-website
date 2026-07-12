"use client";

import Link from "next/link";
import { ArrowRight, Download, MapPin, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "B.Tech (CSE) • 2026",
    description: "Computer Science & Engineering",
    icon: GraduationCap,
  },
  {
    title: "West Bengal, India",
    description: "Open to Remote & On-site",
    icon: MapPin,
  },
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white py-20 "
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
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              About Me
            </span>

            <h2
              id="about-heading"
              className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl"
            >
              Building Modern, Fast & User-Friendly Web Applications
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 ">
              I'm <strong>Jabed Ali Mollah</strong>, a passionate Full Stack
              MERN Developer and final-year Computer Science student. I enjoy
              building modern, responsive, scalable and SEO-friendly web
              applications using React.js, Next.js, Node.js, Express.js and
              MongoDB.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 ">
              I love transforming ideas into real-world products with clean
              code, modern UI/UX and high performance. I'm currently looking for
              opportunities as a React, Frontend or MERN Stack Developer.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl  button px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Read More
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 "
              >
                <Download size={18} />
                Download Resume
              </Link>
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
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-blue-100 p-3 ">
                      <Icon className="h-6 w-6 text-blue-600 " />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 ">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600 ">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl button p-6 text-center text-white">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="mt-2 text-sm">Projects Completed</p>
              </div>

              <div className="rounded-2xl bg-slate-200 p-6 text-center text-primary ">
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="mt-2 text-sm">Technologies Learned</p>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl border border-slate-200 p-6 ">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                Core Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 "
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
