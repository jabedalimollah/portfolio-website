import Link from "next/link";
import { servicesCTAData } from "@/data/services/servicesCTAData";

export default function ServicesCTA() {
  const { title, description, buttons } = servicesCTAData;

  return (
    <section
      className="bg-blue-600 py-20"
      aria-labelledby="services-cta-heading"
    >
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <h2 id="services-cta-heading" className="text-4xl font-bold">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {buttons.map((button) => {
            const Icon = button.icon;

            if (button.type === "internal") {
              return (
                <Link
                  key={button.text}
                  href={button.href}
                  className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
                >
                  <Icon className="mr-2" />
                  {button.text}
                </Link>
              );
            }

            return (
              <a
                key={button.text}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
              >
                <Icon className="mr-2" />
                {button.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
