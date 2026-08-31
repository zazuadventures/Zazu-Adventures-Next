import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ExperienceCategoryNav from "@/components/experiences/ExperienceCategoryNav";
import PaginatedExperienceGrid from "@/components/experiences/PaginatedExperienceGrid";
import { getAllExperiences } from "@/lib/experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Browse Victoria Falls activities, day trips, transfers and multi-day Southern Africa journeys.",
  alternates: { canonical: "/experiences" },
};

type ExperiencesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ExperiencesPage({
  searchParams,
}: ExperiencesPageProps) {
  const experiences = getAllExperiences();
  const { page } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Discover your next adventure."
        description="Explore activities, transfers and multi-day journeys designed to help you experience more."
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
