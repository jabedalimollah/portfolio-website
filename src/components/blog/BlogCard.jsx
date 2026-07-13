import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative aspect-video">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-sm font-semibold text-blue-600">
          {post.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">{post.title}</h3>

        <p className="mt-4 text-slate-600">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
