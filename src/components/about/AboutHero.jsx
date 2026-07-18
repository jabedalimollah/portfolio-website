"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Mail } from "lucide-react";

import { aboutHeroData } from "@/data/about/aboutHero";
import { siteConfig } from "@/config/siteConfig";

export default function AboutHero() {
  return (
    <section
      className="bg-white py-6 lg:py-10"
      aria-labelledby="about-hero-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              {aboutHeroData.badge}
            </span>

            <h1
              id="about-hero-heading"
              className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              {aboutHeroData.title}

              <span className="block text-blue-600">
                {aboutHeroData.highlight}
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutHeroData.description1}
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              {aboutHeroData.description2}
            </p>

            {/* Info Cards */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutHeroData.infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-500 hover:shadow-md"
                  >
                    <Icon className="h-6 w-6 text-blue-600" />

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>

                      <p className="text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={aboutHeroData.buttons.primary.href}
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <Mail className="mr-2 h-5 w-5" />

                {aboutHeroData.buttons.primary.text}
              </Link>

              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                <Download className="mr-2 h-5 w-5" />

                {aboutHeroData.buttons.secondary.text}
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-blue-100 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={siteConfig.profileImage}
                  alt={aboutHeroData.imageAlt}
                  width={500}
                  height={600}
                  priority
                  sizes="(max-width:768px) 100vw, 500px"
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
