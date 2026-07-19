"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import { projectsHeroData } from "@/data/projects/projectsHeroData";

export default function ProjectsHero() {
  const theme = useSelector((state) => state.theme.darkMode);

  const { badge, title, description, buttons, stats } = projectsHeroData;

  const BadgeIcon = badge.icon;

  return (
    <section
      className={`relative overflow-hidden py-24 lg:py-32 ${
        theme
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
      aria-labelledby="projects-hero-heading"
    >
      {/* Background Blur */}
      <div
        className={`absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl ${
          theme ? "bg-blue-500/20" : "bg-blue-200/40"
        }`}
      ></div>

      <div
        className={`absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl ${
          theme ? "bg-indigo-500/20" : "bg-indigo-200/40"
        }`}
      ></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
              theme
                ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                : "border-blue-200 bg-blue-50 text-blue-700"
            }`}
          >
            <BadgeIcon className="text-sm" />
            {badge.text}
          </span>

          {/* Heading */}
          <h1
            id="projects-hero-heading"
            className={`mt-8 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {title.first}
            <span className="block text-blue-600">{title.second}</span>
          </h1>

          {/* Description */}
          <p
            className={`mx-auto mt-8 max-w-3xl text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {buttons.map((button) => {
              const Icon = button.icon;

              if (button.type === "internal") {
                return (
                  <Link
                    key={button.text}
                    href={button.href}
                    className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-blue-700"
                  >
                    {button.text}
                    <Icon className="ml-2 text-lg" />
                  </Link>
                );
              }

              return (
                <a
                  key={button.text}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center rounded-xl border px-6 py-3 text-base font-semibold transition ${
                    theme
                      ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                      : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  <Icon className="mr-2 text-lg" />
                  {button.text}
                </a>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border p-6 shadow-sm ${
                  theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>

                <p
                  className={`mt-2 text-sm ${
                    theme ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
