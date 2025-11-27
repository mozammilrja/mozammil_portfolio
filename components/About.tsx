import { CheckCircle } from "lucide-react";

const About = () => {
  console.error("erro")
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
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I am a results-driven{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                Frontend Developer
              </strong>{" "}
              with over{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                3.5 years of experience
              </strong>{" "}
              in building scalable, high-performance web applications. Specializing
              in <strong>React, Next.js, TypeScript, and Web3</strong>, I focus on
              delivering{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                seamless user experiences
              </span>{" "}
              that drive business growth and technical excellence.
            </p>

            {/* Middle */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I am passionate about architecting{" "}
              <strong>robust frontend solutions</strong> that balance visual
              aesthetics with technical scalability. Committed to{" "}
              <strong>clean code</strong> and{" "}
              <strong>modern engineering practices</strong>, I ensure every
              product I build is maintainable, efficient, and future-proof.
            </p>

            {/* Current Focus */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Currently seeking challenging{" "}
              <strong className="text-indigo-600 dark:text-indigo-400">
                frontend opportunities
              </strong>{" "}
              in <strong>Delhi NCR</strong> or <strong>remote environments</strong>.
              I am eager to contribute to innovative projects, leverage{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                emerging technologies
              </span>
              , and collaborate with forward-thinking teams to push the boundaries
              of web development.
            </p>

            {/* Highlights */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-6 border-l-4 border-indigo-600 dark:border-indigo-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What I Bring:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span>
                    Advanced expertise in{" "}
                    <strong>React, Next.js, and TypeScript</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span>
                    Hands-on experience with{" "}
                    <strong>Web3 technologies & blockchain integration</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span>
                    Proven ability in{" "}
                    <strong>performance optimization & UX improvements</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2 flex-shrink-0" />
                  <span>
                    A collaborative mindset with{" "}
                    <strong>excellent problem-solving skills</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
