import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import styles from "./page.module.css";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return { title: post ? `${post.title} — Akhil Venkatesh` : "Writing — Akhil Venkatesh" };
}

export default async function WritingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(i + 1) % posts.length];

  return (
    <>
      <article className={`container-article ${styles.headerSection}`}>
        <Link href="/writing" className={`mono ${styles.backLink}`}>← Writing</Link>
        <div className={`mono ${styles.postMeta}`}>
          <span>{post.date}</span><span className={styles.dotSep}>·</span><span className={styles.faintText}>{post.read}</span>
        </div>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.subtitle}>{post.subtitle}</p>
      </article>

      <div className={`container-article ${styles.bodySection}`}>
        <div className={styles.bodyInner} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>

      <div className={`container-article ${styles.authorSection}`}>
        <div className={styles.authorRow}>
          <div className={styles.authorAvatar}>A</div>
          <div>
            <div className={styles.authorName}>Akhil Venkatesh</div>
            <div className={styles.authorRole}>Enterprise Application Developer · Singapore</div>
          </div>
        </div>
      </div>

      <section className={`container-article ${styles.nextSection}`}>
        <Link href={`/writing/${next.slug}`} className={`surface ${styles.nextCard}`}>
          <div>
            <div className={`mono ${styles.nextLabel}`}>NEXT POST</div>
            <div className={styles.nextTitle}>{next.title}</div>
          </div>
          <span className={`btn btn-primary ${styles.nextBtn}`}>Read →</span>
        </Link>
      </section>
    </>
  );
}
