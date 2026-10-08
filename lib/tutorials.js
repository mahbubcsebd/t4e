import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/tutorials');

export function getTutorialSlugs(lang = 'en') {
  const langDir = path.join(contentDirectory, lang);
  if (!fs.existsSync(langDir)) return [];
  return fs.readdirSync(langDir).filter(file => file.endsWith('.md'));
}

export function getTutorialBySlug(slug, lang = 'en') {
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

export function getAllTutorials(lang = 'en') {
  const slugs = getTutorialSlugs(lang);
  const tutorials = slugs
    .map((slug) => getTutorialBySlug(slug, lang))
    .filter(Boolean)
    // sort tutorials by date in descending order
    .sort((tut1, tut2) => (new Date(tut1.date) > new Date(tut2.date) ? -1 : 1));
  return tutorials;
}
