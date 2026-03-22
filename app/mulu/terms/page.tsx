import Link from "next/link";

export const metadata = {
  title: "Mulu — Terms of Use",
};

export default function TermsPage() {
  return (
    <>
      <main className="flex-1 w-full max-w-2xl px-6 py-20">
        <Link
          href="/mulu"
          className="text-xs text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to Mulu
        </Link>

        <h1 className="font-display font-bold text-3xl mb-8">Terms of Use</h1>

        <div className="space-y-6 text-sm text-muted leading-relaxed">
          <p>Last updated: March 22, 2026</p>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using Mulu (&quot;the App&quot;),
              you agree to be bound by these Terms of Use. If you do not agree,
              do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              2. Use of the App
            </h2>
            <p>
              You may use the App for personal, non-commercial purposes. You
              agree not to misuse the App or use it in any way that violates
              applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content, design, and code in the App are the property of
              Aleksandr Borisov. You may not copy, modify, or distribute any
              part of the App without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              4. Disclaimer
            </h2>
            <p>
              The App is provided &quot;as is&quot; without warranties of any
              kind. We do not guarantee that the App will be error-free or
              uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Aleksandr Borisov shall
              not be liable for any indirect, incidental, or consequential
              damages arising from your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              6. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              App after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">
              7. Contact
            </h2>
            <p>
              If you have questions about these Terms, contact us at{" "}
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
