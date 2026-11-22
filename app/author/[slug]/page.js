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

const PROFILE_LABELS = {
  "linkedin.com": "LinkedIn",
  "x.com": "X",
  "twitter.com": "X",
  "github.com": "GitHub",
  "techcommunity.microsoft.com": "Microsoft Tech Community",
};

function profileLabel(url) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  return PROFILE_LABELS[host] || host;
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
            <header className="mb-12 rounded-3xl border border-border bg-muted/60 px-6 py-10 sm:px-10 md:px-14 md:py-12">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
                <div
                  aria-hidden="true"
                  className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#0B1B3A] text-3xl font-bold tracking-tight text-white md:h-32 md:w-32 md:text-4xl"
                >
                  {getInitials(author.name)}
                </div>
                <div className="max-w-2xl">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    {author.jobTitle} · Think4Ever
                  </p>
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0B1B3A] md:text-5xl">
                    {author.name}
                  </h1>
                  <p className="text-[17px] leading-relaxed text-muted-foreground">{author.bio}</p>
                  {author.sameAs.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {author.sameAs.map((url) => (
                        <li key={url}>
                          <a
                            href={url}
                            rel="me noopener noreferrer"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-semibold text-[#0B1B3A] transition-colors hover:border-[#1D63E0] hover:text-[#1D63E0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D63E0]"
                          >
                            {profileLabel(url)}
                            <span aria-hidden="true">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </header>

            <section aria-labelledby="author-posts">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h2 id="author-posts" className="text-2xl font-extrabold tracking-tight text-foreground">
                  Articles by {author.name}
                </h2>
                <span className="text-sm font-semibold text-muted-foreground">
                  {posts.length} {posts.length === 1 ? "article" : "articles"}
                </span>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <a
                      href={`/blog/${post.canonicalSlug || post.slug}/`}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1D63E0]/40 hover:shadow-lg"
                    >
                      {post.category && (
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1D63E0]">
                          {post.category}
                        </span>
                      )}
                      <span className="text-lg font-bold leading-snug text-foreground group-hover:text-[#1D63E0]">
                        {post.title}
                      </span>
                      <span className="mt-auto pt-2 text-[13px] font-medium text-muted-foreground">
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
