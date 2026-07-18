import { Calendar, MapPin } from "lucide-react";
import { educationData } from "@/data/about/education";

export default function Education() {
  const TimelineIcon = educationData.timelineIcon;

  return (
    <section className="bg-white py-20" aria-labelledby="education-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {educationData.badge}
          </span>

          <h2
            id="education-heading"
            className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            {educationData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {educationData.description}
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-slate-200 md:block"></div>

          <div className="space-y-12">
            {educationData.education.map((item) => (
              <article
                key={`${item.degree}-${item.duration}`}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:ml-14"
              >
                {/* Timeline Icon */}

                <div className="absolute -left-10 top-10 hidden h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white md:flex">
                  <TimelineIcon size={20} />
                </div>

                {/* Meta */}

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {item.duration}
                  </span>

                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {item.location}
                  </span>
                </div>

                {/* Content */}

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {item.degree}
                </h3>

                <p className="mt-2 text-lg font-medium text-blue-600">
                  {item.field}
                </p>

                <p className="mt-2 font-semibold text-slate-700">
                  {item.institution}
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
