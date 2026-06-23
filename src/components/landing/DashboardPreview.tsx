import { Activity, MessageSquare, Users, TrendingUp, Bot, Bell } from "lucide-react";

export function DashboardPreview() {
  return (
    <section id="about" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
              Command center
            </span>
            <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
              A futuristic CRM for the <span className="text-gradient">AI-native era</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every conversation, every pipeline, every voice call — unified in one
              breathtakingly fast dashboard. Watch your AI workforce operate in
              realtime, and step in only when you choose to.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Realtime pipeline with predictive forecasting",
                "Unified inbox across Telegram, WhatsApp, voice and email",
                "Agent activity feed — see what your AI did, instantly",
                "Insights surfaced before you know to ask",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating dashboard collage */}
          <div className="relative h-[520px]">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />

            {/* Main card */}
            <div className="absolute top-0 right-0 w-[88%] glass-strong rounded-2xl p-5 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[var(--neon-cyan)]" />
                  <span className="text-sm font-semibold">Pipeline</span>
                </div>
                <span className="text-xs text-muted-foreground">Live</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { c: "Acme Corp", v: "$48,000", s: "Closing", color: "var(--neon-cyan)" },
                  { c: "Stellar Inc", v: "$22,500", s: "Demo", color: "var(--neon-purple)" },
                  { c: "Quantum Labs", v: "$96,000", s: "Negotiation", color: "var(--neon-pink)" },
                  { c: "Nexus AI", v: "$15,200", s: "Qualified", color: "var(--neon-blue)" },
                ].map((l) => (
                  <div
                    key={l.c}
                    className="flex items-center justify-between text-xs bg-white/5 rounded-lg px-3 py-2"
                  >
                    <span className="font-medium">{l.c}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground">{l.v}</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px]"
                        style={{
                          backgroundColor: `${l.color}20`,
                          color: l.color,
                        }}
                      >
                        {l.s}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat card */}
            <div className="absolute bottom-4 left-0 w-[72%] glass-strong rounded-2xl p-5 shadow-card animate-float">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Nexi Sales Agent</div>
                  <div className="text-[10px] text-[var(--neon-cyan)]">● Typing…</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs bg-white/5 rounded-lg px-3 py-2 max-w-[85%]">
                  Hi Sarah — I noticed your team is scaling outbound. Want me to draft a
                  pilot proposal for next week?
                </div>
                <div className="text-xs bg-gradient-primary rounded-lg px-3 py-2 max-w-[70%] ml-auto text-white">
                  Yes, send it over.
                </div>
              </div>
            </div>

            {/* Stat pills */}
            <div className="absolute top-1/2 -left-2 glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-card animate-float-slow">
              <TrendingUp className="h-4 w-4 text-[var(--neon-cyan)]" />
              <div>
                <div className="text-[10px] text-muted-foreground">Conv. rate</div>
                <div className="text-xs font-bold">+34.2%</div>
              </div>
            </div>
            <div
              className="absolute top-6 -left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-card animate-float"
              style={{ animationDelay: "-3s" }}
            >
              <Users className="h-4 w-4 text-[var(--neon-pink)]" />
              <div>
                <div className="text-[10px] text-muted-foreground">Active leads</div>
                <div className="text-xs font-bold">2,847</div>
              </div>
            </div>
            <div className="absolute bottom-0 right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-card animate-float-slow">
              <Bell className="h-4 w-4 text-[var(--neon-purple)]" />
              <div>
                <div className="text-[10px] text-muted-foreground">Booked today</div>
                <div className="text-xs font-bold">38 demos</div>
              </div>
            </div>
            <div
              className="absolute top-1/3 right-0 glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-card animate-float"
              style={{ animationDelay: "-1.5s" }}
            >
              <MessageSquare className="h-4 w-4 text-[var(--neon-blue)]" />
              <div>
                <div className="text-[10px] text-muted-foreground">Messages/hr</div>
                <div className="text-xs font-bold">1,204</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
