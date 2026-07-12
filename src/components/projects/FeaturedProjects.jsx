import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Featured Projects
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Selected Work & Case Studies
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            These projects showcase my experience in building responsive,
            scalable, and modern web applications using React.js, Next.js,
            Node.js, Express.js, MongoDB, and other modern web technologies.
          </p>
        </div>

        {/* Featured Project Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link
            href="#all-projects"
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
