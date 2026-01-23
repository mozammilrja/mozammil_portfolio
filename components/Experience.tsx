"use client";

import { experienceData } from "@/lib/data/experience";
import { TrendingUp } from "lucide-react";

const Experience = () => (
  <section
    id="experience"
    className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          4+ years of shipping production-ready frontend at scale
        </p>
      </div>

      <div className="w-full space-y-8">
        {experienceData.map((job) => (
          <div
            key={job.id}
            className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            {/* Left colored strip */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-indigo-500 to-violet-600 rounded-l-xl"></div>

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {job.role}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {job.company}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                  <p className="font-medium">{job.location}</p>
                  <p className="text-indigo-600 dark:text-indigo-400">{job.duration}</p>
                </div>
              </div>

              {/* Key Achievements - What Recruiters Scan For */}
              {job.achievements && job.achievements.length > 0 && (
                <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                    Key Achievements
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.achievements.map((ach, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-green-700 dark:text-green-300 text-sm font-medium rounded-full border border-green-200 dark:border-green-700">
                        {ach}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {job.techStack.slice(0, 6).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                  {job.techStack.length > 6 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                      +{job.techStack.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                {job.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-indigo-600 dark:text-indigo-400 mr-2 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
