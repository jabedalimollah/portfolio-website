import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectLinks({ project }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Project Links
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            Explore This Project
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            View the live application or browse the complete source code on
            GitHub.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <FaGithub className="mr-2" />
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
