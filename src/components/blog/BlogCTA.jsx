import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function BlogCTA() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
          🚀 Let's Build Together
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Need a MERN Stack Developer?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I'm available for Full-Time opportunities, internships, freelance
          projects, and collaborations. Let's create fast, responsive, and
          SEO-friendly web applications together.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
          >
            View Projects
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
