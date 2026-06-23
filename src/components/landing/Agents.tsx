import { Briefcase, LifeBuoy, MessageCircle, Mic, LineChart, Repeat } from "lucide-react";

const agents = [
  { name: "Sales Agent", role: "Closer · Inbound + Outbound", icon: Briefcase, gradient: "from-[var(--neon-purple)] to-[var(--neon-blue)]", desc: "Qualifies, demos and closes deals autonomously." },
  { name: "Support Agent", role: "Tier-1 / Tier-2", icon: LifeBuoy, gradient: "from-[var(--neon-blue)] to-[var(--neon-cyan)]", desc: "Resolves tickets across chat, email and voice." },
  { name: "Telegram Agent", role: "Conversational AI", icon: MessageCircle, gradient: "from-[var(--neon-cyan)] to-[var(--neon-purple)]", desc: "Human-grade chats inside Telegram channels and DMs." },
  { name: "Voice Agent", role: "Phone · Realtime", icon: Mic, gradient: "from-[var(--neon-pink)] to-[var(--neon-purple)]", desc: "Sub-second voice with natural reasoning and empathy." },
  { name: "Analytics Agent", role: "Insights · Reporting", icon: LineChart, gradient: "from-[var(--neon-cyan)] to-[var(--neon-pink)]", desc: "Surfaces revenue insights and forecasts in realtime." },
  { name: "Follow-up Agent", role: "Lifecycle · Retention", icon: Repeat, gradient: "from-[var(--neon-purple)] to-[var(--neon-pink)]", desc: "Nudges, nurtures and reactivates every dormant lead." },
];

export function Agents() {
  return (
    <section id="agents" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-pink)]">
            Meet the workforce
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Six agents. <span className="text-gradient">One unified brain.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each agent is a specialist. Together they form a coordinated AI workforce
            that runs your revenue engine 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((a) => (
            <div
              key={a.name}
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-30 group-hover:opacity-100 transition duration-500`}
              />
              <div className="relative glass-strong rounded-2xl p-6 h-full">
                <div className="flex items-start justify-between">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${a.gradient} p-[1px]`}
                  >
                    <div className="h-full w-full rounded-[10px] bg-[oklch(0.1_0.03_280)] flex items-center justify-center">
                      <a.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <span className="relative flex h-2 w-2 mt-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
                  </span>
                </div>
                <h3 className="mt-6 font-display font-semibold text-xl">{a.name}</h3>
                <p className="mt-1 text-xs text-[var(--neon-cyan)] uppercase tracking-wider">
                  {a.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-[var(--neon-cyan)]">● Online · Learning</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
