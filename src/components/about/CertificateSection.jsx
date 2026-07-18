import certificates from "@/data/about/certificatesData";
import CertificateCard from "./CertificateCard";

export default function CertificateSection() {
  return (
    <section id="certificates" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Certifications
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Certificates & Achievements
          </h2>

          <p className="mt-6 text-lg text-slate-600">
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
