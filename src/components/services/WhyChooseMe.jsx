import { whyChooseMeData } from "@/data/services/whyChooseMeData";

export default function WhyChooseMe() {
  const { badge, title, items } = whyChooseMeData;

  return (
    <section
      className="bg-slate-50 py-20"
      aria-labelledby="why-choose-me-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {badge}
          </span>

          <h2
            id="why-choose-me-heading"
            className="mt-6 text-4xl font-bold text-slate-900"
          >
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="mx-auto text-5xl text-blue-600" />

                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
