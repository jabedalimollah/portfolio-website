"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

export default function ProjectCard({ project }) {
  const theme = useSelector((state) => state.theme.darkMode);

  const technologies = [
    ...(project.tech_stack?.frontend || []),
    ...(project.tech_stack?.backend || []),
    ...(project.tech_stack?.database || []),
  ];

  return (
    <article
      className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        theme ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={450}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {project.featured && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-slate-900">
            <FaStar className="text-xs" />
            Featured
          </span>
        )}

        <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2
          className={`text-2xl font-bold transition group-hover:text-blue-600 ${
            theme ? "text-white" : "text-slate-900"
          }`}
        >
          {project.title}
        </h2>

        <p
          className={`mt-4 leading-7 ${
            theme ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                theme
                  ? "bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
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
              className={`inline-flex items-center rounded-lg border px-4 py-2 font-medium transition ${
                theme
                  ? "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                  : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
              }`}
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View Details
            <IoArrowForward className="ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}
