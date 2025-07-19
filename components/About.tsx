const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate <strong className="text-blue-600 dark:text-blue-400">Frontend Developer</strong> with 
              <strong className="text-blue-600 dark:text-blue-400"> 3.5+ years of experience</strong> building modern, 
              scalable web applications. My expertise spans across React, Next.js, TypeScript, and Web3 technologies, 
              allowing me to create exceptional user experiences that drive business growth.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I specialize in developing <strong>scalable frontend systems</strong> that are not only visually 
              appealing but also performant and maintainable. My approach combines clean code practices with 
              modern development methodologies to deliver solutions that exceed expectations.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Currently seeking <strong className="text-blue-600 dark:text-blue-400">challenging frontend roles</strong> in 
              <strong> Delhi NCR or remote positions</strong> where I can contribute to innovative projects 
              and continue growing as a developer. I'm passionate about staying at the forefront of technology 
              trends and implementing cutting-edge solutions.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What I Bring:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Expert-level proficiency in React, Next.js, and TypeScript</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Experience with Web3 technologies and blockchain integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Strong focus on performance optimization and user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                  <span>Collaborative mindset with excellent problem-solving skills</span>
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