import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About — Akhil Venkatesh",
};

const whatIDo = [
  {
    title: "Application development",
    desc: "End-to-end Zoho Creator & React apps, owned from spec to deployment.",
  },
  {
    title: "Data & integrations",
    desc: "Pipelines, ETL migrations and third-party integrations that just work.",
  },
  {
    title: "Interface & UX",
    desc: "Responsive, cross-device UI with Figma, Tailwind & shadcn.",
  },
];

const experience = [
  {
    title: "Zoho Developer",
    org: "Heylo Housing · Remote",
    dates: "Dec 2025 — Present",
    bullets: [
      "Architected cross-organizational data synchronization with automated Zoho Books scripts for real-time vendor replication.",
      "Led end-to-end data migration & ETL of complex legacy financial data with 100% integrity.",
      "Engineered third-party integrations connecting Zoho Analytics & Creator to FloQast, automating closing cycles.",
      "Delivered full-stack business modules and workflows in Deluge, digitising manual operations.",
    ],
  },
  {
    title: "Senior App Developer",
    org: "Zoho Corporation · Chennai",
    dates: "Apr 2022 — Jul 2025",
    bullets: [
      "Designed, built & deployed custom Zoho Creator applications with full-lifecycle ownership.",
      "Used Figma, React.js & modern web tech to ship responsive, cross-device interfaces.",
      "Enhanced functionality with Deluge scripting and custom performance logic.",
      "Mentored junior developers, raising code quality and adherence to standards.",
    ],
  },
  {
    title: "Technical Support Engineer",
    org: "Zoho Corporation · Chennai",
    dates: "Feb 2018 — Mar 2022",
    bullets: [
      "Supported cloud products (Zoho Invoice & Subscriptions) over phone, email & chat with timely resolutions.",
      "Ran product demos and webinars, lifting customer engagement and driving sales growth.",
    ],
  },
];

const facts = [
  { label: "Location", value: "Singapore" },
  { label: "Experience", value: "7+ years" },
  { label: "Focus", value: "Zoho · React" },
  { label: "Currently", value: "Heylo Housing" },
];

export default function AboutPage() {
  return (
    <>
      <section className={`section ${styles.introSection}`}>
        <div className={styles.introHeader}>
          <div className={styles.portraitSlotSmall}>
            <Image
              src="/akhil.jpg"
              alt="Akhil Venkatesh"
              fill
              sizes="188px"
              className={styles.portraitImage}
              priority
            />
          </div>
          <div>
            <div className="eyebrow">// about</div>
            <h1 className={styles.introTitle}>Seven years turning tangled operations into calm software.</h1>
            <a href="/AkhilV_resume.pdf" target="_blank" className={`btn btn-secondary ${styles.resumeBtn}`}>
              Download résumé ↓
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`section-top-rule ${styles.introGrid}`}>
          <div>
            <p className={styles.lead}>
              I&rsquo;ve spent most of my career deep inside the Zoho ecosystem, with a modern front end in React and
              TypeScript — building scalable, user-centred applications for teams across housing, finance and
              SaaS.
            </p>
            <p className={styles.bodyText}>
              My work runs the full application lifecycle: architecting cross-organizational data pipelines,
              migrating complex legacy data with zero loss, and shaping the responsive interfaces people rely
              on every day.
            </p>
            <p className={styles.bodyText}>
              I care about the unglamorous parts — the automations that quietly remove manual work — as much as
              the parts you can see. Good internal tools deserve product-grade craft.
            </p>
          </div>
          <div className={styles.factsList}>
            {facts.map((f) => (
              <div className={styles.factRow} key={f.label}>
                <span className={`mono ${styles.factLabel}`}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section className="section">
        <div className={`section-top-rule ${styles.experienceHeading}`}>
          <span className={styles.headingDot}></span>
          <h2 className="section-heading" style={{ margin: 0 }}>Experience</h2>
        </div>
        <div>
          {experience.map((role, i) => (
            <div
              className={`${styles.roleRow} ${i === experience.length - 1 ? styles.roleRowLast : ""}`}
              key={role.title}
            >
              <div>
                <div className={styles.roleTitle}>{role.title}</div>
                <div className={styles.roleOrg}>{role.org}</div>
                <div className={`mono ${styles.roleDates}`}>{role.dates}</div>
              </div>
              <ul className={styles.roleBullets}>
                {role.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading section-top-rule">Education</h2>
        <div className={`surface ${styles.educationCard}`}>
          <div>
            <div className={styles.eduTitle}>B.Tech, Computer Science</div>
            <div className={styles.eduOrg}>Hindustan University · OMR, India</div>
          </div>
          <span className={`mono ${styles.eduDates}`}>Jun 2014 — Jul 2018</span>
        </div>
      </section>
    </>
  );
}
