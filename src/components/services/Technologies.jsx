"use client";

import { useSelector } from "react-redux";

import { technologiesData } from "@/data/services/technologiesData";

export default function Technologies() {
  const theme = useSelector((state) => state.theme.darkMode);

  const { badge, title, description, techs } = technologiesData;

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-white"}`}
      aria-labelledby="technologies-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {badge}
          </span>

          <h2
            id="technologies-heading"
            className={`mt-6 text-4xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>

          <p
            className={`mx-auto mt-5 max-w-3xl text-lg ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techs.map((tech) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.name}
                className={`rounded-2xl border p-6 text-center shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg ${
                  theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Icon className="mx-auto text-5xl text-blue-600" />

                <h3
                  className={`mt-4 font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {tech.name}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
