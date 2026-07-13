import Link from "next/link";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          📚 Web Development Blog
        </span>

        <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
          Learn Modern
          <span className="block text-blue-600">Web Development</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Tutorials, interview questions, coding tips, React.js, Next.js,
          Node.js, MongoDB, JavaScript, and everything related to Full Stack
          MERN Development.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#articles"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <FaBookOpen className="mr-2" />
            Read Articles
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:border-blue-600 hover:text-blue-600"
          >
            Contact Me
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
