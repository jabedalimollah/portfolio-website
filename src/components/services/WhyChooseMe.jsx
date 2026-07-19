"use client";

import { useSelector } from "react-redux";

import { whyChooseMeData } from "@/data/services/whyChooseMeData";

export default function WhyChooseMe() {
  const theme = useSelector((state) => state.theme.darkMode);

  const { badge, title, items } = whyChooseMeData;

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-slate-50"}`}
      aria-labelledby="why-choose-me-heading"
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
            id="why-choose-me-heading"
            className={`mt-6 text-4xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-2xl p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${
                  theme ? "border border-slate-700 bg-slate-900" : "bg-white"
                }`}
              >
                <Icon className="mx-auto text-5xl text-blue-600" />

                <h3
                  className={`mt-6 text-xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-4 ${
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
