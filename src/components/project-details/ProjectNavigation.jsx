import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectNavigation({ previousProject, nextProject }) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
        {/* Previous Project */}
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <ArrowLeft className="h-6 w-6 text-blue-600 transition group-hover:-translate-x-1" />

              <div>
                <p className="text-sm text-slate-500">Previous Project</p>

                <h3 className="mt-1 text-xl font-semibold text-slate-900 group-hover:text-blue-600">
                  {previousProject.title}
                </h3>
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Next Project */}
        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-lg"
          >
            <div>
              <p className="text-sm text-slate-500">Next Project</p>

              <h3 className="mt-1 text-xl font-semibold text-slate-900 group-hover:text-blue-600">
                {nextProject.title}
              </h3>
            </div>

            <ArrowRight className="h-6 w-6 text-blue-600 transition group-hover:translate-x-1" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
