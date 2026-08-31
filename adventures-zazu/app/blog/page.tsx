import type { Metadata } from "next";

import BlogCard from "@/components/blog/BlogCard";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Travel inspiration, destination ideas and planning information from Zazu Adventures.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="border-b border-border bg-surface-soft">
        <Container>
          <div className="py-6">
            <Breadcrumbs items={[{ label: "Travel Journal" }]} />
          </div>

          <div className="max-w-3xl py-16 sm:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Journal
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Ideas for your next journey.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Travel inspiration, destination information and practical ideas
              to help you plan your journey.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No articles are available yet.</p>
          )}
        </Container>
      </section>
    </>
  );
}
