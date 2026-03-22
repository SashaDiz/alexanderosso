import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Mulu",
  description:
    "Terms of Service for Mulu, the digital detox journal app by Aleksandr Borisov.",
};

export default function TermsPage() {
  return (
    <>
      <main className="flex-1 w-full max-w-3xl px-6 py-20">
        <Link
          href="/mulu"
          className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Mulu
        </Link>

        <h1 className="font-display font-bold text-3xl mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted mb-10">
          Last Updated: March 22, 2026
        </p>

        <div className="space-y-8 text-base text-muted leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, accessing, or using Mulu (&quot;the
              App&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use
              the App.
            </p>
            <p className="mt-3">
              These Terms constitute a legally binding agreement between you
              (&quot;User,&quot; &quot;you&quot;) and Aleksandr Borisov
              (&quot;Developer,&quot; &quot;we,&quot; &quot;our&quot;).
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              2. Description of Service
            </h2>
            <p className="mb-3">
              Mulu is a personal journaling and mindfulness application designed
              to help you build a daily writing habit. The App provides:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Daily journal prompts</strong>{" "}
                tailored to your personal goals and emotional state
              </li>
              <li>
                <strong className="text-foreground">Mood tracking</strong> before
                and after each journal entry to measure emotional shifts
              </li>
              <li>
                <strong className="text-foreground">App blocking</strong> that
                locks selected distracting apps until you complete your daily
                journal entry
              </li>
              <li>
                <strong className="text-foreground">Streak tracking</strong> to
                help you build and maintain a consistent journaling habit
              </li>
              <li>
                <strong className="text-foreground">Voice dictation</strong> for
                hands-free journal entry using on-device speech recognition
              </li>
              <li>
                <strong className="text-foreground">
                  AI-powered question generation
                </strong>{" "}
                using the Claude API to create personalized prompts
              </li>
              <li>
                <strong className="text-foreground">Feature requests</strong>{" "}
                where users can submit and vote on ideas for new features
              </li>
              <li>
                <strong className="text-foreground">Data export</strong>{" "}
                (premium) in JSON and CSV formats
              </li>
              <li>
                <strong className="text-foreground">Premium subscription</strong>{" "}
                with additional analytics, export, and customization features
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              3. Eligibility
            </h2>
            <p>
              You must be at least{" "}
              <strong className="text-foreground">13 years old</strong> (or the
              applicable age of digital consent in your jurisdiction) to use
              Mulu. If you are under 18, you must have the consent of a parent or
              legal guardian.
            </p>
            <p className="mt-3">
              By using the App, you represent that you meet these eligibility
              requirements.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              4. User Account &amp; Data
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">No account required:</strong>{" "}
                Mulu does not require you to create an account. Your data is
                stored locally on your device.
              </li>
              <li>
                <strong className="text-foreground">
                  Apple ID integration:
                </strong>{" "}
                Subscription management and Feature Requests use your Apple ID
                through Apple&apos;s built-in systems (App Store and CloudKit). We
                do not have access to your Apple ID credentials.
              </li>
              <li>
                <strong className="text-foreground">Data ownership:</strong> You
                retain full ownership of all content you create in the App,
                including journal entries, mood data, personal reflections, and
                signatures.
              </li>
              <li>
                <strong className="text-foreground">Data handling:</strong> Your
                data is handled in accordance with our{" "}
                <Link
                  href="/mulu/privacy"
                  className="text-accent underline hover:opacity-80 transition-opacity"
                >
                  Privacy Policy
                </Link>
                .
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              5. License &amp; Usage Restrictions
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              5.1 License Grant
            </h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to use the App for personal, non-commercial purposes on
              devices you own or control, subject to these Terms.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              5.2 Restrictions
            </h3>
            <p className="mb-3">
              You agree <strong className="text-foreground">not</strong> to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Reverse engineer, decompile, disassemble, or attempt to derive
                the source code of the App
              </li>
              <li>
                Modify, adapt, translate, or create derivative works based on the
                App
              </li>
              <li>
                Use the App for any commercial purpose without prior written
                consent
              </li>
              <li>
                Attempt to bypass, disable, or circumvent the app blocking
                functionality through unauthorized means
              </li>
              <li>
                Use automated tools, bots, or scripts to interact with the App
              </li>
              <li>
                Distribute, sublicense, lease, or sell access to the App
              </li>
              <li>
                Use the App to transmit harmful, offensive, or illegal content
              </li>
              <li>
                Impersonate another person or entity while using the App
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the App
                or its related systems
              </li>
              <li>
                Submit false, misleading, or spam content through the Feature
                Requests system
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              6. Subscriptions &amp; Payments
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              6.1 Free &amp; Premium Tiers
            </h3>
            <p>
              Mulu offers both a free tier and a premium subscription (&quot;Mulu
              Premium&quot;). Certain features, including data export and advanced
              analytics, are available exclusively to premium subscribers.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              6.2 Billing
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                All subscription purchases are processed through the{" "}
                <strong className="text-foreground">Apple App Store</strong>.
              </li>
              <li>
                Payment is charged to your Apple ID account at confirmation of
                purchase.
              </li>
              <li>
                Subscriptions{" "}
                <strong className="text-foreground">automatically renew</strong>{" "}
                unless canceled at least{" "}
                <strong className="text-foreground">24 hours before</strong> the
                end of the current billing period.
              </li>
              <li>
                You can manage or cancel your subscription at any time through
                your device&apos;s{" "}
                <strong className="text-foreground">
                  Settings &rarr; Apple ID &rarr; Subscriptions
                </strong>
                .
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              6.3 Price Changes
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>We may change subscription prices at any time.</li>
              <li>
                For existing subscribers, price increases require at least{" "}
                <strong className="text-foreground">
                  30 days&apos; notice
                </strong>{" "}
                and your consent before the new price takes effect.
              </li>
              <li>
                If you do not consent to a price change, your subscription will
                not renew at the new price.
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              6.4 Refunds
            </h3>
            <p>
              Refund requests are handled by Apple in accordance with their App
              Store refund policy. We do not process refunds directly.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              6.5 Free Trial
            </h3>
            <p>
              If a free trial is offered, it begins at the time of subscription
              and converts to a paid subscription at the end of the trial period
              unless canceled at least 24 hours before the trial expires.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              7. App Blocking &amp; Screen Time
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              7.1 Functionality
            </h3>
            <p>
              Mulu uses Apple&apos;s Screen Time API (FamilyControls framework)
              to block selected apps until you complete your daily journal entry.
              This feature is designed to encourage mindful phone usage and is
              entirely optional.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              7.2 User Control
            </h3>
            <p className="mb-3">
              You maintain full control over the app blocking feature at all
              times:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">You choose</strong> which apps
                to block.
              </li>
              <li>
                <strong className="text-foreground">Snooze:</strong> You can
                temporarily pause blocking (up to 2 times per day).
              </li>
              <li>
                <strong className="text-foreground">Emergency Unlock:</strong> You
                can unlock all apps immediately at any time. This resets your
                journaling streak to zero.
              </li>
              <li>
                <strong className="text-foreground">Settings:</strong> You can
                modify blocked apps, blocking schedule, and snooze duration at any
                time.
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              7.3 Disclaimer
            </h3>
            <p className="uppercase text-sm">
              The app blocking feature is provided as a self-improvement tool. We
              do not guarantee that it will prevent access to any particular app
              under all circumstances. The feature relies on Apple&apos;s Screen
              Time API and is subject to its limitations and behavior.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              8. AI-Generated Content
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              8.1 Journal Prompts
            </h3>
            <p>
              Mulu uses the Claude API (by Anthropic) to generate personalized
              journal questions based on your onboarding preferences. These
              prompts are suggestions only.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              8.2 Disclaimer
            </h3>
            <p className="uppercase text-sm">
              AI-generated journal prompts are provided for inspirational and
              reflective purposes only. They do not constitute professional advice
              of any kind, including but not limited to mental health, medical,
              psychological, or therapeutic advice.
            </p>
            <p className="mt-3">
              If you are experiencing a mental health crisis, please contact
              emergency services or a crisis helpline:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong className="text-foreground">International:</strong>{" "}
                Contact your local emergency number
              </li>
              <li>
                <strong className="text-foreground">USA:</strong> 911 (emergency)
                or 988 (Suicide &amp; Crisis Lifeline)
              </li>
              <li>
                <strong className="text-foreground">UK:</strong> 999 (emergency)
                or 116 123 (Samaritans)
              </li>
              <li>
                <strong className="text-foreground">EU:</strong> 112 (emergency)
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              9. Intellectual Property
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              9.1 App Ownership
            </h3>
            <p>
              The App, including its design, code, graphics, animations (Mulu
              mascot), user interface, and all related intellectual property, is
              owned by Aleksandr Borisov and is protected by applicable copyright,
              trademark, and other intellectual property laws.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              9.2 User Content
            </h3>
            <p>
              You retain ownership of all journal entries, mood data,
              reflections, and other content you create within the App. By using
              the Feature Requests feature, you grant us a non-exclusive,
              royalty-free license to use, display, and implement your submitted
              ideas.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              9.3 Feedback
            </h3>
            <p>
              Any feedback, suggestions, or ideas you submit to us (outside of
              journal entries) may be used by us without obligation to you. You
              grant us a perpetual, irrevocable, royalty-free license to use and
              incorporate such feedback.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              10. Disclaimer of Warranties
            </h2>
            <p className="uppercase text-sm mb-3">
              The App is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis, without warranties of any kind, either
              express or implied, including but not limited to implied warranties
              of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p className="uppercase text-sm">We do not warrant that:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2 uppercase text-sm">
              <li>
                The App will be uninterrupted, secure, or error-free
              </li>
              <li>
                The results obtained from the App will be accurate or reliable
              </li>
              <li>Any defects in the App will be corrected</li>
              <li>
                The App will be compatible with all devices or operating system
                versions
              </li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes or limits any rights you may have
              under applicable consumer protection laws that cannot be waived or
              limited by contract.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              11. Limitation of Liability
            </h2>
            <p className="uppercase text-sm mb-3">
              To the maximum extent permitted by applicable law, in no event
              shall Aleksandr Borisov be liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1 uppercase text-sm">
              <li>
                Any indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>
                Any loss of data, journal entries, or streak progress
              </li>
              <li>
                Any loss arising from the app blocking feature not functioning as
                expected
              </li>
              <li>
                Any issues arising from third-party services (RevenueCat,
                PostHog, Anthropic, Apple CloudKit)
              </li>
            </ul>
            <p className="uppercase text-sm mt-3">
              Our maximum aggregate liability shall not exceed the greater of (a)
              &euro;100 or (b) the total amounts you have paid to us in the 12
              months preceding the claim.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">For EU consumers:</strong>{" "}
              Nothing in these Terms affects your statutory rights under EU
              consumer protection law, including Directive 2011/83/EU.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              12. Third-Party Services
            </h2>
            <p>
              The App integrates with third-party services including RevenueCat,
              PostHog, Apple CloudKit, and the Anthropic Claude API. Your use of
              these services is subject to their respective terms and privacy
              policies. We are not responsible for the practices or availability
              of any third-party service.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              13. Modifications to the App &amp; Terms
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              13.1 App Changes
            </h3>
            <p>
              We reserve the right to modify, suspend, or discontinue any feature
              of the App at any time, with or without notice. We will make
              reasonable efforts to notify users of significant changes.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              13.2 Terms Changes
            </h3>
            <p className="mb-3">
              We may update these Terms from time to time. When we do:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                The &quot;Last Updated&quot; date at the top will be revised.
              </li>
              <li>
                For material changes, we will notify you through an in-app
                notice.
              </li>
              <li>
                Continued use of the App after changes constitutes acceptance of
                the updated Terms.
              </li>
              <li>
                If you disagree with the changes, you should stop using the App.
              </li>
            </ul>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              14. Termination
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              14.1 By You
            </h3>
            <p>
              You may stop using the App at any time by deleting it from your
              device. If you have an active subscription, you must cancel it
              separately through Apple&apos;s subscription management.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              14.2 By Us
            </h3>
            <p>
              We may terminate or suspend your access to the App immediately,
              without prior notice, if you violate these Terms. Upon termination,
              your license to use the App is revoked.
            </p>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              14.3 Survival
            </h3>
            <p>
              Sections relating to intellectual property, disclaimers, liability
              limitations, and governing law survive termination of these Terms.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              15. Governing Law &amp; Disputes
            </h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              Aleksandr Borisov operates. Any disputes arising from these Terms or
              the use of the App shall be resolved through good-faith negotiation
              first. If negotiation fails, disputes shall be submitted to the
              competent courts of the Developer&apos;s jurisdiction.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">For EU consumers:</strong> You
              may also use the EU Online Dispute Resolution platform to resolve
              disputes.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              16. Apple App Store Terms
            </h2>
            <p className="mb-3">
              The following additional terms apply to your use of the App through
              the Apple App Store:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                These Terms are between you and Aleksandr Borisov, not Apple. Elki
                Web Design is solely responsible for the App and its content.
              </li>
              <li>
                Apple has no obligation to provide maintenance or support for the
                App.
              </li>
              <li>
                In the event of a failure to conform to any applicable warranty,
                you may notify Apple for a refund of the purchase price (if any).
                Apple has no other warranty obligation.
              </li>
              <li>
                Apple is not responsible for addressing any claims relating to the
                App, including product liability, legal compliance, or
                intellectual property claims.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of these
                Terms and may enforce them.
              </li>
            </ul>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              17. Accessibility
            </h2>
            <p className="mb-3">
              We are committed to making Mulu accessible to all users. The App
              supports:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dynamic Type for adjustable text sizes</li>
              <li>VoiceOver screen reader compatibility</li>
              <li>Dark mode for reduced eye strain</li>
              <li>
                Multiple languages (English, Spanish, Portuguese, Chinese,
                German, French)
              </li>
            </ul>
            <p className="mt-3">
              If you experience accessibility issues, please contact us so we can
              work to address them.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              18. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall remain
              in full force and effect.
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              19. Entire Agreement
            </h2>
            <p>
              These Terms, together with the{" "}
              <Link
                href="/mulu/privacy"
                className="text-accent underline hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Aleksandr Borisov
              regarding your use of the App and supersede all prior agreements.
            </p>
          </section>

          {/* 20 */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              20. Contact Us
            </h2>
            <p>
              If you have questions or concerns about these Terms, please contact
              us:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a
                  href="mailto:support@alexanderosso.com"
                  className="text-accent underline hover:opacity-80 transition-opacity"
                >
                  support@alexanderosso.com
                </a>
              </li>
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
          </section>
        </div>
      </main>
    </>
  );
}
