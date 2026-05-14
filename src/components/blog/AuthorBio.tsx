import Link from "next/link";

export function AuthorBio() {
  return (
    <aside className="author-bio">
      <div className="author-bio-mono">AK</div>
      <div className="author-bio-body">
        <div className="author-bio-name">Written by Art Khan</div>
        <div className="author-bio-role">
          Founder &amp; Managing Partner, Rysen Growth
        </div>
        <p className="author-bio-text">
          Art founded Rysen in 2019 after running growth programs at Salesforce
          and Roku. Rysen is a Detroit-based marketing agency serving 30+ law
          firms and medical practices across the US, focused on revenue
          attribution and AI search visibility.
        </p>
        <Link href="/about" className="author-bio-link">
          More about Rysen <span className="arrow">→</span>
        </Link>
      </div>
    </aside>
  );
}
