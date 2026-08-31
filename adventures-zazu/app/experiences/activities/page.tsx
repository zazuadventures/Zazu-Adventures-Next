import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PageHero from "@/components/ui/PageHero";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Activities",
  description: "Discover memorable activities to add to your journey.",
  alternates: { canonical: "/experiences/activities" },
};

type ActivitiesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ActivitiesPage({
  searchParams,
}: ActivitiesPageProps) {
  const experiences = getExperiencesByCategory("activity");
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Activities"
        description="Discover memorable cultural experiences and activities to add to your journey."
        image="/images/experiences/boma-dinner-drum-show.png"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceCategoryNav activeHref="/experiences/activities" />
          <div className="mt-12">
            <PaginatedExperienceGrid
              experiences={experiences}
              page={page}
              basePath="/experiences/activities"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
