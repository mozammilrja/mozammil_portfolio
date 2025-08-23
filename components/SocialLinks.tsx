import { LINKS } from "@/lib/data/links";
import { UserPlus, Github, Linkedin, Mail } from "lucide-react";

interface SocialLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  gradient?: boolean;
}

const SocialLink = ({ href, label, icon, gradient }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl shadow-md transition transform ${
      gradient
        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:scale-105"
        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
    }`}>
    {icon}
    {/* {label} */}
  </a>
);

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      <SocialLink
        href={LINKS.github}
        label="GitHub"
        icon={<Github size={18} />}
      />
      <SocialLink
        href={LINKS.linkedin}
        label="LinkedIn"
        icon={<Linkedin size={18} />}
      />
      <SocialLink
        href={LINKS.emailHref}
        label="Email"
        icon={<Mail size={18} />}
      />
      {/* <SocialLink
        href={LINKS.hireMe}
        label="Hire Me"
        icon={<UserPlus size={18} />}
        gradient
      /> */}
    </div>
  );
}
