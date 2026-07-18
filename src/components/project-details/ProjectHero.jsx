import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function ProjectHero({ project }) {
  // Combine all technologies into one array
  const technologies = [
    ...(project.tech_stack?.frontend || []),
    ...(project.tech_stack?.backend || []),
    ...(project.tech_stack?.database || []),
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 lg:py-24">
      {/* Background */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="mb-10 inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          <IoArrowBack className="mr-2" />
          Back to Projects
        </Link>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                {project.category}
              </span>

              {project.featured && (
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-slate-900">
                  <FaStar />
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}

              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                width={900}
                height={600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
