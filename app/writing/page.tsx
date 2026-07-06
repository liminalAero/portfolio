import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Writing — Akhil Venkatesh",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className={`section ${styles.headerSection}`}>
        <div className="eyebrow">// writing</div>
        <h1 className={styles.pageTitle}>Notes on building.</h1>
        <p className={styles.pageBlurb}>
          Occasional writing on Zoho architecture, Deluge, and giving internal tools the craft usually reserved
          for products.
        </p>
      </section>

      <section className={`section ${styles.listSection}`}>
        <div className={styles.postList}>
          {posts.map((post) => (
            <Link href={`/writing/${post.slug}`} className={styles.postRow} key={post.slug}>
              <span className={`mono ${styles.postDate}`}>{post.date}</span>
              <span>
                <span className={styles.postTitle}>{post.title}</span>
                <span className={styles.postSubtitle}>{post.subtitle}</span>
              </span>
              <span className={`mono ${styles.postRead}`}>{post.read}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
