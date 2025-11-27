"use client";

import { experienceData } from "@/lib/data/experience";

const Experience = () => (
  <section
    id="experience"
    className="py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
      </div>

      <div className="w-full space-y-8">
        {experienceData.map((job) => (
          <div
            key={job.id}
            className="relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            {/* Left colored strip */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-500 rounded-l-xl"></div>

            {/* Content */}
            <div className="relative">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {job.company} | {job.role}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400">
                  <p className="font-medium">{job.location}</p>
                  <p>{job.duration}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Tech Stack:{" "}
                <span className="font-normal">{job.techStack.join(", ")}</span>
              </p>

              {/* Description */}
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-3">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Achievements */}
              {/* {job.achievements && job.achievements.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    Achievements:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
