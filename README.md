# Portfolio site

A personal portfolio and blog built with [Next.js](https://nextjs.org) (App Router).

## Project structure

```
/
├── app/                  routes (App Router)
│   ├── work/             work listing + [slug] detail pages
│   └── writing/          writing listing + [slug] detail pages (markdown)
├── components/           Nav, Footer
├── content/posts/        markdown blog posts
├── lib/                  data (work.ts, projects.ts) + markdown loader (posts.ts)
└── public/               static assets
```

## Commands

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Install dependencies                        |
| `npm run dev`   | Start local dev server at `localhost:3000`  |
| `npm run build` | Build the production site to `./.next/`     |
| `npm run start` | Serve the production build locally          |
| `npm run lint`  | Run Next.js/ESLint checks                   |

## Adding a blog post

Add a markdown file to `content/posts/` with frontmatter:

```md
---
title: Post title
subtitle: One-line subtitle
date: Mon YYYY
read: N min read
order: 1
---

Post body in markdown.
```

`order` controls sort position on the writing index (lower first).
