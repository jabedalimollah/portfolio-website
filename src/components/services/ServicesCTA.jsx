import Link from "next/link";
import { FaEnvelope, FaGithub } from "react-icons/fa";

export default function ServicesCTA() {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Whether you need a portfolio website, business website, or a complete
          MERN Stack application, I'm ready to help you build a fast,
          responsive, and SEO-friendly solution.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </Link>

          <a
            href="https://github.com/jabedalimollah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue-600"
          >
            <FaGithub className="mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
