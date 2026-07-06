export interface ProjectItem {
  category: string;
  year: string;
  title: string;
  desc: string;
  tags: string[];
  /** Optional live URL. Editable placeholder — set to a real URL to link out and show "Live ↗". */
  live: string;
}

// Personal projects — placeholder content, edit freely. Set `live` to a URL to link out.
export const PROJECTS: ProjectItem[] = [
  {
    category: "OPEN SOURCE",
    year: "2026",
    title: "Zoho Deluge Toolkit",
    desc: "A library of reusable Deluge helpers for common Zoho Creator patterns.",
    tags: ["Deluge", "Open Source"],
    live: "",
  },
  {
    category: "WEB APP",
    year: "2025",
    title: "Invoice Parser",
    desc: "A FastAPI service that extracts structured line items from messy invoice PDFs.",
    tags: ["FastAPI", "Python"],
    live: "",
  },
  {
    category: "WEB APP",
    year: "2025",
    title: "Habit Board",
    desc: "A small React + TypeScript app for tracking daily habits, built with Vite & zustand.",
    tags: ["React", "TypeScript"],
    live: "",
  },
  {
    category: "TEMPLATE",
    year: "2024",
    title: "Next.js Portfolio Starter",
    desc: "An open, themeable portfolio template built with Next.js and Tailwind.",
    tags: ["Next.js", "Open Source"],
    live: "",
  },
];
