import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import PageHero from "@/components/ui/PageHero";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Multi-Day Trips",
  description: "Discover immersive multi-day journeys across Southern Africa.",
  alternates: { canonical: "/experiences/multi-day-trips" },
};

type MultiDayTripsPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function MultiDayTripsPage({
  searchParams,
}: MultiDayTripsPageProps) {
  const experiences = getExperiencesByCategory("multi-day-trip");
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Multi-Day Trips"
        description="Discover immersive multi-day journeys across Southern Africa."
        image="/images/experiences/tour-around-zimbabwe.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceCategoryNav activeHref="/experiences/multi-day-trips" />
          <div className="mt-12">
            <PaginatedExperienceGrid
              experiences={experiences}
              page={page}
              basePath="/experiences/multi-day-trips"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
