"use client";
import { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { LINKS } from "@/lib/data/links";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.current) return;

      setLoading(true);

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(() => {
          setSuccess(true);
          form.current?.reset();
        })
        .catch((error) => console.error("FAILED...", error))
        .finally(() => {
          setLoading(false);
          setTimeout(() => setSuccess(false), 5000);
        });
    },
    [form]
  );

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 overflow-hidden">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    label: "Email",
                    href: LINKS.emailHref,
                    icon: Mail,
                    bg: "bg-blue-600",
                    hoverBg: "group-hover:scale-105",
                    value: LINKS.email,
                  },
                  {
                    label: "Phone",
                    href: LINKS.phoneHref,
                    icon: Phone,
                    bg: "bg-green-600",
                    hoverBg: "group-hover:scale-105",
                    value: LINKS.phone,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-lg transition-colors min-w-0 bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/30 group"
                      aria-label={item.label}>
                      <div
                        className={`w-12 h-12 flex-shrink-0 ${item.bg} rounded-lg flex items-center justify-center transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {item.label}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg min-w-0">
                  <div className="w-12 h-12 flex-shrink-0 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 truncate">
                      {LINKS.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  {[LINKS.github, LINKS.linkedin, LINKS.hireMe].map(
                    (href, idx) => {
                      const icons = [Github, Linkedin, Briefcase];
                      const colors = [
                        "bg-gray-800",
                        "bg-blue-700",
                        "bg-green-600",
                      ];
                      const Icon = icons[idx];
                      return (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${colors[idx]} w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center hover:scale-105 transform transition-colors`}
                          aria-label={
                            idx === 0
                              ? "GitHub"
                              : idx === 1
                              ? "LinkedIn"
                              : "Hire Me"
                          }>
                          <Icon className="w-6 h-6 text-white" />
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {[
                {
                  label: "Name",
                  type: "text",
                  name: "name",
                  placeholder: "Your name",
                },
                {
                  label: "Email",
                  type: "email",
                  name: "email",
                  placeholder: "your.email@example.com",
                },
                {
                  label: "Subject",
                  type: "text",
                  name: "subject",
                  placeholder: "What's this about?",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="ml-2 w-4 h-4" />}
              </button>

              {success && (
                <div className="flex items-center mt-4 text-green-600 font-medium">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
