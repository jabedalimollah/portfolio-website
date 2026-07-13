import { FaEnvelope } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white shadow-xl md:p-16">
          <FaEnvelope className="mx-auto text-5xl" />

          <h2 className="mt-6 text-4xl font-bold">Stay Updated</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Get the latest articles about React, Next.js, JavaScript, Node.js,
            MongoDB, interview preparation, and modern web development.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-5 py-3 text-slate-900 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-blue-100">
            No spam. Only valuable web development content.
          </p>
        </div>
      </div>
    </section>
  );
}
