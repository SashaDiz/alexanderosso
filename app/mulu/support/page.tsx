import Link from "next/link";

export const metadata = {
  title: "Support — Mulu",
  description: "Get help and support for Mulu, the digital detox journal app.",
};

export default function SupportPage() {
  return (
    <>
      <main className="flex-1 w-full max-w-container px-5 py-12"><div className="glass-strong rounded-card p-6 md:p-8">
        <Link
          href="/mulu"
          className="text-[0.6875rem] text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Mulu
        </Link>

        <h1 className="font-display font-medium text-xl tracking-tight mb-6">
          Support — Mulu
        </h1>

        <div className="space-y-6 text-xs text-muted leading-relaxed">
          <section>
            <h2 className="text-foreground font-display font-medium text-sm mb-2">
              Need Help?
            </h2>
            <p>
              Are you experiencing an issue with Mulu or do you have a question?
              We&apos;re here to help!
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display font-medium text-sm mb-2">
              Contact Us
            </h2>
            <p>
              Send us an email and we&apos;ll get back to you as soon as
              possible:
            </p>
            <p className="mt-2">
              <a
                href="mailto:sashaossito@gmail.com"
                className="text-accent underline hover:opacity-80 transition-opacity"
              >
                sashaossito@gmail.com
              </a>
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-4">
              <li>
                <strong className="text-foreground">Developer:</strong> Aleksandr
                Borisov
              </li>
              <li>
                <strong className="text-foreground">App:</strong> Mulu
              </li>
              <li>
                <strong className="text-foreground">Location:</strong> Argentina
              </li>
            </ul>
            <p className="mt-4">
              We typically respond within 1 to 2 business days.
            </p>
          </section>
        </div>
      </div></main>
    </>
  );
}
