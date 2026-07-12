import { Code2, Lightbulb, Rocket } from "lucide-react";

const journey = [
  {
    icon: Code2,
    title: "My Beginning",
    description:
      "My journey into web development began with curiosity about how websites work. As I learned HTML, CSS, and JavaScript, I discovered a passion for creating interactive and user-friendly web applications.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "I expanded my skills by learning React.js, Next.js, Node.js, Express.js, MongoDB, and modern development tools. I enjoy solving real-world problems and continuously improving my knowledge through hands-on projects.",
  },
  {
    icon: Rocket,
    title: "My Goal",
    description:
      "As a 2026 B.Tech Computer Science graduate, my goal is to join a forward-thinking team where I can contribute to impactful products, grow as a Full Stack MERN Developer, and deliver fast, scalable, and SEO-friendly web applications.",
  },
];

export default function MyStory() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            My Story
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            My Journey as a Full Stack Developer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I believe continuous learning and practical experience are the keys
            to becoming a great software developer. Every project I build helps
            me improve my problem-solving skills and write better, cleaner code.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {journey.map((item) => {
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
