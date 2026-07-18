import Link from "next/link";
import { projectsHeroData } from "@/data/projects/projectsHeroData";

export default function ProjectsHero() {
  const { badge, title, description, buttons, stats } = projectsHeroData;

  const BadgeIcon = badge.icon;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 lg:py-32"
      aria-labelledby="projects-hero-heading"
    >
      {/* Background Blur */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <BadgeIcon className="text-sm" />
            {badge.text}
          </span>

          {/* Heading */}
          <h1
            id="projects-hero-heading"
            className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            {title.first}
            <span className="block text-blue-600">{title.second}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
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
                  className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
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
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-3xl font-bold text-blue-600">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
