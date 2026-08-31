import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PageHero from "@/components/ui/PageHero";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Day Trips",
  description:
    "Explore full-day safaris, Chobe excursions and cross-border day trips from Victoria Falls.",
  alternates: { canonical: "/experiences/day-trips" },
};

type DayTripsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function DayTripsPage({
  searchParams,
}: DayTripsPageProps) {
  const experiences = getExperiencesByCategory("day-trip");
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Day Trips"
        description="Explore full-day safari and cross-border experiences from Victoria Falls."
        image="/images/experiences/chobe-day-safari.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceCategoryNav activeHref="/experiences/day-trips" />
          <div className="mt-12">
            <PaginatedExperienceGrid
              experiences={experiences}
              page={page}
              basePath="/experiences/day-trips"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
