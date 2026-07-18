import projects from "@/data/projects/projectsData";
import { projectsGridData } from "@/data/projects/projectsGridData";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  return (
    <section id="all-projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {projectsGridData.badge}
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            {projectsGridData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
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
