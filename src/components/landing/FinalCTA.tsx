import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Aurora background inside CTA */}
          <div className="absolute inset-0 bg-aurora opacity-30 animate-aurora" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[var(--neon-purple)] blur-3xl opacity-40 animate-float-slow" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[var(--neon-cyan)] blur-3xl opacity-40 animate-float" />

          <div className="relative glass-strong rounded-3xl px-6 py-20 sm:py-24 text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" />
              Launch in under 24 hours
            </div>
            <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
              Build Your <span className="text-gradient">AI Sales Team</span>
              <br />
              Today
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Join 500+ teams running their growth on autopilot. Your first agent goes
              live tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://appnexi.testium.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://appnexi.testium.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition"
              >
                <Calendar className="h-4 w-4 text-[var(--neon-cyan)]" />
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
