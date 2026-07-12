import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaSearch,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: FaReact,
    title: "Frontend Development",
    description:
      "Responsive, modern interfaces using React.js, Next.js, JavaScript and Tailwind CSS.",
  },
  {
    icon: FaNodeJs,
    title: "Full Stack MERN",
    description:
      "Complete MERN applications with MongoDB, Express.js, React.js and Node.js.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Mobile-first websites optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description:
      "Technical SEO, metadata, sitemap, robots.txt and Core Web Vitals optimization.",
  },
  {
    icon: FaLaptopCode,
    title: "Portfolio Websites",
    description:
      "Professional portfolio websites for students, developers and businesses.",
  },
  {
    icon: FaGlobe,
    title: "Website Deployment",
    description:
      "Deploy websites on Vercel and configure custom domains for production.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Services I Offer
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            I build fast, secure, responsive, and SEO-friendly web applications
            using modern technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <service.icon className="text-5xl text-blue-600" />

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
