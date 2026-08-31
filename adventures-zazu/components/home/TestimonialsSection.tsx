import { ChevronRight } from "lucide-react";
import Link from "next/link";

import Container from "../ui/Container";

export type Testimonial = {
  id: string;
  name: string;
  date: string;
  text: string;
  source: string;
  sourceUrl?: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function ReviewSourceBadge({ source }: { source: string }) {
  const isGoogle = source.toLowerCase() === "google";

  return (
    <div
      className="inline-flex size-7 items-center justify-center rounded-full border-2 border-background bg-white shadow-sm"
      aria-label={`Review published on ${source}`}
      title={source}
    >
      {isGoogle ? (
        <span
          aria-hidden="true"
          className="text-base font-bold leading-none"
          style={{
            background:
              "conic-gradient(from -45deg, #4285f4 0 25%, #34a853 0 50%, #fbbc05 0 75%, #ea4335 0)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          G
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="flex h-4 w-5 items-center justify-center gap-px rounded-full bg-[#34e0a1]"
        >
          <span className="flex size-2 items-center justify-center rounded-full bg-white">
            <span className="size-1 rounded-full bg-[#223441]" />
          </span>
          <span className="flex size-2 items-center justify-center rounded-full bg-white">
            <span className="size-1 rounded-full bg-[#223441]" />
          </span>
        </span>
      )}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-primary/10 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-sm">
      <div className="flex items-center gap-4 border-b border-primary/10 pb-4">
        <div className="relative shrink-0">
          <div
            aria-hidden="true"
            className="inline-flex size-14 items-center justify-center rounded-full bg-primary/5 text-sm font-semibold tracking-[0.08em] text-primary"
          >
            {initials}
          </div>
          <div className="absolute -bottom-1 -right-1">
            <ReviewSourceBadge source={testimonial.source} />
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-foreground">
            {testimonial.sourceUrl ? (
              <a
                href={testimonial.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {testimonial.name}
              </a>
            ) : (
              testimonial.name
            )}
          </h3>
          <div className="mt-1 text-xs text-muted-foreground">
            <span>{testimonial.date}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex-1">
        <p className="max-h-[6.5rem] overflow-y-auto pr-2 text-sm leading-7 text-muted-foreground">
          {testimonial.text}
        </p>
      </div>
    </article>
  );
}

type TestimonialsSectionProps = {
  items?: Testimonial[];
};

export default function TestimonialsSection({
  items = [],
}: TestimonialsSectionProps) {
  const visibleItems = items.slice(0, 6);

  return (
    <section className="py-20 bg-surface sm:py-28">
      <Container>
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div className="max-w-2xl">
            <p className="text-md font-semibold text-accent">
              Guest stories
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              What travellers are saying about Zazu Adventures.
            </h2>
          </div>
          {visibleItems.length ? (
            <Link
              href="/testimonials"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:inline-flex"
            >
              View all testimonials
              <ChevronRight aria-hidden="true" className="size-4" />
            </Link>
          ) : null}
        </div>

        {visibleItems.length ? (
          <>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="mt-10 flex lg:hidden">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View all testimonials
                <ChevronRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </>
        ) : (
          <div className="rounded-[1.25rem] border border-primary/10 bg-background px-5 py-6 text-sm text-muted-foreground">
            Guest stories are coming soon.
          </div>
        )}
      </Container>
    </section>
  );
}
