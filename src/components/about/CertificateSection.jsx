"use client";

import { useSelector } from "react-redux";

import certificates from "@/data/about/certificatesData";
import CertificateCard from "./CertificateCard";

export default function CertificateSection() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      id="certificates"
      className={`py-20 ${theme ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              theme
                ? "bg-blue-500/20 text-blue-400"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            Certifications
          </span>

          <h2
            className={`mt-6 text-4xl font-bold ${
              theme ? "text-white" : "text-slate-900"
            }`}
          >
            Certificates & Achievements
          </h2>

          <p
            className={`mt-6 text-lg ${
              theme ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Professional certifications and completed courses that demonstrate
            my continuous learning and technical growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}
