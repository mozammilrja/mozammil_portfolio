"use client";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
} from "lucide-react";
import { LINKS } from "@/lib/data/links";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let&apos;s Build Something Great
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Looking for a frontend developer who ships fast and builds for scale?
            I&apos;m available for full-time roles and select freelance projects.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Get In Touch
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                label: "Email",
                href: LINKS.emailHref,
                icon: Mail,
                value: LINKS.email,
              },
              {
                label: "Phone",
                href: LINKS.phoneHref,
                icon: Phone,
                value: LINKS.phone,
              },
              {
                label: "Location",
                href: "#",
                icon: MapPin,
                value: LINKS.location,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 border-2 border-transparent hover:border-indigo-200 dark:hover:border-indigo-800 group transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label={item.label}>
                  <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Ready to collaborate? Let&apos;s connect and discuss your project!
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-6 text-center">
              Connect with me
            </h4>
            <div className="flex justify-center space-x-4">
              {[
                { href: LINKS.github, icon: Github, label: "GitHub" },
                { href: LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: LINKS.hireMe, icon: Briefcase, label: "Hire Me" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-indigo-500 hover:to-purple-600 dark:hover:from-indigo-600 dark:hover:to-purple-700 rounded-2xl flex items-center justify-center hover:scale-110 transform transition-all duration-300 border-2 border-transparent hover:border-indigo-300 dark:hover:border-indigo-600 group shadow-md hover:shadow-xl"
                  aria-label={item.label}>
                  <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
