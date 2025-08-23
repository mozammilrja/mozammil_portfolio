export interface Technology {
  name: string;
  category: string;
  color: string;
}

export const technologies: Technology[] = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Language", color: "bg-yellow-200 text-yellow-900" },
  { name: "TypeScript", category: "Language", color: "bg-blue-200 text-blue-900" },
  { name: "HTML5", category: "Language", color: "bg-orange-200 text-orange-900" },
  { name: "CSS3", category: "Language", color: "bg-indigo-200 text-indigo-900" },
  { name: "OOPs", category: "Language", color: "bg-purple-200 text-purple-900" },

  // Frontend / Frameworks
  { name: "React.js", category: "Frontend", color: "bg-cyan-200 text-cyan-900" },
  { name: "Next.js", category: "Frontend", color: "bg-gray-200 text-gray-900" },
  { name: "Redux", category: "Frontend", color: "bg-purple-200 text-purple-900" },
  { name: "PWA", category: "Frontend", color: "bg-green-200 text-green-900" },
  { name: "Micro Frontend", category: "Frontend", color: "bg-pink-200 text-pink-900" },
  { name: "Multi-Tenant Architecture", category: "Frontend", color: "bg-indigo-300 text-indigo-900" },
  { name: "GraphQL", category: "API", color: "bg-pink-300 text-pink-900" },

  // Styling
  { name: "Tailwind CSS", category: "Styling", color: "bg-teal-200 text-teal-900" },
  { name: "Material-UI", category: "Styling", color: "bg-blue-300 text-white" }, // optional
  { name: "Bootstrap", category: "Styling", color: "bg-blue-700 text-white dark:bg-sky-700 dark:text-white" },

  // Backend & Database
  { name: "Node.js", category: "Backend", color: "bg-green-300 text-green-900" },
  { name: "Express.js", category: "Backend", color: "bg-lime-200 text-lime-900" },
  { name: "MongoDB", category: "Database", color: "bg-emerald-200 text-emerald-900" },
  { name: "RESTful APIs", category: "API", color: "bg-indigo-300 text-indigo-900" },
  { name: "WebSockets", category: "API", color: "bg-teal-300 text-teal-900" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3)", category: "Cloud", color: "bg-yellow-300 text-yellow-900" },
  { name: "Docker", category: "DevOps", color: "bg-blue-300 text-blue-900" },
  { name: "Jenkins", category: "DevOps", color: "bg-red-300 text-red-900" },
  { name: "CI/CD", category: "DevOps", color: "bg-gray-300 text-gray-900" },
  { name: "Git", category: "Version Control", color: "bg-orange-300 text-orange-900" },

  // Web / Build Tools
  { name: "Webpack", category: "Web", color: "bg-blue-400 text-blue-900" },
  { name: "Babel", category: "Web", color: "bg-yellow-400 text-yellow-900" },
  { name: "Web3.js", category: "Blockchain", color: "bg-orange-400 text-orange-900" },

  // Testing
  { name: "Jest", category: "Testing", color: "bg-red-200 text-red-900" },
  { name: "React Testing Library", category: "Testing", color: "bg-pink-200 text-pink-900" },

  // Other
  { name: "Design Patterns", category: "Other", color: "bg-purple-200 text-purple-900" },
  { name: "Cross-Browser Compatibility", category: "Other", color: "bg-gray-200 text-gray-900" },
  { name: "Linting", category: "Other", color: "bg-teal-200 text-teal-900" },
];




