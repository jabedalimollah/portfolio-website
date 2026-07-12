import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 lg:py-32">
      {/* Background Blur */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            📩 Contact Me
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block text-blue-600">Amazing Together</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            I'm <strong>Jabed Ali Mollah</strong>, a Full Stack MERN Developer
            passionate about building modern, responsive, fast, and SEO-friendly
            web applications. I'm open to full-time opportunities, internships,
            freelance projects, and collaborations.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#contact-form"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              <FaEnvelope className="mr-2" />
              Send Message
            </Link>

            <a
              href="https://github.com/jabedalimollah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jabedalimollah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">MERN</h3>
              <p className="mt-2 text-sm text-slate-600">Tech Stack</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">2026</h3>
              <p className="mt-2 text-sm text-slate-600">B.Tech Graduate</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">Remote</h3>
              <p className="mt-2 text-sm text-slate-600">Available</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-sm text-slate-600">Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
