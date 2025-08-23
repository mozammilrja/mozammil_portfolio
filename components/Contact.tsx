"use client";
import { useRef, useState } from "react";
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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

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
  };

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
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
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
                {/* Email */}
                <a
                  href={LINKS.emailHref}
                  className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group min-w-0"
                  aria-label="Send Email">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 truncate">
                      {LINKS.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={LINKS.phoneHref}
                  className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group min-w-0"
                  aria-label="Call Phone">
                  <div className="w-12 h-12 flex-shrink-0 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Phone
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 truncate">
                      {LINKS.phone}
                    </p>
                  </div>
                </a>

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
                  {/* GitHub */}
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex-shrink-0 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors hover:scale-105 transform"
                    aria-label="GitHub Profile">
                    <Github className="w-6 h-6 text-white" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex-shrink-0 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors hover:scale-105 transform"
                    aria-label="LinkedIn Profile">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>

                  {/* Hire Me */}
                  <a
                    href={LINKS.hireMe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex-shrink-0 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors hover:scale-105 transform"
                    aria-label="Hire Me">
                    <Briefcase className="w-6 h-6 text-white" />
                  </a>
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
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."></textarea>
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
