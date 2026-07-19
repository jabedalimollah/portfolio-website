"use client";

import { useSelector } from "react-redux";
import { myStoryData } from "@/data/about/story";

export default function MyStory() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-900" : "bg-slate-50"}`}
      aria-labelledby="my-story-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {myStoryData.badge}
          </span>

          <h2
            id="my-story-heading"
            className={`mt-6 text-3xl font-bold tracking-tight md:text-4xl ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {myStoryData.title}
          </h2>

          <p
            className={`mt-6 text-lg leading-8 ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {myStoryData.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {myStoryData.journey.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
                  theme
                    ? "border-slate-700 bg-slate-800 hover:border-blue-500"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                    theme ? "bg-blue-500/20" : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${
                      theme ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                </div>

                <h3
                  className={`mt-6 text-xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    theme ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
