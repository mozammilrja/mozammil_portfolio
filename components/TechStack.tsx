const TechStack = () => {
const technologies = [
  // Languages
  { name: 'JavaScript (ES6+)', category: 'Language', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'TypeScript', category: 'Language', color: 'bg-blue-100 text-blue-700' },
  { name: 'HTML5', category: 'Language', color: 'bg-orange-100 text-orange-700' },
  { name: 'CSS3', category: 'Language', color: 'bg-blue-100 text-blue-700' },

  // Frontend
  { name: 'React.js', category: 'Frontend', color: 'bg-cyan-100 text-cyan-800' },
  { name: 'Next.js', category: 'Frontend', color: 'bg-gray-100 text-gray-700' },
  { name: 'Redux', category: 'Frontend', color: 'bg-purple-100 text-purple-700' },
  { name: 'PWA', category: 'Frontend', color: 'bg-green-100 text-green-700' },
  { name: 'Micro Frontend', category: 'Frontend', color: 'bg-indigo-100 text-indigo-700' },

  // Styling
  { name: 'Tailwind CSS', category: 'Styling', color: 'bg-cyan-100 text-cyan-700' },

  // Backend & DB
  { name: 'Node.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
  { name: 'Express.js', category: 'Backend', color: 'bg-green-100 text-green-800' },
  { name: 'MongoDB', category: 'Database', color: 'bg-green-100 text-green-700' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3)', category: 'Cloud', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Docker', category: 'DevOps', color: 'bg-blue-100 text-blue-700' },
  { name: 'Jenkins', category: 'DevOps', color: 'bg-red-100 text-red-700' },
  { name: 'CI/CD', category: 'DevOps', color: 'bg-gray-100 text-gray-700' },

  // Version Control
  { name: 'Git', category: 'Version Control', color: 'bg-gray-100 text-gray-700' },

  // APIs & Communication
  { name: 'GraphQL', category: 'API', color: 'bg-pink-100 text-pink-700' },
  { name: 'RESTful APIs', category: 'API', color: 'bg-indigo-100 text-indigo-800' },
  { name: 'WebSockets', category: 'API', color: 'bg-teal-100 text-teal-700' },

  // Web Tech
  { name: 'Webpack', category: 'Web', color: 'bg-blue-100 text-blue-700' },
  { name: 'Babel', category: 'Web', color: 'bg-yellow-100 text-yellow-700' },
  { name: 'Web3.js', category: 'Blockchain', color: 'bg-orange-100 text-orange-700' },

  // Testing
  { name: 'Jest', category: 'Testing', color: 'bg-red-100 text-red-700' },
  { name: 'React Testing Library', category: 'Testing', color: 'bg-red-100 text-red-700' },

  // Best Practices
  { name: 'Design Patterns', category: 'Other', color: 'bg-purple-100 text-purple-700' },
  { name: 'Cross-Browser Compatibility', category: 'Other', color: 'bg-gray-100 text-gray-700' },
  { name: 'Linting', category: 'Other', color: 'bg-gray-100 text-gray-700' },
];


const categories = [
  { name: 'Languages', techs: technologies.filter(t => t.category === 'Language') },
  { name: 'Frontend', techs: technologies.filter(t => t.category === 'Frontend' || t.category === 'Styling') },
  { name: 'Backend & Database', techs: technologies.filter(t => ['Backend', 'Database'].includes(t.category)) },
  { name: 'API & Web Technologies', techs: technologies.filter(t => ['API', 'Web'].includes(t.category)) },
  { name: 'Cloud & DevOps', techs: technologies.filter(t => ['Cloud', 'DevOps'].includes(t.category)) },
  { name: 'Testing & Best Practices', techs: technologies.filter(t => ['Testing', 'Other'].includes(t.category)) },
  { name: 'Tools & Version Control', techs: technologies.filter(t => t.category === 'Version Control') },
  { name: 'Blockchain', techs: technologies.filter(t => t.category === 'Blockchain') },
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

        {/* <div className="space-y-12">
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
        </div> */}

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