// types/project.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
  gradient: string;
  featured: boolean;
  stats: Record<string, string>;
  features: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Meetrix Meeting",
    description:
      "A modern video conferencing platform with dynamic layouts and real-time collaboration features.",
    problem:
      "Need for a scalable video meeting solution with custom layouts and seamless user authentication.",
    solution:
      "Built using Stream Video SDK for reliable video streaming, integrated Clerk for secure authentication, and implemented dynamic layout switching for optimal user experience.",
    technologies: [
      "React",
      "Next.js",
      "Stream Video SDK",
      "Clerk Auth",
      "TypeScript",
      "Tailwind CSS",
    ],
    demoLink: "#",
    githubLink: "https://github.com/mozammilrja/Meetrix-meeting-app",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-indigo-500 to-violet-600",
    featured: true,
    stats: { users: "10K+", uptime: "99.9%", meetings: "50K+" },
    features: [
      "HD Video Streaming",
      "Screen Sharing",
      "Real-time Chat",
      "Recording",
    ],
  },
  {
    id: 2,
    title: "InvoiceCraft",
    description:
      "Professional invoice generator designed for freelancers with PDF export and client management.",
    problem:
      "Freelancers need a simple yet professional tool to create and manage invoices quickly.",
    solution:
      "Developed a user-friendly interface with customizable templates, automated calculations, PDF generation, and client database management for efficient billing workflows.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "PDF.js",
      "Express",
      "Tailwind CSS",
    ],
    demoLink: "#",
    githubLink: "https://github.com/mozammilrja/InvoiceCraft",
    image:
      "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-green-500 to-teal-600",
    featured: true,
    stats: { invoices: "25K+", users: "5K+", saved: "$2M+" },
    features: [
      "PDF Export",
      "Client Management",
      "Payment Tracking",
      "Custom Templates",
    ],
  },
  {
    id: 3,
    title: "Student Progress Analytics Dashboard",
    description:
      "A comprehensive LMS admin dashboard to monitor and visualize individual student performance, engagement, and course progress using interactive UI components.",
    problem:
      "Administrators need a concise yet insightful interface to monitor student performance metrics without overwhelming data noise.",
    solution:
      "Built a modular analytics dashboard displaying key student metrics like tasks, questions, accuracy, activity logs, and progress trends using clean UI with charts and tables.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Lucide Icons",
      "Zustand",
      "shadcn/ui",
    ],
    demoLink: "https://lms-dashboard-lime.vercel.app",
    githubLink: "https://github.com/mozammilrja/LMS-Dashboard",
    image:
      "https://images.pexels.com/photos/5212322/pexels-photo-5212322.jpeg?auto=compress&cs=tinysrgb&w=800",
    gradient: "from-indigo-600 to-sky-500",
    featured: true,
    stats: {
      usersTracked: "200+",
      avgCompletionRate: "82%",
      uptime: "99.9%",
    },
    features: [
      "KPI Summary Cards",
      "Weekly Progress Trends",
      "Per-Student Drilldowns",
      "Milestone Tracking",
      "Performance Filters",
      "CSV/PDF Export",
      "Last Active Timestamps",
      "Accuracy Monitoring",
      "Course-Based Filtering",
      "Lightweight UI with Tooltips",
    ],
  },
];
