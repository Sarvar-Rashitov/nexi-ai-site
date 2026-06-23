import { Linkedin, Facebook, Send, Github } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sarvar-rashitov/",
    icon: Linkedin,
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/RashitovSarvar/",
    icon: Facebook,
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Telegram",
    href: "https://t.me/sarvarschanel",
    icon: Send,
    color: "hover:text-[#0088cc]",
  },
  {
    name: "GitHub",
    href: "https://github.com/Sarvar-Rashitov",
    icon: Github,
    color: "hover:text-white",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`h-10 w-10 rounded-full glass flex items-center justify-center hover:border-white/20 transition-all duration-300 ${social.color}`}
          aria-label={social.name}
        >
          <social.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
