import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blog/blog";

export default function BlogGrid() {
  const posts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="articles" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">Latest Articles</h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Explore tutorials, interview preparation, web development guides,
            and programming resources.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
