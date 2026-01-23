import { CheckCircle, MapPin, Briefcase, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl">
              <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Specialization</p>
                <p className="font-semibold text-gray-900 dark:text-white">Full-Stack (MERN)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl">
              <Briefcase className="w-8 h-8 text-green-600 dark:text-green-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                <p className="font-semibold text-gray-900 dark:text-white">4+ Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-violet-50 dark:bg-violet-900/30 rounded-xl">
              <MapPin className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">Delhi NCR / Remote</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Concise Intro */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a <strong className="text-indigo-600 dark:text-indigo-400">Full-Stack Developer</strong> who
              ships production-ready applications end-to-end. Over 4 years at companies like 
              WhizHack, Antier Solutions, and ImmuneBytes, I've built real-time dashboards, 
              REST APIs, micro-frontend architectures, and full-stack web apps.
            </p>

            {/* What I Do Best - Scannable */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border-l-4 border-indigo-600 dark:border-indigo-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What I Bring to Your Team:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "React, Next.js & TypeScript",
                  "Node.js, Express & MongoDB",
                  "REST APIs & GraphQL",
                  "Real-time systems with WebSockets",
                  "Micro-frontend architectures",
                  "Web3 & blockchain integration",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
