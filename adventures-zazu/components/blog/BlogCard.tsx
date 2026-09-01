import Image from "next/image";
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
    <article className="group bg-primary/5 rounded-xs">
      <Link
        href={`/blog/${post.slug}`}
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative aspect-video bg-surface-soft">
          <span className="absolute left-4 top-4 z-10 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
            {post.category}
          </span>

          {post.image ? (
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Image coming soon
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <time dateTime={post.publishedAt}>
            <span className="text-sm text-accent font-semibold">
              {formatPublishedDate(post.publishedAt)}
            </span>
          </time>

          <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-lg">
            {post.title}
          </h2>

          <p className="mt-4 line-clamp-4 leading-7 text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
