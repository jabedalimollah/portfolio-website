export default function ProjectTechStack({ project }) {
  const frontend = project.tech_stack?.frontend || [];
  const backend = project.tech_stack?.backend || [];
  const database = project.tech_stack?.database || [];

  const allTechnologies = [...frontend, ...backend, ...database];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Technologies
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Tech Stack Used
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Modern technologies and tools used to build this project.
          </p>
        </div>

        {/* Frontend */}
        {frontend.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-6 text-center text-xl font-semibold text-slate-900">
              Frontend
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {frontend.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Backend */}
        {backend.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-slate-900">
              Backend
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {backend.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Database */}
        {database.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-6 text-center text-xl font-semibold text-slate-900">
              Database
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {database.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Summary */}
        <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <h3 className="text-2xl font-bold text-slate-900">
            Technology Summary
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            This project was developed using{" "}
            <strong>{allTechnologies.join(", ")}</strong>. The selected
            technologies provide excellent performance, scalability,
            responsiveness, maintainability, and an improved user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
