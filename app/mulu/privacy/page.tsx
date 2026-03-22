import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Mulu",
  description:
    "Privacy Policy for Mulu, the digital detox journal app by Aleksandr Borisov.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-10">Last Updated: March 22, 2026</p>

        <div className="space-y-8 text-base text-muted leading-relaxed">
          {/* Introduction */}
          <section>
            <p>
              Mulu (&quot;we,&quot; &quot;our,&quot; or &quot;the App&quot;) is a
              journaling and mindfulness application developed by Aleksandr
              Borisov. We are committed to protecting your privacy and being
              transparent about how we handle your data.
            </p>
            <p className="mt-3">
              This Privacy Policy explains what information we collect, how we
              use it, and your rights regarding your personal data. By using
              Mulu, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-foreground font-semibold text-base mb-2">
              1.1 Information You Provide
            </h3>
            <p className="mb-3">
              When you use Mulu, you may provide the following information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Profile information:</strong>{" "}
                Your name, date of birth, and gender (provided during onboarding)
              </li>
              <li>
                <strong className="text-foreground">Journal entries:</strong> Your
                written reflections, mood ratings, and emotional descriptions
              </li>
              <li>
                <strong className="text-foreground">Mood data:</strong>{" "}
                Mood-before and mood-after scores recorded with each journal entry
              </li>
              <li>
                <strong className="text-foreground">Preferences:</strong> Journal
                reminder time, snooze duration, writing goal length, selected
                theme
              </li>
              <li>
                <strong className="text-foreground">
                  App blocking selections:
                </strong>{" "}
                The apps and app categories you choose to block (stored as opaque
                tokens — we never see the actual app names)
              </li>
              <li>
                <strong className="text-foreground">Feature requests:</strong>{" "}
                Ideas and votes you submit through the Feature Requests section
              </li>
              <li>
                <strong className="text-foreground">Signature:</strong> A visual
                commitment signature drawn during onboarding
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              1.2 Information Collected Automatically
            </h3>
            <p className="mb-3">
              When you use the App, certain information is collected
              automatically:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">
                  Usage analytics (PostHog):
                </strong>{" "}
                We track anonymized usage patterns such as which onboarding steps
                you complete, journal completion rates, and feature engagement.
                This helps us understand where users encounter difficulties and
                improve the App experience.
              </li>
              <li>
                <strong className="text-foreground">Device information:</strong>{" "}
                Device model, operating system version, app version, and language
                settings — collected as part of standard analytics.
              </li>
              <li>
                <strong className="text-foreground">
                  Subscription data (RevenueCat):
                </strong>{" "}
                Purchase status, subscription type, and transaction identifiers
                are processed by RevenueCat to manage your subscription.
              </li>
              <li>
                <strong className="text-foreground">
                  Application lifecycle events:
                </strong>{" "}
                App opens, background transitions, and session duration.
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              1.3 Information Stored Locally on Your Device
            </h3>
            <p className="mb-3">
              The following data is stored exclusively on your device and is{" "}
              <strong className="text-foreground">
                never transmitted to our servers:
              </strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All journal entries, mood data, and personal reflections</li>
              <li>
                Your profile information (name, date of birth, gender)
              </li>
              <li>Streak history, settings, and preferences</li>
              <li>Signature image</li>
              <li>
                Voice recordings (processed on-device for speech-to-text, then
                immediately discarded — only the transcribed text is saved
                locally)
              </li>
              <li>App blocking selections and Screen Time data</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              2. How We Use Your Information
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-foreground">
                  Providing the service:
                </strong>{" "}
                Storing your journal entries, tracking streaks, managing app
                blocking, and delivering personalized journal prompts.
              </li>
              <li>
                <strong className="text-foreground">Improving the App:</strong>{" "}
                Analyzing anonymized usage patterns to understand user behavior,
                identify issues, and improve the onboarding experience and overall
                functionality.
              </li>
              <li>
                <strong className="text-foreground">
                  Managing subscriptions:
                </strong>{" "}
                Processing and verifying premium subscription purchases through
                RevenueCat and the Apple App Store.
              </li>
              <li>
                <strong className="text-foreground">Community features:</strong>{" "}
                Enabling the Feature Requests system where users can submit and
                vote on ideas (stored in Apple CloudKit).
              </li>
              <li>
                <strong className="text-foreground">Notifications:</strong>{" "}
                Sending local push notifications to remind you to journal at your
                chosen time.
              </li>
              <li>
                <strong className="text-foreground">AI-powered prompts:</strong>{" "}
                Generating personalized journal questions using the Claude API
                (Anthropic). Only your onboarding preferences — not your journal
                entries — are used to generate questions.
              </li>
            </ol>
          </section>

          {/* 3. Third-Party Services */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              3. Third-Party Services
            </h2>
            <p className="mb-4">
              Mulu integrates with the following third-party services, each with
              their own privacy policies:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-foreground font-semibold py-2 pr-4">
                      Service
                    </th>
                    <th className="text-foreground font-semibold py-2 pr-4">
                      Purpose
                    </th>
                    <th className="text-foreground font-semibold py-2">
                      Data Shared
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-2 pr-4">RevenueCat</td>
                    <td className="py-2 pr-4">Subscription management</td>
                    <td className="py-2">
                      Purchase transactions, subscription status
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">PostHog</td>
                    <td className="py-2 pr-4">Product analytics</td>
                    <td className="py-2">
                      Anonymized usage events, device info
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple CloudKit</td>
                    <td className="py-2 pr-4">Feature requests storage</td>
                    <td className="py-2">
                      Feature request titles, descriptions, votes
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Anthropic Claude API</td>
                    <td className="py-2 pr-4">AI journal prompt generation</td>
                    <td className="py-2">
                      Onboarding preferences (no journal content)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple App Store</td>
                    <td className="py-2 pr-4">
                      App distribution &amp; purchases
                    </td>
                    <td className="py-2">Standard App Store data</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple Screen Time API</td>
                    <td className="py-2 pr-4">App blocking functionality</td>
                    <td className="py-2">
                      Opaque app tokens (no app names or usage data leaves the
                      device)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple Speech Framework</td>
                    <td className="py-2 pr-4">Voice-to-text transcription</td>
                    <td className="py-2">
                      Audio is processed entirely on-device; no audio data is
                      transmitted
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Data Retention */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              4. Data Retention
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">
                  Local data (journal entries, profile, settings):
                </strong>{" "}
                Retained on your device until you delete the App or clear its
                data. You can archive or permanently delete individual entries
                within the App at any time.
              </li>
              <li>
                <strong className="text-foreground">
                  Analytics data (PostHog):
                </strong>{" "}
                Anonymized event data is retained for up to 12 months, after
                which it is automatically purged.
              </li>
              <li>
                <strong className="text-foreground">
                  Subscription data (RevenueCat):
                </strong>{" "}
                Retained for the duration of your subscription and in accordance
                with RevenueCat&apos;s data retention policy.
              </li>
              <li>
                <strong className="text-foreground">
                  Feature requests (CloudKit):
                </strong>{" "}
                Retained in Apple&apos;s CloudKit infrastructure until you delete
                them or the feature is discontinued.
              </li>
              <li>
                <strong className="text-foreground">
                  AI prompt data (Anthropic):
                </strong>{" "}
                Requests to the Claude API are not stored by Anthropic beyond the
                processing window, as per their data retention policy.
              </li>
            </ul>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              5. Data Security
            </h2>
            <p className="mb-3">
              We take the security of your data seriously:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Local encryption:</strong>{" "}
                Journal entries and personal data are stored in the iOS app
                sandbox, protected by the device&apos;s built-in encryption.
              </li>
              <li>
                <strong className="text-foreground">Transit encryption:</strong>{" "}
                All network communications use HTTPS/TLS encryption.
              </li>
              <li>
                <strong className="text-foreground">
                  No central database:
                </strong>{" "}
                Your personal journal data never leaves your device. There is no
                central server storing your entries.
              </li>
              <li>
                <strong className="text-foreground">
                  Minimal data collection:
                </strong>{" "}
                We follow the principle of data minimization — we only collect
                what is necessary to provide and improve the service.
              </li>
              <li>
                <strong className="text-foreground">
                  Screen Time data isolation:
                </strong>{" "}
                App blocking uses Apple&apos;s opaque token system, meaning we
                never have access to the names of blocked apps or any Screen Time
                usage data.
              </li>
            </ul>
            <p className="mt-3">
              While we implement industry-standard security measures, no method
              of electronic storage or transmission is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              6. Your Rights
            </h2>
            <p className="mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">Access:</strong> You can view
                all your data directly within the App (journal entries, profile,
                settings).
              </li>
              <li>
                <strong className="text-foreground">Export:</strong> Premium users
                can export their journal data in JSON or CSV format.
              </li>
              <li>
                <strong className="text-foreground">Deletion:</strong> You can
                delete individual entries (archive or permanent delete), or delete
                all data by uninstalling the App.
              </li>
              <li>
                <strong className="text-foreground">
                  Opt-out of analytics:
                </strong>{" "}
                You can request to opt out of PostHog analytics by contacting us.
              </li>
              <li>
                <strong className="text-foreground">
                  Notification control:
                </strong>{" "}
                You can enable or disable push notifications at any time through
                iOS Settings or within the App.
              </li>
              <li>
                <strong className="text-foreground">
                  Subscription management:
                </strong>{" "}
                You can manage or cancel your subscription through the Apple App
                Store.
              </li>
            </ul>

            <h3 className="text-foreground font-semibold text-base mb-2 mt-6">
              For EU/EEA Residents (GDPR)
            </h3>
            <p className="mb-3">
              If you reside in the European Union or European Economic Area, you
              have additional rights under the General Data Protection Regulation
              (GDPR):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong className="text-foreground">
                  Right to rectification:
                </strong>{" "}
                Request correction of inaccurate personal data.
              </li>
              <li>
                <strong className="text-foreground">Right to erasure:</strong>{" "}
                Request deletion of your personal data.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to portability:
                </strong>{" "}
                Receive your data in a structured, commonly used format.
              </li>
              <li>
                <strong className="text-foreground">
                  Right to restrict processing:
                </strong>{" "}
                Request limitation of how we process your data.
              </li>
              <li>
                <strong className="text-foreground">Right to object:</strong>{" "}
                Object to the processing of your data for specific purposes.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any GDPR rights, please contact us at{" "}
              <a
                href="mailto:support@alexanderosso.com"
                className="text-accent underline hover:opacity-80 transition-opacity"
              >
                support@alexanderosso.com
              </a>{" "}
              with the subject line &quot;GDPR Request.&quot; We will respond
              within 30 days.
            </p>
            <p className="mt-2">
              You also have the right to lodge a complaint with your local data
              protection authority.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Mulu is not intended for children under the age of 13. We do not
              knowingly collect personal information from children under 13. If
              you are a parent or guardian and believe your child has provided us
              with personal data, please contact us and we will take steps to
              delete such information.
            </p>
            <p className="mt-3">
              Users between 13 and 18 years of age should use the App with
              parental or guardian consent.
            </p>
          </section>

          {/* 8. Push Notifications */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              8. Push Notifications
            </h2>
            <p className="mb-3">
              Mulu uses <strong className="text-foreground">local push notifications only</strong> to remind you
              to journal at your scheduled time. These notifications are:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generated entirely on your device</li>
              <li>
                Not sent through any external push notification service
              </li>
              <li>
                Fully customizable (time, on/off) within the App and iOS Settings
              </li>
            </ul>
            <p className="mt-3">
              We do not use push notifications for marketing or promotional
              purposes.
            </p>
          </section>

          {/* 9. Voice Recording & Speech Recognition */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              9. Voice Recording &amp; Speech Recognition
            </h2>
            <p className="mb-3">
              When you use the voice journaling feature:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Audio is captured by the device microphone and processed{" "}
                <strong className="text-foreground">entirely on-device</strong>{" "}
                using Apple&apos;s Speech Recognition framework.
              </li>
              <li>
                The audio is converted to text in real-time and is{" "}
                <strong className="text-foreground">immediately discarded</strong>{" "}
                after transcription.
              </li>
              <li>
                No audio recordings are stored, transmitted, or shared with any
                third party.
              </li>
              <li>
                Speech recognition uses the language set on your device.
              </li>
            </ul>
          </section>

          {/* 10. App Blocking & Screen Time */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              10. App Blocking &amp; Screen Time
            </h2>
            <p className="mb-3">
              Mulu uses Apple&apos;s Screen Time API (FamilyControls framework)
              to block distracting apps:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                You select which apps to block through Apple&apos;s standard app
                picker.
              </li>
              <li>
                App selections are stored as{" "}
                <strong className="text-foreground">opaque tokens</strong> — we
                cannot see or access the actual names of your apps.
              </li>
              <li>Screen Time data never leaves your device.</li>
              <li>All blocking logic runs locally on your device.</li>
              <li>
                You maintain full control: you can modify blocked apps, use
                snooze, or perform an emergency unlock at any time.
              </li>
            </ul>
          </section>

          {/* 11. Cookies & Tracking */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              11. Cookies &amp; Tracking
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Mulu does <strong className="text-foreground">not</strong> use
                cookies.
              </li>
              <li>
                Mulu does <strong className="text-foreground">not</strong> use
                advertising trackers or share data with ad networks.
              </li>
              <li>
                Mulu does <strong className="text-foreground">not</strong> track
                you across other apps or websites.
              </li>
              <li>
                We do <strong className="text-foreground">not</strong> use IDFA
                (Identifier for Advertisers).
              </li>
              <li>
                PostHog may use similar technologies for analytics purposes
                within the App only.
              </li>
            </ul>
          </section>

          {/* 12. Changes to This Privacy Policy */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="mb-3">
              We may update this Privacy Policy from time to time. When we do:
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
                the updated policy.
              </li>
            </ul>
          </section>

          {/* 13. Contact Us */}
          <section>
            <h2 className="text-accent font-display font-bold text-lg mb-4">
              13. Contact Us
            </h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy
              Policy or your personal data, please contact us:
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
                <strong className="text-foreground">Developer:</strong> Aleksandr Borisov
              </li>
              <li>
                <strong className="text-foreground">App:</strong> Mulu
              </li>
              <li>
                <strong className="text-foreground">Location:</strong> Argentina
              </li>
            </ul>
            <p className="mt-3">
              We aim to respond to all inquiries within 30 days.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
