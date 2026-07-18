"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-red-50 px-6">
      <div className="max-w-xl rounded-3xl border border-red-100 bg-white p-10 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <FaExclamationTriangle className="text-4xl text-red-600" />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">
          Oops! Something went wrong.
        </h1>

        <p className="mt-4 text-slate-600">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FaRedo className="mr-2" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
