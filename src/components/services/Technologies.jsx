import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiVercel,
} from "react-icons/si";

const techs = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
];

export default function Technologies() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Technologies
          </span>

          <h2 className="mt-6 text-4xl font-bold">Technologies I Use</h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Modern tools and technologies used to build secure, scalable,
            responsive and high-performance web applications.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg"
            >
              <tech.icon className="mx-auto text-5xl text-blue-600" />

              <h3 className="mt-4 font-semibold">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
