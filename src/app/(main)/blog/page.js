import BlogHero from "@/components/blog/BlogHero";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import Newsletter from "@/components/blog/Newsletter";
import BlogCTA from "@/components/blog/BlogCTA";

export const metadata = {
  title: "Blog | Jabed Ali Mollah",
  description:
    "Read web development articles, React.js, Next.js, JavaScript, Node.js, MongoDB tutorials, interview questions, and programming guides by Jabed Ali Mollah.",
  keywords: [
    "React Blog",
    "JavaScript Blog",
    "Next.js Tutorial",
    "Node.js",
    "MongoDB",
    "Frontend Development",
    "Full Stack Development",
    "MERN Stack",
  ],
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPost />
      <BlogGrid />
      <Newsletter />
      <BlogCTA />
    </main>
  );
}
