import {
  FaComments,
  FaClipboardList,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    icon: FaComments,
    title: "Discussion",
    description:
      "Understanding your requirements, goals, and project scope before development begins.",
  },
  {
    icon: FaClipboardList,
    title: "Planning",
    description:
      "Creating the project structure, selecting technologies, and defining the development roadmap.",
  },
  {
    icon: FaCode,
    title: "Development",
    description:
      "Building responsive, scalable, and SEO-friendly web applications using modern technologies.",
  },
  {
    icon: FaBug,
    title: "Testing",
    description:
      "Testing functionality, responsiveness, accessibility, and performance across devices.",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    description:
      "Deploying the application to production with optimized performance and SEO.",
  },
  {
    icon: FaHeadset,
    title: "Support",
    description:
      "Providing ongoing maintenance, improvements, and technical support after deployment.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Development Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">How I Work</h2>

          <p className="mt-5 text-lg text-slate-600">
            Every project follows a structured development process to ensure
            quality, scalability, and long-term maintainability.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <step.icon className="text-5xl text-blue-600" />

              <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 text-slate-600 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
