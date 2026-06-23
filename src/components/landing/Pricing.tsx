import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    desc: "For solo founders and small teams testing AI automation.",
    features: ["1 AI Sales Agent", "Telegram + Email channels", "Up to 1,000 conversations/mo", "Basic CRM", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$499",
    desc: "For growing teams scaling outbound and inbound at once.",
    features: ["5 AI agents (any role)", "All channels incl. Voice", "25,000 conversations/mo", "Advanced CRM + scoring", "Priority support", "Custom workflows"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For organizations deploying AI workforces at scale.",
    features: ["Unlimited agents", "Dedicated infrastructure", "Unlimited conversations", "Custom integrations", "SLA + dedicated CSM", "On-prem option"],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            Pricing
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Simple, <span className="text-gradient">scalable pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start small. Scale to infinity. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl ${
                p.highlighted
                  ? "p-[1.5px] bg-aurora animate-pulse-glow"
                  : ""
              }`}
            >
              <div
                className={`relative h-full rounded-3xl p-8 ${
                  p.highlighted ? "glass-strong" : "glass"
                }`}
              >
                {p.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-primary text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-display font-semibold text-xl">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground min-h-[40px]">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display font-bold text-5xl text-gradient">
                    {p.price}
                  </span>
                  {p.price !== "Custom" && (
                    <span className="text-sm text-muted-foreground">/month</span>
                  )}
                </div>
                <a
                  href="https://appnexi.testium.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full rounded-full py-3 text-sm font-semibold transition inline-block text-center ${
                    p.highlighted
                      ? "btn-glow text-white"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {p.price === "Custom" ? "Contact Sales" : "Get Started"}
                </a>
                <div className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-[var(--neon-cyan)] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
