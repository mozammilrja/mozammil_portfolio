import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                Frontend Developer
              </strong>{" "}
              with{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                3.5+ years of experience
              </strong>{" "}
              crafting modern, scalable, and high-performance web applications.
              My core expertise lies in{" "}
              <strong>React, Next.js, TypeScript, and Web3</strong>, empowering
              me to build{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                seamless, engaging user experiences
              </span>{" "}
              that also drive measurable business results.
            </p>

            {/* Middle */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I’m passionate about designing{" "}
              <strong>scalable frontend architectures</strong> that are both
              visually striking and technically robust. By blending{" "}
              <strong>clean code principles</strong> with{" "}
              <strong>modern engineering practices</strong>, I deliver products
              that are not only functional but also maintainable for the long
              term.
            </p>

            {/* Current Focus */}
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              At present, I’m exploring{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                exciting frontend opportunities
              </strong>{" "}
              in <strong>Delhi NCR</strong> or{" "}
              <strong>remote-first teams</strong>. My goal is to contribute to
              innovative projects, push creative boundaries, and stay at the
              forefront of{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                emerging technologies
              </span>{" "}
              while growing as a developer and collaborator.
            </p>

            {/* Highlights */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What I Bring:
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                  <span>
                    Advanced expertise in{" "}
                    <strong>React, Next.js, and TypeScript</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                  <span>
                    Hands-on experience with{" "}
                    <strong>Web3 technologies & blockchain integration</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
                  <span>
                    Proven ability in{" "}
                    <strong>performance optimization & UX improvements</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" />
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
