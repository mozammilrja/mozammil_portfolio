"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  ArrowUp,
} from "lucide-react";
import { LINKS } from "@/lib/data/links";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ================= Left Content ================= */}
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}>
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-800">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Open to Full-Stack / Frontend Roles • Delhi NCR / Remote
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                Full-Stack Developer{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Who Ships
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                4+ years building{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  React, Next.js, Node.js & MongoDB
                </span>{" "}
                applications with a focus on{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">performance</span>,{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">clean architecture</span>, and{" "}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">great UX</span>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">4+</span>
                <span className="text-gray-600 dark:text-gray-400">Years Exp</span>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">15+</span>
                <span className="text-gray-600 dark:text-gray-400">Projects</span>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">3</span>
                <span className="text-gray-600 dark:text-gray-400">Companies</span>
              </div>
            </div>

            {/* CTA Buttons - Simplified to reduce decision fatigue */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg group">
                <Download className="w-5 h-5 mr-2" />
                <span>Resume</span>
              </a>
            </div>


            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="GitHub Profile">
                <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white" />
              </a>

              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-200" />
              </a>

              <a
                href={LINKS.emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="Send Email">
                <Mail className="w-6 h-6 text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300" />
              </a>
            </div>
          </div>

          {/* ================= Right Content ================= */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
              }`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-indigo-500 to-violet-600 p-1 shadow-2xl" />
              <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <Image
                  src="/profile.avif"
                  alt="Mozammil Raja - Frontend Developer Portfolio"
                  fill
                  className="object-cover rounded-full"
                  priority
                  placeholder="blur"
                  blurDataURL="/profile.avif"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600 rounded-xl shadow-lg flex items-center justify-center animate-pulse">
                <span className="text-white text-xl">💻</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center animate-ping">
                <span className="text-white text-sm">✨</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top">
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </section >
  );
};

export default Hero;
