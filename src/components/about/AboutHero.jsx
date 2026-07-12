import Image from "next/image";
import Link from "next/link";
import { Download, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              About Me
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Passionate Full Stack
              <span className="block text-blue-600">MERN Developer</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hi, I'm <strong>Jabed Ali Mollah</strong>, a B.Tech (Computer
              Science & Engineering) graduate passionate about building modern,
              responsive, and SEO-friendly web applications using React,
              Next.js, Node.js, Express.js, and MongoDB.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              I enjoy transforming ideas into fast, scalable, and user-friendly
              digital experiences while continuously learning new technologies
              and best development practices.
            </p>

            {/* Info Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-900">
                    B.Tech (CSE) • 2026
                  </p>
                  <p className="text-sm text-slate-500">
                    Computer Science Graduate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-900">West Bengal</p>
                  <p className="text-sm text-slate-500">
                    India • Open to Relocate
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-900">Open to Work</p>
                  <p className="text-sm text-slate-500">Full-Time & Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-slate-900">Contact Me</p>
                  <p className="text-sm text-slate-500">
                    Available for Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-blue-100 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Jabed Ali Mollah - Full Stack MERN Developer"
                  width={500}
                  height={600}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
