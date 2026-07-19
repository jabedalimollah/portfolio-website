"use client";

import { useSelector } from "react-redux";

import { whyWorkWithMeData } from "@/data/about/whyWorkWithMe";

export default function WhyWorkWithMe() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-white"}`}
      aria-labelledby="why-work-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {whyWorkWithMeData.badge}
          </span>

          <h2
            id="why-work-heading"
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {whyWorkWithMeData.title}
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {whyWorkWithMeData.description}
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMeData.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`group rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl ${
                  theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition group-hover:bg-blue-600 ${
                    theme ? "bg-slate-800" : "bg-blue-100"
                  }`}
                >
                  <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3
                  className={`mt-6 text-xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    theme ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
