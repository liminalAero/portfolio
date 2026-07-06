"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [

  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

function setTheme(value: string) {
  try {
    localStorage.setItem("pf-theme", value);
  } catch {
    /* localStorage unavailable (private mode / disabled) — attribute still updates for this load */
  }
  document.documentElement.setAttribute("data-theme", value);
}

export default function Nav() {
  const pathname = usePathname();
  const [theme, setThemeState] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setThemeState(current === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  }

  return (
    <div className={styles.navBar}>
      <div className={`container ${styles.navInner}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDot}></span>akhil.dev
        </Link>

        <nav className={styles.navLinks}>
          {links.map((l) => {
            const isActive = pathname === l.href || pathname.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={styles.navLink}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.navControls}>
          <button type="button" className={styles.themeToggle} onClick={toggleTheme}>
            <span className={styles.themeDot}></span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
