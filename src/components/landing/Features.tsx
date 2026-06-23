import {
  Bot, Send, Database, Repeat, Mic, Target,
  BarChart3, Mail, Headphones, BookOpen,
} from "lucide-react";

const features = [
  { icon: Bot, title: "AI Sales Manager", desc: "Autonomous agents that prospect, qualify and close deals end-to-end.", accent: "var(--neon-purple)" },
  { icon: Send, title: "Telegram AI Userbot", desc: "Human-like conversational AI deployed natively into Telegram.", accent: "var(--neon-blue)" },
  { icon: Database, title: "CRM Automation", desc: "Self-updating pipelines that enrich, route and score every contact.", accent: "var(--neon-cyan)" },
  { icon: Repeat, title: "AI Follow-ups", desc: "Smart sequences that never forget a lead — until they convert.", accent: "var(--neon-pink)" },
  { icon: Mic, title: "Voice AI Agents", desc: "Realtime voice agents that book, qualify and answer calls.", accent: "var(--neon-purple)" },
  { icon: Target, title: "Lead Scoring", desc: "Predictive scoring that ranks the highest-intent leads first.", accent: "var(--neon-cyan)" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Realtime metrics across every channel and every agent.", accent: "var(--neon-blue)" },
  { icon: Mail, title: "AI Outreach", desc: "Hyper-personalized cold sequences powered by deep research.", accent: "var(--neon-pink)" },
  { icon: Headphones, title: "AI Customer Support", desc: "Tier-1 and tier-2 support resolved instantly, around the clock.", accent: "var(--neon-purple)" },
  { icon: BookOpen, title: "AI Knowledge Base", desc: "A learning brain that grows smarter with every interaction.", accent: "var(--neon-cyan)" },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            Capabilities
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Everything you need to <span className="text-gradient">automate growth</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete operating system for AI-driven sales, support and automation —
            built for teams that move at the speed of intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group glass relative rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition duration-500"
                style={{ backgroundColor: f.accent }}
              />
              <div
                className="relative h-11 w-11 rounded-xl flex items-center justify-center mb-4 border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${f.accent}40, transparent)`,
                }}
              >
                <f.icon className="h-5 w-5" style={{ color: f.accent }} />
              </div>
              <h3 className="relative font-display font-semibold text-lg">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
