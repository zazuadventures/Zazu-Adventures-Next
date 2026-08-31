import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

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
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
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
      <PageHero
        eyebrow={formattedDate}
        title={post.title}
        image={post.image ?? "/images/experiences/tour-around-zimbabwe-2.png"}
      />
      <article className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-7 text-lg leading-8 text-muted-foreground">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={`${block.text}-${index}`} className="pt-5 text-2xl font-semibold tracking-tight text-foreground">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={`list-${index}`} className="list-disc space-y-2 pl-6 marker:text-primary">
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return <p key={`${block.text}-${index}`}>{block.text}</p>;
              })}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/experiences/day-trips"
                className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Victoria Falls tours
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Plan your Zimbabwe adventure
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 border-t border-border pt-8">
              <Image
                src="/images/general/zazulogo.png"
                alt="Zazu Adventures logo"
                width={56}
                height={56}
                className="size-14 rounded-full border border-border bg-surface object-contain p-1"
              />
              <div>
                <p className="text-sm font-semibold text-accent">
                  Author
                </p>
                <p className="mt-1 text-base font-semibold">{post.author}</p>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
