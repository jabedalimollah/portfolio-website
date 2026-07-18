import Image from "next/image";

export default function ProjectGallery({ project }) {
  const gallery = project.project_image?.length
    ? project.project_image
    : [project.image];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Project Gallery
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Project Screenshots
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Preview the user interface and overall design of this project.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              <Image
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                width={1200}
                height={700}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
