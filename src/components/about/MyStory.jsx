import { myStoryData } from "@/data/about/story";

export default function MyStory() {
  return (
    <section className="bg-slate-50 py-20" aria-labelledby="my-story-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {myStoryData.badge}
          </span>

          <h2
            id="my-story-heading"
            className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            {myStoryData.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {myStoryData.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {myStoryData.journey.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
