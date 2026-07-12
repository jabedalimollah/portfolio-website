import { FaCode, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";

const items = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Maintainable, scalable and reusable code following best practices.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Perfect user experience across desktop, tablet and mobile devices.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description: "Fast loading websites optimized for Core Web Vitals.",
  },
  {
    icon: FaSearch,
    title: "SEO Friendly",
    description:
      "Technical SEO implementation to improve visibility in search engines.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Why Choose Me
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What Makes My Work Different?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <item.icon className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
