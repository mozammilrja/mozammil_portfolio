import { LINKS } from "@/lib/data/links";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Mozammil Raja
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating exceptional web
              experiences with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address className="not-italic">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>{LINKS.email}</p>
              <p>{LINKS.phone}</p>
              <p>{LINKS.location}</p>
            </div>
          </address>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mozammil Raja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
