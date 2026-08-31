import Link from "next/link";

import type { BlogPost } from "@/types/blog";

type BlogCardProps = {
  post: BlogPost;
};

function formatPublishedDate(publishedAt: string): string {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(publishedAt));
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group border border-border bg-surface">
      <div className="aspect-[16/9] bg-surface-soft">
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Image coming soon
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-muted-foreground">
          <span>{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>
            {formatPublishedDate(post.publishedAt)}
          </time>
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          {post.title}
        </h2>

        <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-6 inline-block text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
