import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { projectsCTAData } from "@/data/projects/projectsCTAData";

export default function ProjectsCTA() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 text-center shadow-2xl md:p-16">
          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            {projectsCTAData.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            {projectsCTAData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {projectsCTAData.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={projectsCTAData.buttons.contact.href}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-slate-100"
            >
              <MdEmail className="mr-2 text-lg" />
              {projectsCTAData.buttons.contact.text}
            </Link>

            <a
              href={projectsCTAData.buttons.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              <FaGithub className="mr-2 text-lg" />
              {projectsCTAData.buttons.github.text}
            </a>

            <a
              href={projectsCTAData.buttons.resume.href}
              download
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              {projectsCTAData.buttons.resume.text}
              <IoArrowForward className="ml-2 text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
