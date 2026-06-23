import { 
  MessageCircle, 
  Sparkles, 
  MessageSquare, 
  Instagram,
  Mail, 
  CreditCard, 
  Video, 
  Hash,
  Database, 
  FileText, 
  Calendar, 
  Zap,
} from "lucide-react";

const integrations = [
  { name: "Telegram", icon: MessageCircle, color: "from-blue-400 to-blue-600" },
  { name: "OpenAI", icon: Sparkles, color: "from-emerald-400 to-emerald-600" },
  { name: "WhatsApp", icon: MessageSquare, color: "from-green-400 to-green-600" },
  { name: "Instagram", icon: Instagram, color: "from-pink-400 via-purple-400 to-orange-400" },
  { name: "Gmail", icon: Mail, color: "from-red-400 to-red-600" },
  { name: "Stripe", icon: CreditCard, color: "from-indigo-400 to-purple-600" },
  { name: "Zoom", icon: Video, color: "from-blue-500 to-blue-700" },
  { name: "Slack", icon: Hash, color: "from-purple-400 to-pink-500" },
  { name: "HubSpot", icon: Database, color: "from-orange-400 to-orange-600" },
  { name: "Notion", icon: FileText, color: "from-gray-700 to-gray-900" },
  { name: "Calendly", icon: Calendar, color: "from-cyan-400 to-blue-500" },
  { name: "Zapier", icon: Zap, color: "from-orange-500 to-red-500" },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-purple)]">
            Integrations
          </span>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl tracking-tight">
            Plug into your <span className="text-gradient">entire stack</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Native integrations with the tools your team already loves.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {integrations.map((i) => (
            <div
              key={i.name}
              className="group glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 aspect-square hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${i.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <i.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition">
                {i.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
