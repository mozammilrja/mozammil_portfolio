'use client';


import { useState } from 'react';
import { ExternalLink, Github, X, Zap } from 'lucide-react';

// ✅ Type Definition
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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Meetrix Meeting',
      description: 'A modern video conferencing platform with dynamic layouts and real-time collaboration features.',
      problem: 'Need for a scalable video meeting solution with custom layouts and seamless user authentication.',
      solution: 'Built using Stream Video SDK for reliable video streaming, integrated Clerk for secure authentication, and implemented dynamic layout switching for optimal user experience.',
      technologies: ['React', 'Next.js', 'Stream Video SDK', 'Clerk Auth', 'TypeScript', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/mozammilrja/Meetrix-meeting-app',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-purple-600',
      featured: true,
      stats: { users: '10K+', uptime: '99.9%', meetings: '50K+' },
      features: ['HD Video Streaming', 'Screen Sharing', 'Real-time Chat', 'Recording'],
    },
    {
      id: 2,
      title: 'InvoiceCraft',
      description: 'Professional invoice generator designed for freelancers with PDF export and client management.',
      problem: 'Freelancers need a simple yet professional tool to create and manage invoices quickly.',
      solution: 'Developed a user-friendly interface with customizable templates, automated calculations, PDF generation, and client database management for efficient billing workflows.',
      technologies: ['React', 'Node.js', 'MongoDB', 'PDF.js', 'Express', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: 'https://github.com/mozammilrja/InvoiceCraft',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-teal-600',
      featured: true,
      stats: { invoices: '25K+', users: '5K+', saved: '$2M+' },
      features: ['PDF Export', 'Client Management', 'Payment Tracking', 'Custom Templates'],
    },
    {
      id: 3,
      title: 'CryptoPay Gateway',
      description: 'Web3 payment gateway enabling seamless cryptocurrency transactions through MetaMask integration.',
      problem: 'Businesses need secure and easy-to-integrate cryptocurrency payment solutions.',
      solution: 'Created a robust payment gateway with MetaMask wallet integration, multi-currency support, real-time transaction tracking, and secure smart contract interactions.',
      technologies: ['React', 'Web3.js', 'Ethereum', 'MetaMask', 'Solidity', 'Node.js'],
      demoLink: '#',
      githubLink: 'https://github.com/mozammilrja',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-orange-500 to-red-600',
      featured: true,
      stats: { transactions: '100K+', volume: '$10M+', uptime: '99.8%' },
      features: ['Multi-Currency', 'Smart Contracts', 'Real-time Tracking', 'Secure Wallet'],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in modern web development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(project)}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)',
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    View Details
                  </button>
                  <div className="flex space-x-2">
                    <a
                      href={project.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors transform hover:scale-110"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors transform hover:scale-110"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mozammilrja"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View More on GitHub
            <Github className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-90`}></div>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-white text-opacity-90">{selectedProject.description}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(selectedProject.stats).map(([key, value], index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div> */}

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Problem
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium rounded-full border border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.demoLink}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;