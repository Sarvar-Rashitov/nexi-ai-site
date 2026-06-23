import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="dark relative min-h-screen text-foreground">
      <Navbar />
      <main className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="glass-strong rounded-3xl p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information you provide directly to us, including when you create an account, 
                  use our services, or communicate with us. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Company name and business information</li>
                  <li>Payment and billing information</li>
                  <li>Usage data and preferences</li>
                  <li>Communications with our AI agents</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our AI-powered services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Train and improve our AI models</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  3. Data Sharing and Disclosure
                </h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect rights, property, and safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p>
                  We implement industry-standard security measures to protect your information. 
                  However, no system is completely secure, and we cannot guarantee absolute security 
                  of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  5. Your Rights
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and receive a copy of your data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  6. Contact Us
                </h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us at privacy@nexi.ai
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
