"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  MapPin,
} from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              About Me
            </p>

            <h2
              id="about-heading"
              className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
            >
              Passionate MERN Stack Developer creating modern web experiences.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I'm <strong>Jabed Ali Mollah</strong>, a final-year Computer
              Science student and Full Stack MERN Developer from West Bengal,
              India. I enjoy building fast, scalable, and user-friendly web
              applications with React, Next.js, Node.js, Express.js, and
              MongoDB.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I focus on writing clean, maintainable code while delivering
              responsive, accessible, and high-performance web applications. I'm
              currently looking for Frontend, React.js, Next.js, and MERN Stack
              opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <Download size={18} />
                Resume
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-500/20">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Education
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    B.Tech in Computer Science & Engineering
                  </p>

                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    Durgapur Institute of Advanced Technology and Management
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-purple-100 p-3 dark:bg-purple-500/20">
                  <Briefcase className="text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Career Goal
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Seeking opportunities as a React.js, Frontend or MERN Stack
                    Developer where I can contribute to impactful products while
                    continuously improving my skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-100 p-3 dark:bg-cyan-500/20">
                  <Code2 className="text-cyan-600 dark:text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Tech Stack
                  </h3>

                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    React.js, Next.js, JavaScript, Node.js, Express.js, MongoDB,
                    Tailwind CSS, Redux, Git & GitHub.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <MapPin />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-blue-100">
                    West Bengal, India • Open to Remote & On-site Opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
