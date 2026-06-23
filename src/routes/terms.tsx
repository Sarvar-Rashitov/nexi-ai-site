import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <div className="dark relative min-h-screen text-foreground">
      <Navbar />
      <main className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="glass-strong rounded-3xl p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using Nexi AI's services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  2. Description of Service
                </h2>
                <p className="mb-4">
                  Nexi AI provides an AI-powered workforce platform that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Autonomous AI sales managers and agents</li>
                  <li>Voice AI capabilities</li>
                  <li>Telegram bot integrations</li>
                  <li>CRM automation tools</li>
                  <li>Lead generation and qualification systems</li>
                  <li>Customer support automation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  3. User Responsibilities
                </h2>
                <p className="mb-4">
                  You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Not misuse or abuse the AI agents or platform</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  4. Payment Terms
                </h2>
                <p className="mb-4">
                  If you subscribe to a paid plan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You agree to pay all fees associated with your subscription</li>
                  <li>Fees are billed in advance on a recurring basis</li>
                  <li>All payments are non-refundable unless required by law</li>
                  <li>We may change pricing with 30 days notice</li>
                  <li>You're responsible for all applicable taxes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  5. Intellectual Property
                </h2>
                <p>
                  All content, features, and functionality of Nexi AI are owned by us and protected by 
                  copyright, trademark, and other intellectual property laws. You may not copy, modify, 
                  or distribute our content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  6. AI-Generated Content
                </h2>
                <p className="mb-4">
                  Regarding AI-generated content:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You retain ownership of your input data</li>
                  <li>AI-generated outputs are provided "as-is"</li>
                  <li>You're responsible for reviewing and validating AI outputs</li>
                  <li>We may use anonymized data to improve our models</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Nexi AI shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  8. Termination
                </h2>
                <p>
                  We may terminate or suspend your account at any time for violations of these terms. 
                  You may cancel your subscription at any time through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  9. Contact
                </h2>
                <p>
                  For questions about these Terms of Service, contact us at legal@nexi.ai
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
