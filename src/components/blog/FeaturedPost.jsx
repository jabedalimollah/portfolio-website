import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { blogPosts } from "@/data/blog";

export default function FeaturedPost() {
  const featured = blogPosts.find((post) => post.featured);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
            ⭐ Featured Article
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-blue-600 font-semibold">{featured.category}</p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              {featured.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {featured.excerpt}
            </p>

            <div className="mt-6 text-sm text-slate-500">
              {featured.date} • {featured.readTime}
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Read Article
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
