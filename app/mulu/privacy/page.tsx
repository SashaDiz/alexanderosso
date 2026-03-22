import Link from "next/link";

export const metadata = {
  title: "Mulu — Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="flex-1 w-full max-w-2xl px-6 py-20">
        <Link
          href="/mulu"
          className="text-xs text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to Mulu
        </Link>

        <h1 className="font-display font-bold text-3xl mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-muted leading-relaxed">
          <p>Last updated: March 22, 2026</p>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              1. Information We Collect
            </h2>
            <p>
              Mulu does not collect, store, or share any personal data. The App
              operates entirely on your device.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              2. Analytics
            </h2>
            <p>
              We may use anonymous, aggregated analytics provided by Apple to
              understand general usage patterns. This data cannot be used to
              identify individual users.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              3. Third-Party Services
            </h2>
            <p>
              The App does not integrate with third-party tracking or
              advertising services.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              4. Data Security
            </h2>
            <p>
              Since no personal data is collected, there is no data to secure
              beyond what is handled by your device&apos;s operating system.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              5. Children&apos;s Privacy
            </h2>
            <p>
              The App does not knowingly collect information from children under
              13. The App is suitable for general audiences.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              7. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a
                href="mailto:sashaossito@gmail.com"
                className="text-accent hover:underline"
              >
                sashaossito@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
