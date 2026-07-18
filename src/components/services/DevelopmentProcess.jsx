import { developmentProcessData } from "@/data/services/developmentProcess";

export default function DevelopmentProcess() {
  return (
    <section
      className="bg-slate-50 py-20"
      aria-labelledby="development-process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {developmentProcessData.badge}
          </span>

          <h2
            id="development-process-heading"
            className="mt-6 text-4xl font-bold text-slate-900"
          >
            {developmentProcessData.title}
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            {developmentProcessData.description}
          </p>
        </div>

        {/* Steps */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {developmentProcessData.steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <Icon className="text-5xl text-blue-600" />

                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
