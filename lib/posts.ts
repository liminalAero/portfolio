import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostFrontmatter {
  title: string;
  subtitle: string;
  date: string;
  read: string;
  order: number;
}

export interface Post extends PostFrontmatter {
  slug: string;
}

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data } = matter(raw);
    return { slug, ...(data as PostFrontmatter) };
  });
  return posts.sort((a, b) => a.order - b.order);
}

export async function getPostBySlug(slug: string): Promise<(Post & { contentHtml: string }) | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);

  return {
    slug,
    ...(data as PostFrontmatter),
    contentHtml: processed.toString(),
  };
}
