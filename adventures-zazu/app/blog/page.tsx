import type { Metadata } from "next";

import BlogCard from "@/components/blog/BlogCard";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Travel inspiration, destination ideas and planning information from Zazu Adventures.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Travel Journal"
        title="Ideas for your next journey."
        description="Travel inspiration, destination information and practical ideas to help you plan your journey."
        image="/images/blog/blog-hero.webp"
      />

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
