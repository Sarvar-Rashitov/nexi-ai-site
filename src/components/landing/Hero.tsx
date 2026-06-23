import { ArrowRight, Play, Sparkles, TrendingUp, MessageSquare, Zap } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Pill */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            <span className="text-muted-foreground">
              Introducing Nexi — Autonomous AI Sales Workforce
            </span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-center font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Your AI-Powered
          <br />
          <span className="text-gradient">Sales Team</span> of the Future
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Nexi AI deploys autonomous sales managers, voice agents, and CRM
          automations that qualify leads, close deals, and run your business —
          24/7, at superhuman scale.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
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
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium hover:bg-white/5 transition"
          >
            <Play className="h-4 w-4 text-[var(--neon-cyan)]" />
            Watch Demo
          </a>
        </div>

        {/* Social Links */}
        <div
          className="mt-8 animate-fade-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          <SocialLinks />
        </div>

        {/* Dashboard preview */}
        <div
          className="relative mx-auto mt-20 max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          {/* Glow */}
          <div className="absolute -inset-x-10 -inset-y-10 bg-gradient-primary opacity-30 blur-3xl rounded-full" />

          <div className="relative gradient-border rounded-2xl p-3 sm:p-4 shadow-card">
            <div className="relative rounded-xl overflow-hidden bg-[oklch(0.1_0.03_280)] border border-white/5">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.2_25)]" />
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.78_0.18_75)]" />
                  <span className="h-3 w-3 rounded-full bg-[oklch(0.72_0.2_145)]" />
                </div>
                <div className="text-xs text-muted-foreground font-mono">
                  nexi.ai/dashboard
                </div>
                <div className="text-xs text-muted-foreground hidden sm:block">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 p-4">
                {/* Sidebar */}
                <div className="col-span-3 hidden lg:flex flex-col gap-2">
                  {["Pipeline", "Conversations", "Agents", "Analytics", "Settings"].map(
                    (i, idx) => (
                      <div
                        key={i}
                        className={`text-xs px-3 py-2 rounded-lg ${
                          idx === 0
                            ? "bg-gradient-primary text-white"
                            : "text-muted-foreground hover:bg-white/5"
                        }`}
                      >
                        {i}
                      </div>
                    ),
                  )}
                </div>

                {/* Main */}
                <div className="col-span-12 lg:col-span-9 space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Pipeline", value: "$2.4M", icon: TrendingUp, accent: "var(--neon-cyan)" },
                      { label: "Conversations", value: "12,847", icon: MessageSquare, accent: "var(--neon-purple)" },
                      { label: "Conversion", value: "34.2%", icon: Zap, accent: "var(--neon-pink)" },
                    ].map((s) => (
                      <div key={s.label} className="glass rounded-xl p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-muted-foreground">
                            {s.label}
                          </span>
                          <s.icon className="h-3 w-3" style={{ color: s.accent }} />
                        </div>
                        <div className="mt-1 font-display text-lg sm:text-xl font-bold">
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="glass rounded-xl p-4 h-40 relative overflow-hidden">
                    <div className="text-xs text-muted-foreground mb-2">
                      Revenue · Last 30 days
                    </div>
                    <svg viewBox="0 0 400 100" className="w-full h-24" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="oklch(0.65 0.27 295)" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="oklch(0.65 0.27 295)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 C50,60 80,70 120,50 C160,30 200,55 240,35 C280,20 320,40 360,15 L400,10 L400,100 L0,100 Z"
                        fill="url(#grad)"
                      />
                      <path
                        d="M0,80 C50,60 80,70 120,50 C160,30 200,55 240,35 C280,20 320,40 360,15 L400,10"
                        fill="none"
                        stroke="oklch(0.82 0.16 200)"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Chat */}
                  <div className="glass rounded-xl p-3 space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-white" />
                      </div>
                      <div className="text-xs glass rounded-lg px-3 py-2 max-w-md">
                        New lead qualified — Acme Corp · 250 employees · Budget confirmed.
                        Booked discovery call for Thursday 2pm.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="hidden md:block absolute -left-6 top-1/4 glass rounded-xl p-3 shadow-card animate-float">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-cyan flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">New conversation</div>
                <div className="text-xs font-medium">Telegram · @sarah_k</div>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block absolute -right-6 top-1/3 glass rounded-xl p-3 shadow-card animate-float-slow"
            style={{ animationDelay: "-2s" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-pink flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Deal closed</div>
                <div className="text-xs font-medium">+$48,000 MRR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
