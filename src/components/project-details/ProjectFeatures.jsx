"use client";

import { useSelector } from "react-redux";
import { CheckCircle2 } from "lucide-react";

export default function ProjectFeatures({ project }) {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section className={`py-20 ${theme ? "bg-slate-950" : "bg-slate-50"}`}>
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
            Key Features
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Features & Functionality
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Explore the core features and capabilities that make this project
            functional, user-friendly, and scalable.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className={`flex items-start gap-4 rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`rounded-full p-2 ${
                  theme ? "bg-blue-500/20" : "bg-blue-100"
                }`}
              >
                <CheckCircle2
                  className={`h-5 w-5 ${
                    theme ? "text-blue-400" : "text-blue-600"
                  }`}
                />
              </div>

              <p
                className={`font-medium ${
                  theme ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
