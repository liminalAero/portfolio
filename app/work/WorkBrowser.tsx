"use client";

import { useState } from "react";
import Link from "next/link";
import type { WorkItem } from "@/lib/work";
import type { ProjectItem } from "@/lib/projects";
import styles from "./page.module.css";

type Tab = "work" | "projects";

function uniqueTags(items: { tags: string[] }[]): string[] {
  const uniq: string[] = [];
  items.forEach((p) => p.tags.forEach((t) => { if (!uniq.includes(t)) uniq.push(t); }));
  return ["All", ...uniq];
}

export default function WorkBrowser({ work, projects }: { work: WorkItem[]; projects: ProjectItem[] }) {
  const [tab, setTab] = useState<Tab>("work");
  const [tag, setTag] = useState("All");

  const workTags = uniqueTags(work);
  const projectTags = uniqueTags(projects);
  const tags = tab === "work" ? workTags : projectTags;

  function selectTab(next: Tab) {
    setTab(next);
    setTag("All");
  }

  const visibleWork = work.filter((p) => tag === "All" || p.tags.includes(tag));
  const visibleProjects = projects.filter((p) => tag === "All" || p.tags.includes(tag));
  const visibleCount = tab === "work" ? visibleWork.length : visibleProjects.length;

  return (
    <>
      <section className={`section ${styles.headerSection}`}>
        <div className="eyebrow">{tab === "work" ? "// selected work" : "// personal projects"}</div>
        <h1 className={styles.pageTitle}>
          {tab === "work" ? <>Projects I&rsquo;ve shipped end&#8209;to&#8209;end.</> : <>Things I build for fun.</>}
        </h1>
        <p className={styles.pageBlurb}>
          {tab === "work"
            ? "A selection of applications, data pipelines and integrations built across the Zoho ecosystem — owned from spec through deployment."
            : "Side projects, experiments and open-source tools — where I try ideas outside of client work."}
        </p>
      </section>

      <section className={`section ${styles.tabsSection}`}>
        <div className={styles.tabsBar}>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === "work" ? styles.tabBtnActive : ""}`}
            onClick={() => selectTab("work")}
          >
            Work
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${tab === "projects" ? styles.tabBtnActive : ""}`}
            onClick={() => selectTab("projects")}
          >
            Projects
          </button>
        </div>
      </section>

      <section className={`section ${styles.tagSection}`}>
        <div className={styles.tagRow}>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={`${styles.tagPill} ${tag === t ? styles.tagPillActive : ""}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
          <span className={`mono ${styles.countText}`}>
            {visibleCount} {visibleCount === 1 ? "item" : "items"}
          </span>
        </div>
      </section>

      <section className={`section ${styles.gridSection}`}>
        {tab === "work" ? (
          <div className={styles.cardGrid} key={`work-${tag}`}>
            {visibleWork.map((p) => (
              <Link
                href={`/work/${p.slug}`}
                key={p.slug}
                className={`surface fade-in ${styles.card}`}
              >
                <div className={styles.cardBlob}></div>
                <div className={`mono ${styles.cardMeta}`}>{p.category} · {p.year}</div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardTags}>
                  {p.tags.map((t) => <span className="tag-chip" key={t}>{t}</span>)}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.cardGrid} key={`projects-${tag}`}>
            {visibleProjects.map((p) => (
              <a
                href={p.live || "#"}
                key={p.title}
                className={`surface fade-in ${styles.card}`}
              >
                <div className={styles.cardBlob}></div>
                <div className={`mono ${styles.cardMeta}`}>{p.category} · {p.year}</div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.cardTags}>
                  {p.tags.map((t) => <span className="tag-chip" key={t}>{t}</span>)}
                  {p.live && <span className={`mono ${styles.liveTag}`}>Live ↗</span>}
                </div>
              </a>
            ))}
          </div>
        )}

        {visibleCount === 0 && (
          <div className={`mono ${styles.emptyState}`}>
            Nothing tagged &ldquo;{tag}&rdquo; yet.
          </div>
        )}
      </section>
    </>
  );
}
