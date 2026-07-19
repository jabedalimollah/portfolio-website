"use client";

import { useSelector } from "react-redux";

import { servicesGridData } from "@/data/services/servicesGrid";

export default function ServicesGrid() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`py-20 ${theme ? "bg-slate-950" : "bg-white"}`}
      aria-labelledby="services-grid-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="text-center">
          <h2
            id="services-grid-heading"
            className={`text-4xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            {servicesGridData.title}
          </h2>

          <p
            className={`mx-auto mt-5 max-w-3xl text-lg ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {servicesGridData.description}
          </p>
        </div>

        {/* Services */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesGridData.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl ${
                  theme
                    ? "border-slate-700 bg-slate-900"
                    : "border-slate-200 bg-white"
                }`}
              >
                <Icon className="text-5xl text-blue-600" />

                <h3
                  className={`mt-6 text-2xl font-semibold ${
                    theme ? "text-white" : "text-slate-900"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-4 leading-7 ${
                    theme ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
