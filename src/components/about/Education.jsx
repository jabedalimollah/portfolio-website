"use client";

import { useSelector } from "react-redux";
import { Calendar, MapPin } from "lucide-react";

import { educationData } from "@/data/about/education";

export default function Education() {
  const theme = useSelector((state) => state.theme.darkMode);
  const TimelineIcon = educationData.timelineIcon;

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-white"}`}
      aria-labelledby="education-heading"
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
            {educationData.badge}
          </span>

          <h2
            id="education-heading"
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {educationData.title}
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {educationData.description}
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className={`absolute left-5 top-0 hidden h-full w-0.5 md:block ${
              theme ? "bg-slate-700" : "bg-slate-200"
            }`}
          ></div>

          <div className="space-y-12">
            {educationData.education.map((item) => (
              <article
                key={`${item.degree}-${item.duration}`}
                className={`relative rounded-2xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:ml-14 ${
                  theme
                    ? "border-slate-700 bg-slate-900 hover:border-blue-500"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Timeline Icon */}

                <div className="absolute -left-10 top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:flex">
                  <TimelineIcon size={20} />
                </div>

                {/* Meta */}

                <div
                  className={`flex flex-wrap items-center gap-4 text-sm ${
                    theme ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {item.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {item.location}
                  </span>
                </div>

                {/* Content */}

                <h3
                  className={`mt-4 text-2xl font-bold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.degree}
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-600">
                  {item.field}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    theme ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {item.institution}
                </p>

                <p
                  className={`mt-5 leading-7 ${
                    theme ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
