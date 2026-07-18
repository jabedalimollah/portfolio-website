import { whyWorkWithMeData } from "@/data/about/whyWorkWithMe";

export default function WhyWorkWithMe() {
  return (
    <section className="bg-white py-20" aria-labelledby="why-work-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {whyWorkWithMeData.badge}
          </span>

          <h2
            id="why-work-heading"
            className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            {whyWorkWithMeData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {whyWorkWithMeData.description}
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMeData.features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-7 w-7 text-blue-600 transition group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
