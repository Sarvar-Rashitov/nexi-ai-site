import { Inbox, Brain, Database, MessageSquare, Repeat, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Inbox, title: "Lead comes in", desc: "From any channel — web, ads, Telegram, voice." },
  { icon: Brain, title: "AI Qualification", desc: "Intent, fit and budget scored in seconds." },
  { icon: Database, title: "CRM Save", desc: "Enriched, deduped and pushed into your pipeline." },
  { icon: MessageSquare, title: "AI Conversation", desc: "Multi-channel, human-grade dialogue at scale." },
  { icon: Repeat, title: "Follow-Up", desc: "Adaptive sequences across the entire lifecycle." },
  { icon: CheckCircle2, title: "Conversion", desc: "Deal closed, handed off, and reported instantly." },
];

export function HowItWorks() {
  return (
    <section id="solutions" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">
            How it works
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            From lead to revenue — <span className="text-gradient">on autopilot</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)] to-transparent opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto mb-5 h-24 w-24">
                  <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-xl rounded-full" />
                  <div className="relative h-24 w-24 rounded-2xl glass-strong flex items-center justify-center border border-white/10">
                    <s.icon className="h-8 w-8 text-[var(--neon-cyan)]" />
                    <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
