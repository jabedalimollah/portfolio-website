"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import { servicesHeroData } from "@/data/services/servicesHero";

export default function ServicesHero() {
  const theme = useSelector((state) => state.theme.darkMode);

  const PrimaryIcon = servicesHeroData.buttons.primary.icon;
  const SecondaryIcon = servicesHeroData.buttons.secondary.icon;

  return (
    <section
      className={`py-24 ${
        theme
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
      aria-labelledby="services-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
            theme ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-700"
          }`}
        >
          {servicesHeroData.badge}
        </span>

        <h1
          id="services-hero-heading"
          className={`mt-6 text-4xl font-bold md:text-6xl ${
            theme ? "text-white" : "text-slate-900"
          }`}
        >
          {servicesHeroData.title.first}
          <span className="text-blue-600">
            {" "}
            {servicesHeroData.title.second}
          </span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-3xl text-lg leading-8 ${
            theme ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {servicesHeroData.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={servicesHeroData.buttons.primary.href}
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <PrimaryIcon className="mr-2" />
            {servicesHeroData.buttons.primary.text}
          </Link>

          <Link
            href={servicesHeroData.buttons.secondary.href}
            className={`inline-flex items-center rounded-xl border px-6 py-3 font-semibold transition ${
              theme
                ? "border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                : "border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            <SecondaryIcon className="mr-2" />
            {servicesHeroData.buttons.secondary.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
