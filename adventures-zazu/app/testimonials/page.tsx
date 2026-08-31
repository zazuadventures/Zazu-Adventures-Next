import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  TestimonialCard,
  type Testimonial,
} from "@/components/home/TestimonialsSection";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { googleTestimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Guest Testimonials",
  description:
    "Read what travellers are saying about their Zazu Adventures experiences.",
  alternates: { canonical: "/testimonials" },
};

const testimonialsPerPage = 6;

type TestimonialsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

function getPageHref(pageNumber: number) {
  return pageNumber === 1 ? "/testimonials" : `/testimonials?page=${pageNumber}`;
}

function TestimonialsPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Testimonial pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={getPageHref(currentPage - 1)}
          aria-label="Previous testimonials page"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </Link>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground/40"
        >
          <ChevronLeft size={18} />
        </span>
      )}

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <Link
            key={pageNumber}
            href={getPageHref(pageNumber)}
            aria-current={pageNumber === currentPage ? "page" : undefined}
            className={`inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pageNumber === currentPage
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-surface-soft"
            }`}
          >
            {pageNumber}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link
          href={getPageHref(currentPage + 1)}
          aria-label="Next testimonials page"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </Link>
      ) : (
        <span
          aria-hidden="true"
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground/40"
        >
          <ChevronRight size={18} />
        </span>
      )}
    </nav>
  );
}

export default async function TestimonialsPage({
  searchParams,
}: TestimonialsPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number(page);
  const totalPages = Math.max(
    1,
    Math.ceil(googleTestimonials.length / testimonialsPerPage),
  );
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage >= 1
      ? Math.min(requestedPage, totalPages)
      : 1;
  const testimonials: Testimonial[] = googleTestimonials.slice(
    (currentPage - 1) * testimonialsPerPage,
    currentPage * testimonialsPerPage,
  );

  return (
    <>
      <PageHero
        eyebrow="Guest stories"
        title="What travellers are saying."
        description="Discover feedback from guests who have explored Victoria Falls and Southern Africa with Zazu Adventures."
        image="/images/experiences/tour-around-zimbabwe-4.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <TestimonialsPagination currentPage={currentPage} totalPages={totalPages} />
        </Container>
      </section>
    </>
  );
}
