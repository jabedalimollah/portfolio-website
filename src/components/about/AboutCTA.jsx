"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import { aboutCTAData } from "@/data/about/aboutCTA";

export default function AboutCTA() {
  const theme = useSelector((state) => state.theme.darkMode);

  const ContactIcon = aboutCTAData.contactButton.icon;
  const ResumeIcon = aboutCTAData.resumeButton.icon;
  const FooterIcon = aboutCTAData.footer.icon;

  return (
    <section
      className={`py-20 transition-colors duration-300 ${
        theme ? "bg-slate-900" : "bg-slate-50"
      }`}
      aria-labelledby="about-cta-heading"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          className={`overflow-hidden rounded-3xl p-10 text-center shadow-2xl transition-all duration-300 md:p-16 ${
            theme
              ? "bg-gradient-to-r from-blue-700 to-indigo-800"
              : "bg-gradient-to-r from-blue-600 to-indigo-600"
          }`}
        >
          {/* Badge */}

          <span
            className="
inline-flex
rounded-full
bg-white/20
px-4
py-2
text-sm
font-medium
text-white
backdrop-blur
"
          >
            {aboutCTAData.badge}
          </span>

          {/* Heading */}

          <h2
            id="about-cta-heading"
            className="
mt-6
text-3xl
font-bold
tracking-tight
text-white
md:text-5xl
"
          >
            {aboutCTAData.title}
          </h2>

          {/* Description */}

          <p
            className="
mx-auto
mt-6
max-w-3xl
text-lg
leading-8
text-blue-100
"
          >
            {aboutCTAData.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={aboutCTAData.contactButton.href}
              className="
inline-flex
items-center
justify-center
rounded-xl
bg-white
px-6
py-3
text-base
font-semibold
text-blue-700
transition
hover:bg-slate-100
"
            >
              <ContactIcon className="mr-2 h-5 w-5" />

              {aboutCTAData.contactButton.text}
            </Link>

            <a
              href={aboutCTAData.resumeButton.href}
              download
              className="
inline-flex
items-center
justify-center
rounded-xl
border
border-white/40
px-6
py-3
text-base
font-semibold
text-white
transition
hover:bg-white
hover:text-blue-700
"
            >
              <ResumeIcon className="mr-2 h-5 w-5" />

              {aboutCTAData.resumeButton.text}
            </a>
          </div>

          {/* Footer */}

          <p
            className="
mt-8
flex
items-center
justify-center
gap-2
text-sm
text-blue-100
"
          >
            {aboutCTAData.footer.text}

            <FooterIcon className="h-4 w-4" />
          </p>
        </div>
      </div>
    </section>
  );
}
