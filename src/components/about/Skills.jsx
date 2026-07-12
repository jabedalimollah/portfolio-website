import { Monitor, Server, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Shadcn UI",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT Authentication",
      "Socket.io",
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "Mongoose", "Cloudinary"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "npm"],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Continuous Learning",
  "Clean Code",
  "Responsive Design",
  "Performance Optimization",
  "SEO Friendly Development",
  "Time Management",
];

export default function Skills() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Technical Skills
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I enjoy building modern, responsive, scalable, and SEO-friendly web
            applications using the MERN stack and continuously expanding my
            technical knowledge.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-600 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Professional Skills
            </h3>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
