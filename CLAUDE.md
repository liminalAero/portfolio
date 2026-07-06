## Development

Start the dev server with:

```
npm run dev
```

Build and type-check with `npm run build`.

## Documentation

Full documentation: https://nextjs.org/docs

Consult these guides before working on related tasks:

- [Routing (App Router)](https://nextjs.org/docs/app/building-your-application/routing)
- [Server and Client Components](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [Data fetching & static generation](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Styling (CSS Modules, global CSS)](https://nextjs.org/docs/app/building-your-application/styling)
- [Metadata & SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## Project structure

- `app/` — routes (App Router). Each page ships its own `page.module.css` alongside `page.tsx`.
- `components/` — shared `Nav`/`Footer` components.
- `lib/` — data (`work.ts`, `projects.ts`) and the markdown post loader (`posts.ts`).
- `content/posts/` — markdown blog posts (frontmatter: `title`, `subtitle`, `date`, `read`, `order`).
