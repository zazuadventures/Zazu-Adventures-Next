import Link from "next/link";
import { ChevronRight } from "lucide-react";

import BlogCard from "@/components/blog/BlogCard";
import Container from "@/components/ui/Container";
import { getFeaturedBlogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getFeaturedBlogPosts();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="text-md font-semibold  text-accent">
              Travel Journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              Inspiration for your journey.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-10 flex lg:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View all articles
            <ChevronRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
