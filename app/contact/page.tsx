import type { Metadata } from "next";
import { LINKEDIN_URL } from "@/lib/social";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact — Akhil Venkatesh",
};

export default function ContactPage() {
  return (
    <section className={`container ${styles.contactSection}`}>
      <div className={`surface ${styles.contactCard}`}>
        <div className={styles.glow} aria-hidden="true"></div>
        <div className="eyebrow">// contact</div>
        <h1 className={styles.title}>Let&rsquo;s build something <span className={styles.accentText}>dependable</span>.</h1>
        <p className={styles.sub}>
          Available for enterprise application work and interesting product problems. The fastest way to
          reach me is email.
        </p>

        <div className={styles.detailGrid}>
          <div className={styles.detailItem}>
            <div className={`mono ${styles.detailLabel}`}>EMAIL</div>
            <a href="mailto:akhiltechwiz@gmail.com" className={styles.detailValue}>akhiltechwiz@gmail.com</a>
          </div>
          <div className={styles.detailItem}>
            <div className={`mono ${styles.detailLabel}`}>LINKEDIN</div>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener" className={styles.detailValue}>/in/aklvn ↗</a>
          </div>
          <div className={styles.detailItem}>
            <div className={`mono ${styles.detailLabel}`}>LOCATION</div>
            <span className={styles.detailValue}>Singapore · GMT+8</span>
          </div>
        </div>
      </div>
    </section>
  );
}
