import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="all-projects" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            All Projects
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore My Development Portfolio
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore my collection of web development projects built using
            React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Redux
            Toolkit, Socket.IO, and other modern technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
