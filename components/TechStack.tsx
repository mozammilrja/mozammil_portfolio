import { technologies } from "@/lib/data/technologies";

const TechStack = () => {
  // Primary skills recruiters look for first
  const primarySkills = ["React.js", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"];
  
  const categories = [
    {
      name: "Frontend",
      techs: technologies.filter((t) => t.category === "Frontend" || t.category === "Styling"),
    },
    {
      name: "Backend & APIs",
      techs: technologies.filter((t) =>
        ["Backend", "Database", "API"].includes(t.category)
      ),
    },
    {
      name: "DevOps & Tools",
      techs: technologies.filter((t) =>
        ["DevOps", "Cloud", "Version Control", "Web", "Testing"].includes(t.category)
      ),
    },
  ];

  return (
    <section id="techstack" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies I use to build production-ready applications.
          </p>
        </div>

        {/* Primary Skills - Clean Grid */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {primarySkills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-xl text-base font-semibold text-gray-900 dark:text-white shadow-md border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skills - Cleaner Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
