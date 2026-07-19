"use client";

import { useSelector } from "react-redux";

import projects from "@/data/projects/projectsData";
import { projectsGridData } from "@/data/projects/projectsGridData";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const theme = useSelector((state) => state.theme.darkMode);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section
      id="all-projects"
      className={`py-20 ${theme ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {projectsGridData.badge}
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {projectsGridData.title}
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {projectsGridData.description}
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
