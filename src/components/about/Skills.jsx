"use client";

import { useSelector } from "react-redux";

import { skillsData } from "@/data/about/skills";

export default function Skills() {
  const theme = useSelector((state) => state.theme.darkMode);

  const ProfessionalIcon = skillsData.professionalSkillIcon;

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-slate-50"}`}
      aria-labelledby="skills-heading"
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
            {skillsData.badge}
          </span>

          <h2
            id="skills-heading"
            className={`mt-6 text-3xl font-bold md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {skillsData.title}
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {skillsData.description}
          </p>
        </div>

        {/* Skill Categories */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillsData.categories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className={`rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                  theme
                    ? "border-slate-700 bg-slate-900 hover:border-blue-500"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    theme ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3
                  className={`mt-5 text-xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                        theme
                          ? "bg-slate-800 text-slate-200 hover:bg-blue-600 hover:text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Professional Skills */}

        <section
          className={`mt-20 rounded-2xl border p-8 shadow-sm ${
            theme
              ? "border-slate-700 bg-slate-900"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`rounded-xl p-3 ${
                theme ? "bg-blue-500/20" : "bg-blue-100"
              }`}
            >
              <ProfessionalIcon className="h-6 w-6 text-blue-600" />
            </div>

            <h3
              className={`text-2xl font-bold ${
                theme ? "text-white" : "text-slate-900"
              }`}
            >
              {skillsData.professionalSkillTitle}
            </h3>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {skillsData.professionalSkills.map((skill) => (
              <span
                key={skill}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  theme
                    ? "border-slate-700 bg-slate-800 text-slate-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
