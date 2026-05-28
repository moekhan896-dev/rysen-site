import type { Metadata } from "next";
import { PageHero } from "@/components/page-sections/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

// Session 52 — Cookie Policy.
// NOTE: Starter content. Have legal counsel review before relying on
// it for compliance, especially for EU / UK traffic.

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Rysen Growth uses cookies and similar technologies, and how to manage your preferences.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <main className="legal-page" id="main" tabIndex={-1}>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookies" }]}
        variant="compact"
        eyebrow="Legal"
        title="Cookie Policy"
        subtitle="Last updated: May 2026"
        showAmbient={false}
      />

      <div className="legal-body__breadcrumbs">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Cookies" },
          ]}
        />
      </div>

      <article className="legal-body">
        <section>
          <h2>What cookies are</h2>
          <p>
            Cookies are small text files that a website places on your device
            to remember information between visits. Some are strictly
            necessary for the site to function; others help us understand how
            the site is used. This page explains what we use, why, and how
            you can control them.
          </p>
        </section>

        <section>
          <h2>What we use cookies for</h2>
          <h3>Essential</h3>
          <p>
            These cookies are required for the site to work. They remember
            your cookie-consent choice, keep form submissions functional, and
            secure interactions between your browser and our servers. The
            site will not work properly without them.
          </p>
          <h3>Analytics</h3>
          <p>
            We use privacy-respecting analytics to understand how visitors
            move through the site so we can improve it. We do not run
            advertising cookies, retargeting pixels, or third-party trackers
            that build personal profiles. Analytics events only fire after
            you choose "Accept all" in our consent banner.
          </p>
          <h3>Advertising</h3>
          <p>
            We do not currently use advertising or retargeting cookies. If
            this ever changes, we will update this policy and offer explicit
            consent before enabling them.
          </p>
        </section>

        <section>
          <h2>Specific cookies and services</h2>
          <ul>
            <li>
              <strong>rysen-cookie-consent</strong> — first-party,
              localStorage; stores your consent choice ("essential" or
              "all"). No personal data.
            </li>
            <li>
              <strong>rysen-cookie-consent-at</strong> — first-party,
              localStorage; ISO timestamp of when consent was set.
            </li>
            <li>
              <strong>Vercel Analytics</strong> — third-party, privacy
              friendly. Vercel's analytics do not use cookies or fingerprints
              and do not collect personal information. Conversion events we
              instrument explicitly only fire after "Accept all" is chosen.
              See <a href="https://vercel.com/docs/analytics/privacy-policy">
                Vercel's analytics privacy policy
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2>How to manage cookies</h2>
          <p>
            You can change or withdraw your consent at any time by clearing
            the <code>rysen-cookie-consent</code> entry from your browser's
            local storage and reloading the site; the banner will appear
            again and you can pick a new choice. You can also block or
            delete cookies in your browser settings:
          </p>
          <ul>
            <li>
              <a href="https://support.google.com/chrome/answer/95647">
                Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer">
                Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">
                Edge
              </a>
            </li>
          </ul>
          <p>
            Disabling essential cookies may break parts of the site
            (for example, the contact form). Disabling analytics has no
            effect on functionality.
          </p>
        </section>

        <section>
          <h2>How to change your choice</h2>
          <p>
            We do not currently expose an in-page settings panel. To revisit
            your consent choice, clear <code>rysen-cookie-consent</code> in
            your browser's local storage (devtools → Application → Local
            Storage on Chromium-based browsers) and reload. The banner will
            reappear.
          </p>
        </section>

        <section>
          <h2>Updates to this policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will
            revise the "Last updated" date at the top of this page. Material
            changes will be flagged in our consent banner so you can review
            and choose again.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <address>
            Rysen Growth
            <br />
            1 Campus Martius, Suite 200
            <br />
            Detroit, MI 48226
            <br />
            <a href="mailto:marketing@rysengrowth.com">
              marketing@rysengrowth.com
            </a>
          </address>
        </section>
      </article>
    </main>
  );
}
