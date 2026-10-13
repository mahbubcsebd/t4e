import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(lang = 'en') {
  const langDir = path.join(contentDirectory, lang);
  if (!fs.existsSync(langDir)) return [];
  return fs.readdirSync(langDir).filter(file => file.endsWith('.md'));
}

export const SLUG_ALIASES = {
  'think-design-redefining-ai-coding-harness': 'white-paper-think-design-redefining-the-ai-coding-harness-for-enterprise-software-development',
  'one-spec-every-agent-think4ever-mcp': 'one-spec-every-agent-unifying-the-agentic-developer-ecosystem-via-think4ever-and-mcp',
};

export function getPostBySlug(slug, lang = 'en') {
  const realSlug = slug.replace(/\.md$/, '');
  const targetSlug = SLUG_ALIASES[realSlug] || realSlug;
  const fullPath = path.join(contentDirectory, lang, `${targetSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id: realSlug,
    slug: realSlug,
    canonicalSlug: targetSlug,
    lang,
    content,
    ...data,
  };
}

export function getAllPosts(lang = 'en') {
  const slugs = getPostSlugs(lang);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, lang))
    .filter(Boolean)
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  return posts;
}
