import Link from "next/link";
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
          <Link href="/contact" className="mono">LinkedIn ↗</Link>
          <span className={`mono ${styles.footerCopy}`}>© 2026 · Singapore</span>
        </div>
      </div>
    </footer>
  );
}
