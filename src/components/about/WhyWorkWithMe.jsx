import {
  Code2,
  Smartphone,
  Gauge,
  Search,
  Layers3,
  BookOpen,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable, and reusable code following modern JavaScript and React best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Every website is designed to work smoothly across mobile, tablet, laptop, and desktop devices.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "I focus on fast-loading websites with optimized images, components, and efficient rendering.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Development",
    description:
      "I build websites using semantic HTML, proper metadata, accessibility, and technical SEO best practices.",
  },
  {
    icon: Layers3,
    title: "Modern Tech Stack",
    description:
      "I develop applications using React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Technology evolves every day, and I enjoy learning new tools, frameworks, and development practices.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Why Work With Me
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            What Makes Me a Strong Developer
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I focus on building modern, responsive, and high-performance web
            applications while continuously improving my technical skills and
            following industry best practices.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
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
