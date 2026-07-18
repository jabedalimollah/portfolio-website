export default function ProjectOverview({ project }) {
  const totalTechnologies =
    (project.tech_stack?.frontend?.length || 0) +
    (project.tech_stack?.backend?.length || 0) +
    (project.tech_stack?.database?.length || 0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Project Overview
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            About This Project
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {project.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {/* Category */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">Category</h3>

            <p className="mt-4 text-slate-600">{project.category}</p>
          </div>

          {/* Technologies */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">
              Technologies
            </h3>

            <p className="mt-4 text-slate-600">
              {totalTechnologies} Technologies
            </p>
          </div>

          {/* Features */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-slate-900">Features</h3>

            <p className="mt-4 text-slate-600">
              {project.features?.length || 0} Features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
