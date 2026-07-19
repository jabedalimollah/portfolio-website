"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectNavigation({ previousProject, nextProject }) {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`py-16 ${theme ? "bg-slate-950" : "bg-slate-50"}`}>
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
        {/* Previous Project */}
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.slug}`}
            className={`group flex items-center justify-between rounded-2xl border p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-lg ${
              theme
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-4">
              <ArrowLeft className="h-6 w-6 text-blue-600 transition group-hover:-translate-x-1" />

              <div>
                <p
                  className={`text-sm ${
                    theme ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Previous Project
                </p>

                <h3
                  className={`mt-1 text-xl font-semibold transition group-hover:text-blue-600 ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
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
            className={`group flex items-center justify-between rounded-2xl border p-6 shadow-sm transition-all hover:border-blue-600 hover:shadow-lg ${
              theme
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >
            <div>
              <p
                className={`text-sm ${
                  theme ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Next Project
              </p>

              <h3
                className={`mt-1 text-xl font-semibold transition group-hover:text-blue-600 ${
                  theme ? "text-white" : "text-slate-900"
                }`}
              >
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
