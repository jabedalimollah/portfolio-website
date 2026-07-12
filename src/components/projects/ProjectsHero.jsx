import Link from "next/link";
import { FaFolderOpen, FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 lg:py-32">
      {/* Background Blur */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <FaFolderOpen className="text-sm" />
            My Portfolio Projects
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Featured Projects &
            <span className="block text-blue-600">Real-World Applications</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore my collection of full-stack and frontend web development
            projects built with React.js, Next.js, Node.js, Express.js, MongoDB,
            Tailwind CSS, and modern web technologies. Each project demonstrates
            my skills in responsive design, clean architecture, API integration,
            authentication, and performance optimization.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
            >
              View Projects
              <IoArrowForward className="ml-2 text-lg" />
            </Link>

            <a
              href="https://github.com/jabedalimollah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaGithub className="mr-2 text-lg" />
              GitHub Profile
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">10+</h3>
              <p className="mt-2 text-sm text-slate-600">Completed Projects</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">8+</h3>
              <p className="mt-2 text-sm text-slate-600">Technologies Used</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">100%</h3>
              <p className="mt-2 text-sm text-slate-600">Responsive Design</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-3xl font-bold text-blue-600">SEO</h3>
              <p className="mt-2 text-sm text-slate-600">Optimized Websites</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
