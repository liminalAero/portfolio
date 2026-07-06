import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import { GITHUB_URL } from "@/lib/social";
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
           Hi there, I'm <span className={styles.accentText}>Akhil</span>
          </h1>
          <p className={styles.heroSub}>
            An enterprise application developer with 7 years of product building experience. I turn messy operations into calm, dependable tools.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/work" className="btn btn-primary">See selected work</Link>
            <Link href="/contact" className="btn btn-secondary">Contact me</Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener"
              className={styles.iconBtn}
              aria-label="GitHub"
            >
              <GithubIcon width={20} height={20} />
            </a>
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
    </>
  );
}
