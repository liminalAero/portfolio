import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WORK, WORK_ORDER, getWorkItem, getNextWork } from "@/lib/work";
import styles from "./page.module.css";

export function generateStaticParams() {
  return WORK_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const proj = WORK.find((p) => p.slug === slug);
  return { title: proj ? `${proj.title} — Akhil Venkatesh` : "Work — Akhil Venkatesh" };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!WORK_ORDER.includes(slug)) notFound();

  const proj = getWorkItem(slug);
  const next = getNextWork(slug);

  return (
    <>
      <section className={`container-narrow ${styles.headerSection}`}>
        <Link href="/work" className={`mono ${styles.backLink}`}>← Selected work</Link>
        <div className={`mono ${styles.metaEyebrow}`}>{proj.category} · {proj.year}</div>
        <h1 className={styles.title}>{proj.title}</h1>
        <p className={styles.summary}>{proj.summary}</p>
        {proj.live && (
          <div className={styles.liveCta}>
            <a href={proj.live} target="_blank" rel="noopener" className="btn btn-primary">
              <span className={styles.liveDot}></span>View live project ↗
            </a>
          </div>
        )}
      </section>

      <section className={`container-narrow ${styles.metaSection}`}>
        <div className={styles.metaGrid}>
          <div>
            <div className={`mono ${styles.metaLabel}`}>ROLE</div>
            <div className={styles.metaValue}>{proj.role}</div>
          </div>
          <div>
            <div className={`mono ${styles.metaLabel}`}>TIMELINE</div>
            <div className={styles.metaValue}>{proj.timeline}</div>
          </div>
          <div>
            <div className={`mono ${styles.metaLabel}`}>STACK</div>
            <div className={styles.stackTags}>
              {proj.stack.map((tech) => <span className="tag-chip" key={tech}>{tech}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className={`container-narrow ${styles.statsSection}`}>
        <div className={styles.statsGrid}>
          {proj.stats.map((stat) => (
            <div className={`surface ${styles.statCard}`} key={stat.label}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`container-article ${styles.bodySection}`}>
        {proj.sections.map((sec) => (
          <div className={styles.bodyBlock} key={sec.heading}>
            <h2 className={styles.bodyHeading}>{sec.heading}</h2>
            {sec.paragraphs.map((para) => <p className={styles.bodyPara} key={para}>{para}</p>)}
          </div>
        ))}
      </section>

      <section className={`container-narrow ${styles.nextSection}`}>
        <Link href={`/work/${next.slug}`} className={`surface ${styles.nextCard}`}>
          <div>
            <div className={`mono ${styles.nextLabel}`}>NEXT PROJECT</div>
            <div className={styles.nextTitle}>{next.title}</div>
          </div>
          <span className={`btn btn-primary ${styles.nextBtn}`}>View →</span>
        </Link>
      </section>
    </>
  );
}
