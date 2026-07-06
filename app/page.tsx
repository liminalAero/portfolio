import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <header className={`container ${styles.hero}`}>
        <div className={styles.heroContent}>
          <div className={styles.availableBadge}>
            <span className={styles.badgeDot}></span>Open to new work
          </div>
          <h1 className={styles.heroTitle}>
            Software teams <span className={styles.accentText}>actually like</span> using.
          </h1>
          <p className={styles.heroSub}>
            I&rsquo;m Akhil — an enterprise application developer with 7 years in the Zoho ecosystem, React &amp;
            TypeScript. I turn messy operations into calm, dependable tools.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/work" className="btn btn-primary">See selected work</Link>
            <Link href="/contact" className="btn btn-secondary">Get in touch</Link>
          </div>
        </div>
        <div className={styles.tagRow}>
          <span className="pill">React · TypeScript</span>
          <span className="pill">Zoho Creator · Deluge</span>
          <span className="pill">FastAPI · Next.js</span>
          <span className="pill">Tailwind · shadcn</span>
          <span className="pill">Postgres · SQLite</span>
        </div>
      </header>

      <section className="section">
        <Link href="/contact" className={`surface ${styles.contactCta}`}>
          <div>
            <div className={styles.ctaTitle}>Have a project in mind?</div>
            <div className={styles.ctaSub}>Available for enterprise application work — let&rsquo;s talk.</div>
          </div>
          <span className={`btn btn-primary ${styles.ctaBtn}`}>Get in touch →</span>
        </Link>
      </section>
    </>
  );
}
