"use client";

import Link from "next/link";
import { ArrowUp, Code2 } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Frontend Development",
  "Full Stack Development",
  "Responsive Web Design",
  "Portfolio Website",
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white"
            >
              {/* <Code2 className="text-blue-500" /> */}
              <Image
                src="/logo/logo-512x512.png"
                alt="Jabed Ali Mollah Portfolio Logo"
                width={40}
                height={40}
                priority
                // className="h-auto w-32 md:w-40 lg:w-44"
              />
              Jabed Ali
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              Full Stack MERN Developer passionate about building modern, fast,
              responsive and SEO-friendly web applications using React, Next.js,
              Node.js and MongoDB.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:text-blue-400"
              >
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/jabedalimollah/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:text-blue-400"
              >
                Linkedin
              </a>

              <a
                href="mailto:jabedalimollah7@gmail.com"
                aria-label="Email"
                className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:text-blue-400"
              >
                Mail
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <div className="mt-5 space-y-4">
              <p>📍 West Bengal, India</p>

              <a
                href="mailto:jabedalimollah7@gmail.com"
                className="block transition hover:text-blue-400"
              >
                jabedalimollah7@gmail.com
              </a>

              <a
                href="https://github.com/jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-400"
              >
                github.com/jabedalimollah
              </a>

              <a
                href="https://www.linkedin.com/in/jabedalimollah/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-400"
              >
                linkedin.com/in/jabedalimollah
              </a>
              <a
                href="https://www.instagram.com/jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-pink-500"
              >
                instagram.com/jabedalimollah
              </a>

              <a
                href="https://www.facebook.com/jabedalimollah7"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-blue-500"
              >
                facebook.com/jabedalimollah7
              </a>

              <a
                href="https://www.youtube.com/@jabedalimollah"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-red-500"
              >
                youtube.com/@jabedalimollah
              </a>

              <a
                href="https://x.com/JabedAliMollah7"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-slate-200"
              >
                x.com/JabedAliMollah7
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-500">
            © {year} Jabed Ali Mollah. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="rounded-full border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
