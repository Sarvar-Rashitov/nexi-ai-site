import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/cookies")({
  component: CookiePolicy,
});

function CookiePolicy() {
  return (
    <div className="dark relative min-h-screen text-foreground">
      <Navbar />
      <main className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="glass-strong rounded-3xl p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Types of Cookies We Use
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Essential Cookies
                    </h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable core 
                      functionality such as security, authentication, and session management. The website 
                      cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Analytics Cookies
                    </h3>
                    <p>
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously. This helps us improve our services and user experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Functionality Cookies
                    </h3>
                    <p>
                      These cookies allow the website to remember choices you make and provide enhanced, 
                      more personalized features. They may also be used to provide services you have 
                      requested, such as watching a video or commenting on content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Marketing Cookies
                    </h3>
                    <p>
                      These cookies track your online activity to help advertisers deliver more relevant 
                      advertising or to limit how many times you see an ad. They may be set by us or by 
                      third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Third-Party Cookies
                </h2>
                <p className="mb-4">
                  We use third-party services that may set cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Google Analytics - for website analytics</li>
                  <li>Stripe - for payment processing</li>
                  <li>Cloudflare - for security and performance</li>
                  <li>Social media platforms - for sharing features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Managing Cookies
                </h2>
                <p className="mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browser settings - Most browsers allow you to refuse or accept cookies</li>
                  <li>Browser extensions - Use privacy-focused browser extensions</li>
                  <li>Third-party tools - Use opt-out tools provided by advertising networks</li>
                  <li>Mobile settings - Adjust privacy settings on your mobile device</li>
                </ul>
                <p className="mt-4">
                  Please note that blocking certain cookies may impact your experience on our website 
                  and limit the functionality available to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Cookie Retention
                </h2>
                <p>
                  Cookies are retained for different periods depending on their purpose:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Session cookies - Deleted when you close your browser</li>
                  <li>Persistent cookies - Remain for a predetermined period or until manually deleted</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Updates to This Policy
                </h2>
                <p>
                  We may update this Cookie Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Contact Us
                </h2>
                <p>
                  If you have questions about our use of cookies, please contact us at privacy@nexi.ai
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
