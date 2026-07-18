import Image from "next/image";

export default function CertificateCard({ certificate }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900">
          {certificate.title}
        </h3>

        <p className="mt-2 text-slate-500">{certificate.organization}</p>

        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}
