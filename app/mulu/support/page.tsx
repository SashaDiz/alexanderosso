import Link from "next/link";

export const metadata = {
  title: "Mulu — Support",
};

export default function SupportPage() {
  return (
    <>
      <main className="flex-1 w-full max-w-2xl px-6 py-20">
        <Link
          href="/mulu"
          className="text-xs text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to Mulu
        </Link>

        <h1 className="font-display font-bold text-3xl mb-8">Support</h1>

        <div className="space-y-6 text-sm text-muted leading-relaxed">
          <p>
            Need help with Mulu? We&apos;re here to assist you.
          </p>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              Contact Us
            </h2>
            <p>
              For any questions, bug reports, or feature requests, please email
              us at{" "}
              <a
                href="mailto:sashaossito@gmail.com"
                className="text-accent hover:underline"
              >
                sashaossito@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-foreground font-medium mb-1">
                  How do I get started?
                </h3>
                <p>
                  Download Mulu from the App Store and follow the on-screen
                  instructions to set up the app.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-1">
                  Is Mulu free?
                </h3>
                <p>
                  Please check the App Store listing for the latest pricing
                  information.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-1">
                  I found a bug. How do I report it?
                </h3>
                <p>
                  Send an email to{" "}
                  <a
                    href="mailto:sashaossito@gmail.com"
                    className="text-accent hover:underline"
                  >
                    sashaossito@gmail.com
                  </a>{" "}
                  with a description of the issue and your device model / iOS
                  version.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
