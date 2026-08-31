import Link from "next/link";

import BlogCard from "@/components/blog/BlogCard";
import Container from "@/components/ui/Container";
import { getFeaturedBlogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getFeaturedBlogPosts();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Inspiration for your journey.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Explore travel ideas, destination information and practical
              planning inspiration.
            </p>
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all articles →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
