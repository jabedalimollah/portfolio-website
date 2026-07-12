import Link from "next/link";
import { FaCode, FaEnvelope } from "react-icons/fa";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          💼 Professional Web Development Services
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
          Build Modern &
          <span className="text-blue-600"> High-Performance Websites</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I develop responsive, SEO-friendly, fast, and scalable web
          applications using React.js, Next.js, Node.js, Express.js, MongoDB,
          and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <FaEnvelope className="mr-2" />
            Hire Me
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            <FaCode className="mr-2" />
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
