"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

export default function ProjectGallery({ project }) {
  const theme = useSelector((state) => state.theme.darkMode);

  const gallery = project.project_image?.length
    ? project.project_image
    : [project.image];

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
            Project Gallery
          </span>

          <h2
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Project Screenshots
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Preview the user interface and overall design of this project.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-3xl border shadow-lg transition ${
                theme
                  ? "border-slate-700 bg-slate-900"
                  : "border-slate-200 bg-white"
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                width={1200}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
