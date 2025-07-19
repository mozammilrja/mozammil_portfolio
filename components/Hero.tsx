"use client";

import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for immediate joining
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Frontend{" "}
                <span className="block text-blue-600 dark:text-blue-400">
                  Developer
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Building scalable, accessible, and high-performance web
                applications using
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {" "}
                  React, Next.js, and TypeScript
                </span>
                .
              </p>
            </div>

            {/* Intro Text */}
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              Currently open to new frontend opportunities. I specialize in
              crafting pixel-perfect, performance-driven UIs with{" "}
              <strong>3.5+ years of experience</strong>.
            </p>

            {/* Location & Experience */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">
                  Noida • Delhi NCR • Open to Pan-India
                </span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                <span className="text-sm">3.5+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1UrVfPiZ3Si-A4PzKBktJJp4yJCpEAlEs/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                📄 Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group">
                📬 Let's Connect
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/mozammilrja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="GitHub Profile">
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/mozammil-raja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="LinkedIn Profile">
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </a>
              <a
                href="mailto:mozammilraja0218@gmail.com"
                className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-200 group"
                aria-label="Send Email">
                <Mail className="w-6 h-6 text-red-500 group-hover:text-red-600" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center animate-pulse">
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
      </div>
    </section>
  );
};

export default Hero;
