import Link from "next/link";
import { servicesHeroData } from "@/data/services/servicesHero";

export default function ServicesHero() {
  const PrimaryIcon = servicesHeroData.buttons.primary.icon;
  const SecondaryIcon = servicesHeroData.buttons.secondary.icon;

  return (
    <section
      className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
      aria-labelledby="services-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          {servicesHeroData.badge}
        </span>

        <h1
          id="services-hero-heading"
          className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl"
        >
          {servicesHeroData.title.first}
          <span className="text-blue-600">
            {" "}
            {servicesHeroData.title.second}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {servicesHeroData.description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={servicesHeroData.buttons.primary.href}
            className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <PrimaryIcon className="mr-2" />
            {servicesHeroData.buttons.primary.text}
          </Link>

          <Link
            href={servicesHeroData.buttons.secondary.href}
            className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600"
          >
            <SecondaryIcon className="mr-2" />
            {servicesHeroData.buttons.secondary.text}
          </Link>
        </div>
      </div>
    </section>
  );
}
