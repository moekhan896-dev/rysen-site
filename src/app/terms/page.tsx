import type { Metadata } from "next";
import { PageHero } from "@/components/page-sections/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Rysen Growth website. Last updated November 2024.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <PageHero
        variant="compact"
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Last updated: November 2024"
        showAmbient={false}
      />

      <article className="legal-body">
        <section>
          <h2>Acceptance of Terms</h2>
          <p>
            These Terms of Service (“Terms”) govern your access to and use
            of the rysengrowth.com website (the “Site”), operated by Rysen
            Growth (“Rysen,” “we,” or “us”). By
            accessing or using the Site, you agree to these Terms. If you do not
            agree, do not use the Site.
          </p>
        </section>

        <section>
          <h2>Use of the Site</h2>
          <p>
            You agree to use the Site only for lawful purposes and in a way that does
            not infringe the rights of, restrict, or inhibit anyone else’s use
            of the Site. You agree not to attempt to gain unauthorized access to any
            portion of the Site, to interfere with its operation, or to use automated
            means to scrape or harvest data from it.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on the Site, including text, graphics, logos, images, and
            software, is owned by Rysen Growth or its licensors and is protected by
            U.S. and international copyright, trademark, and other intellectual
            property laws. You may not reproduce, distribute, modify, or create
            derivative works of any content from the Site without our prior written
            permission.
          </p>
        </section>

        <section>
          <h2>User Submissions</h2>
          <p>
            When you submit information to us through forms on the Site, you
            represent that the information is accurate and that you have the right to
            provide it. We may use submitted information consistent with our Privacy
            Policy. We do not claim ownership of personal information you submit, but
            you grant us a non-exclusive, royalty-free license to use any business
            information you provide (such as your firm name and website) for the
            purpose of providing the services you request.
          </p>
        </section>

        <section>
          <h2>Client Engagements</h2>
          <p>
            These Terms govern your use of the Site only. Engagements between Rysen
            Growth and clients are governed by separate written agreements that
            address scope, deliverables, fees, term, confidentiality, and other terms
            specific to that engagement. Nothing on the Site constitutes an offer to
            provide services on any particular terms.
          </p>
        </section>

        <section>
          <h2>Disclaimers</h2>
          <p>
            The Site and its content are provided “as is” without
            warranties of any kind, express or implied, including warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
            Content on the Site is for informational purposes only and does not
            constitute legal, medical, financial, or other professional advice.
            Marketing results vary by firm, market, and execution; we make no guarantee
            of specific outcomes from any service.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Rysen Growth and its
            officers, directors, employees, and agents will not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or for
            any loss of profits, revenue, data, or business opportunities, arising
            out of or related to your use of the Site, even if advised of the
            possibility of such damages.
          </p>
        </section>

        <section>
          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Rysen Growth and its
            representatives from any claim, loss, or expense (including reasonable
            attorneys’ fees) arising out of your use of the Site or violation of
            these Terms.
          </p>
        </section>

        <section>
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Michigan, United
            States, without regard to its conflict of law provisions. Any disputes
            arising under these Terms will be resolved in the state or federal courts
            located in Wayne County, Michigan, and you consent to the jurisdiction of
            those courts.
          </p>
        </section>

        <section>
          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise
            the “Last updated” date at the top of this page. Your
            continued use of the Site after changes are posted constitutes acceptance
            of the revised Terms.
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
