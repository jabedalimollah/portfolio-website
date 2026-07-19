import { blogPosts } from "@/data/blog/blog1";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({ params }) {
//   const post = blogPosts.find((item) => item.slug === params.slug);

//   if (!post) {
//     return {
//       title: "Article Not Found",
//     };
//   }

//   return {
//     title: `${post.title} | Jabed Ali Mollah`,
//     description: post.excerpt,
//     keywords: [post.category, "React", "JavaScript", "Next.js", "MERN"],
//   };
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Jabed Ali Mollah`,
    description: post.excerpt,
  };
}

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  //   const post = blogPosts.find((item) => item.slug === params.slug);
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>

          <span className="mt-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {post.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            {post.title}
          </h1>

          <p className="mt-6 text-xl text-slate-600">{post.excerpt}</p>

          <div className="mt-6 text-sm text-slate-500">
            {post.date} • {post.readTime}
          </div>
        </div>
      </section>

      {/* Featured Image */}

      <section>
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative aspect-video overflow-hidden rounded-3xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}

      <section className="py-20">
        <div className="prose prose-lg mx-auto max-w-4xl px-6">
          <pre className="whitespace-pre-wrap font-sans">{post.content}</pre>
        </div>
      </section>
    </main>
  );
}
