import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Floating Decorative Circles */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-400 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full opacity-50 blur-2xl"></div>

        {/* 404 Text */}
        <h1 className="text-8xl lg:text-9xl font-extrabold text-gray-900 dark:text-white mb-6">
          404
        </h1>
        <p className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist.
        </p>

        {/* Go Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
          Go Home <ArrowRight className="w-5 h-5" />
        </Link>

        {/* Optional Floating Emoji */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
          <span className="text-5xl">💻</span>
        </div>
      </div>
    </section>
  );
}
