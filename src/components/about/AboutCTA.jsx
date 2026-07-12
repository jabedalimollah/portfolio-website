import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center shadow-2xl md:p-16">
          {/* Badge */}
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
            🚀 Open to Full-Time Opportunities
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Let's Build Something Amazing Together
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            I'm a Full Stack MERN Developer passionate about building modern,
            responsive, fast, and SEO-friendly web applications. Whether you're
            hiring a developer, looking for a collaborator, or have an exciting
            project in mind, I'd love to hear from you.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>

          {/* Footer Text */}
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-100">
            Ready to create impactful digital experiences
            <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
}
