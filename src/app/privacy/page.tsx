import type { Metadata } from "next";
import { PageHero } from "@/components/page-sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Rysen Growth collects, uses, and protects your information. Last updated November 2024.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <PageHero
        variant="compact"
        eyebrow="LEGAL"
        title="Privacy Policy"
        subtitle="Last updated: November 2024"
        showAmbient={false}
      />

      <article className="legal-body">
        <section>
          <h2>Introduction</h2>
          <p>
            Rysen Growth (“Rysen,” “we,” “us,” or
            “our”) is a marketing services firm headquartered at 1 Campus
            Martius, Suite 200, Detroit, MI 48226. This Privacy Policy explains how we
            collect, use, share, and protect information when you visit rysengrowth.com
            (the “Site”) or engage us as a client.
          </p>
          <p>
            Questions about this policy or your data can be sent to{" "}
            <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Information you provide directly</h3>
          <p>
            When you submit a form on this Site (such as our contact form or free
            audit request), we collect the information you provide, which may include
            your name, email address, phone number, firm or practice name, website
            URL, practice area, monthly revenue range, and any message content.
          </p>
          <h3>Information collected automatically</h3>
          <p>
            We collect standard server log information when you visit the Site,
            including IP address, browser type and version, operating system, referring
            page, pages viewed, and timestamps. We use this for security, analytics,
            and performance monitoring.
          </p>
          <h3>Cookies and similar technologies</h3>
          <p>
            We use first-party cookies for session management and preferences. We may
            use privacy-respecting analytics services (such as Vercel Analytics or
            similar) that do not require third-party tracking cookies. Where additional
            analytics are used, we will disclose them here.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and provide the services you request.</li>
            <li>To deliver free audits and related deliverables.</li>
            <li>To improve our Site, services, and client experience.</li>
            <li>
              To send occasional communications about our services. You may opt out
              of these communications at any time using the unsubscribe link in our
              emails or by contacting us.
            </li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section>
          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We share information only in
            these limited circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers.</strong> We use third-party providers for
              email delivery, hosting, form processing, and analytics. These providers
              process information only on our behalf and under contractual
              obligations.
            </li>
            <li>
              <strong>Legal requirements.</strong> We may disclose information if
              required by law, court order, or to protect the rights, property, or
              safety of Rysen, our clients, or others.
            </li>
            <li>
              <strong>Business transfers.</strong> If Rysen is involved in a merger,
              acquisition, or sale of assets, information may be transferred as part
              of that transaction.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain information for as long as necessary to fulfill the purposes
            described in this policy, comply with our legal obligations, resolve
            disputes, and enforce our agreements. Inquiries we choose not to pursue
            are typically deleted within twelve months.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct,
            delete, or restrict our use of your personal information, and to object to
            processing or request portability. To exercise any of these rights, email{" "}
            <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>.
          </p>
          <h3>California residents (CCPA/CPRA)</h3>
          <p>
            California residents have the right to know what categories of personal
            information we collect, to request deletion, to correct inaccurate
            information, and to opt out of the sale or sharing of personal information.
            We do not sell personal information.
          </p>
          <h3>EEA/UK residents (GDPR)</h3>
          <p>
            If you are in the European Economic Area or the United Kingdom, you have
            rights under the General Data Protection Regulation, including the right
            to lodge a complaint with your supervisory authority.
          </p>
        </section>

        <section>
          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to
            protect information we process. No system is perfectly secure, and we
            cannot guarantee absolute security of information transmitted over the
            internet.
          </p>
        </section>

        <section>
          <h2>Children’s Privacy</h2>
          <p>
            The Site is not directed to children under 13, and we do not knowingly
            collect personal information from children under 13. If you believe we
            have, contact us and we will delete the information.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will revise
            the “Last updated” date at the top of this page. Material
            changes will be communicated through the Site or by email where
            appropriate.
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
            <a href="mailto:marketing@rysengrowth.com">marketing@rysengrowth.com</a>
            <br />
            <a href="tel:+12484066223">(248) 406-6223</a>
          </address>
        </section>
      </article>
    </main>
  );
}
