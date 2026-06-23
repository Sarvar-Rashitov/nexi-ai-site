import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Agents", href: "#agents" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contact", href: "#contact" },
];

function NexiLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nexiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Neural network node connections */}
        <circle cx="18" cy="8" r="2.5" fill="url(#nexiGradient)" opacity="0.8" />
        <circle cx="8" cy="18" r="2.5" fill="url(#nexiGradient)" opacity="0.8" />
        <circle cx="28" cy="18" r="2.5" fill="url(#nexiGradient)" opacity="0.8" />
        <circle cx="18" cy="28" r="2.5" fill="url(#nexiGradient)" opacity="0.8" />
        
        {/* Connection lines */}
        <path d="M18 8 L8 18 L18 28 L28 18 Z" stroke="url(#nexiGradient)" strokeWidth="1.5" fill="none" opacity="0.3" />
        
        {/* Center glow */}
        <circle cx="18" cy="18" r="4" fill="url(#nexiGradient)" opacity="0.9" />
        <circle cx="18" cy="18" r="2" fill="white" />
      </svg>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-card" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-cyan-400 blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              <NexiLogo className="relative" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Nexi<span className="text-gradient-primary ml-1">AI</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#home"
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-white/5"
            >
              Home
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://appnexi.testium.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition px-3 py-1.5"
            >
              Login
            </a>
            <a
              href="https://appnexi.testium.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm font-medium text-white px-5 py-2 rounded-full inline-block"
            >
              Get Started
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden glass-strong mt-2 rounded-2xl p-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm hover:bg-white/5 rounded-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://appnexi.testium.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm font-medium text-white px-5 py-2.5 rounded-full mt-2 text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
