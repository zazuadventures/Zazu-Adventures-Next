import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Experience } from "@/types";
import ExperienceGrid from "./ExperienceGrid";

type PaginatedExperienceGridProps = {
  experiences: Experience[];
  page?: string;
  basePath: string;
  perPage?: number;
};

export default function PaginatedExperienceGrid({
  experiences,
  page,
  basePath,
  perPage = 6,
}: PaginatedExperienceGridProps) {
  const requestedPage = Number(page);
  const totalPages = Math.max(1, Math.ceil(experiences.length / perPage));
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage >= 1
      ? Math.min(requestedPage, totalPages)
      : 1;
  const visibleExperiences = experiences.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  function getPageHref(pageNumber: number) {
    return pageNumber === 1 ? basePath : `${basePath}?page=${pageNumber}`;
  }

  return (
    <>
      <ExperienceGrid experiences={visibleExperiences} />

      {totalPages > 1 ? (
        <nav
          aria-label="Experience pagination"
          className="mt-10 flex items-center justify-center gap-2"
        >
          {currentPage > 1 ? (
            <Link
              href={getPageHref(currentPage - 1)}
              aria-label="Previous experiences page"
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
              aria-label="Next experiences page"
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
      ) : null}
    </>
  );
}
