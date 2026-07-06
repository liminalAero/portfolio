import Link from "next/link";
import { GithubIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/social";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <Link href="/" className={styles.footerLogo}>
          <span className={styles.footerDot}></span>Akhil Venkatesh
        </Link>
        <div className={styles.footerLinks}>
          <a href="mailto:akhiltechwiz@gmail.com" className="mono">Email ↗</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener" className="mono">LinkedIn ↗</a>
          <a href={GITHUB_URL} target="_blank" rel="noopener" aria-label="GitHub" className={styles.footerIcon}>
            <GithubIcon width={18} height={18} />
          </a>
          <span className={`mono ${styles.footerCopy}`}>© 2026 · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
