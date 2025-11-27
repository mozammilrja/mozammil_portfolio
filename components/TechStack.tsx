import { technologies } from "@/lib/data/technologies"; // path to your file

const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      techs: technologies.filter((t) => t.category === "Frontend"),
    },
    {
      name: "Backend & Database",
      techs: technologies.filter((t) =>
        ["Backend", "Database"].includes(t.category)
      ),
    },
    {
      name: "Tools & Others",
      techs: technologies.filter(
        (t) => !["Frontend", "Backend", "Database"].includes(t.category)
      ),
    },
  ];

  return (
    <section id="techstack" className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional web applications.
          </p>
        </div>

        {/* All Skills Grid */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            All Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${tech.color}`}>
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
