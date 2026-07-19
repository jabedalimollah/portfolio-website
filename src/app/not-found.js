"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

export default function NotFound() {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${
        theme ? "bg-slate-950" : "bg-gray-100"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-8xl font-bold ${
            theme ? "text-primary" : "text-primary"
          }`}
        >
          404
        </h1>

        <h2
          className={`mt-4 text-3xl font-semibold ${
            theme ? "text-white" : "text-gray-800"
          }`}
        >
          Page Not Found
        </h2>

        <p
          className={`mx-auto mt-3 max-w-md ${
            theme ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="
rounded-lg
button
px-6
py-3
font-medium
text-white
transition
hover:bg-blue-700
"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className={`rounded-lg border px-6 py-3 font-medium transition ${
              theme
                ? "border-slate-700 text-white hover:bg-slate-800"
                : "border-gray-300 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
