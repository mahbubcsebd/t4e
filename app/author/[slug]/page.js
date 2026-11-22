import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionCard from "@/components/layout/SectionCard";
import Container from "@/components/layout/Container";
import JsonLd from "@/components/JsonLd";
import { AUTHORS, authorUrl, resolveAuthor } from "@/lib/authors";
import { buildPersonLd } from "@/lib/jsonLd";
import { getAllPosts } from "@/lib/markdown";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const author = AUTHORS[slug];
  if (!author) return {};

  const title = `${author.name}, ${author.jobTitle} at Think4Ever`;
  return {
    title,
    description: author.bio,
    alternates: { canonical: authorUrl(author) },
    openGraph: { title, description: author.bio, type: "profile" },
  };
}

export default async function AuthorPage(props) {
  const { slug } = await props.params;
  const author = AUTHORS[slug];
  if (!author) notFound();

  const posts = getAllPosts("en").filter((post) => resolveAuthor(post.author) === author);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <JsonLd data={buildPersonLd(author)} />
      <Header />
      <main className="flex-grow bg-background py-8 md:py-12 relative z-10">
        <SectionCard>
          <Container className="mx-auto">
            <header className="mb-10 max-w-3xl">
              <p className="text-[11px] font-extrabold tracking-widest uppercase text-muted-foreground mb-3">
                {author.jobTitle}, Think4Ever
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5">
                {author.name}
              </h1>
              <p className="text-[17px] leading-relaxed text-muted-foreground">{author.bio}</p>
              {author.sameAs.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                  {author.sameAs.map((url) => (
                    <li key={url}>
                      <a href={url} rel="me noopener noreferrer" target="_blank" className="text-blue-600 hover:underline">
                        {new URL(url).hostname.replace(/^www\./, "")}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </header>

            <section aria-labelledby="author-posts">
              <h2 id="author-posts" className="text-xl font-bold text-foreground mb-4">
                Articles by {author.name}
              </h2>
              <ul className="divide-y divide-border border-y border-border">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.canonicalSlug || post.slug}/`}
                      className="flex flex-col gap-1 py-4 hover:bg-muted/50 px-2 -mx-2 rounded-md transition-colors"
                    >
                      <span className="font-bold text-foreground">{post.title}</span>
                      <span className="text-[13px] text-muted-foreground">
                        {post.date} · {post.readTime}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </Container>
        </SectionCard>
      </main>
      <Footer />
    </div>
  );
}
