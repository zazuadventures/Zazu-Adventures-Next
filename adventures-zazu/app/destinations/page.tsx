import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { getAllDestinations } from "@/lib/destinations";
import { getExperienceBySlug, getExperienceCategoryPath } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore Southern African destinations and journeys with Zazu Adventures.",
  alternates: { canonical: "/destinations" },
};

const destinationsPerPage = 6;

type DestinationsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function DestinationsPage({
  searchParams,
}: DestinationsPageProps) {
  const destinations = getAllDestinations();
  const { page } = await searchParams;
  const requestedPage = Number(page);
  const totalPages = Math.ceil(destinations.length / destinationsPerPage);
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage >= 1
      ? Math.min(requestedPage, totalPages)
      : 1;
  const visibleDestinations = destinations.slice(
    (currentPage - 1) * destinationsPerPage,
    currentPage * destinationsPerPage,
  );

  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Places that make the journey."
        description="Start at Victoria Falls, travel into the bush, cross borders for safari and explore further across Southern Africa."
        image="/images/destinations/destinations-hero.webp"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-md font-semibold text-accent">
              Where to go
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-3xl">
              Explore the places behind our journeys.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleDestinations.map((destination) => {
              const experience = getExperienceBySlug(destination.experienceSlug);

              if (!experience) return null;

              return (
                <Link
                  key={destination.id}
                  href={`/experiences/${getExperienceCategoryPath(experience.category)}/${experience.slug}`}
                  className="group overflow-hidden border border-border rounded-xs bg-surface transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-surface-soft">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent">
                      {destination.country}
                    </p>

                    <h2 className="mt-3 text-xl font-semibold sm:text-lg">
                      {destination.name}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {destination.description}
                    </p>

                  </div>
                </Link>
              );
            })}
          </div>

          {totalPages > 1 ? (
            <nav
              aria-label="Destination pagination"
              className="mt-10 flex items-center justify-center gap-2"
            >
              {currentPage > 1 ? (
                <Link
                  href={currentPage === 2 ? "/destinations" : `/destinations?page=${currentPage - 1}`}
                  aria-label="Previous destinations page"
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
                    href={pageNumber === 1 ? "/destinations" : `/destinations?page=${pageNumber}`}
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
                  href={`/destinations?page=${currentPage + 1}`}
                  aria-label="Next destinations page"
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
        </Container>
      </section>
    </>
  );
}
