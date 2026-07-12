import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Projects | Jabed Ali Mollah",
  description:
    "Explore the portfolio projects of Jabed Ali Mollah, a Full Stack MERN Developer. View React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS projects with live demos and GitHub repositories.",
  keywords: [
    "Jabed Ali Mollah",
    "MERN Stack Developer",
    "React Projects",
    "Next.js Projects",
    "Portfolio",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "JavaScript Developer",
  ],
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  );
}
