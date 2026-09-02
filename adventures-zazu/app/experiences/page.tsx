import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import { getExperiencesByCategory } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Browse Victoria Falls activities, day trips and multi-day Southern Africa journeys.",
  alternates: { canonical: "/experiences" },
};

type ExperiencesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ExperiencesPage({
  searchParams,
}: ExperiencesPageProps) {
  const experiences = [
    ...getExperiencesByCategory("activity"),
    ...getExperiencesByCategory("day-trip"),
    ...getExperiencesByCategory("multi-day-trip"),
  ];
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Discover your next adventure."
        description="Explore activities, day trips and multi-day journeys designed to help you experience more."
        image="/images/experiences/experience-hero.webp"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <ExperienceCategoryNav activeHref="/experiences" />

          <div className="mt-12">
            <PaginatedExperienceGrid
              experiences={experiences}
              page={page}
              basePath="/experiences"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
