import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getPostSlugs(lang = 'en') {
  const langDir = path.join(contentDirectory, lang);
  if (!fs.existsSync(langDir)) return [];
  return fs.readdirSync(langDir).filter(file => file.endsWith('.md'));
}

export function getPostBySlug(slug, lang = 'en') {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(contentDirectory, lang, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id: realSlug,
    slug: realSlug,
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
