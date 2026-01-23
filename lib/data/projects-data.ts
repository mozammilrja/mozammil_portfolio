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
  highlights: string[];  // Honest project highlights
  features: string[];
  role: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Meetrix Meeting",
    description:
      "A real-time video conferencing platform with dynamic layouts, screen sharing, and secure authentication.",
    problem:
      "Wanted to learn WebRTC and real-time communication patterns while building something practical.",
    solution:
      "Built end-to-end using Stream Video SDK for WebRTC-based streaming, integrated Clerk for OAuth/SSO, and implemented dynamic layout switching with React state management.",
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
    highlights: ["WebRTC Integration", "Real-time Sync", "OAuth 2.0"],
    features: [
      "HD Video Streaming",
      "Screen Sharing",
      "Real-time Chat",
      "Recording",
    ],
    role: "Sole Developer — architecture, UI, real-time features",
  },
  {
    id: 2,
    title: "InvoiceCraft",
    description:
      "Professional invoice generator for freelancers with PDF export, client management, and payment tracking.",
    problem:
      "Built to solve my own invoicing needs as a freelancer and learn full-stack development patterns.",
    solution:
      "Designed a React-based SPA with server-side PDF generation, MongoDB for client/invoice storage, and automated tax calculations.",
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
    highlights: ["Full-Stack", "PDF Generation", "REST API"],
    features: [
      "PDF Export",
      "Client Management",
      "Payment Tracking",
      "Custom Templates",
    ],
    role: "Full-stack development — React frontend, Node.js API, MongoDB schema",
  },
  {
    id: 3,
    title: "Student Progress Analytics Dashboard",
    description:
      "LMS admin dashboard for monitoring student performance, engagement metrics, and course progress with interactive visualizations.",
    problem:
      "Explored data visualization and state management patterns by building a practical analytics dashboard.",
    solution:
      "Built a modular dashboard with Recharts for visualizations, Zustand for state, and shadcn/ui for consistent UX. Implemented real-time filters for course/student drilldowns.",
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
    highlights: ["Data Viz", "Zustand State", "Live Demo"],
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
    role: "Lead Developer — component architecture, data visualization, state management",
  },
];
