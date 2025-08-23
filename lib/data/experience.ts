interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
  achievements?: string[];
  type: 'fulltime' | 'contract' | 'internship' | 'freelance';
}

// Your actual experience data
export const experienceData: Experience[] = [
  {
    id: '1',
    role: 'Senior Software Engineer (Frontend)',
    company: 'WhizHack Technologies',
    duration: 'August 2025 - Present',
    location: 'Gurugram, India',
    description: [
      'Developed cybersecurity web platforms using React, Next.js, and TypeScript, ensuring scalability and high availability.',
      'Built real-time data dashboards with WebSockets, reducing response latency and enabling faster threat analysis.',
      'Implemented a multi-tenant micro-frontend architecture, improving scalability by 40%, ensuring tenant isolation, and reducing deployment effort across clients.'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Redux', 'Multi-Tenant Architecture', 'JavaScript', 'HTML5'],
    achievements: ['40% improvement in scalability', 'Real-time threat analysis system', 'Multi-tenant architecture'],
    type: 'fulltime'
  },
  {
    id: '2',
    role: 'Senior Software Engineer (Frontend)',
    company: 'Antier Solutions',
    duration: 'February 2023 - December 2024',
    location: 'Chandigarh, India',
    description: [
      'Improved WebSocket connections and real-time data synchronization within the DEX platform, reducing transaction latency by over 30 milliseconds, applying expertise in WebSockets, Next.js, Real-time Systems, and Event-Driven Architecture.',
      'Pioneered the adoption of a micro-frontend architecture, increasing code modularity by 25%, enhancing scalability and maintainability for 5 web applications, utilizing Micro-Frontend and CI/CD strategies.',
      'Boosted front-end performance using React profiling tools, Webpack, and state management with Redux, achieving a 20% improvement in app performance and a 15% reduction in load times, focusing on Performance Optimization and Bundling Strategies.',
      'Deployed a Progressive Web Application (PWA) that elevated mobile user engagement by 30%, implementing Mobile-First Development and Responsive Design Principles.'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Redux', 'Web3.js', 'JavaScript', 'HTML5', 'CSS3'],
    achievements: ['30ms latency reduction', '25% code modularity increase', '20% performance improvement', '30% mobile engagement boost'],
    type: 'fulltime'
  },
  {
    id: '3',
    role: 'Software Engineer (Full Stack)',
    company: 'ImmuneBytes',
    duration: 'April 2022 - December 2022',
    location: 'Delhi, India',
    description: [
      'Designed and deployed a real-time notification system using WebSockets, delivering live updates with sub-second latency that enhanced user decision-making, and recognized as the "Most Innovative Project" at ImmuneBytes.',
      'Optimized frontend performance by implementing lazy loading, code splitting, and bundle size reduction, resulting in a 25% faster initial load time and improved user experience.'
    ],
    techStack: ['JavaScript (ES6)', 'TypeScript', 'Next.js', 'Node.js', 'WebSockets', 'Web3.js'],
    achievements: ['Sub-second latency system', 'Most Innovative Project award', '25% faster load times'],
    type: 'fulltime'
  },
    // {
    //   id: '4',
    //   role: 'Software Engineer',
    //   company: 'Staple Logic',
    //   duration: 'September 2021 – March 2022',
    //   location: 'Chandigarh, India',
    //   description: [
    //     'Redesigned the UI of a courier delivery platform using React.js, Redux, and Bootstrap, resulting in a 40% drop in processing time and a 25% increase in conversion rates.',
    //     'Restructured the frontend architecture and applied Redux to manage shared state, reducing related bugs by 30% across the application.'
    //   ],
    //   techStack: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Redux', 'Next.js', 'REST APIs'],
    //   achievements: ['40% drop in processing time', '25% increase in conversion rates', '30% reduction in frontend bugs'],
    //   type: 'fulltime'
    // }
];
