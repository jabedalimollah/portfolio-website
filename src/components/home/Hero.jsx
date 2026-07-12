"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-10 lg:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 ">
            👋 Available for Full-Time & Freelance
          </span> */}
          <div className="flex w-full flex-col gap-4 lg:flex-row items-center lg:items-center">
            {/* Status Badge */}
            <span className="inline-flex w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              👋 Available for Full-Time & Freelance
            </span>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10s h-8 w-8 sw-10 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-500"
              >
                <FaInstagram className="h-5s h-4 w-4 sw-5" />
              </a>

              <a
                href="https://www.facebook.com/jabedalimollah7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10s h-8 w-8 sw-10 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500"
              >
                <FaFacebookF className="h-5s h-4 w-4 sw-5" />
              </a>

              <a
                href="https://www.youtube.com/@jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10s h-8 w-8 sw-10 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500"
              >
                <IoLogoYoutube className="h-5s h-4 w-4 sw-5" />
              </a>

              <a
                href="https://x.com/JabedAliMollah7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex h-10s h-8 w-8 sw-10 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:text-slate-700"
              >
                <FaXTwitter className="h-5s h-4 w-4 sw-5" />
              </a>
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-700  sm:text-5xl lg:text-7xl">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jabed Ali Mollah
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-500  sm:text-2xl">
            Full Stack MERN Developer
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
            I build fast, scalable and responsive web applications using
            React.js, Next.js, Node.js, Express.js and MongoDB. Passionate about
            clean UI, high performance, accessibility and modern web
            technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl button px-6 py-3 font-semibold text-white transition hover:bg-primary"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 text-slate-700 px-6 py-3 font-semibold transition hover:border-primary hover:text-primary"
            >
              <Download size={18} />
              Resume
            </Link>
          </div>

          <div className="mt-10 flex justify-center gap-4 lg:justify-start">
            <a
              href="https://github.com/jabedalimollah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-slate-700 p-3 transition hover:border-blue-600 hover:text-blue-600 "
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/jabedalimollah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-slate-700 p-3 transition hover:border-blue-600 hover:text-blue-600 "
            >
              Linkedin
            </a>

            <a
              href="mailto:jabedalimollah7@gmail.com"
              aria-label="Email"
              className="rounded-full border border-slate-700 p-3 transition hover:border-blue-600 hover:text-blue-600 "
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-xl border-4s border-blue-500 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl lg:h-[420px] lg:w-[420px]">
            <div className="relative h-full w-full overflow-hidden rounded-lg bg-slate-900">
              <Image
                src="/images/profile.jpg"
                alt="Jabed Ali Mollah"
                fill
                priority
                sizes="(max-width:768px) 288px, 420px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-8 top-8 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-xl backdrop-blur"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <p className="font-bold">MERN Stack</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-8 bottom-10 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-xl backdrop-blur "
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Projects
            </p>
            <p className="font-bold">15+</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
