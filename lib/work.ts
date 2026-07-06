export interface WorkStat {
  value: string;
  label: string;
}

export interface WorkSection {
  heading: string;
  paragraphs: string[];
}

export interface WorkItem {
  slug: string;
  category: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  summary: string;
  role: string;
  timeline: string;
  live: string;
  stack: string[];
  stats: WorkStat[];
  sections: WorkSection[];
}

export const WORK: WorkItem[] = [
  {
    slug: "cross-org",
    category: "Data Architecture",
    year: "2026",
    title: "Cross-Org Data Sync",
    desc: "Real-time vendor replication across entities in Zoho Books — zero manual re-entry.",
    tags: ["Zoho", "Deluge", "Data"],
    summary:
      "Real-time vendor replication across multiple entities in Zoho Books — one source of truth, and zero manual re-entry.",
    role: "Lead Developer",
    timeline: "Dec 2025 — Present",
    live: "https://example.com/cross-org-sync",
    stack: ["Zoho Books", "Deluge", "Zoho Flow"],
    stats: [
      { value: "Real-time", label: "vendor replication" },
      { value: "Zero", label: "manual re-entry" },
      { value: "Multi-entity", label: "consistency" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Finance teams managed vendors separately in each organization's Zoho Books account. Every new vendor had to be entered by hand in several places, and the records drifted out of sync within days.",
          "Reconciling those differences at month-end was slow, error-prone and entirely manual.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I architected automated scripts within Zoho Books that replicate vendor records across entities the moment they are created or edited — a change in one organization propagates to the others in real time.",
          "The system resolves conflicts, keeps an audit trail, and skips records that already match, so it can run continuously without ever duplicating data.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Vendor data now stays consistent across every entity automatically. The finance team stopped re-keying records, and vendor reconciliation at month-end effectively disappeared.",
        ],
      },
    ],
  },
  {
    slug: "floqast",
    category: "Integrations",
    year: "2025",
    title: "FloQast Integration Pipeline",
    desc: "Connected Zoho Analytics & Creator to FloQast, automating financial closing cycles.",
    tags: ["Zoho", "Integrations"],
    summary:
      "A data pipeline connecting Zoho Analytics and Creator to FloQast — automating the financial close.",
    role: "Integration Developer",
    timeline: "2025",
    live: "",
    stack: ["Zoho Analytics", "Zoho Creator", "FloQast", "REST APIs"],
    stats: [
      { value: "Automated", label: "closing cycles" },
      { value: "Live", label: "reporting sync" },
      { value: "3 systems", label: "one pipeline" },
    ],
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "The monthly close depended on manually exporting data from Zoho and importing it into FloQast. It was repetitive, easy to get wrong, and always landed on the critical path at month-end.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I designed a robust pipeline that connects Zoho Analytics and Creator to FloQast, moving the right data automatically on schedule.",
          "Reporting stays transparent end to end, and the accounting team can trust that FloQast reflects Zoho without anyone lifting a finger.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Closing cycles that used to be manual now run automatically, freeing the team to focus on review instead of data entry.",
        ],
      },
    ],
  },
  {
    slug: "etl",
    category: "Migration",
    year: "2024",
    title: "Legacy → Zoho ETL Migration",
    desc: "Extraction, cleansing & mapping of complex legacy financial data with 100% integrity.",
    tags: ["Data", "Migration"],
    summary:
      "Extract, cleanse and map complex legacy financial data into Zoho Books — with 100% integrity.",
    role: "Migration Lead",
    timeline: "2024",
    live: "",
    stack: ["ETL", "Zoho Books", "Postgres", "Deluge"],
    stats: [
      { value: "100%", label: "data integrity" },
      { value: "Zero", label: "data loss" },
      { value: "Seamless", label: "cut-over" },
    ],
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "Years of financial history lived in a legacy system with inconsistent formats and duplicate records. It all had to land in Zoho Books cleanly, with nothing lost or misattributed.",
        ],
      },
      {
        heading: "The approach",
        paragraphs: [
          "I orchestrated the full extraction, cleansing and mapping of the data, validating every step against the source. Records were normalised, de-duplicated and reconciled before load.",
          "I ran the migration in staged passes so we could verify integrity before committing to the final cut-over.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "The transition was seamless, with 100% data integrity confirmed against the legacy records. The business moved to Zoho Books without missing a single transaction.",
        ],
      },
    ],
  },
  {
    slug: "modules",
    category: "Full-Stack",
    year: "2023",
    title: "Business Modules & Workflows",
    desc: "High-impact modules and custom workflows in Deluge — digitising manual operations.",
    tags: ["Deluge", "Zoho"],
    summary:
      "High-impact custom modules and workflows that digitise manual operations end to end.",
    role: "App Developer",
    timeline: "2022 — 2025",
    live: "",
    stack: ["Deluge", "Zoho Creator", "Zoho Flow"],
    stats: [
      { value: "End-to-end", label: "digitisation" },
      { value: "Custom", label: "business logic" },
      { value: "Faster", label: "operations" },
    ],
    sections: [
      {
        heading: "Context",
        paragraphs: [
          "Several core business processes still ran on spreadsheets and email. They were slow, hard to audit, and didn't scale with the team.",
        ],
      },
      {
        heading: "What I built",
        paragraphs: [
          "I delivered high-impact business modules and custom workflows in Deluge, focused on process optimisation and digitising manual operations.",
          "Each module replaced an ad-hoc process with structured data, clear ownership and automated hand-offs.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Manual operations became reliable digital workflows — faster to run, easier to audit, and ready to scale.",
        ],
      },
    ],
  },
  {
    slug: "interfaces",
    category: "Front-End",
    year: "2022",
    title: "Responsive App Interfaces",
    desc: "Product-grade, cross-device interfaces for Zoho Creator apps with React & shadcn.",
    tags: ["React", "Front-End"],
    summary: "Product-grade, cross-device interfaces for Zoho Creator applications.",
    role: "Front-End Developer",
    timeline: "2022 — 2025",
    live: "",
    stack: ["React", "Figma", "Tailwind", "shadcn", "TypeScript"],
    stats: [
      { value: "Cross-device", label: "by default" },
      { value: "Product-grade", label: "UX" },
      { value: "Design → code", label: "ownership" },
    ],
    sections: [
      {
        heading: "The goal",
        paragraphs: [
          "Internal tools are often treated as second-class. I wanted the Creator apps I built to feel as considered as any consumer product.",
        ],
      },
      {
        heading: "How I worked",
        paragraphs: [
          "Starting in Figma, I designed and then built polished, responsive interfaces with React, Tailwind and shadcn — ensuring they worked cleanly across devices.",
          "I owned the path from design to shipped code, keeping the two in sync as requirements evolved.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Teams got internal apps they actually enjoy using, with interfaces that hold up on any screen.",
        ],
      },
    ],
  },
];

export const WORK_ORDER = WORK.map((p) => p.slug);

export function getWorkItem(slug: string): WorkItem {
  return WORK.find((p) => p.slug === slug) ?? WORK[0];
}

export function getNextWork(slug: string): WorkItem {
  const i = WORK_ORDER.indexOf(slug);
  const nextSlug = WORK_ORDER[(i + 1) % WORK_ORDER.length];
  return getWorkItem(nextSlug);
}
