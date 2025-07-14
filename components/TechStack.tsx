const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend', color: 'bg-blue-100 text-blue-700' },
    { name: 'Next.js', category: 'Frontend', color: 'bg-gray-100 text-gray-700' },
    { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-700' },
    { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-700' },
    { name: 'Redux', category: 'State Management', color: 'bg-purple-100 text-purple-700' },
    { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-100 text-cyan-700' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-700' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-700' },
    { name: 'Web3.js', category: 'Blockchain', color: 'bg-orange-100 text-orange-700' },
    { name: 'AWS', category: 'Cloud', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Jest', category: 'Testing', color: 'bg-red-100 text-red-700' },
    { name: 'Git', category: 'Version Control', color: 'bg-gray-100 text-gray-700' },
  ];

  const categories = [
    { name: 'Frontend', techs: technologies.filter(t => t.category === 'Frontend') },
    { name: 'Backend & Database', techs: technologies.filter(t => ['Backend', 'Database'].includes(t.category)) },
    { name: 'Tools & Others', techs: technologies.filter(t => !['Frontend', 'Backend', 'Database'].includes(t.category)) },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tech Stack & Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional web applications.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${tech.color}`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Grid */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;