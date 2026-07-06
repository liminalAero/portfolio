import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ConditionalFooter from "@/components/ConditionalFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akhil Venkatesh — Enterprise Application Developer",
  description: "Akhil Venkatesh — Enterprise Application Developer",
};

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("pf-theme") || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
