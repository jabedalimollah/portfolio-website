import { CheckCircle2 } from "lucide-react";

export default function ProjectFeatures({ project }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Key Features
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Features & Functionality
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore the core features and capabilities that make this project
            functional, user-friendly, and scalable.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="rounded-full bg-blue-100 p-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
              </div>

              <p className="font-medium text-slate-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
