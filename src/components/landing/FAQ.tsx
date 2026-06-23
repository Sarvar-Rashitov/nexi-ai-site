import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How quickly can I deploy a Nexi agent?", a: "Most teams have their first agent live in under 24 hours. Our onboarding team handles setup, integrations, and training." },
  { q: "Can the AI sound like my brand?", a: "Yes. Every agent is trained on your tone, playbooks, product knowledge, and historical conversations to feel like a senior member of your team." },
  { q: "Which channels are supported?", a: "Telegram, WhatsApp, Instagram, voice (inbound + outbound), email, web chat, and any custom channel via our API." },
  { q: "Is my data secure?", a: "Yes. SOC 2 Type II, GDPR-compliant, with optional on-prem and EU-only data residency for enterprise customers." },
  { q: "Do I need a CRM already?", a: "No. Nexi includes a fully featured CRM, or it can sync bi-directionally with HubSpot, Salesforce, Pipedrive and others." },
  { q: "What happens if the AI doesn't know an answer?", a: "It seamlessly escalates to a human teammate with full conversation context — no awkward handoffs, no lost leads." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">
            FAQ
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-white/15" : ""
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 text-[var(--neon-cyan)] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
