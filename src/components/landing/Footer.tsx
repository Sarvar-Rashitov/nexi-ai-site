import { Linkedin, Facebook, Send, Github } from "lucide-react";

function NexiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nexiGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Neural network node connections */}
        <circle cx="18" cy="8" r="2.5" fill="url(#nexiGradientFooter)" opacity="0.8" />
        <circle cx="8" cy="18" r="2.5" fill="url(#nexiGradientFooter)" opacity="0.8" />
        <circle cx="28" cy="18" r="2.5" fill="url(#nexiGradientFooter)" opacity="0.8" />
        <circle cx="18" cy="28" r="2.5" fill="url(#nexiGradientFooter)" opacity="0.8" />
        
        {/* Connection lines */}
        <path d="M18 8 L8 18 L18 28 L28 18 Z" stroke="url(#nexiGradientFooter)" strokeWidth="1.5" fill="none" opacity="0.3" />
        
        {/* Center glow */}
        <circle cx="18" cy="18" r="4" fill="url(#nexiGradientFooter)" opacity="0.9" />
        <circle cx="18" cy="18" r="2" fill="white" />
      </svg>
    </div>
  );
}

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
    href: "https://t.me/sarvars_chanel",
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

const cols = [
  { title: "Product", links: ["Features", "AI Agents", "Pricing", "Integrations", "Changelog"] },
  { title: "Legal", links: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ] },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-3xl p-10 lg:p-14">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <NexiLogo />
                <span className="font-display text-2xl font-bold tracking-tight">
                  Nexi<span className="text-gradient-primary ml-1">AI</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
                The AI workforce platform for ambitious sales, support and operations
                teams. Run your growth engine on autopilot.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex items-center gap-2 glass rounded-full p-1.5 max-w-sm"
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  className="btn-glow rounded-full p-2.5 text-white"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-6 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-9 w-9 rounded-full glass flex items-center justify-center hover:border-white/20 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              {cols.map((c) => (
                <div key={c.title}>
                  <div className="text-xs uppercase tracking-wider text-foreground font-semibold mb-4">
                    {c.title}
                  </div>
                  <ul className="space-y-2.5">
                    {c.links.map((l) => (
                      <li key={typeof l === 'string' ? l : l.name}>
                        <a
                          href={typeof l === 'string' ? '#' : l.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition"
                        >
                          {typeof l === 'string' ? l : l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nexi AI Inc. — All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Made with ✦ for the AI-native era
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
