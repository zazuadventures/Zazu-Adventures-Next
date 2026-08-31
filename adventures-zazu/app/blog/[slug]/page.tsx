import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

function ArticleStructuredData({
  post,
}: {
  post: {
    title: string;
    excerpt: string;
    slug: string;
    author: string;
    publishedAt: string;
  };
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(post.publishedAt));

  return (
    <>
      <ArticleStructuredData post={post} />
      <section className="border-b border-border bg-surface-soft">
        <Container>
          <div className="py-6">
            <Breadcrumbs
              items={[
                { label: "Travel Journal", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>

          <div className="max-w-4xl py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {post.category}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-8 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
          </div>
        </Container>
      </section>

      <article className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-7 text-lg leading-8 text-muted-foreground">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
